

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 4000;

// ── Sandbox credentials ─────────────────────────────────────────────────────
// Replace with your own after registering at https://sandbox.sslcommerz.com
const STORE_ID = 'lumin69ff21529bc58';
const STORE_PASSWORD = '12345678';
const IS_LIVE = false;
const SSL_BASE = IS_LIVE
  ? 'https://securepay.sslcommerz.com'
  : 'https://sandbox.sslcommerz.com';

// Your Angular app URL (where SSLCommerz redirects back)
const FRONTEND_URL = 'http://localhost:4200';
// This backend URL (SSLCommerz POSTs results here)
const BACKEND_URL = 'http://localhost:4000';
// json-server URL (to persist payments)
const DB_URL = 'http://localhost:3000';

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ── POST /api/payment/init ───────────────────────────────────────────────────
// Angular calls this when the user clicks "Proceed to Pay"
app.post('/api/payment/init', async (req, res) => {
  const { amount, currency = 'BDT', planId, planName, clientId, clientName, clientEmail, clientPhone } = req.body;

  if (!amount || !clientId) {
    return res.status(400).json({ error: 'amount and clientId are required' });
  }

  const tran_id = 'LNX-' + uuidv4().slice(0, 12).toUpperCase();

  const payload = new URLSearchParams({
    store_id: STORE_ID,
    store_passwd: STORE_PASSWORD,
    total_amount: amount,
    currency,
    tran_id,

    // SSLCommerz will POST results to these endpoints on your backend
    success_url: `${BACKEND_URL}/api/payment/success`,
    fail_url:    `${BACKEND_URL}/api/payment/fail`,
    cancel_url:  `${BACKEND_URL}/api/payment/cancel`,
    ipn_url:     `${BACKEND_URL}/api/payment/ipn`,

    // Product info
    product_name: planName || 'LumiNex Plan',
    product_category: 'Digital Services',
    product_profile: 'general',

    // Customer info
    cus_name:     clientName  || 'LumiNex Client',
    cus_email:    clientEmail || 'client@luminex.com',
    cus_phone:    clientPhone || '01700000000',
    cus_add1:     'Dhaka',
    cus_city:     'Dhaka',
    cus_country:  'Bangladesh',
    cus_postcode: '1000',

    // Shipping (required by SSLCommerz even for digital goods)
    shipping_method: 'NO',
    ship_name:    clientName || 'LumiNex Client',
    ship_add1:    'Dhaka',
    ship_city:    'Dhaka',
    ship_country: 'Bangladesh',
    ship_postcode:'1000',

    // Pass metadata through; we read it back in the success callback
    value_a: clientId,
    value_b: planId || '',
    value_c: planName || '',
    value_d: amount,
  });

  try {
    const response = await axios.post(
      `${SSL_BASE}/gwprocess/v4/api.php`,
      payload.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const data = response.data;

    if (data.status === 'SUCCESS') {
      // For Easy Checkout (embedded popup) we return the payment URL to Angular
      return res.json({
        status: 'SUCCESS',
        payment_url: data.GatewayPageURL,
        session_key: data.sessionkey,
        tran_id,
      });
    } else {
      return res.status(400).json({ status: 'FAILED', message: data.failedreason || 'SSLCommerz session failed' });
    }
  } catch (err) {
    console.error('SSLCommerz init error:', err.message);
    return res.status(500).json({ error: 'Payment gateway error' });
  }
});

// ── POST /api/payment/success ─────────────────────────────────────────────────
// SSLCommerz redirects the user here after successful payment
app.post('/api/payment/success', async (req, res) => {
  const { tran_id, val_id, amount, card_type, store_amount, currency,
          bank_tran_id, status, value_a: clientId, value_b: planId,
          value_c: planName, value_d: origAmount } = req.body;

  console.log('Payment success callback:', { tran_id, val_id, status });

  // Optional: validate the transaction with SSLCommerz
  try {
    const validateRes = await axios.get(
      `${SSL_BASE}/validator/api/validationserverAPI.php`,
      { params: { val_id, store_id: STORE_ID, store_passwd: STORE_PASSWORD, format: 'json' } }
    );
    const validated = validateRes.data;

    if (validated.status !== 'VALID' && validated.status !== 'VALIDATED') {
      console.warn('Validation failed:', validated);
      return res.redirect(`${FRONTEND_URL}/client/payments?status=failed&tran_id=${tran_id}`);
    }
  } catch (e) {
    console.warn('Validation request failed (continuing):', e.message);
  }

  // Save payment record to json-server db.json
  try {
    await axios.post(`${DB_URL}/payments`, {
      clientId,
      client: planName ? `${planName} buyer` : 'Client',
      item: planName || 'Plan',
      amount: parseFloat(amount),
      method: card_type || 'ONLINE',
      status: 'PAID',
      date: new Date().toISOString().split('T')[0],
      tranId: tran_id,
      bankTranId: bank_tran_id,
      currency,
    });
  } catch (e) {
    console.error('Failed to save payment to DB:', e.message);
  }

  // Redirect user back to Angular with success flag
  res.redirect(`${FRONTEND_URL}/client/payments?status=success&tran_id=${tran_id}&amount=${amount}`);
});

// ── POST /api/payment/fail ─────────────────────────────────────────────────────
app.post('/api/payment/fail', (req, res) => {
  const { tran_id } = req.body;
  console.log('Payment failed:', tran_id);
  res.redirect(`${FRONTEND_URL}/client/payments?status=failed&tran_id=${tran_id}`);
});

// ── POST /api/payment/cancel ───────────────────────────────────────────────────
app.post('/api/payment/cancel', (req, res) => {
  const { tran_id } = req.body;
  console.log('Payment cancelled:', tran_id);
  res.redirect(`${FRONTEND_URL}/client/payments?status=cancelled&tran_id=${tran_id}`);
});

// ── POST /api/payment/ipn ─────────────────────────────────────────────────────
// Instant Payment Notification – SSLCommerz calls this even if user
// loses internet before being redirected. Update your DB here too.
app.post('/api/payment/ipn', async (req, res) => {
  const { tran_id, val_id, status, amount, value_a: clientId, value_c: planName, card_type } = req.body;
  console.log('IPN received:', { tran_id, status });

  if (status === 'VALID' || status === 'VALIDATED') {
    try {
      // Check if payment already exists to avoid duplicates
      const existing = await axios.get(`${DB_URL}/payments?tranId=${tran_id}`);
      if (existing.data.length === 0) {
        await axios.post(`${DB_URL}/payments`, {
          clientId,
          client: planName || 'Client',
          item: planName || 'Plan',
          amount: parseFloat(amount),
          method: card_type || 'ONLINE',
          status: 'PAID',
          date: new Date().toISOString().split('T')[0],
          tranId: tran_id,
        });
      }
    } catch (e) {
      console.error('IPN DB save failed:', e.message);
    }
  }

  res.status(200).send('IPN received');
});

app.listen(PORT, () => {
  console.log(`✅ LumiNex payment server running on http://localhost:${PORT}`);
  console.log(`   SSLCommerz mode: ${IS_LIVE ? 'LIVE' : 'SANDBOX'}`);
});