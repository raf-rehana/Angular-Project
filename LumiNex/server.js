const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 4000;

// ── SSLCommerz Sandbox Credentials ──────────────────────────────────────────
// YOUR store (use this once SSLCommerz activates your sandbox - may take 24-48h)
const MY_STORE_ID       = 'lumin69ff21529bc58';
const MY_STORE_PASSWORD = '12345678';

// SSLCommerz Official Demo Store (works immediately for testing)
const DEMO_STORE_ID       = 'testbox';
const DEMO_STORE_PASSWORD = 'qwerty';

// Switch to MY_STORE_ID once your sandbox is fully activated
const USE_MY_STORE = false; // Set to true after your store activates

const STORE_ID       = USE_MY_STORE ? MY_STORE_ID       : DEMO_STORE_ID;
const STORE_PASSWORD = USE_MY_STORE ? MY_STORE_PASSWORD : DEMO_STORE_PASSWORD;

const IS_LIVE = false;
const SSL_BASE = IS_LIVE
  ? 'https://securepay.sslcommerz.com'
  : 'https://sandbox.sslcommerz.com';

// Your deployed frontend & this backend
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:4200';
const BACKEND_URL  = process.env.BACKEND_URL  || 'http://localhost:4000';
const DB_URL       = process.env.DB_URL       || 'http://localhost:3000';

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://saas-luminex.vercel.app'
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mode: IS_LIVE ? 'LIVE' : 'SANDBOX',
    usingMyStore: USE_MY_STORE,
    storeId: STORE_ID,
    myStoreId: MY_STORE_ID,
    timestamp: new Date().toISOString()
  });
});

// ── POST /api/payment/init ───────────────────────────────────────────────────
// Angular calls this → we call SSLCommerz → return GatewayPageURL
app.post('/api/payment/init', async (req, res) => {
  const {
    amount,
    currency = 'BDT',
    planId,
    planName,
    clientId,
    clientName,
    clientEmail,
    clientPhone,
    paymentMethod // 'ONLINE' | 'MOBILE_WALLET' | 'BANK'
  } = req.body;

  if (!amount || !clientId) {
    return res.status(400).json({ status: 'FAILED', message: 'amount and clientId are required' });
  }

  const tran_id = 'LNX-' + uuidv4().slice(0, 12).toUpperCase();

  // Build SSLCommerz payload
  const payload = new URLSearchParams({
    store_id:    STORE_ID,
    store_passwd: STORE_PASSWORD,
    total_amount: String(amount),
    currency,
    tran_id,

    // Redirect URLs (SSLCommerz POSTs here)
    success_url: `${BACKEND_URL}/api/payment/success`,
    fail_url:    `${BACKEND_URL}/api/payment/fail`,
    cancel_url:  `${BACKEND_URL}/api/payment/cancel`,
    ipn_url:     `${BACKEND_URL}/api/payment/ipn`,

    // Product info
    product_name:     planName || 'LumiNex Plan',
    product_category: 'Digital Services',
    product_profile:  'general',

    // Customer info
    cus_name:    clientName  || 'LumiNex Client',
    cus_email:   clientEmail || 'client@luminex.com',
    cus_phone:   clientPhone || '01700000000',
    cus_add1:    'Dhaka, Bangladesh',
    cus_city:    'Dhaka',
    cus_country: 'Bangladesh',
    cus_postcode:'1000',

    // Shipping (required by SSLCommerz for digital goods too)
    shipping_method: 'NO',
    ship_name:    clientName || 'LumiNex Client',
    ship_add1:    'Dhaka, Bangladesh',
    ship_city:    'Dhaka',
    ship_country: 'Bangladesh',
    ship_postcode:'1000',

    // Metadata — we read these back in success callback
    value_a: String(clientId),
    value_b: String(planId || ''),
    value_c: String(planName || ''),
    value_d: String(amount),
  });

  // If user chose a specific channel (e.g. bKash), request that method
  // SSLCommerz supports: gwc=OTP|EMI|INTERNET_BANKING|MOBILE_BANKING etc.
  if (paymentMethod === 'MOBILE_WALLET') {
    payload.set('gwc', 'MOBILE_BANKING');
  } else if (paymentMethod === 'BANK') {
    payload.set('gwc', 'INTERNET_BANKING');
  }

  try {
    console.log(`[${tran_id}] Initiating SSLCommerz payment for BDT ${amount}`);
    const response = await axios.post(
      `${SSL_BASE}/gwprocess/v4/api.php`,
      payload.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const data = response.data;
    console.log(`[${tran_id}] SSLCommerz response status: ${data.status}`);

    if (data.status === 'SUCCESS') {
      return res.json({
        status: 'SUCCESS',
        payment_url: data.GatewayPageURL,
        session_key: data.sessionkey,
        tran_id,
      });
    } else {
      console.error(`[${tran_id}] SSLCommerz failed:`, data.failedreason);
      return res.status(400).json({
        status: 'FAILED',
        message: data.failedreason || 'SSLCommerz could not initiate session'
      });
    }
  } catch (err) {
    console.error('SSLCommerz init error:', err.message);
    return res.status(500).json({ status: 'FAILED', message: 'Payment gateway connection error' });
  }
});

// ── POST /api/payment/success ─────────────────────────────────────────────────
app.post('/api/payment/success', async (req, res) => {
  const {
    tran_id, val_id, amount, card_type, currency,
    bank_tran_id, status,
    value_a: clientId,
    value_b: planId,
    value_c: planName,
  } = req.body;

  console.log(`[SUCCESS] tran_id=${tran_id} val_id=${val_id} status=${status}`);

  // Validate with SSLCommerz to prevent fraud
  try {
    const validateRes = await axios.get(
      `${SSL_BASE}/validator/api/validationserverAPI.php`,
      { params: { val_id, store_id: STORE_ID, store_passwd: STORE_PASSWORD, format: 'json' } }
    );
    const v = validateRes.data;
    console.log(`[VALIDATE] status=${v.status}`);

    if (v.status !== 'VALID' && v.status !== 'VALIDATED') {
      return res.redirect(`${FRONTEND_URL}/client/payments?status=failed&tran_id=${tran_id}&reason=validation_failed`);
    }
  } catch (e) {
    console.warn('Validation request failed (proceeding anyway):', e.message);
  }

  // Persist to json-server
  try {
    await axios.post(`${DB_URL}/payments`, {
      clientId,
      client:   planName ? `${planName} - Client` : 'LumiNex Client',
      item:     planName || 'Subscription Plan',
      planId,
      amount:   parseFloat(amount),
      method:   card_type || 'ONLINE',
      status:   'PAID',
      date:     new Date().toISOString().split('T')[0],
      tranId:   tran_id,
      bankTranId: bank_tran_id,
      currency,
    });
    console.log(`[DB] Payment saved: ${tran_id}`);
  } catch (e) {
    console.error('[DB] Failed to save payment:', e.message);
  }

  res.redirect(`${FRONTEND_URL}/client/payments?status=success&tran_id=${tran_id}&amount=${amount}`);
});

// ── POST /api/payment/fail ────────────────────────────────────────────────────
app.post('/api/payment/fail', (req, res) => {
  const { tran_id } = req.body;
  console.log(`[FAIL] tran_id=${tran_id}`);
  res.redirect(`${FRONTEND_URL}/client/payments?status=failed&tran_id=${tran_id}`);
});

// ── POST /api/payment/cancel ──────────────────────────────────────────────────
app.post('/api/payment/cancel', (req, res) => {
  const { tran_id } = req.body;
  console.log(`[CANCEL] tran_id=${tran_id}`);
  res.redirect(`${FRONTEND_URL}/client/payments?status=cancelled&tran_id=${tran_id}`);
});

// ── POST /api/payment/ipn ─────────────────────────────────────────────────────
// Instant Payment Notification - SSLCommerz hits this even if user loses connection
app.post('/api/payment/ipn', async (req, res) => {
  const { tran_id, val_id, status, amount, value_a: clientId, value_c: planName, card_type } = req.body;
  console.log(`[IPN] tran_id=${tran_id} status=${status}`);

  if (status === 'VALID' || status === 'VALIDATED') {
    try {
      // Avoid duplicate entries
      const existing = await axios.get(`${DB_URL}/payments?tranId=${tran_id}`);
      if (existing.data.length === 0) {
        await axios.post(`${DB_URL}/payments`, {
          clientId,
          client:   planName || 'LumiNex Client',
          item:     planName || 'Subscription Plan',
          amount:   parseFloat(amount),
          method:   card_type || 'ONLINE',
          status:   'PAID',
          date:     new Date().toISOString().split('T')[0],
          tranId:   tran_id,
        });
        console.log(`[IPN] Payment saved via IPN: ${tran_id}`);
      } else {
        console.log(`[IPN] Duplicate skipped: ${tran_id}`);
      }
    } catch (e) {
      console.error('[IPN] DB save failed:', e.message);
    }
  }

  res.status(200).send('IPN received');
});

// ── GET /api/payments/:clientId ───────────────────────────────────────────────
// Get payment history for a client
app.get('/api/payments/history/:clientId', async (req, res) => {
  try {
    const response = await axios.get(`${DB_URL}/payments?clientId=${req.params.clientId}`);
    res.json(response.data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
});

app.listen(PORT, () => {
  console.log('\n🚀 LumiNex Payment Server Started');
  console.log('──────────────────────────────────────────');
  console.log(`   Port    : http://localhost:${PORT}`);
  console.log(`   Mode    : ${IS_LIVE ? '🔴 LIVE' : '🟡 SANDBOX'}`);
  console.log(`   Store   : ${STORE_ID}`);
  console.log(`   Frontend: ${FRONTEND_URL}`);
  console.log('──────────────────────────────────────────\n');
});