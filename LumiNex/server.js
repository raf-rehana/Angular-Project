require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:4200',
      'https://saas-luminex.vercel.app'
    ],
    credentials: true
  }
});
const PORT = process.env.PORT || 4000;

// ── Database Configuration (PostgreSQL with Sequelize) ─────────────────────────
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/luminex';

console.log(`\n🔌 Connecting to PostgreSQL...`);
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: DATABASE_URL.includes('ssl=true') || process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
});

// ── Models Definition ────────────────────────────────────────────────────────
const User = sequelize.define('User', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  role: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  companyName: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  avatar: { type: DataTypes.TEXT }, // Handles base64 strings
  designation: { type: DataTypes.STRING }
}, { tableName: 'users', timestamps: false });

const Category = sequelize.define('Category', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  icon: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'categories', timestamps: false });

const Service = sequelize.define('Service', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DOUBLE },
  categoryId: { type: DataTypes.STRING },
  documentRequirements: { type: DataTypes.JSONB },
  deliveryTime: { type: DataTypes.STRING }
}, { tableName: 'services', timestamps: false });

const ServiceRequest = sequelize.define('ServiceRequest', {
  id: { type: DataTypes.STRING, primaryKey: true },
  userId: { type: DataTypes.STRING },
  serviceId: { type: DataTypes.STRING },
  planName: { type: DataTypes.STRING },
  amount: { type: DataTypes.DOUBLE },
  status: { type: DataTypes.STRING },
  workedHours: { type: DataTypes.INTEGER, defaultValue: 0 },
  progress: { type: DataTypes.INTEGER, defaultValue: 0 },
  assignedTo: { type: DataTypes.STRING },
  employeeNotes: { type: DataTypes.TEXT },
  priority: { type: DataTypes.STRING },
  attachments: { type: DataTypes.JSONB }
}, { tableName: 'service_requests', timestamps: false });

const Notification = sequelize.define('Notification', {
  id: { type: DataTypes.STRING, primaryKey: true },
  userId: { type: DataTypes.INTEGER }, // Handles numeric user ID consistency
  message: { type: DataTypes.TEXT, allowNull: false },
  type: { type: DataTypes.STRING },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
  createdAt: { type: DataTypes.STRING }
}, { tableName: 'notifications', timestamps: false });

const Subscription = sequelize.define('Subscription', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DOUBLE },
  features: { type: DataTypes.JSONB },
  description: { type: DataTypes.TEXT },
  billingCycle: { type: DataTypes.STRING }
}, { tableName: 'subscriptions', timestamps: false });

const Payment = sequelize.define('Payment', {
  id: { type: DataTypes.STRING, primaryKey: true },
  clientId: { type: DataTypes.STRING },
  client: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  item: { type: DataTypes.STRING },
  amount: { type: DataTypes.DOUBLE },
  method: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  date: { type: DataTypes.STRING },
  tranId: { type: DataTypes.STRING },
  bankTranId: { type: DataTypes.STRING },
  currency: { type: DataTypes.STRING },
  requestId: { type: DataTypes.STRING }
}, { tableName: 'payments', timestamps: false });

const ThemeSettings = sequelize.define('ThemeSettings', {
  id: { type: DataTypes.STRING, primaryKey: true },
  primaryColor: { type: DataTypes.STRING },
  secondaryColor: { type: DataTypes.STRING },
  font: { type: DataTypes.STRING },
  mode: { type: DataTypes.STRING }
}, { tableName: 'theme_settings', timestamps: false });

const SiteContent = sequelize.define('SiteContent', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING },
  heroBadge: { type: DataTypes.STRING },
  heroTitle: { type: DataTypes.TEXT },
  heroSubtitle: { type: DataTypes.TEXT },
  heroImageUrl: { type: DataTypes.TEXT },
  heroFeatures: { type: DataTypes.JSONB },
  aboutBadge: { type: DataTypes.STRING },
  aboutTitle: { type: DataTypes.STRING },
  aboutDescription: { type: DataTypes.TEXT },
  aboutImageUrl: { type: DataTypes.TEXT },
  visionTitle: { type: DataTypes.STRING },
  visionDescription: { type: DataTypes.TEXT },
  missionTitle: { type: DataTypes.STRING },
  missionDescription: { type: DataTypes.TEXT },
  experienceYears: { type: DataTypes.STRING },
  servicesTitle: { type: DataTypes.STRING },
  servicesSubtitle: { type: DataTypes.TEXT },
  services: { type: DataTypes.JSONB },
  ctaTitle: { type: DataTypes.STRING },
  ctaDescription: { type: DataTypes.TEXT },
  ctaButtonText: { type: DataTypes.STRING },
  ctaButtonLink: { type: DataTypes.STRING },
  socialProofTitle: { type: DataTypes.STRING },
  socialLinks: { type: DataTypes.JSONB },
  isActive: { type: DataTypes.BOOLEAN },
  updatedAt: { type: DataTypes.STRING }
}, { tableName: 'site_content', timestamps: false });

const AuditLog = sequelize.define('AuditLog', {
  id: { type: DataTypes.STRING, primaryKey: true },
  timestamp: { type: DataTypes.STRING },
  userId: { type: DataTypes.STRING },
  userName: { type: DataTypes.STRING },
  userRole: { type: DataTypes.STRING },
  action: { type: DataTypes.STRING },
  details: { type: DataTypes.TEXT }
}, { tableName: 'audit_logs', timestamps: false });

const KnowledgeArticle = sequelize.define('KnowledgeArticle', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  category: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.STRING },
  updatedAt: { type: DataTypes.STRING }
}, { tableName: 'knowledge_articles', timestamps: false });

// Dictionary mapping frontend collection endpoints to Sequelize Models
const models = {
  'users': User,
  'categories': Category,
  'services': Service,
  'service-requests': ServiceRequest,
  'notifications': Notification,
  'subscriptions': Subscription,
  'payments': Payment,
  'theme-settings': ThemeSettings,
  'site-content': SiteContent,
  'auditLogs': AuditLog,
  'knowledgeBase': KnowledgeArticle
};

// ── db.json Data Seeder / Migrator ───────────────────────────────────────────
async function seedDatabase() {
  try {
    const userCount = await User.count();
    if (userCount > 0) {
      console.log('✅ Database is already populated. Skipping seeder.');
      return;
    }

    console.log('🌱 Database is empty! Auto-migrating data from db.json...');
    const dbPath = path.join(__dirname, 'db.json');
    if (!fs.existsSync(dbPath)) {
      console.log('⚠️ db.json file not found. Skipping migration.');
      return;
    }

    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (dbData.users && dbData.users.length) {
      await User.bulkCreate(dbData.users.map(u => ({ ...u, id: String(u.id) })));
      console.log(`   - Seeded ${dbData.users.length} users`);
    }
    if (dbData.categories && dbData.categories.length) {
      await Category.bulkCreate(dbData.categories.map(c => ({ ...c, id: String(c.id) })));
      console.log(`   - Seeded ${dbData.categories.length} categories`);
    }
    if (dbData.services && dbData.services.length) {
      await Service.bulkCreate(dbData.services.map(s => ({ ...s, id: String(s.id) })));
      console.log(`   - Seeded ${dbData.services.length} services`);
    }
    if (dbData['service-requests'] && dbData['service-requests'].length) {
      await ServiceRequest.bulkCreate(dbData['service-requests'].map(r => ({ ...r, id: String(r.id) })));
      console.log(`   - Seeded ${dbData['service-requests'].length} service requests`);
    }
    if (dbData.notifications && dbData.notifications.length) {
      await Notification.bulkCreate(dbData.notifications.map(n => ({ ...n, id: String(n.id) })));
      console.log(`   - Seeded ${dbData.notifications.length} notifications`);
    }
    if (dbData.subscriptions && dbData.subscriptions.length) {
      await Subscription.bulkCreate(dbData.subscriptions.map(s => ({ ...s, id: String(s.id) })));
      console.log(`   - Seeded ${dbData.subscriptions.length} subscriptions`);
    }
    if (dbData.payments && dbData.payments.length) {
      await Payment.bulkCreate(dbData.payments.map(p => ({ ...p, id: String(p.id) })));
      console.log(`   - Seeded ${dbData.payments.length} payments`);
    }
    if (dbData['theme-settings'] && dbData['theme-settings'].length) {
      await ThemeSettings.bulkCreate(dbData['theme-settings'].map(t => ({ ...t, id: String(t.id) })));
      console.log(`   - Seeded ${dbData['theme-settings'].length} theme settings`);
    }
    if (dbData['site-content'] && dbData['site-content'].length) {
      await SiteContent.bulkCreate(dbData['site-content'].map(sc => ({ ...sc, id: String(sc.id) })));
      console.log(`   - Seeded ${dbData['site-content'].length} site content`);
    }
    if (dbData.auditLogs && dbData.auditLogs.length) {
      await AuditLog.bulkCreate(dbData.auditLogs.map(l => ({ ...l, id: String(l.id) })));
      console.log(`   - Seeded ${dbData.auditLogs.length} audit logs`);
    }
    if (dbData.knowledgeBase && dbData.knowledgeBase.length) {
      await KnowledgeArticle.bulkCreate(dbData.knowledgeBase.map(ka => ({ ...ka, id: String(ka.id) })));
      console.log(`   - Seeded ${dbData.knowledgeBase.length} knowledge base articles`);
    }

    console.log('🎉 Data migration from db.json completed successfully!');
  } catch (error) {
    console.error('❌ Data migration failed:', error.message);
  }
}

// ── SSLCommerz Sandbox Credentials ──────────────────────────────────────────
const MY_STORE_ID       = 'lumin69ff21529bc58';
const MY_STORE_PASSWORD = '12345678';
const DEMO_STORE_ID       = 'testbox';
const DEMO_STORE_PASSWORD = 'qwerty';
const USE_MY_STORE = false;

const STORE_ID       = USE_MY_STORE ? MY_STORE_ID       : DEMO_STORE_ID;
const STORE_PASSWORD = USE_MY_STORE ? MY_STORE_PASSWORD : DEMO_STORE_PASSWORD;

const IS_LIVE = false;
const SSL_BASE = IS_LIVE
  ? 'https://securepay.sslcommerz.com'
  : 'https://sandbox.sslcommerz.com';

const isProductionBackend = process.env.NODE_ENV === 'production' || (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('localhost'));

const FRONTEND_URL = process.env.FRONTEND_URL || (isProductionBackend ? 'https://saas-luminex.vercel.app' : 'http://localhost:4200');
const BACKEND_URL  = process.env.BACKEND_URL  || (isProductionBackend ? 'https://angular-project-2o3k.onrender.com' : 'http://localhost:4000');

// Ensure public/uploads folder exists
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

function processBase64Avatar(body, prefixId) {
  if (body && typeof body.avatar === 'string' && body.avatar.startsWith('data:image/')) {
    try {
      const matches = body.avatar.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const ext = matches[1].split('/')[1] || 'jpg';
        const base64Data = matches[2];
        const filename = `avatar_${prefixId}_${Date.now()}.${ext}`;
        const filePath = path.join(uploadsDir, filename);
        
        fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
        body.avatar = `${BACKEND_URL}/uploads/${filename}`;
        console.log(`💾 Saved base64 avatar to: ${body.avatar}`);
      }
    } catch (e) {
      console.error('Failed to save base64 avatar:', e.message);
    }
  }
}

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://saas-luminex.vercel.app'
  ],
  credentials: true
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// ── Socket.io Chat Logic ─────────────────────────────────────────────────────
const connectedClients = new Map();
const connectedEmployees = new Map();

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('authenticate-client', ({ clientId, clientName }) => {
    socket.clientId = clientId;
    socket.clientName = clientName;
    socket.role = 'client';
    
    connectedClients.set(clientId, socket);
    socket.join(`client-${clientId}`);
    
    console.log(`Client authenticated: ${clientName} (${clientId})`);
    
    io.emit('client-joined', { clientId, clientName });

    setTimeout(() => {
      const welcomeMsg = {
        id: uuidv4(),
        employeeId: 'support-bot',
        employeeName: 'LumiNex Support',
        message: `Hello ${clientName}! How can we help you today with your request?`,
        timestamp: new Date().toISOString(),
        type: 'employee'
      };
      socket.emit('new-message', welcomeMsg);
    }, 1000);
  });

  socket.on('authenticate-employee', ({ employeeId, employeeName }) => {
    socket.employeeId = employeeId;
    socket.employeeName = employeeName;
    socket.role = 'employee';
    
    connectedEmployees.set(employeeId, socket);
    socket.join(`employee-${employeeId}`);
    
    console.log(`Employee authenticated: ${employeeName} (${employeeId})`);
    
    io.emit('employee-joined', { employeeId, employeeName });
  });

  socket.on('client-message', ({ message, employeeId }) => {
    if (socket.role === 'client' && socket.clientId) {
      const messageData = {
        id: uuidv4(),
        clientId: socket.clientId,
        clientName: socket.clientName,
        message,
        timestamp: new Date().toISOString(),
        type: 'client'
      };
      
      if (employeeId && connectedEmployees.has(employeeId)) {
        io.to(`employee-${employeeId}`).emit('new-message', messageData);
      } else {
        io.to('employees').emit('new-message', messageData);
      }
      
      socket.emit('new-message', messageData);
      console.log(`Client message from ${socket.clientName}: ${message}`);

      setTimeout(() => {
        const botResponse = {
          id: uuidv4(),
          employeeId: 'support-bot',
          employeeName: 'LumiNex Assistant',
          message: `Thanks for the update, ${socket.clientName}! I have successfully logged this inquiry and alerted the specialist assigned to your request. We'll get back to you with updates shortly!`,
          timestamp: new Date().toISOString(),
          type: 'employee'
        };
        socket.emit('new-message', botResponse);
      }, 1500);
    }
  });

  socket.on('employee-message', ({ message, clientId }) => {
    if (socket.role === 'employee' && socket.employeeId) {
      const messageData = {
        id: uuidv4(),
        employeeId: socket.employeeId,
        employeeName: socket.employeeName,
        message,
        timestamp: new Date().toISOString(),
        type: 'employee'
      };
      
      if (clientId && connectedClients.has(clientId)) {
        io.to(`client-${clientId}`).emit('new-message', messageData);
      }
      
      socket.emit('new-message', messageData);
      console.log(`Employee message from ${socket.employeeName}: ${message}`);
    }
  });

  socket.on('client-typing', ({ employeeId }) => {
    if (socket.role === 'client' && socket.clientId) {
      io.to(`employee-${employeeId}`).emit('client-typing', { clientId: socket.clientId });
    }
  });

  socket.on('employee-typing', ({ clientId }) => {
    if (socket.role === 'employee' && socket.employeeId) {
      io.to(`client-${clientId}`).emit('employee-typing', { employeeId: socket.employeeId });
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    
    if (socket.role === 'client' && socket.clientId) {
      connectedClients.delete(socket.clientId);
      io.emit('client-left', { clientId: socket.clientId });
    }
    
    if (socket.role === 'employee' && socket.employeeId) {
      connectedEmployees.delete(socket.employeeId);
      io.emit('employee-left', { employeeId: socket.employeeId });
    }
  });
});

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

// ── Chat Status Endpoints ─────────────────────────────────────────────────────
app.get('/api/chat/online-clients', (req, res) => {
  const onlineClients = Array.from(connectedClients.keys()).map(clientId => ({
    clientId,
    connected: true
  }));
  res.json(onlineClients);
});

app.get('/api/chat/online-employees', (req, res) => {
  const onlineEmployees = Array.from(connectedEmployees.keys()).map(employeeId => ({
    employeeId,
    connected: true
  }));
  res.json(onlineEmployees);
});

// ── POST /api/payment/init ───────────────────────────────────────────────────
app.post('/api/payment/init', async (req, res) => {
  const { 
    amount, currency, planId, paymentId, requestId, planName, 
    clientId, clientName, clientEmail, clientPhone, paymentMethod 
  } = req.body;

  if (!amount || !clientId) {
    return res.status(400).json({ status: 'FAILED', message: 'amount and clientId are required' });
  }

  const tran_id = `LNX-${uuidv4().split('-')[0].toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const payload = new URLSearchParams({
    store_id:    STORE_ID,
    store_passwd: STORE_PASSWORD,
    total_amount: String(amount),
    currency: currency || 'BDT',
    tran_id,

    success_url: `${BACKEND_URL}/api/payment/success`,
    fail_url:    `${BACKEND_URL}/api/payment/fail`,
    cancel_url:  `${BACKEND_URL}/api/payment/cancel`,
    ipn_url:     `${BACKEND_URL}/api/payment/ipn`,

    product_name:     planName || 'LumiNex Plan',
    product_category: 'Digital Services',
    product_profile:  'general',

    cus_name:    clientName  || 'LumiNex Client',
    cus_email:   clientEmail || 'client@luminex.com',
    cus_phone:   clientPhone || '01700000000',
    cus_add1:    'Dhaka, Bangladesh',
    cus_city:    'Dhaka',
    cus_country: 'Bangladesh',
    cus_postcode:'1000',

    shipping_method: 'NO',
    ship_name:    clientName || 'LumiNex Client',
    ship_add1:    'Dhaka, Bangladesh',
    ship_city:    'Dhaka',
    ship_country: 'Bangladesh',
    ship_postcode:'1000',

    value_a: String(clientId),
    value_b: String(requestId || ''),
    value_c: String(planName || ''),
    value_d: String(paymentId || ''),
  });

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
    tran_id, val_id, bank_tran_id, amount, currency,
    card_type, status,
    value_a: clientId, 
    value_b: requestId, 
    value_c: planName, 
    value_d: paymentId,
    cus_email,
  } = req.body;

  console.log(`[SUCCESS] tran_id=${tran_id} requestId=${requestId}`);

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

  try {
    let existingPayment = null;
    if (paymentId) {
      existingPayment = await Payment.findByPk(String(paymentId));
    }

    if (existingPayment) {
      await existingPayment.update({
        status:   'PAID',
        method:   card_type || 'ONLINE',
        tranId:   tran_id,
        bankTranId: bank_tran_id,
        currency,
        date:     new Date().toISOString().split('T')[0],
        requestId: requestId || existingPayment.requestId
      });
      console.log(`[DB] Payment updated to PAID: ${paymentId}`);
    } else {
      const items = await Payment.findAll({ attributes: ['id'] });
      const numericIds = items
        .map(i => parseInt(i.id))
        .filter(id => !isNaN(id));
      const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 10000;
      const nextId = String(maxId + 1);

      await Payment.create({
        id:       nextId,
        clientId: String(clientId),
        client:   planName ? `${planName} - Client` : 'LumiNex Client',
        email:    cus_email,
        item:     planName || 'Subscription Plan',
        amount:   parseFloat(amount),
        method:   card_type || 'ONLINE',
        status:   'PAID',
        date:     new Date().toISOString().split('T')[0],
        tranId:   tran_id,
        bankTranId: bank_tran_id,
        currency,
        requestId: requestId || undefined
      });
      console.log(`[DB] New payment saved: ${tran_id}`);
    }

    if (requestId) {
      const request = await ServiceRequest.findByPk(String(requestId));
      if (request) {
        await request.update({ status: 'ADVANCE_PAID' });
        console.log(`[DB] Linked Request updated to ADVANCE_PAID: ${requestId}`);
      }
    }
  } catch (e) {
    console.error('[DB] Failed to save/update payment:', e.message);
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
app.post('/api/payment/ipn', async (req, res) => {
  const { tran_id, val_id, status, amount, value_a: clientId, value_b: requestId, value_c: planName, value_d: paymentId, card_type, cus_email } = req.body;
  console.log(`[IPN] tran_id=${tran_id} status=${status}`);

  if (status === 'VALID' || status === 'VALIDATED') {
    try {
      const existingTx = await Payment.findAll({ where: { tranId: tran_id } });
      if (existingTx.length === 0) {
        let existingInvoice = null;
        if (paymentId) {
          existingInvoice = await Payment.findByPk(String(paymentId));
        }

        if (existingInvoice) {
          await existingInvoice.update({
            status:   'PAID',
            method:   card_type || 'ONLINE',
            tranId:   tran_id,
            date:     new Date().toISOString().split('T')[0],
            requestId: requestId || existingInvoice.requestId
          });
          console.log(`[IPN] Existing invoice updated to PAID via IPN: ${paymentId}`);
        } else {
          const items = await Payment.findAll({ attributes: ['id'] });
          const numericIds = items
            .map(i => parseInt(i.id))
            .filter(id => !isNaN(id));
          const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 10000;
          const nextId = String(maxId + 1);

          await Payment.create({
            id:       nextId,
            clientId: String(clientId),
            client:   planName || 'LumiNex Client',
            email:    cus_email,
            item:     planName || 'Subscription Plan',
            amount:   parseFloat(amount),
            method:   card_type || 'ONLINE',
            status:   'PAID',
            date:     new Date().toISOString().split('T')[0],
            tranId:   tran_id,
            requestId: requestId || undefined
          });
          console.log(`[IPN] Payment saved via IPN: ${tran_id}`);
        }

        if (requestId) {
          const request = await ServiceRequest.findByPk(String(requestId));
          if (request) {
            await request.update({ status: 'ASSIGNED' });
            console.log(`[IPN] Linked Request updated to ASSIGNED via IPN: ${requestId}`);
          }
        }
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
app.get('/api/payments/history/:clientId', async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: { clientId: String(req.params.clientId) }
    });
    res.json(payments);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
});

// ── REST API Database Routes ──────────────────────────────────────────────────

// GET all / filter / sort
app.get('/api/:collection', async (req, res) => {
  const { collection } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const filters = { ...req.query };
    const sort = filters._sort;
    const order = filters._order || 'ASC';

    delete filters._sort;
    delete filters._order;
    delete filters._page;
    delete filters._limit;

    const whereClause = {};

    for (const key of Object.keys(filters)) {
      const value = filters[key];
      
      if (key.endsWith(':contains')) {
        const field = key.replace(':contains', '');
        whereClause[field] = {
          [Op.iLike]: `%${value}%`
        };
      } else {
        if (value === 'true') {
          whereClause[key] = true;
        } else if (value === 'false') {
          whereClause[key] = false;
        } else {
          whereClause[key] = value;
        }
      }
    }

    const queryOptions = { where: whereClause };

    if (sort) {
      queryOptions.order = [[sort, order.toUpperCase()]];
    }

    const items = await Model.findAll(queryOptions);
    res.json(items);
  } catch (err) {
    console.error(`Error in GET /api/${collection}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET single item
app.get('/api/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const item = await Model.findByPk(String(id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    console.error(`Error in GET /api/${collection}/${id}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST new item
app.post('/api/:collection', async (req, res) => {
  const { collection } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const data = { ...req.body };

    if (data.id === undefined || data.id === null) {
      const count = await Model.count();
      let nextId = 10001;
      if (count > 0) {
        const items = await Model.findAll({ attributes: ['id'] });
        const numericIds = items
          .map(i => parseInt(i.id))
          .filter(id => !isNaN(id));
        const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 10000;
        nextId = maxId + 1;
      }
      data.id = String(nextId);
    } else {
      data.id = String(data.id);
    }

    if (collection === 'users') {
      processBase64Avatar(data, data.id);
    }

    const item = await Model.create(data);
    res.status(201).json(item);
  } catch (err) {
    console.error(`Error in POST /api/${collection}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// PATCH item (partial update)
app.patch('/api/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const item = await Model.findByPk(String(id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const data = { ...req.body };
    if (collection === 'users') {
      processBase64Avatar(data, id);
    }

    await item.update(data);
    res.json(item);
  } catch (err) {
    console.error(`Error in PATCH /api/${collection}/${id}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// PUT item (replace)
app.put('/api/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const item = await Model.findByPk(String(id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const updatedData = { ...req.body, id: String(id) };
    await item.update(updatedData);
    res.json(item);
  } catch (err) {
    console.error(`Error in PUT /api/${collection}/${id}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// DELETE item
app.delete('/api/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const Model = models[collection];
  
  if (!Model) {
    return res.status(404).json({ error: 'Collection not found' });
  }

  try {
    const item = await Model.findByPk(String(id));
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(`Error in DELETE /api/${collection}/${id}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Startup & Database Synchronization ──────────────────────────────────────
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ PostgreSQL Database Schema Synced');
    return seedDatabase();
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log('\n🚀 LumiNex Payment, Chat & PostgreSQL Server Started');
      console.log('──────────────────────────────────────────');
      console.log(`   Port    : http://localhost:${PORT}`);
      console.log(`   Mode    : ${IS_LIVE ? '🔴 LIVE' : '🟡 SANDBOX'}`);
      console.log(`   Store   : ${STORE_ID}`);
      console.log(`   Frontend: ${FRONTEND_URL}`);
      console.log('──────────────────────────────────────────\n');
      console.log('💬 Chat & Database Services Ready');
    });
  })
  .catch(err => {
    console.error('\n❌ PostgreSQL Connection / Schema Sync Failed!');
    console.error('────────────────────────────────────────────────');
    console.error('Error:', err);
    console.error('👉 Server shutting down. Please check DATABASE_URL.');
    console.error('────────────────────────────────────────────────\n');
    process.exit(1);
  });