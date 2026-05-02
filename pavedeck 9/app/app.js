/* ============================================
   Pavedeck App — Product Logic
   ============================================ */

// ============================================
// STATE
// ============================================

const STORAGE_KEY = 'pavedeck_app_state_v1';

const SEED_INVENTORY = [
  {
    id: 'v1', vin: '4T1G11AK8NU123456', year: 2022, vehicle: 'Toyota Camry SE',
    mileage: 31000, price: 24800, daysOnLot: 8, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=600&q=80',
    photos: 8,
    vdpGenerated: true,
    pricing: { rangeLow: 23200, rangeHigh: 26100, recommendation: 'hold' },
    features: 'adaptive cruise, blind-spot monitoring, 8-inch touchscreen, Apple CarPlay, single owner'
  },
  {
    id: 'v2', vin: '5J6RM4H73DL039285', year: 2021, vehicle: 'Honda CR-V EX',
    mileage: 42000, price: 27000, daysOnLot: 42, status: 'warn',
    photoUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=600&q=80',
    photos: 6,
    vdpGenerated: true,
    pricing: { rangeLow: 24400, rangeHigh: 28100, recommendation: 'reduce', amount: 700 },
    features: 'AWD, leather seats, sunroof, lane assist, heated seats'
  },
  {
    id: 'v3', vin: '2T3W1RFV5LW065831', year: 2023, vehicle: 'Toyota RAV4 XLE',
    mileage: 18500, price: 31500, daysOnLot: 3, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/2519280/pexels-photo-2519280.jpeg?auto=compress&w=600&q=80',
    photos: 11,
    vdpGenerated: true,
    pricing: { rangeLow: 30100, rangeHigh: 33200, recommendation: 'hold' },
    features: 'AWD, all-weather package, JBL audio, panoramic roof'
  },
  {
    id: 'v4', vin: '19XFC2F58JE021547', year: 2020, vehicle: 'Honda Civic LX',
    mileage: 56000, price: 18200, daysOnLot: 28, status: 'warn',
    photoUrl: null,
    photos: 3,
    vdpGenerated: false,
    pricing: { rangeLow: 16800, rangeHigh: 19400, recommendation: 'photos' },
    features: 'manual transmission, fuel efficient'
  },
  {
    id: 'v5', vin: '3TMCZ5AN8LM345672', year: 2022, vehicle: 'Toyota Tacoma TRD',
    mileage: 24800, price: 38900, daysOnLot: 11, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&w=600&q=80',
    photos: 9,
    vdpGenerated: true,
    pricing: { rangeLow: 36500, rangeHigh: 40200, recommendation: 'hold' },
    features: 'TRD off-road package, 4WD, tow package, crawl control'
  },
  {
    id: 'v6', vin: '1FTFW1ET5NFA84321', year: 2022, vehicle: 'Ford F-150 XLT',
    mileage: 28000, price: 41500, daysOnLot: 6, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/97074/pexels-photo-97074.jpeg?auto=compress&w=600&q=80',
    photos: 10,
    vdpGenerated: true,
    pricing: { rangeLow: 39800, rangeHigh: 43200, recommendation: 'hold' },
    features: '4WD, tow package, SYNC 4, twin-panel moonroof'
  },
  {
    id: 'v7', vin: 'WBA8E1G50JNU98765', year: 2021, vehicle: 'BMW 330i xDrive',
    mileage: 33500, price: 32800, daysOnLot: 51, status: 'warn',
    photoUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&w=600&q=80',
    photos: 7,
    vdpGenerated: true,
    pricing: { rangeLow: 29400, rangeHigh: 33100, recommendation: 'reduce', amount: 1200 },
    features: 'M Sport package, premium audio, navigation, heated seats'
  },
  {
    id: 'v8', vin: '5XYK3CA68PG412987', year: 2023, vehicle: 'Kia Telluride EX',
    mileage: 12500, price: 39800, daysOnLot: 4, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&w=600&q=80',
    photos: 12,
    vdpGenerated: true,
    pricing: { rangeLow: 38200, rangeHigh: 41500, recommendation: 'hold' },
    features: 'AWD, captain chairs, premium audio, dual sunroof'
  },
  {
    id: 'v9', vin: '1G1ZD5ST7LF021198', year: 2020, vehicle: 'Chevrolet Malibu LT',
    mileage: 48000, price: 17400, daysOnLot: 19, status: 'draft',
    photoUrl: null,
    photos: 0,
    vdpGenerated: false,
    pricing: null,
    features: ''
  },
  {
    id: 'v10', vin: '5UXKR0C57J0Y34521', year: 2021, vehicle: 'BMW X5 xDrive40i',
    mileage: 38000, price: 48500, daysOnLot: 14, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&w=600&q=80',
    photos: 9,
    vdpGenerated: true,
    pricing: { rangeLow: 46800, rangeHigh: 50100, recommendation: 'hold' },
    features: 'premium package, driving assistant, panoramic sunroof'
  },
  {
    id: 'v11', vin: '1HGCV1F19MA098765', year: 2021, vehicle: 'Honda Accord EX',
    mileage: 34000, price: 24200, daysOnLot: 22, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&w=600&q=80',
    photos: 8,
    vdpGenerated: true,
    pricing: { rangeLow: 22800, rangeHigh: 25500, recommendation: 'hold' },
    features: 'wireless CarPlay, lane keeping, adaptive cruise, sunroof'
  },
  {
    id: 'v12', vin: 'JTDEPMAE3MJ147832', year: 2021, vehicle: 'Toyota Corolla LE',
    mileage: 28500, price: 19800, daysOnLot: 9, status: 'good',
    photoUrl: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&w=600&q=80',
    photos: 7,
    vdpGenerated: true,
    pricing: { rangeLow: 18400, rangeHigh: 20900, recommendation: 'hold' },
    features: 'Toyota Safety Sense, Apple CarPlay, fuel efficient'
  }
];

const DEFAULT_CONFIG = {
  backdrop: 'cream',
  watermark: 'PM',
  watermarkColor: '#C2410C',
  vdpVoice: 'professional',
  dealerName: 'Peninsula Motors',
  dealerArea: 'San Mateo, CA'
};

let state = {
  loggedIn: false,
  user: { email: 'demo@peninsulamotors.com', dealerName: 'Peninsula Motors', initials: 'PM' },
  inventory: [],
  config: { ...DEFAULT_CONFIG },
  route: { name: 'inventory', params: {} }
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn('Failed to load state', e);
  }
  if (!state.inventory || state.inventory.length === 0) {
    state.inventory = SEED_INVENTORY.map(v => ({ ...v }));
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      loggedIn: state.loggedIn,
      user: state.user,
      inventory: state.inventory,
      config: state.config,
      photoEdits: state.photoEdits || {},
      photosUI: state.photosUI || {}
    }));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

// ============================================
// AUTH
// ============================================

function showAuth() {
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('app-shell').classList.remove('active');
}

function showApp() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app-shell').classList.add('active');
  updateUserDisplay();
  render();
}

function updateUserDisplay() {
  document.getElementById('user-name').textContent = state.user.dealerName || 'Demo dealer';
  document.getElementById('user-role').textContent = state.user.email || '';
  document.getElementById('user-avatar').textContent = state.user.initials || 'PD';
}

document.getElementById('auth-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  if (!email) return;

  const btn = document.getElementById('auth-submit');
  btn.innerHTML = '<div class="spinner" style="border-color: rgba(255,255,255,0.3); border-top-color: white;"></div> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    const domain = email.split('@')[1] || 'dealership.com';
    const dealerName = domain.split('.')[0].split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') || 'Your dealership';
    const initials = dealerName.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    state.user = { email, dealerName, initials };
    state.loggedIn = true;
    state.config.dealerName = dealerName;
    saveState();
    showApp();
  }, 800);
});

document.getElementById('demo-btn').addEventListener('click', () => {
  state.loggedIn = true;
  state.user = { email: 'demo@peninsulamotors.com', dealerName: 'Peninsula Motors', initials: 'PM' };
  state.config.dealerName = 'Peninsula Motors';
  saveState();
  showApp();
});

document.getElementById('signout-btn').addEventListener('click', () => {
  if (confirm('Sign out?')) {
    state.loggedIn = false;
    saveState();
    showAuth();
  }
});

// ============================================
// ROUTING
// ============================================

function navigate(name, params = {}) {
  state.route = { name, params };
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.route === name);
  });
  render();
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.route));
});

// ============================================
// RENDER (router)
// ============================================

function render() {
  const root = document.getElementById('page-root');
  const crumb = document.getElementById('crumb');

  if (state.route.name === 'inventory') {
    crumb.innerHTML = '<span class="crumb-current">Inventory</span>';
    root.innerHTML = renderInventoryPage();
    bindInventoryEvents();
  } else if (state.route.name === 'vehicle') {
    const v = state.inventory.find(x => x.id === state.route.params.id);
    if (!v) {
      navigate('inventory');
      return;
    }
    crumb.innerHTML = `
      <span><a href="#" data-go="inventory" style="color: var(--fg-muted);">Inventory</a></span>
      <span class="crumb-sep">/</span>
      <span class="crumb-current">${escapeHtml(v.year + ' ' + v.vehicle)}</span>
    `;
    root.innerHTML = renderVehicleDetail(v);
    bindVehicleDetailEvents(v);
    crumb.querySelector('[data-go="inventory"]').addEventListener('click', (e) => {
      e.preventDefault();
      navigate('inventory');
    });
  } else if (state.route.name === 'photos') {
    crumb.innerHTML = '<span class="crumb-current">Photos</span>';
    root.innerHTML = renderPhotosBucket();
    bindPhotosBucketEvents();
  } else if (state.route.name === 'vdps') {
    crumb.innerHTML = '<span class="crumb-current">VDPs</span>';
    root.innerHTML = renderSimplePage('VDPs', 'AI-generated vehicle description pages. Configure dealership voice and review per-channel output.');
  } else if (state.route.name === 'pricing') {
    crumb.innerHTML = '<span class="crumb-current">Pricing</span>';
    root.innerHTML = renderSimplePage('Pricing intelligence', 'Live market comps from MarketCheck and Black Book. Surfaces pricing recommendations across your inventory.');
  } else if (state.route.name === 'integrations') {
    crumb.innerHTML = '<span class="crumb-current">Integrations</span>';
    root.innerHTML = renderIntegrationsPage();
  } else if (state.route.name === 'settings') {
    crumb.innerHTML = '<span class="crumb-current">Settings</span>';
    root.innerHTML = renderSettingsPage();
    bindSettingsEvents();
  }
}

// ============================================
// INVENTORY PAGE
// ============================================

let currentFilter = 'all';

function renderInventoryPage() {
  const inv = state.inventory;
  const counts = {
    all: inv.length,
    good: inv.filter(v => v.status === 'good').length,
    warn: inv.filter(v => v.status === 'warn').length,
    draft: inv.filter(v => v.status === 'draft').length
  };

  const filtered = currentFilter === 'all' ? inv : inv.filter(v => v.status === currentFilter);
  const totalValue = inv.reduce((sum, v) => sum + (v.price || 0), 0);
  const avgDays = inv.length > 0 ? Math.round(inv.reduce((s, v) => s + v.daysOnLot, 0) / inv.length) : 0;
  const optimizedPct = inv.length > 0 ? Math.round((counts.good / inv.length) * 100) : 0;

  // Update sidebar badge
  setTimeout(() => {
    const badge = document.getElementById('needs-attn-badge');
    if (badge) {
      const total = counts.warn + counts.draft;
      badge.textContent = total;
      badge.style.display = total > 0 ? 'inline-flex' : 'none';
    }
  }, 0);

  return `
    <div class="page">
      <div class="page-header">
        <div>
          <div class="page-title">Inventory</div>
          <div class="page-sub">${inv.length} active vehicles · last synced 2 minutes ago</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-ghost btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            Sync now
          </button>
          <button class="btn btn-primary btn-sm" id="add-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add vehicle
          </button>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-label">Active VINs</div>
          <div class="stat-value">${inv.length}</div>
          <div class="stat-trend up">+2 this week</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Optimized</div>
          <div class="stat-value">${optimizedPct}%</div>
          <div class="stat-trend">${counts.good} of ${inv.length}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Need attention</div>
          <div class="stat-value">${counts.warn + counts.draft}</div>
          <div class="stat-trend down">${counts.warn} stale · ${counts.draft} draft</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Avg days on lot</div>
          <div class="stat-value">${avgDays}d</div>
          <div class="stat-trend">vs. 28d category avg</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Inventory value</div>
          <div class="stat-value">$${(totalValue/1000).toFixed(0)}K</div>
          <div class="stat-trend">$${Math.round(totalValue/inv.length).toLocaleString()} avg</div>
        </div>
      </div>

      <div class="filter-bar">
        <button class="filter-pill ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All <span class="count">${counts.all}</span></button>
        <button class="filter-pill ${currentFilter === 'good' ? 'active' : ''}" data-filter="good">Optimized <span class="count">${counts.good}</span></button>
        <button class="filter-pill ${currentFilter === 'warn' ? 'active' : ''}" data-filter="warn">Needs attention <span class="count">${counts.warn}</span></button>
        <button class="filter-pill ${currentFilter === 'draft' ? 'active' : ''}" data-filter="draft">Draft <span class="count">${counts.draft}</span></button>
        <div style="margin-left: auto; font-family: var(--font-mono); font-size: 11px; color: var(--fg-muted); letter-spacing: 0.04em;">Sorted by status</div>
      </div>

      <div class="inventory-table">
        <div class="inv-row head">
          <span></span>
          <span>Vehicle</span>
          <span class="col-mileage">Mileage</span>
          <span class="col-days">Days</span>
          <span class="col-price">Price</span>
          <span>Status</span>
          <span></span>
        </div>
        ${filtered.length === 0 ? `
          <div class="empty">
            <div class="empty-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </div>
            <div class="empty-text">No vehicles in this view. Add a vehicle or change the filter.</div>
          </div>
        ` : filtered.map(v => renderInvRow(v)).join('')}
      </div>
    </div>
  `;
}

function renderInvRow(v) {
  const statusMap = {
    good: { label: 'Optimized', cls: 'good' },
    warn: { label: v.pricing?.recommendation === 'photos' ? 'Refresh photos' : `Reduce $${v.pricing?.amount || 0}`, cls: 'warn' },
    draft: { label: 'Draft', cls: 'draft' }
  };
  const st = statusMap[v.status] || statusMap.draft;
  const photoBg = v.photoUrl ? `style="background-image: url('${v.photoUrl}'); background-size: cover;"` : '';

  return `
    <div class="inv-row" data-vehicle-id="${v.id}">
      <div class="inv-thumb" ${photoBg}></div>
      <div class="inv-vehicle">
        <div class="inv-name">${escapeHtml(v.year + ' ' + v.vehicle)}</div>
        <div class="inv-vin">${v.vin.substring(0, 4)}***${v.vin.substring(v.vin.length - 4)}</div>
      </div>
      <div class="inv-mileage col-mileage">${(v.mileage/1000).toFixed(0)}K mi</div>
      <div class="inv-days col-days ${v.daysOnLot > 30 ? 'warn' : ''}">${v.daysOnLot}d</div>
      <div class="inv-price col-price">$${(v.price/1000).toFixed(1)}K</div>
      <div class="inv-status">
        <span class="status-pill ${st.cls}"><span class="dot"></span>${st.label}</span>
      </div>
      <div class="inv-actions">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </div>
  `;
}

function bindInventoryEvents() {
  document.querySelectorAll('.inv-row[data-vehicle-id]').forEach(row => {
    row.addEventListener('click', () => {
      navigate('vehicle', { id: row.dataset.vehicleId });
    });
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentFilter = pill.dataset.filter;
      render();
    });
  });

  document.getElementById('add-btn')?.addEventListener('click', openAddModal);
}

// ============================================
// VEHICLE DETAIL PAGE
// ============================================

let currentVdpChannel = 'site';

function renderVehicleDetail(v) {
  const statusMap = {
    good: 'Optimized',
    warn: v.pricing?.recommendation === 'photos' ? 'Needs photos' : `Reduce $${v.pricing?.amount || 0}`,
    draft: 'Draft'
  };

  return `
    <div class="page">
      <div class="vehicle-detail-head">
        <div>
          <a href="#" class="detail-back" data-back-to-inventory>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            Back to inventory
          </a>
          <div class="detail-title">${escapeHtml(v.year + ' ' + v.vehicle)}</div>
          <div class="detail-meta">
            <div class="detail-meta-item"><span class="label">VIN</span><span class="val">${v.vin}</span></div>
            <div class="detail-meta-item"><span class="label">Mileage</span><span class="val">${v.mileage.toLocaleString()}</span></div>
            <div class="detail-meta-item"><span class="label">Days on lot</span><span class="val">${v.daysOnLot}d</span></div>
            <div class="detail-meta-item"><span class="label">Asking</span><span class="val">$${v.price.toLocaleString()}</span></div>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-ghost btn-sm" id="rerun-all">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10"/></svg>
            Re-run all
          </button>
          <button class="btn btn-primary btn-sm" id="publish-vehicle">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            Push to channels
          </button>
        </div>
      </div>

      <div class="detail-grid">

        <!-- PHOTOS PANEL -->
        <div class="panel panel-photos">
          <div class="panel-head">
            <div class="panel-title">
              <span class="panel-num">01</span>
              Photos
              <span style="color: var(--fg-muted); font-weight: 400; font-size: 12px;">${v.photos} of 12 recommended</span>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-ghost btn-sm" id="enhance-all-btn">Enhance all</button>
            </div>
          </div>
          <div class="photo-config">
            <div class="cfg-field">
              <span class="cfg-label">Backdrop</span>
              <div class="chip-row" id="bd-chips">
                <button class="chip ${state.config.backdrop === 'cream' ? 'active' : ''}" data-bd="cream">Warm cream</button>
                <button class="chip ${state.config.backdrop === 'white' ? 'active' : ''}" data-bd="white">White</button>
                <button class="chip ${state.config.backdrop === 'gradient' ? 'active' : ''}" data-bd="gradient">Gradient</button>
                <button class="chip ${state.config.backdrop === 'showroom' ? 'active' : ''}" data-bd="showroom">Showroom</button>
              </div>
            </div>
            <div class="cfg-field">
              <span class="cfg-label">Watermark</span>
              <input type="text" class="input" style="padding: 5px 10px; font-size: 12px;" id="wm-input" value="${escapeHtml(state.config.watermark)}" maxlength="4">
            </div>
            <div class="cfg-field">
              <span class="cfg-label">Watermark color</span>
              <div class="chip-row" id="wmc-chips">
                <button class="chip ${state.config.watermarkColor === '#C2410C' ? 'active' : ''}" data-color="#C2410C">Orange</button>
                <button class="chip ${state.config.watermarkColor === '#0C0A09' ? 'active' : ''}" data-color="#0C0A09">Black</button>
                <button class="chip ${state.config.watermarkColor === '#1E40AF' ? 'active' : ''}" data-color="#1E40AF">Blue</button>
                <button class="chip ${state.config.watermarkColor === '#15803D' ? 'active' : ''}" data-color="#15803D">Green</button>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <div class="photos-grid" id="photos-grid">
              ${renderPhotoTiles(v)}
            </div>
          </div>
        </div>

        <!-- VDP PANEL -->
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">
              <span class="panel-num">02</span>
              VDP copywriting
            </div>
            <div style="display: flex; gap: 6px; align-items: center;">
              <span style="font-family: var(--font-mono); font-size: 10px; color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.06em;">Voice:</span>
              <div class="chip-row" id="voice-chips">
                <button class="chip ${state.config.vdpVoice === 'professional' ? 'active' : ''}" data-voice="professional">Pro</button>
                <button class="chip ${state.config.vdpVoice === 'casual' ? 'active' : ''}" data-voice="casual">Casual</button>
                <button class="chip ${state.config.vdpVoice === 'performance' ? 'active' : ''}" data-voice="performance">Perf</button>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <div class="vdp-channels-bar">
              <button class="vdp-channel-btn ${currentVdpChannel === 'site' ? 'active' : ''}" data-channel="site">Your site</button>
              <button class="vdp-channel-btn ${currentVdpChannel === 'autotrader' ? 'active' : ''}" data-channel="autotrader">AutoTrader</button>
              <button class="vdp-channel-btn ${currentVdpChannel === 'cars' ? 'active' : ''}" data-channel="cars">Cars.com</button>
              <button class="vdp-channel-btn ${currentVdpChannel === 'fb' ? 'active' : ''}" data-channel="fb">FB Market</button>
            </div>
            <textarea class="vdp-textarea" id="vdp-textarea">${escapeHtml(generateVDP(v, currentVdpChannel))}</textarea>
            <div class="vdp-actions">
              <span class="vdp-meta">Auto-saved · last edit just now</span>
              <button class="btn btn-ghost btn-sm" id="regenerate-vdp">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10"/></svg>
                Regenerate
              </button>
            </div>
          </div>
        </div>

        <!-- PRICING PANEL -->
        <div class="panel">
          <div class="panel-head">
            <div class="panel-title">
              <span class="panel-num">03</span>
              Pricing intelligence
            </div>
            <button class="btn btn-ghost btn-sm" id="refresh-pricing">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10"/></svg>
              Refresh
            </button>
          </div>
          <div class="panel-body">
            ${renderPricingPanel(v)}
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderPhotoTiles(v) {
  // Show 8 photo tiles. First two are "before" and "after" for the hero shot.
  // Rest are placeholders or repeated thumbnails.
  const bgMap = {
    cream: 'linear-gradient(180deg, #FAFAF8, #ECE7DF, #D6CFC1)',
    white: 'linear-gradient(180deg, #FFFFFF, #F5F5F5)',
    gradient: 'linear-gradient(135deg, #1F2937, #0F172A)',
    showroom: 'linear-gradient(180deg, #44403C, #292524)'
  };
  const bg = bgMap[state.config.backdrop] || bgMap.cream;
  const wm = state.config.watermark || 'PD';
  const wmColor = state.config.watermarkColor;

  let tiles = '';
  const numTiles = Math.max(v.photos, 4);

  for (let i = 0; i < numTiles; i++) {
    if (v.photoUrl) {
      tiles += `
        <div class="photo-tile" style="background-image: url('${v.photoUrl}'), ${bg}; background-size: cover, auto;">
          ${i === 0 ? '<div class="photo-tile-label">Hero</div>' : ''}
          <div class="photo-tile-watermark" style="background: ${wmColor};">${escapeHtml(wm)}</div>
        </div>
      `;
    } else {
      tiles += `
        <div class="photo-tile" style="background: ${bg};">
          <div class="photo-tile-watermark" style="background: ${wmColor};">${escapeHtml(wm)}</div>
        </div>
      `;
    }
  }

  tiles += `
    <div class="photo-tile add" id="add-photo-tile">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      <span>Upload more</span>
    </div>
  `;

  return tiles;
}

function renderPricingPanel(v) {
  if (!v.pricing) {
    return `
      <div class="empty" style="padding: 40px 20px;">
        <div class="empty-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/></svg>
        </div>
        <div class="empty-text">No pricing data yet. Click "Refresh" to pull live market comps.</div>
      </div>
    `;
  }

  const positionPct = Math.min(100, Math.max(0, ((v.price - v.pricing.rangeLow) / (v.pricing.rangeHigh - v.pricing.rangeLow)) * 100));
  const daysWidth = Math.min(100, (v.daysOnLot / 60) * 100);

  let recHtml;
  if (v.pricing.recommendation === 'reduce') {
    recHtml = `Reduce by <span class="accent">$${v.pricing.amount.toLocaleString()}</span> → $${(v.price - v.pricing.amount).toLocaleString()}`;
  } else if (v.pricing.recommendation === 'photos') {
    recHtml = `<span class="accent">Refresh photos first</span> · pricing is competitive`;
  } else {
    recHtml = `<span style="color: var(--good);">Hold</span> · pricing is competitive within market range`;
  }

  // Generate 4 deterministic comps
  const comps = [
    { v: v.vehicle, m: v.mileage - 4500, p: v.pricing.rangeLow + Math.round((v.pricing.rangeHigh - v.pricing.rangeLow) * 0.3), d: 'San Jose' },
    { v: v.vehicle, m: v.mileage + 1200, p: v.pricing.rangeLow + Math.round((v.pricing.rangeHigh - v.pricing.rangeLow) * 0.5), d: 'Oakland' },
    { v: v.vehicle, m: v.mileage - 8000, p: v.pricing.rangeLow + Math.round((v.pricing.rangeHigh - v.pricing.rangeLow) * 0.78), d: 'Fremont' },
    { v: v.vehicle, m: v.mileage + 3500, p: v.pricing.rangeLow + Math.round((v.pricing.rangeHigh - v.pricing.rangeLow) * 0.62), d: 'Hayward' }
  ];

  return `
    <div class="pricing-headline-row">
      <div class="pricing-current">$${v.price.toLocaleString()}</div>
    </div>
    <div class="pricing-sub">${v.daysOnLot} days on lot · last refresh 4 hours ago</div>

    <div class="bar-row">
      <div class="bar-label"><span>Market range</span><span>$${(v.pricing.rangeLow/1000).toFixed(1)}K – $${(v.pricing.rangeHigh/1000).toFixed(1)}K</span></div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${Math.min(100, positionPct)}%;"></div>
        <div class="bar-marker" style="left: ${Math.min(100, positionPct)}%;"></div>
      </div>
    </div>

    <div class="bar-row">
      <div class="bar-label"><span>Days vs. category</span><span>${v.daysOnLot > 28 ? '+' + (v.daysOnLot - 28) : v.daysOnLot - 28}d</span></div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${daysWidth}%; background: ${v.daysOnLot > 30 ? 'var(--accent)' : 'var(--fg)'};"></div>
      </div>
    </div>

    <div class="recommendation" style="border-left-color: ${v.pricing.recommendation === 'hold' ? 'var(--good)' : 'var(--accent)'};">
      <div class="rec-label">Recommended action</div>
      <div class="rec-text">${recHtml}</div>
      ${v.pricing.recommendation === 'reduce' ? `
        <div class="rec-actions">
          <button class="btn btn-primary btn-sm" id="apply-rec">Apply $${v.pricing.amount} reduction</button>
          <button class="btn btn-ghost btn-sm">Dismiss</button>
        </div>
      ` : ''}
    </div>

    <div class="comp-table">
      <div class="comp-row head">
        <span>Comp</span>
        <span>Miles</span>
        <span>Price</span>
      </div>
      ${comps.map(c => `
        <div class="comp-row">
          <span class="name">${v.year} ${escapeHtml(c.v)} · ${c.d}</span>
          <span class="num">${(c.m/1000).toFixed(0)}K</span>
          <span class="num">$${(c.p/1000).toFixed(1)}K</span>
        </div>
      `).join('')}
    </div>

    <div style="font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--fg-muted); margin-top: 12px;">
      Source: MarketCheck · Black Book · refreshed weekly
    </div>
  `;
}

function bindVehicleDetailEvents(v) {
  // Back link
  document.querySelector('[data-back-to-inventory]')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('inventory');
  });

  // Backdrop chips
  document.querySelectorAll('#bd-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      state.config.backdrop = c.dataset.bd;
      saveState();
      render();
      toast('Photo backdrop updated');
    });
  });

  // Watermark color chips
  document.querySelectorAll('#wmc-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      state.config.watermarkColor = c.dataset.color;
      saveState();
      render();
      toast('Watermark color updated');
    });
  });

  // Watermark text input
  const wmInput = document.getElementById('wm-input');
  if (wmInput) {
    wmInput.addEventListener('input', (e) => {
      state.config.watermark = e.target.value || 'PD';
      saveState();
      // Update all watermarks live without re-render
      document.querySelectorAll('.photo-tile-watermark').forEach(w => {
        w.textContent = e.target.value || 'PD';
      });
    });
  }

  // Voice chips
  document.querySelectorAll('#voice-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      state.config.vdpVoice = c.dataset.voice;
      saveState();
      // Regenerate VDP textarea
      document.getElementById('vdp-textarea').value = generateVDP(v, currentVdpChannel);
      // Update active chip styling
      document.querySelectorAll('#voice-chips .chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      toast('Voice updated · VDP regenerated');
    });
  });

  // VDP channel switching
  document.querySelectorAll('.vdp-channel-btn').forEach(b => {
    b.addEventListener('click', () => {
      currentVdpChannel = b.dataset.channel;
      document.querySelectorAll('.vdp-channel-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.getElementById('vdp-textarea').value = generateVDP(v, currentVdpChannel);
    });
  });

  // Regenerate VDP
  document.getElementById('regenerate-vdp')?.addEventListener('click', () => {
    const ta = document.getElementById('vdp-textarea');
    ta.style.opacity = '0.5';
    setTimeout(() => {
      ta.value = generateVDP(v, currentVdpChannel);
      ta.style.opacity = '1';
      toast('VDP regenerated');
    }, 600);
  });

  // Refresh pricing
  document.getElementById('refresh-pricing')?.addEventListener('click', () => {
    toast('Pulling live comps from MarketCheck...');
    setTimeout(() => toast('Pricing refreshed · 4 new comps'), 800);
  });

  // Apply pricing recommendation
  document.getElementById('apply-rec')?.addEventListener('click', () => {
    if (v.pricing?.amount) {
      v.price = v.price - v.pricing.amount;
      v.pricing.recommendation = 'hold';
      v.status = 'good';
      saveState();
      render();
      toast(`Price reduced to $${v.price.toLocaleString()}`);
    }
  });

  // Re-run all
  document.getElementById('rerun-all')?.addEventListener('click', () => {
    toast('Re-running photos, VDP, and pricing...');
    setTimeout(() => toast('All three pipelines complete'), 1200);
  });

  // Push to channels
  document.getElementById('publish-vehicle')?.addEventListener('click', () => {
    toast('Pushing to your site, AutoTrader, Cars.com, FB Marketplace...');
    setTimeout(() => toast('Pushed to 4 channels'), 1000);
  });

  // Enhance all photos
  document.getElementById('enhance-all-btn')?.addEventListener('click', () => {
    toast(`Enhancing ${v.photos} photos with current template...`);
    setTimeout(() => toast('Photo enhancement complete'), 1000);
  });

  // Add photo
  document.getElementById('add-photo-tile')?.addEventListener('click', () => {
    v.photos++;
    saveState();
    render();
    toast('Photo uploaded · running enhancement');
  });
}

// ============================================
// VDP GENERATION
// ============================================

function generateVDP(v, channel) {
  const features = (v.features || '').split(',').map(f => f.trim()).filter(Boolean);
  const dealer = state.config.dealerName || 'our dealership';
  const area = state.config.dealerArea || 'San Mateo, CA';
  const voice = state.config.vdpVoice || 'professional';

  const intros = {
    site: {
      professional: `Presented by ${dealer}. This ${v.year} ${v.vehicle} is ready for its next chapter.`,
      casual: `Just landed at ${dealer} — and this ${v.vehicle} won't be here long.`,
      performance: `Built for the driver who wants more. ${v.year} ${v.vehicle} — equipped, ready, available now at ${dealer}.`
    }
  };

  if (channel === 'site') {
    return `${intros.site[voice]}

With ${v.mileage.toLocaleString()} well-cared-for miles, this vehicle sits noticeably below average for its model year. Service history is documented and the condition reflects it.

Notable equipment: ${features.slice(0, 4).join(', ')}${features.length > 4 ? ', and more.' : '.'}

Priced at $${v.price.toLocaleString()}, this ${v.vehicle} represents a competitive value in the current ${area} market. We invite you to schedule a test drive at your convenience — or send us a message and we'll respond the same business day.

${dealer} · Honest pricing, transparent history, no high-pressure sales.`;
  }

  if (channel === 'autotrader') {
    return `${v.year} ${v.vehicle.toUpperCase()} | ${v.mileage.toLocaleString()} MILES | $${v.price.toLocaleString()}

CONDITION: Excellent · Single-owner trade-in with documented service history.

KEY FEATURES:
${features.slice(0, 6).map(f => `· ${f.charAt(0).toUpperCase() + f.slice(1)}`).join('\n')}

WHY THIS ONE: Below-average mileage for the model year. Original window sticker available on request. Clean Carfax. Recently serviced and detailed in our shop.

DEALER: ${dealer}
LOCATION: ${area}

Financing available · Trade-ins welcome · Extended warranty options at competitive rates.`;
  }

  if (channel === 'cars') {
    return `${v.year} ${v.vehicle} — $${v.price.toLocaleString()}

This ${v.mileage.toLocaleString()}-mile ${v.vehicle} is exactly the kind of vehicle our customers ask us to find: well-maintained, fairly priced, with a clean history we can document.

Equipment highlights include ${features.slice(0, 3).join(', ')}, and more. The full feature list and high-resolution photos are available — request more info and we'll send everything within the hour during business hours.

Located at ${dealer}. We respond to every inquiry the same day, every time.`;
  }

  if (channel === 'fb') {
    const headlines = {
      professional: `Just in: ${v.year} ${v.vehicle}, ${(v.mileage/1000).toFixed(0)}K miles, $${(v.price/1000).toFixed(1)}K.`,
      casual: `${v.year} ${v.vehicle} 🔥 ${(v.mileage/1000).toFixed(0)}K miles, $${(v.price/1000).toFixed(1)}K. Won't last.`,
      performance: `${v.year} ${v.vehicle} — ${(v.mileage/1000).toFixed(0)}K miles, dialed in, $${(v.price/1000).toFixed(1)}K.`
    };
    return `${headlines[voice]}

✓ ${features.slice(0, 3).join('  ✓ ')}
✓ Clean Carfax
✓ Single owner

${dealer} · ${area}
DM us — quick replies during business hours.`;
  }

  return '';
}

// ============================================
// SIMPLE PAGES (Photos, VDPs, Pricing tabs)
// ============================================

function renderSimplePage(title, sub) {
  return `
    <div class="page">
      <div class="page-header">
        <div>
          <div class="page-title">${escapeHtml(title)}</div>
          <div class="page-sub">${escapeHtml(sub)}</div>
        </div>
      </div>
      <div class="empty" style="background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 80px 40px;">
        <div class="empty-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="empty-text" style="max-width: 40ch;">Bulk operations and per-capability views are coming. For now, work with each capability inside individual vehicles from the inventory page.</div>
        <button class="btn btn-primary btn-sm" style="margin-top: 20px;" onclick="navigate('inventory')">Go to inventory</button>
      </div>
    </div>
  `;
}

// ============================================
// PHOTOS BUCKET — bulk queue + per-image agentic editor
// ============================================

// Persistent per-photo state lives under state.photoEdits keyed by `${vid}:${idx}`
function ensurePhotoState() {
  if (!state.photoEdits) state.photoEdits = {};
  if (!state.photosUI) state.photosUI = { selected: null, filter: 'all' };
}

const PHOTO_ACTIONS = [
  { id: 'remove-bg',   label: 'Remove background', desc: 'Cut subject from existing backdrop',     duration: 1400 },
  { id: 'replace-bg',  label: 'Replace backdrop',  desc: 'Apply your configured studio backdrop',  duration: 1800 },
  { id: 'color-fix',   label: 'Color correct',     desc: 'Auto white balance + exposure',          duration: 900 },
  { id: 'remove-plate',label: 'Blur license plate',desc: 'Privacy-safe plate detection',           duration: 1100 },
  { id: 'watermark',   label: 'Apply watermark',   desc: 'Bottom-right brand mark',                duration: 600 },
  { id: 'crop-frame',  label: 'Standardize framing', desc: 'Center vehicle, 16:9 aspect',          duration: 1000 },
];

function getPhotoQueue() {
  // Build a queue of photo work items across the whole inventory
  const queue = [];
  state.inventory.forEach(v => {
    const recommended = 8;
    const have = v.photos || 0;
    const status = !v.photoUrl ? 'missing'
                 : have < 4 ? 'low'
                 : have < recommended ? 'partial'
                 : 'done';
    queue.push({
      vid: v.id, year: v.year, vehicle: v.vehicle, photoUrl: v.photoUrl,
      have, recommended, status, days: v.daysOnLot,
    });
  });
  return queue;
}

function renderPhotosBucket() {
  ensurePhotoState();
  const queue = getPhotoQueue();
  const counts = {
    all: queue.length,
    missing: queue.filter(q => q.status === 'missing').length,
    low: queue.filter(q => q.status === 'low').length,
    partial: queue.filter(q => q.status === 'partial').length,
    done: queue.filter(q => q.status === 'done').length,
  };
  const filter = state.photosUI.filter || 'all';
  const filtered = filter === 'all' ? queue : queue.filter(q => q.status === filter);

  // Total photos slated for processing
  const totalNeeded = queue.reduce((acc, q) => acc + Math.max(0, q.recommended - q.have), 0);

  return `
    <div class="page">
      <div class="page-header">
        <div>
          <div class="page-title">Photos</div>
          <div class="page-sub">Bulk photo workflow across your inventory. Edit any image with agentic AI actions.</div>
        </div>
        <div class="page-actions">
          <button class="btn btn-ghost btn-sm" id="photos-bulk-presets">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Batch presets
          </button>
          <button class="btn btn-primary btn-sm" id="photos-run-all">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Enhance all queued
          </button>
        </div>
      </div>

      <div class="ph-stats">
        <div class="ph-stat">
          <div class="ph-stat-label">Photos in queue</div>
          <div class="ph-stat-num">${totalNeeded}</div>
          <div class="ph-stat-sub">Across ${queue.length} VINs</div>
        </div>
        <div class="ph-stat">
          <div class="ph-stat-label">Missing all photos</div>
          <div class="ph-stat-num" style="color: var(--warn);">${counts.missing}</div>
          <div class="ph-stat-sub">VINs with zero hero shot</div>
        </div>
        <div class="ph-stat">
          <div class="ph-stat-label">Below 4 photos</div>
          <div class="ph-stat-num" style="color: var(--warn);">${counts.low}</div>
          <div class="ph-stat-sub">VINs at conversion risk</div>
        </div>
        <div class="ph-stat">
          <div class="ph-stat-label">Avg processing time</div>
          <div class="ph-stat-num">~4.2<span class="ph-stat-suffix">s</span></div>
          <div class="ph-stat-sub">Per photo, full pipeline</div>
        </div>
      </div>

      <div class="ph-filters">
        ${['all','missing','low','partial','done'].map(f => `
          <button class="filter-pill ${f === filter ? 'active' : ''}" data-ph-filter="${f}">
            ${f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            <span class="pill-count">${counts[f] || 0}</span>
          </button>
        `).join('')}
      </div>

      <div class="ph-grid">
        ${filtered.map(q => renderPhotoQueueCard(q)).join('')}
      </div>
    </div>
  `;
}

function renderPhotoQueueCard(q) {
  const editsForVin = Object.keys(state.photoEdits || {}).filter(k => k.startsWith(q.vid + ':')).length;
  const statusLabel = {
    missing: { txt: 'No photos', cls: 'st-warn' },
    low:     { txt: q.have + ' / ' + q.recommended, cls: 'st-warn' },
    partial: { txt: q.have + ' / ' + q.recommended, cls: 'st-mid' },
    done:    { txt: q.have + ' / ' + q.recommended + ' · done', cls: 'st-good' },
  }[q.status];

  return `
    <div class="ph-card" data-vid="${q.vid}">
      <div class="ph-card-thumb" ${q.photoUrl ? `style="background-image: url('${q.photoUrl}'), linear-gradient(135deg, #ECE7DF, #D6CFC2); background-size: cover, auto;"` : 'style="background: linear-gradient(135deg, #ECE7DF, #D6CFC2);"'}>
        ${editsForVin > 0 ? `<div class="ph-card-badge"><span class="dot"></span>${editsForVin} edited</div>` : ''}
      </div>
      <div class="ph-card-body">
        <div class="ph-card-title">${escapeHtml(q.year + ' ' + q.vehicle)}</div>
        <div class="ph-card-meta">
          <span class="status-pill ${statusLabel.cls}">${statusLabel.txt}</span>
          <span class="ph-card-days">${q.days}d on lot</span>
        </div>
      </div>
      <div class="ph-card-actions">
        <button class="btn btn-ghost btn-xs" data-action="open-editor" data-vid="${q.vid}">
          Open editor →
        </button>
      </div>
    </div>
  `;
}

function renderPhotoEditor(vid) {
  const v = state.inventory.find(x => x.id === vid);
  if (!v) return '';
  const recommended = 8;
  const tiles = Array.from({ length: recommended }, (_, i) => ({ idx: i, vid: v.id }));
  const selectedKey = state.photosUI.selected;
  const selectedTile = selectedKey && selectedKey.startsWith(vid + ':')
    ? parseInt(selectedKey.split(':')[1]) : 0;

  return `
    <div class="ph-editor-overlay" id="ph-editor-overlay">
      <div class="ph-editor">
        <div class="ph-editor-head">
          <div>
            <div class="ph-editor-title">${escapeHtml(v.year + ' ' + v.vehicle)}</div>
            <div class="ph-editor-sub">VIN ${escapeHtml(v.vin)} · Photo editor</div>
          </div>
          <button class="icon-btn" id="ph-editor-close" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="ph-editor-body">
          <!-- LEFT: thumbnail rail -->
          <div class="ph-rail">
            <div class="ph-rail-label">Photos · ${tiles.length}</div>
            ${tiles.map(t => {
              const k = `${t.vid}:${t.idx}`;
              const ed = state.photoEdits[k];
              const active = t.idx === selectedTile;
              const heroBadge = t.idx === 0 ? '<div class="rail-tag">HERO</div>' : '';
              const editsBadge = ed && ed.applied && ed.applied.length
                ? `<div class="rail-edits">${ed.applied.length}</div>` : '';
              const bg = ed && ed.bg ? ed.bg : 'linear-gradient(135deg, #ECE7DF, #D6CFC2)';
              return `
                <button class="ph-rail-tile ${active ? 'active' : ''}" data-tile="${t.idx}" style="background: ${bg};">
                  ${heroBadge}
                  ${editsBadge}
                </button>
              `;
            }).join('')}
            <button class="ph-rail-tile ph-rail-add" id="ph-add-photo">+</button>
          </div>

          <!-- CENTER: canvas -->
          <div class="ph-canvas">
            ${renderPhotoCanvas(v, selectedTile)}
          </div>

          <!-- RIGHT: actions panel -->
          <div class="ph-actions">
            <div class="ph-actions-section">
              <div class="ph-section-label">Agentic actions</div>
              ${PHOTO_ACTIONS.map(a => {
                const k = `${v.id}:${selectedTile}`;
                const ed = state.photoEdits[k];
                const isApplied = ed && ed.applied && ed.applied.includes(a.id);
                return `
                  <button class="ph-action ${isApplied ? 'applied' : ''}" data-action-id="${a.id}">
                    <div class="ph-action-icon">
                      ${isApplied
                        ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>'
                        : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
                      }
                    </div>
                    <div class="ph-action-text">
                      <div class="ph-action-label">${a.label}</div>
                      <div class="ph-action-desc">${a.desc}</div>
                    </div>
                    <div class="ph-action-status">
                      ${isApplied ? '<span class="ph-applied-tag">Applied</span>' : `<span class="ph-time">~${(a.duration/1000).toFixed(1)}s</span>`}
                    </div>
                  </button>
                `;
              }).join('')}
            </div>

            <div class="ph-actions-section">
              <div class="ph-section-label">Run pipeline</div>
              <button class="btn btn-primary btn-sm ph-run-all" id="ph-run-pipeline">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Run all 6 actions
              </button>
              <button class="btn btn-ghost btn-sm" id="ph-reset-edits">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
                Reset this photo
              </button>
            </div>

            <div class="ph-actions-section">
              <div class="ph-section-label">Apply to all photos for this VIN</div>
              <button class="btn btn-ghost btn-sm" id="ph-apply-all-tiles">
                Use this preset on all 8
              </button>
            </div>
          </div>
        </div>

        <div class="ph-status-bar" id="ph-status-bar">
          <span class="ph-status-text">Ready</span>
          <span class="ph-status-meta">localStorage · auto-saved</span>
        </div>
      </div>
    </div>
  `;
}

function renderPhotoCanvas(v, idx) {
  const k = `${v.id}:${idx}`;
  const ed = state.photoEdits[k] || { applied: [], bg: null };
  const beforeBg = 'linear-gradient(135deg, #C8C2B5 0%, #A8A29E 100%)';
  const afterBg = ed.bg || beforeBg;
  const hasEdits = ed.applied && ed.applied.length > 0;

  return `
    <div class="ph-canvas-inner">
      <div class="ph-canvas-head">
        <div class="ph-canvas-title">Photo ${idx + 1}${idx === 0 ? ' · Hero' : ''}</div>
        <div class="ph-canvas-meta">${ed.applied ? ed.applied.length : 0} of 6 actions applied</div>
      </div>

      <div class="ph-compare">
        <div class="ph-compare-cell">
          <div class="ph-compare-label">Before</div>
          <div class="ph-compare-image" style="background: ${beforeBg};">
            ${v.photoUrl ? `<img src="${v.photoUrl}" alt="" onerror="this.style.display='none';" />` : ''}
            <div class="ph-vehicle-silhouette ${hasEdits ? 'before' : ''}">${vehicleSilhouetteSvg('#3a3835')}</div>
          </div>
        </div>
        <div class="ph-compare-cell">
          <div class="ph-compare-label">After ${hasEdits ? `· ${ed.applied.length} edits` : '· no edits yet'}</div>
          <div class="ph-compare-image" style="background: ${afterBg};">
            <div class="ph-vehicle-silhouette after">${vehicleSilhouetteSvg('#1a1816')}</div>
            ${ed.applied && ed.applied.includes('watermark') ? `<div class="ph-watermark">${escapeHtml(state.config.watermark || 'PD')}</div>` : ''}
            ${ed.applied && ed.applied.includes('crop-frame') ? '<div class="ph-frame-guide"></div>' : ''}
          </div>
        </div>
      </div>

      <div class="ph-applied-list">
        ${ed.applied && ed.applied.length ? ed.applied.map(aid => {
          const a = PHOTO_ACTIONS.find(x => x.id === aid);
          return `<span class="ph-applied-chip">${a ? a.label : aid}</span>`;
        }).join('') : '<span class="ph-applied-empty">No actions applied yet — run an action from the right panel.</span>'}
      </div>
    </div>
  `;
}

// Reusable car silhouette for canvas
function vehicleSilhouetteSvg(color) {
  return `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYEnd meet">
    <ellipse cx="160" cy="125" rx="140" ry="6" fill="rgba(0,0,0,0.18)"/>
    <path d="M40 95 Q40 60 80 50 L130 38 Q160 28 200 32 L240 38 Q280 50 290 75 L295 95 Q295 105 285 105 L265 105 Q260 90 245 90 Q230 90 225 105 L120 105 Q115 90 100 90 Q85 90 80 105 L55 105 Q40 105 40 95 Z" fill="${color}"/>
    <path d="M115 50 L195 42 Q215 42 225 60 L235 78 L100 78 Q100 60 115 50 Z" fill="rgba(255,255,255,0.18)" stroke="${color}" stroke-width="0.5"/>
    <line x1="167" y1="44" x2="167" y2="78" stroke="${color}" stroke-width="1.2"/>
    <circle cx="100" cy="105" r="14" fill="#0c0a09"/>
    <circle cx="100" cy="105" r="6" fill="#444"/>
    <circle cx="245" cy="105" r="14" fill="#0c0a09"/>
    <circle cx="245" cy="105" r="6" fill="#444"/>
  </svg>`;
}

function bindPhotosBucketEvents() {
  // Filter pills
  document.querySelectorAll('[data-ph-filter]').forEach(b => {
    b.addEventListener('click', () => {
      state.photosUI.filter = b.dataset.phFilter;
      saveState();
      const root = document.getElementById('page-root');
      root.innerHTML = renderPhotosBucket();
      bindPhotosBucketEvents();
    });
  });

  // Open editor on card click or button
  document.querySelectorAll('.ph-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Avoid double-firing if button inside also clicked
      const vid = card.dataset.vid;
      openPhotoEditor(vid);
    });
  });

  // Bulk: enhance all queued
  document.getElementById('photos-run-all')?.addEventListener('click', () => {
    runEnhanceAll();
  });

  // Batch presets — placeholder toast for now
  document.getElementById('photos-bulk-presets')?.addEventListener('click', () => {
    toast('Batch presets — coming with v2');
  });
}

function openPhotoEditor(vid) {
  ensurePhotoState();
  state.photosUI.selected = `${vid}:0`;
  saveState();
  // Inject overlay into body
  const existing = document.getElementById('ph-editor-overlay');
  if (existing) existing.remove();
  const wrap = document.createElement('div');
  wrap.innerHTML = renderPhotoEditor(vid);
  document.body.appendChild(wrap.firstElementChild);
  bindPhotoEditorEvents(vid);
}

function bindPhotoEditorEvents(vid) {
  const overlay = document.getElementById('ph-editor-overlay');

  // Close
  document.getElementById('ph-editor-close')?.addEventListener('click', closePhotoEditor);
  overlay?.addEventListener('click', (e) => {
    if (e.target.id === 'ph-editor-overlay') closePhotoEditor();
  });

  // Tile selection
  document.querySelectorAll('.ph-rail-tile[data-tile]').forEach(t => {
    t.addEventListener('click', () => {
      const idx = parseInt(t.dataset.tile);
      state.photosUI.selected = `${vid}:${idx}`;
      saveState();
      refreshPhotoEditor(vid);
    });
  });

  // Action buttons — apply single action with simulated agentic flow
  document.querySelectorAll('.ph-action[data-action-id]').forEach(b => {
    b.addEventListener('click', () => {
      const aid = b.dataset.actionId;
      const idx = parseInt(state.photosUI.selected.split(':')[1]);
      runPhotoAction(vid, idx, aid);
    });
  });

  // Run full pipeline
  document.getElementById('ph-run-pipeline')?.addEventListener('click', () => {
    const idx = parseInt(state.photosUI.selected.split(':')[1]);
    runPhotoPipeline(vid, idx);
  });

  // Reset
  document.getElementById('ph-reset-edits')?.addEventListener('click', () => {
    const idx = parseInt(state.photosUI.selected.split(':')[1]);
    delete state.photoEdits[`${vid}:${idx}`];
    saveState();
    refreshPhotoEditor(vid);
    setStatusBar('Reset', 'Photo restored to original state');
  });

  // Apply preset to all 8 tiles
  document.getElementById('ph-apply-all-tiles')?.addEventListener('click', () => {
    const idx = parseInt(state.photosUI.selected.split(':')[1]);
    const source = state.photoEdits[`${vid}:${idx}`];
    if (!source || !source.applied || !source.applied.length) {
      toast('Apply at least one action first');
      return;
    }
    for (let i = 0; i < 8; i++) {
      state.photoEdits[`${vid}:${i}`] = JSON.parse(JSON.stringify(source));
    }
    saveState();
    refreshPhotoEditor(vid);
    setStatusBar('Applied to 8 photos', `Preset copied across all tiles for this VIN`);
  });
}

function refreshPhotoEditor(vid) {
  const overlay = document.getElementById('ph-editor-overlay');
  if (!overlay) return;
  const idx = parseInt(state.photosUI.selected.split(':')[1]);
  const canvas = overlay.querySelector('.ph-canvas');
  const actions = overlay.querySelector('.ph-actions');
  const v = state.inventory.find(x => x.id === vid);
  if (canvas) canvas.innerHTML = renderPhotoCanvas(v, idx);
  // Re-render rail tiles to reflect new edits
  overlay.querySelectorAll('.ph-rail-tile[data-tile]').forEach(t => {
    const i = parseInt(t.dataset.tile);
    const k = `${vid}:${i}`;
    const ed = state.photoEdits[k];
    t.classList.toggle('active', i === idx);
    const bg = ed && ed.bg ? ed.bg : 'linear-gradient(135deg, #ECE7DF, #D6CFC2)';
    t.style.background = bg;
    // Update edits badge
    let badge = t.querySelector('.rail-edits');
    const cnt = ed && ed.applied ? ed.applied.length : 0;
    if (cnt > 0) {
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'rail-edits';
        t.appendChild(badge);
      }
      badge.textContent = cnt;
    } else if (badge) {
      badge.remove();
    }
  });
  // Re-render action panel
  if (actions) {
    const editor = renderPhotoEditor(vid);
    const wrap = document.createElement('div');
    wrap.innerHTML = editor;
    const newActions = wrap.querySelector('.ph-actions');
    actions.replaceWith(newActions);
    bindPhotoEditorEvents(vid);
  }
}

function runPhotoAction(vid, idx, aid) {
  ensurePhotoState();
  const k = `${vid}:${idx}`;
  if (!state.photoEdits[k]) state.photoEdits[k] = { applied: [], bg: null };
  const ed = state.photoEdits[k];

  const action = PHOTO_ACTIONS.find(a => a.id === aid);
  if (!action) return;

  if (ed.applied.includes(aid)) {
    toast(action.label + ' — already applied');
    return;
  }

  setStatusBar('Running', `${action.label}…`, true);

  // Simulate agentic processing
  setTimeout(() => {
    ed.applied.push(aid);
    // Apply visual side-effects to the canvas state
    if (aid === 'replace-bg') {
      const backdrop = state.config.backdrop || 'cream';
      ed.bg = backdropToGradient(backdrop);
    } else if (aid === 'color-fix' && !ed.bg) {
      ed.bg = 'linear-gradient(135deg, #F5F2ED 0%, #E8E2D5 100%)';
    } else if (aid === 'remove-bg' && !ed.bg) {
      ed.bg = 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)';
    }
    saveState();
    refreshPhotoEditor(vid);
    setStatusBar('Done', `${action.label} applied`);
  }, action.duration);
}

function runPhotoPipeline(vid, idx) {
  ensurePhotoState();
  const k = `${vid}:${idx}`;
  state.photoEdits[k] = { applied: [], bg: null };
  saveState();
  refreshPhotoEditor(vid);

  let i = 0;
  const next = () => {
    if (i >= PHOTO_ACTIONS.length) {
      setStatusBar('Complete', `All 6 actions applied — saved to localStorage`);
      return;
    }
    const a = PHOTO_ACTIONS[i];
    setStatusBar('Running', `Step ${i+1} of 6 · ${a.label}…`, true);
    setTimeout(() => {
      const ed = state.photoEdits[k];
      ed.applied.push(a.id);
      if (a.id === 'replace-bg') ed.bg = backdropToGradient(state.config.backdrop || 'cream');
      else if (a.id === 'color-fix' && !ed.bg) ed.bg = 'linear-gradient(135deg, #F5F2ED 0%, #E8E2D5 100%)';
      else if (a.id === 'remove-bg' && !ed.bg) ed.bg = 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)';
      saveState();
      refreshPhotoEditor(vid);
      i++;
      next();
    }, Math.min(a.duration, 700)); // pipeline is faster than individual
  };
  next();
}

function runEnhanceAll() {
  const queue = getPhotoQueue().filter(q => q.status !== 'done');
  if (queue.length === 0) {
    toast('Nothing in queue — all VINs done');
    return;
  }
  toast(`Queued ${queue.length} VINs for enhancement…`);
  let done = 0;
  queue.forEach((q, i) => {
    setTimeout(() => {
      // Auto-enhance hero photo (idx 0) for each
      const k = `${q.vid}:0`;
      state.photoEdits[k] = {
        applied: PHOTO_ACTIONS.map(a => a.id),
        bg: backdropToGradient(state.config.backdrop || 'cream'),
      };
      done++;
      if (done === queue.length) {
        saveState();
        // Refresh the bucket view
        if (state.route.name === 'photos') {
          document.getElementById('page-root').innerHTML = renderPhotosBucket();
          bindPhotosBucketEvents();
        }
        toast(`Enhanced ${queue.length} hero photos`);
      }
    }, i * 80);
  });
}

function backdropToGradient(name) {
  const map = {
    cream:    'linear-gradient(135deg, #F5F2ED 0%, #E5DFD2 100%)',
    white:    'linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)',
    gradient: 'linear-gradient(135deg, #E8E0F5 0%, #C8BEE5 100%)',
    showroom: 'linear-gradient(180deg, #2A2825 0%, #4A4540 60%, #6A625A 100%)',
  };
  return map[name] || map.cream;
}

function setStatusBar(state_, text, working) {
  const bar = document.getElementById('ph-status-bar');
  if (!bar) return;
  bar.querySelector('.ph-status-text').innerHTML =
    (working ? '<span class="ph-status-spinner"></span> ' : '') +
    `<strong>${escapeHtml(state_)}</strong> · ${escapeHtml(text)}`;
}

function closePhotoEditor() {
  const overlay = document.getElementById('ph-editor-overlay');
  if (overlay) overlay.remove();
  // Refresh queue cards (edit counts may have changed)
  if (state.route.name === 'photos') {
    document.getElementById('page-root').innerHTML = renderPhotosBucket();
    bindPhotosBucketEvents();
  }
}

function renderIntegrationsPage() {
  const integrations = [
    { name: 'HomeNet', status: 'connected', type: 'Inventory', desc: 'Real-time inventory feed' },
    { name: 'vAuto', status: 'connected', type: 'Inventory', desc: 'Read-only inventory + market data' },
    { name: 'DealerCenter', status: 'available', type: 'IMS', desc: 'For independents under 100 vehicles' },
    { name: 'Frazer', status: 'available', type: 'IMS', desc: 'Long-standing favorite of small independents' },
    { name: 'AutoManager', status: 'available', type: 'IMS', desc: 'Common among small-to-mid independents' },
    { name: 'Dealer.com', status: 'connected', type: 'Website', desc: 'Push enhanced VDPs to your dealer site' },
    { name: 'AutoTrader', status: 'indirect', type: 'Syndication', desc: 'Reached via your existing syndicator' },
    { name: 'Cars.com', status: 'indirect', type: 'Syndication', desc: 'Reached via your existing syndicator' },
    { name: 'CarGurus', status: 'indirect', type: 'Syndication', desc: 'Reached via your existing syndicator' },
    { name: 'Facebook Marketplace', status: 'indirect', type: 'Syndication', desc: 'Channel-specific VDP variants generated' }
  ];

  return `
    <div class="page">
      <div class="page-header">
        <div>
          <div class="page-title">Integrations</div>
          <div class="page-sub">Pavedeck plugs into the stack you already run.</div>
        </div>
        <button class="btn btn-primary btn-sm">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Connect new
        </button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px;">
        ${integrations.map(i => `
          <div class="settings-section" style="margin-bottom: 0; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <div style="font-family: var(--font-display); font-weight: 600; font-size: 14px; letter-spacing: -0.01em; margin-bottom: 2px;">${i.name}</div>
                <div style="font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg-muted);">${i.type}</div>
              </div>
              <span class="status-pill ${i.status === 'connected' ? 'good' : i.status === 'indirect' ? 'draft' : 'warn'}">
                <span class="dot"></span>${i.status === 'connected' ? 'Connected' : i.status === 'indirect' ? 'Indirect' : 'Available'}
              </span>
            </div>
            <div style="font-size: 12px; color: var(--fg-soft); margin-bottom: 12px; line-height: 1.5;">${i.desc}</div>
            <button class="btn btn-ghost btn-sm" style="width: 100%; justify-content: center;">
              ${i.status === 'connected' ? 'Configure' : 'Connect'}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSettingsPage() {
  return `
    <div class="page">
      <div class="page-header">
        <div>
          <div class="page-title">Settings</div>
          <div class="page-sub">Configure your dealership defaults. Changes apply to every vehicle.</div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-title">Dealership</div>
        <div class="section-sub">Used as your dealership name and location across VDP copy.</div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Dealership name</label>
            <input type="text" class="input" id="set-dealer" value="${escapeHtml(state.config.dealerName)}">
          </div>
          <div class="field">
            <label class="field-label">Service area</label>
            <input type="text" class="input" id="set-area" value="${escapeHtml(state.config.dealerArea)}">
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-title">Photo defaults</div>
        <div class="section-sub">These settings apply to every photo Pavedeck enhances. Override per-vehicle if needed.</div>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <div class="field" style="margin-bottom: 0;">
            <label class="field-label">Default backdrop</label>
            <div class="chip-row" id="set-bd-chips">
              <button class="chip ${state.config.backdrop === 'cream' ? 'active' : ''}" data-bd="cream">Warm cream</button>
              <button class="chip ${state.config.backdrop === 'white' ? 'active' : ''}" data-bd="white">White</button>
              <button class="chip ${state.config.backdrop === 'gradient' ? 'active' : ''}" data-bd="gradient">Gradient</button>
              <button class="chip ${state.config.backdrop === 'showroom' ? 'active' : ''}" data-bd="showroom">Showroom</button>
            </div>
          </div>
          <div class="field" style="margin-bottom: 0;">
            <label class="field-label">Default watermark</label>
            <input type="text" class="input" style="width: 120px;" id="set-wm" value="${escapeHtml(state.config.watermark)}" maxlength="4">
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-title">VDP voice</div>
        <div class="section-sub">Default voice applied to every AI-generated vehicle description.</div>
        <div class="chip-row" id="set-voice-chips">
          <button class="chip ${state.config.vdpVoice === 'professional' ? 'active' : ''}" data-voice="professional">Professional</button>
          <button class="chip ${state.config.vdpVoice === 'casual' ? 'active' : ''}" data-voice="casual">Casual</button>
          <button class="chip ${state.config.vdpVoice === 'performance' ? 'active' : ''}" data-voice="performance">Performance</button>
        </div>
      </div>

      <div class="settings-section">
        <div class="section-title">Reset demo data</div>
        <div class="section-sub">Restore the starter inventory and clear all changes. This won't sign you out.</div>
        <button class="btn btn-ghost btn-sm" id="reset-demo">Reset to seed inventory</button>
      </div>
    </div>
  `;
}

function bindSettingsEvents() {
  document.getElementById('set-dealer')?.addEventListener('input', (e) => {
    state.config.dealerName = e.target.value;
    saveState();
  });
  document.getElementById('set-area')?.addEventListener('input', (e) => {
    state.config.dealerArea = e.target.value;
    saveState();
  });
  document.getElementById('set-wm')?.addEventListener('input', (e) => {
    state.config.watermark = e.target.value;
    saveState();
  });
  document.querySelectorAll('#set-bd-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      state.config.backdrop = c.dataset.bd;
      document.querySelectorAll('#set-bd-chips .chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      saveState();
      toast('Default backdrop saved');
    });
  });
  document.querySelectorAll('#set-voice-chips .chip').forEach(c => {
    c.addEventListener('click', () => {
      state.config.vdpVoice = c.dataset.voice;
      document.querySelectorAll('#set-voice-chips .chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      saveState();
      toast('Default voice saved');
    });
  });
  document.getElementById('reset-demo')?.addEventListener('click', () => {
    if (confirm('Reset all inventory and config to defaults?')) {
      state.inventory = SEED_INVENTORY.map(v => ({ ...v }));
      state.config = { ...DEFAULT_CONFIG, dealerName: state.user.dealerName };
      saveState();
      render();
      toast('Reset complete');
    }
  });
}

// ============================================
// ADD VIN MODAL
// ============================================

function openAddModal() {
  document.getElementById('add-modal').classList.add('open');
  document.getElementById('add-vin').focus();
}

function closeAddModal() {
  document.getElementById('add-modal').classList.remove('open');
  document.getElementById('add-vin').value = '';
  document.getElementById('add-vehicle').value = '';
}

document.querySelectorAll('[data-close-modal]').forEach(b => {
  b.addEventListener('click', closeAddModal);
});

document.getElementById('add-modal').addEventListener('click', (e) => {
  if (e.target.id === 'add-modal') closeAddModal();
});

document.getElementById('add-vin-submit').addEventListener('click', () => {
  const vin = document.getElementById('add-vin').value.trim() || ('NEW' + Math.random().toString(36).substring(2, 16).toUpperCase());
  const year = parseInt(document.getElementById('add-year').value) || 2022;
  const vehicle = document.getElementById('add-vehicle').value.trim();
  const mileage = parseInt(document.getElementById('add-mileage').value) || 0;
  const price = parseInt(document.getElementById('add-price').value) || 0;
  const days = parseInt(document.getElementById('add-days').value) || 0;

  if (!vehicle) {
    alert('Please enter make/model/trim');
    return;
  }

  const newV = {
    id: 'v' + Date.now(),
    vin: vin.padEnd(17, 'X').substring(0, 17),
    year, vehicle, mileage, price,
    daysOnLot: days,
    status: 'draft',
    photoUrl: null,
    photos: 0,
    vdpGenerated: false,
    pricing: null,
    features: ''
  };

  state.inventory.unshift(newV);
  saveState();
  closeAddModal();
  render();
  toast(`Added ${year} ${vehicle} · running pipeline`);

  setTimeout(() => {
    newV.pricing = {
      rangeLow: price - 1500,
      rangeHigh: price + 1500,
      recommendation: 'photos'
    };
    newV.status = 'warn';
    saveState();
    if (state.route.name === 'inventory') render();
  }, 1500);
});

// ============================================
// UTILITIES
// ============================================

function toast(text) {
  const t = document.getElementById('toast');
  document.getElementById('toast-text').textContent = text;
  t.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Search shortcut
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('search-input')?.focus();
  }
  if (e.key === 'Escape') {
    closeAddModal();
  }
});

// Search
document.getElementById('search-input').addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  if (state.route.name !== 'inventory') return;
  document.querySelectorAll('.inv-row[data-vehicle-id]').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
});

// Expose navigate for inline onclick handlers
window.navigate = navigate;

// ============================================
// INIT
// ============================================

loadState();
if (state.loggedIn) {
  showApp();
} else {
  showAuth();
}
