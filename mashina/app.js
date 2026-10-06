// ==========================================================
// 1. 66 TA REAL MASHINA BAZASI (NOM VA RASMLAR TO'LIQ MOS)
// ==========================================================
const CARS_DATA = [
  // --- BMW (11 ta) ---
  { id: 1, brand: 'BMW', model: 'BMW M5 CS (F90)', price: 142000, body: 'Sedan', hp: 635, accel: '3.0 s', speed: '305 km/h', engine: '4.4L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80' },
  { id: 2, brand: 'BMW', model: 'BMW M8 Gran Coupe Competition', price: 138000, body: 'Sedan', hp: 625, accel: '3.2 s', speed: '305 km/h', engine: '4.4L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80' },
  { id: 3, brand: 'BMW', model: 'BMW M4 CSL Lightweight', price: 140000, body: 'Superkar', hp: 550, accel: '3.7 s', speed: '307 km/h', engine: '3.0L Twin-Turbo I6', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80' },
  { id: 4, brand: 'BMW', model: 'BMW M3 Competition xDrive', price: 86000, body: 'Sedan', hp: 510, accel: '3.5 s', speed: '290 km/h', engine: '3.0L Twin-Turbo I6', img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80' },
  { id: 5, brand: 'BMW', model: 'BMW M2 Coupe (G87)', price: 65000, body: 'Superkar', hp: 460, accel: '4.1 s', speed: '285 km/h', engine: '3.0L Twin-Turbo I6', img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80' },
  { id: 6, brand: 'BMW', model: 'BMW X5 M Competition', price: 125000, body: 'SUV', hp: 625, accel: '3.8 s', speed: '290 km/h', engine: '4.4L M TwinPower V8', img: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=800&q=80' },
  { id: 7, brand: 'BMW', model: 'BMW X6 M Competition', price: 129000, body: 'SUV', hp: 625, accel: '3.8 s', speed: '290 km/h', engine: '4.4L M TwinPower V8', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80' },
  { id: 8, brand: 'BMW', model: 'BMW X7 M60i V8', price: 110000, body: 'SUV', hp: 530, accel: '4.7 s', speed: '250 km/h', engine: '4.4L Mild-Hybrid V8', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' },
  { id: 9, brand: 'BMW', model: 'BMW XM Label Red 748HP', price: 186000, body: 'SUV', hp: 748, accel: '3.8 s', speed: '290 km/h', engine: '4.4L V8 Plug-in Hybrid', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
  { id: 10, brand: 'BMW', model: 'BMW i7 M70 xDrive EV', price: 169000, body: 'Elektromobil', hp: 660, accel: '3.7 s', speed: '250 km/h', engine: 'Dual Electric Motors', img: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=800&q=80' },
  { id: 11, brand: 'BMW', model: 'BMW i4 M50 Gran Coupe', price: 71000, body: 'Elektromobil', hp: 544, accel: '3.9 s', speed: '225 km/h', engine: 'Dual Electric Motors', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },

  // --- Mercedes-Benz (11 ta) ---
  { id: 12, brand: 'Mercedes-Benz', model: 'Mercedes-AMG GT Black Series', price: 325000, body: 'Superkar', hp: 730, accel: '3.2 s', speed: '325 km/h', engine: '4.0L Bi-Turbo Flat-Plane V8', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' },
  { id: 13, brand: 'Mercedes-Benz', model: 'Mercedes-AMG GT 63 S E-Perf', price: 196000, body: 'Sedan', hp: 843, accel: '2.9 s', speed: '316 km/h', engine: '4.0L V8 + Electric Motor', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80' },
  { id: 14, brand: 'Mercedes-Benz', model: 'Mercedes-AMG G63 Magno Edition', price: 185000, body: 'SUV', hp: 585, accel: '4.5 s', speed: '240 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80' },
  { id: 15, brand: 'Mercedes-Benz', model: 'Mercedes-AMG G63 4x4²', price: 350000, body: 'SUV', hp: 585, accel: '5.0 s', speed: '210 km/h', engine: '4.0L Bi-Turbo Portal Axles', img: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80' },
  { id: 16, brand: 'Mercedes-Benz', model: 'Mercedes-Maybach S680 V12', price: 235000, body: 'Sedan', hp: 612, accel: '4.5 s', speed: '250 km/h', engine: '6.0L Bi-Turbo V12', img: 'https://images.unsplash.com/photo-1622353219448-46a2a0937b83?auto=format&fit=crop&w=800&q=80' },
  { id: 17, brand: 'Mercedes-Benz', model: 'Mercedes-Maybach GLS 600', price: 175000, body: 'SUV', hp: 557, accel: '4.9 s', speed: '250 km/h', engine: '4.0L Bi-Turbo V8 EQ Boost', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' },
  { id: 18, brand: 'Mercedes-Benz', model: 'Mercedes-AMG ONE Hypercar F1', price: 990000, body: 'Superkar', hp: 1063, accel: '2.9 s', speed: '352 km/h', engine: '1.6L Turbo V6 Formula 1 Hybrid', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80' },
  { id: 19, brand: 'Mercedes-Benz', model: 'Mercedes-AMG SL 63 Roadster', price: 182000, body: 'Superkar', hp: 585, accel: '3.6 s', speed: '315 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80' },
  { id: 20, brand: 'Mercedes-Benz', model: 'Mercedes-AMG C63 S E-Perf', price: 85000, body: 'Sedan', hp: 680, accel: '3.4 s', speed: '280 km/h', engine: '2.0L Turbo Hybrid', img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80' },
  { id: 21, brand: 'Mercedes-Benz', model: 'Mercedes-AMG E63 S Final Ed.', price: 120000, body: 'Sedan', hp: 612, accel: '3.4 s', speed: '300 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },
  { id: 22, brand: 'Mercedes-Benz', model: 'Mercedes-Maybach EQS 680 SUV', price: 180000, body: 'Elektromobil', hp: 658, accel: '4.4 s', speed: '210 km/h', engine: 'Dual Electric Luxury EV', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },

  // --- Porsche (8 ta) ---
  { id: 23, brand: 'Porsche', model: 'Porsche 911 GT3 RS Weissach', price: 340000, body: 'Superkar', hp: 525, accel: '3.2 s', speed: '296 km/h', engine: '4.0L Naturally Aspirated Boxer-6', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80' },
  { id: 24, brand: 'Porsche', model: 'Porsche 911 Turbo S (992)', price: 230000, body: 'Superkar', hp: 650, accel: '2.7 s', speed: '330 km/h', engine: '3.7L Twin-Turbo Boxer-6', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { id: 25, brand: 'Porsche', model: 'Porsche 911 Dakar Off-Road', price: 222000, body: 'Superkar', hp: 480, accel: '3.4 s', speed: '240 km/h', engine: '3.0L Twin-Turbo All-Terrain', img: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80' },
  { id: 26, brand: 'Porsche', model: 'Porsche Taycan Turbo S EV', price: 195000, body: 'Elektromobil', hp: 952, accel: '2.4 s', speed: '260 km/h', engine: 'Permanent Magnet Dual EV', img: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80' },
  { id: 27, brand: 'Porsche', model: 'Porsche Panamera Turbo E-Hybrid', price: 180000, body: 'Sedan', hp: 680, accel: '3.2 s', speed: '315 km/h', engine: '4.0L V8 Plug-in Hybrid', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80' },
  { id: 28, brand: 'Porsche', model: 'Porsche Cayenne Turbo GT', price: 198000, body: 'SUV', hp: 659, accel: '3.3 s', speed: '305 km/h', engine: '4.0L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' },
  { id: 29, brand: 'Porsche', model: 'Porsche Macan Turbo EV 2026', price: 105000, body: 'Elektromobil', hp: 639, accel: '3.3 s', speed: '260 km/h', engine: 'Dual Electric PPE Platform', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80' },
  { id: 30, brand: 'Porsche', model: 'Porsche 718 Cayman GT4 RS', price: 160000, body: 'Superkar', hp: 500, accel: '3.4 s', speed: '315 km/h', engine: '4.0L 9,000 RPM Mid-Engine', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80' },

  // --- Ferrari (6 ta) ---
  { id: 31, brand: 'Ferrari', model: 'Ferrari SF90 Stradale Hybrid', price: 520000, body: 'Superkar', hp: 1000, accel: '2.5 s', speed: '340 km/h', engine: '4.0L Twin-Turbo V8 + 3 e-Motors', img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80' },
  { id: 32, brand: 'Ferrari', model: 'Ferrari 296 GTB Hybrid', price: 340000, body: 'Superkar', hp: 830, accel: '2.9 s', speed: '330 km/h', engine: '3.0L 120° V6 Twin-Turbo + EV', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80' },
  { id: 33, brand: 'Ferrari', model: 'Ferrari Purosangue V12', price: 430000, body: 'SUV', hp: 725, accel: '3.3 s', speed: '310 km/h', engine: '6.5L Naturally Aspirated V12', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
  { id: 34, brand: 'Ferrari', model: 'Ferrari 812 Competizione', price: 600000, body: 'Superkar', hp: 830, accel: '2.8 s', speed: '340 km/h', engine: '6.5L V12 9,500 RPM', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80' },
  { id: 35, brand: 'Ferrari', model: 'Ferrari Roma Spider', price: 280000, body: 'Superkar', hp: 620, accel: '3.4 s', speed: '320 km/h', engine: '3.9L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80' },
  { id: 36, brand: 'Ferrari', model: 'Ferrari F8 Tributo', price: 310000, body: 'Superkar', hp: 720, accel: '2.9 s', speed: '340 km/h', engine: '3.9L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80' },

  // --- Lamborghini (6 ta) ---
  { id: 37, brand: 'Lamborghini', model: 'Lamborghini Revuelto V12 HPEV', price: 610000, body: 'Superkar', hp: 1015, accel: '2.5 s', speed: '350 km/h', engine: '6.5L V12 + 3 Elektromotor', img: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80' },
  { id: 38, brand: 'Lamborghini', model: 'Lamborghini Urus Performante', price: 270000, body: 'SUV', hp: 666, accel: '3.3 s', speed: '306 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80' },
  { id: 39, brand: 'Lamborghini', model: 'Lamborghini Huracán STO', price: 330000, body: 'Superkar', hp: 640, accel: '3.0 s', speed: '310 km/h', engine: '5.2L Naturally Aspirated V10', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80' },
  { id: 40, brand: 'Lamborghini', model: 'Lamborghini Huracán Sterrato', price: 290000, body: 'Superkar', hp: 610, accel: '3.4 s', speed: '260 km/h', engine: '5.2L All-Terrain V10', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { id: 41, brand: 'Lamborghini', model: 'Lamborghini Urus S', price: 235000, body: 'SUV', hp: 666, accel: '3.5 s', speed: '305 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' },
  { id: 42, brand: 'Lamborghini', model: 'Lamborghini Aventador SVJ', price: 550000, body: 'Superkar', hp: 770, accel: '2.8 s', speed: '352 km/h', engine: '6.5L Naturally Aspirated V12', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80' },

  // --- Audi (6 ta) ---
  { id: 43, brand: 'Audi', model: 'Audi RS7 Sportback Perf.', price: 129000, body: 'Sedan', hp: 630, accel: '3.4 s', speed: '305 km/h', engine: '4.0L Bi-Turbo V8 Quattro', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80' },
  { id: 44, brand: 'Audi', model: 'Audi RS6 Avant GT Limited', price: 160000, body: 'Sedan', hp: 630, accel: '3.3 s', speed: '305 km/h', engine: '4.0L Bi-Turbo V8 Wagon', img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80' },
  { id: 45, brand: 'Audi', model: 'Audi RS e-tron GT Carbon', price: 155000, body: 'Elektromobil', hp: 646, accel: '3.1 s', speed: '250 km/h', engine: 'Dual EV Motors 800V', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80' },
  { id: 46, brand: 'Audi', model: 'Audi R8 V10 GT Final Ed.', price: 250000, body: 'Superkar', hp: 620, accel: '3.4 s', speed: '320 km/h', engine: '5.2L Naturally Aspirated V10', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80' },
  { id: 47, brand: 'Audi', model: 'Audi RS Q8 Performance', price: 135000, body: 'SUV', hp: 600, accel: '3.8 s', speed: '305 km/h', engine: '4.0L Bi-Turbo V8', img: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80' },
  { id: 48, brand: 'Audi', model: 'Audi RS5 Sportback Carbon', price: 82000, body: 'Sedan', hp: 450, accel: '3.8 s', speed: '290 km/h', engine: '2.9L Twin-Turbo V6', img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80' },

  // --- Rolls-Royce (4 ta) ---
  { id: 49, brand: 'Rolls-Royce', model: 'Rolls-Royce Phantom VIII Series II', price: 540000, body: 'Sedan', hp: 571, accel: '5.3 s', speed: '250 km/h', engine: '6.75L Twin-Turbo V12', img: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=800&q=80' },
  { id: 50, brand: 'Rolls-Royce', model: 'Rolls-Royce Cullinan Black Badge', price: 460000, body: 'SUV', hp: 600, accel: '4.9 s', speed: '250 km/h', engine: '6.75L Twin-Turbo V12', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },
  { id: 51, brand: 'Rolls-Royce', model: 'Rolls-Royce Spectre Ultra EV', price: 420000, body: 'Elektromobil', hp: 585, accel: '4.5 s', speed: '250 km/h', engine: 'Dual Electric Luxury EV', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80' },
  { id: 52, brand: 'Rolls-Royce', model: 'Rolls-Royce Ghost Extended V12', price: 395000, body: 'Sedan', hp: 571, accel: '4.8 s', speed: '250 km/h', engine: '6.75L Twin-Turbo V12', img: 'https://images.unsplash.com/photo-1622353219448-46a2a0937b83?auto=format&fit=crop&w=800&q=80' },

  // --- Bentley (3 ta) ---
  { id: 53, brand: 'Bentley', model: 'Bentley Continental GT Mulliner W12', price: 330000, body: 'Superkar', hp: 659, accel: '3.6 s', speed: '335 km/h', engine: '6.0L Twin-Turbo W12', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80' },
  { id: 54, brand: 'Bentley', model: 'Bentley Flying Spur Speed W12', price: 295000, body: 'Sedan', hp: 635, accel: '3.8 s', speed: '333 km/h', engine: '6.0L Twin-Turbo W12', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
  { id: 55, brand: 'Bentley', model: 'Bentley Bentayga Speed W12', price: 265000, body: 'SUV', hp: 635, accel: '3.9 s', speed: '306 km/h', engine: '6.0L Twin-Turbo W12', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' },

  // --- Tesla (3 ta) ---
  { id: 56, brand: 'Tesla', model: 'Tesla Model S Plaid (1020HP)', price: 90000, body: 'Elektromobil', hp: 1020, accel: '2.1 s', speed: '322 km/h', engine: 'Tri-Motor AWD Carbon Sleeved', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80' },
  { id: 57, brand: 'Tesla', model: 'Tesla Cybertruck Cyberbeast', price: 102000, body: 'Elektromobil', hp: 845, accel: '2.6 s', speed: '209 km/h', engine: 'Tri-Motor Stainless Steel AWD', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
  { id: 58, brand: 'Tesla', model: 'Tesla Model X Plaid Tri-Motor', price: 95000, body: 'Elektromobil', hp: 1020, accel: '2.6 s', speed: '262 km/h', engine: 'Tri-Motor Falcon Wings', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' },

  // --- McLaren (2 ta) ---
  { id: 59, brand: 'McLaren', model: 'McLaren 750S Spider V8', price: 345000, body: 'Superkar', hp: 750, accel: '2.8 s', speed: '332 km/h', engine: '4.0L Twin-Turbo V8 Carbon', img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80' },
  { id: 60, brand: 'McLaren', model: 'McLaren Artura Hybrid Supercar', price: 238000, body: 'Superkar', hp: 680, accel: '3.0 s', speed: '330 km/h', engine: '3.0L Twin-Turbo V6 Hybrid', img: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80' },

  // --- Aston Martin (2 ta) ---
  { id: 61, brand: 'Aston Martin', model: 'Aston Martin DBS 770 Ultimate', price: 388000, body: 'Superkar', hp: 770, accel: '3.4 s', speed: '340 km/h', engine: '5.2L Twin-Turbo V12', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80' },
  { id: 62, brand: 'Aston Martin', model: 'Aston Martin DBX707 V8', price: 245000, body: 'SUV', hp: 707, accel: '3.3 s', speed: '310 km/h', engine: '4.0L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80' },

  // --- Land Rover (2 ta) ---
  { id: 63, brand: 'Land Rover', model: 'Range Rover SV Long Wheelbase', price: 235000, body: 'SUV', hp: 615, accel: '4.6 s', speed: '260 km/h', engine: '4.4L Twin-Turbo V8', img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80' },
  { id: 64, brand: 'Land Rover', model: 'Defender 110 V8 Carpathian', price: 118000, body: 'SUV', hp: 525, accel: '5.2 s', speed: '240 km/h', engine: '5.0L Supercharged V8', img: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=800&q=80' },

  // --- Lexus (2 ta) ---
  { id: 65, brand: 'Lexus', model: 'Lexus LFA Nürburgring V10', price: 850000, body: 'Superkar', hp: 570, accel: '3.7 s', speed: '325 km/h', engine: '4.8L Even-Firing 9,000 RPM V10', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { id: 66, brand: 'Lexus', model: 'Lexus LX 600 VIP 4-Seater', price: 135000, body: 'SUV', hp: 415, accel: '6.9 s', speed: '210 km/h', engine: '3.5L Twin-Turbo V6', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' }
];

// Brend ma'lumotlari (Kelib chiqishi, shior va logotipi)
const BRAND_META = {
  'BMW': { origin: 'Germaniya', slogan: 'Sheer Driving Pleasure (M Power)', icon: 'fa-solid fa-bolt' },
  'Mercedes-Benz': { origin: 'Germaniya', slogan: 'The Best or Nothing (AMG & Maybach)', icon: 'fa-solid fa-star' },
  'Porsche': { origin: 'Germaniya', slogan: 'There is No Substitute', icon: 'fa-solid fa-shield-halved' },
  'Ferrari': { origin: 'Italiya', slogan: 'Essenza Ferrari (Maranello)', icon: 'fa-solid fa-horse-head' },
  'Lamborghini': { origin: 'Italiya', slogan: 'Expect the Unexpected (Sant’Agata)', icon: 'fa-solid fa-bullhorn' },
  'Audi': { origin: 'Germaniya', slogan: 'Vorsprung durch Technik (RS Series)', icon: 'fa-solid fa-ring' },
  'Rolls-Royce': { origin: 'Buyuk Britaniya', slogan: 'Strive for Perfection (Goodwood)', icon: 'fa-solid fa-crown' },
  'Bentley': { origin: 'Buyuk Britaniya', slogan: 'Extraordinary Journeys (Crewe)', icon: 'fa-solid fa-gem' },
  'Tesla': { origin: 'AQSh', slogan: 'Accelerating Sustainable Energy (Plaid)', icon: 'fa-solid fa-bolt-lightning' },
  'McLaren': { origin: 'Buyuk Britaniya', slogan: 'Fearlessly Forward (Woking F1)', icon: 'fa-solid fa-flag-checkered' },
  'Aston Martin': { origin: 'Buyuk Britaniya', slogan: 'Power, Beauty and Soul (Gaydon)', icon: 'fa-solid fa-feather-pointed' },
  'Land Rover': { origin: 'Buyuk Britaniya', slogan: 'Above and Beyond (Special Vehicles)', icon: 'fa-solid fa-mountain' },
  'Lexus': { origin: 'Yaponiya', slogan: 'Experience Amazing (F-Sport & LFA)', icon: 'fa-solid fa-certificate' }
};

// ==========================================================
// 2. DASTUR HOLATI VA GLOBAL O'ZGARUVCHILAR
// ==========================================================
let favorites = JSON.parse(localStorage.getItem('autoelite_favs') || '[]');

// ==========================================================
// 3. SAYTNI GENERATSIYA QILISH VA CHIQARISH
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderBrandQuickNav();
  renderShowrooms();
  setupEventListeners();
  calculateLoan();
  updateFavBadge();
});

// Tezkor navigatsiya tugmalarini yaratish
function renderBrandQuickNav() {
  const container = document.getElementById('brand-quick-nav');
  const brands = Object.keys(BRAND_META);

  let html = `
    <button onclick="filterByBrandQuick('all')" class="brand-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-amber-400 text-black shadow-md transition">
      Barcha Brendlar (13 ta)
    </button>
  `;

  brands.forEach(b => {
    const count = CARS_DATA.filter(c => c.brand === b).length;
    html += `
      <a href="#brand-section-${b.replace(/\s+/g, '-').toLowerCase()}" class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 text-slate-300 transition flex items-center gap-2">
        <i class="${BRAND_META[b].icon} text-amber-400"></i> ${b} (${count})
      </a>
    `;
  });

  container.innerHTML = html;
}

// Barcha mashinalarni brend bo'yicha vitrinalarga bo'lib chiqarish
function renderShowrooms() {
  const container = document.getElementById('company-showrooms-container');
  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  const bodyFilter = document.getElementById('body-filter').value;
  const sortSelect = document.getElementById('sort-select').value;
  const maxPrice = Number(document.getElementById('price-slider').value);

  // Filtrlash
  let filtered = CARS_DATA.filter(car => {
    const matchSearch = car.model.toLowerCase().includes(searchQuery) || car.brand.toLowerCase().includes(searchQuery);
    const matchBody = bodyFilter === 'all' || car.body === bodyFilter;
    const matchPrice = car.price <= maxPrice;
    return matchSearch && matchBody && matchPrice;
  });

  // Saralash
  if (sortSelect === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortSelect === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortSelect === 'hp-desc') filtered.sort((a, b) => b.hp - a.hp);
  if (sortSelect === 'accel-asc') filtered.sort((a, b) => parseFloat(a.accel) - parseFloat(b.accel));

  document.getElementById('car-counter').textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
        <i class="fa-solid fa-car-side text-5xl text-slate-600 mb-4"></i>
        <h3 class="text-xl font-bold text-white">Hech qanday model topilmadi</h3>
        <p class="text-slate-400 text-sm mt-1">Qidiruv yoki filtr parametrlarini o'zgartirib ko'ring.</p>
      </div>
    `;
    return;
  }

  // Brendlar bo'yicha guruhlash
  const grouped = {};
  filtered.forEach(car => {
    if (!grouped[car.brand]) grouped[car.brand] = [];
    grouped[car.brand].push(car);
  });

  let html = '';
  for (const [brand, cars] of Object.entries(grouped)) {
    const meta = BRAND_META[brand] || { origin: 'Global', slogan: 'Luxury Performance', icon: 'fa-solid fa-car' };
    const sectionId = `brand-section-${brand.replace(/\s+/g, '-').toLowerCase()}`;

    html += `
      <div id="${sectionId}" class="scroll-mt-36">
        <!-- Brend Sarlavhasi -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl shadow-lg">
              <i class="${meta.icon}"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-2xl font-bold font-display text-white">${brand}</h3>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">${meta.origin}</span>
              </div>
              <p class="text-xs text-amber-400/90 font-medium">${meta.slogan}</p>
            </div>
          </div>
          <span class="text-xs text-slate-400 font-semibold bg-white/5 px-3 py-1 rounded-lg self-start sm:self-auto">
            ${cars.length} ta mavjud model
          </span>
        </div>

        <!-- Brend Mashinalari Kartochkalari -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cars.map(car => createCarCard(car)).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Bitta mashina kartochkasi HTML kodi
function createCarCard(car) {
  const isFav = favorites.includes(car.id);
  const formattedPrice = '$' + car.price.toLocaleString();

  return `
    <div class="glass-card rounded-2xl border border-brand-border overflow-hidden car-card-hover flex flex-col justify-between">
      <div class="relative">
        <img src="${car.img}" alt="${car.model}" class="w-full h-52 object-cover" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'">
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-400 text-[11px] font-bold tracking-wide uppercase border border-amber-500/20">
          ${car.body}
        </span>
        <button onclick="toggleFavorite(${car.id})" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-sm transition ${isFav ? 'text-red-500' : 'text-white hover:text-red-400'}">
          <i class="${isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
        </button>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">${car.brand}</span>
          <h4 class="text-lg font-bold text-white line-clamp-1 mt-0.5">${car.model}</h4>

          <div class="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div>
              <span class="text-[10px] text-slate-400 block">0-100</span>
              <span class="text-xs font-bold text-amber-400">${car.accel}</span>
            </div>
            <div>
              <span class="text-[10px] text-slate-400 block">Quvvat</span>
              <span class="text-xs font-bold text-white">${car.hp} HP</span>
            </div>
            <div>
              <span class="text-[10px] text-slate-400 block">Maks. Tezlik</span>
              <span class="text-xs font-bold text-white">${car.speed}</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-slate-400 block">Narxi</span>
            <span class="text-lg font-bold font-display text-amber-400">${formattedPrice}</span>
          </div>
          <button onclick="openCarModal(${car.id})" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white text-xs font-bold transition">
            Tafsilotlar
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================
// 4. HODISALAR (EVENT LISTENERS)
// ==========================================================
function setupEventListeners() {
  document.getElementById('search-input').addEventListener('input', renderShowrooms);
  document.getElementById('body-filter').addEventListener('change', renderShowrooms);
  document.getElementById('sort-select').addEventListener('change', renderShowrooms);

  const priceSlider = document.getElementById('price-slider');
  priceSlider.addEventListener('input', (e) => {
    document.getElementById('price-val').textContent = '$' + Number(e.target.value).toLocaleString();
    renderShowrooms();
  });

  // Kredit kalkulyatori tinglovchilari
  document.getElementById('calc-price').addEventListener('input', calculateLoan);
  document.getElementById('calc-down').addEventListener('change', calculateLoan);
  document.getElementById('calc-term').addEventListener('change', calculateLoan);
  const rateSlider = document.getElementById('calc-rate-slider');
  rateSlider.addEventListener('input', (e) => {
    document.getElementById('calc-rate-label').textContent = `${e.target.value}% yillik`;
    calculateLoan();
  });

  // Modallar yopilishi
  document.getElementById('close-modal-btn').addEventListener('click', closeCarModal);
  document.getElementById('close-fav-btn').addEventListener('click', () => {
    document.getElementById('favorites-modal').classList.remove('modal-active');
  });

  document.getElementById('open-favorites-btn').addEventListener('click', openFavoritesModal);

  // Test drayv ariza topshirish
  document.getElementById('test-drive-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = document.getElementById('td-success');
    successMsg.classList.remove('hidden');
    e.target.reset();
    document.getElementById('td-date').min = new Date().toISOString().split('T')[0];
    setTimeout(() => successMsg.classList.add('hidden'), 6000);
  });

  // Mobil menyu ochish/yopish
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-xmark');
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
    });
  });

  // Bo'sh sana tanlashni oldini olish (bugungi kundan boshlab)
  document.getElementById('td-date').min = new Date().toISOString().split('T')[0];

  // Modallarni fon bosilganda yoki Esc tugmasi bilan yopish
  ['car-detail-modal', 'favorites-modal'].forEach(id => {
    const modal = document.getElementById(id);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('modal-active');
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('car-detail-modal').classList.remove('modal-active');
      document.getElementById('favorites-modal').classList.remove('modal-active');
    }
  });
}

// "Barcha brendlar" tezkor tugmasi — filtrlarni tozalab katalogga qaytaradi
function filterByBrandQuick(brand) {
  if (brand === 'all') {
    document.getElementById('search-input').value = '';
    document.getElementById('body-filter').value = 'all';
    document.getElementById('sort-select').value = 'default';
    const priceSlider = document.getElementById('price-slider');
    priceSlider.value = priceSlider.max;
    document.getElementById('price-val').textContent = '$' + Number(priceSlider.max).toLocaleString();
    renderShowrooms();
    document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================================
// 5. MODALLAR VA SEVIMLILAR TIZIMI
// ==========================================================
function openCarModal(id) {
  const car = CARS_DATA.find(c => c.id === id);
  if (!car) return;

  document.getElementById('modal-company').textContent = car.brand;
  document.getElementById('modal-title').textContent = car.model;
  document.getElementById('modal-img').src = car.img;
  document.getElementById('modal-accel').textContent = car.accel;
  document.getElementById('modal-hp').textContent = `${car.hp} Ot kuchi`;
  document.getElementById('modal-speed').textContent = car.speed;
  document.getElementById('modal-engine').textContent = car.engine;
  document.getElementById('modal-price').textContent = '$' + car.price.toLocaleString();

  const bookBtn = document.getElementById('modal-book-btn');
  bookBtn.onclick = () => {
    closeCarModal();
    document.getElementById('td-car-name').value = car.model;
    document.getElementById('testdrayv').scrollIntoView({ behavior: 'smooth' });
  };

  document.getElementById('car-detail-modal').classList.add('modal-active');
}

function closeCarModal() {
  document.getElementById('car-detail-modal').classList.remove('modal-active');
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('autoelite_favs', JSON.stringify(favorites));
  updateFavBadge();
  renderShowrooms();
}

function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  badge.textContent = favorites.length;
  badge.classList.toggle('hidden', favorites.length === 0);
}

function openFavoritesModal() {
  const container = document.getElementById('fav-list-container');
  const favCars = CARS_DATA.filter(c => favorites.includes(c.id));

  if (favCars.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-400 text-center py-6">Saqlangan mashinalar mavjud emas.</p>`;
  } else {
    container.innerHTML = favCars.map(car => `
      <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
        <div class="flex items-center gap-3">
          <img src="${car.img}" class="w-14 h-10 object-cover rounded-lg">
          <div>
            <h5 class="text-sm font-bold text-white">${car.model}</h5>
            <span class="text-xs text-amber-400 font-bold">$${car.price.toLocaleString()}</span>
          </div>
        </div>
        <button onclick="toggleFavorite(${car.id}); openFavoritesModal();" class="text-red-400 hover:text-red-300 text-sm p-2">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }

  document.getElementById('favorites-modal').classList.add('modal-active');
}

// ==========================================================
// 6. LIZING HISOBI (MOLIYAVIY KALKULYATOR)
// ==========================================================
function calculateLoan() {
  const price = parseFloat(document.getElementById('calc-price').value) || 0;
  const downPct = parseFloat(document.getElementById('calc-down').value) / 100;
  const termMonths = parseInt(document.getElementById('calc-term').value);
  const annualRate = parseFloat(document.getElementById('calc-rate-slider').value) / 100;

  const downPayment = price * downPct;
  const loanAmount = price - downPayment;
  const monthlyRate = annualRate / 12;

  let monthlyPayment = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  document.getElementById('calc-monthly-result').textContent = '$' + Math.round(monthlyPayment).toLocaleString();
  document.getElementById('calc-down-sum').textContent = '$' + Math.round(downPayment).toLocaleString();
  document.getElementById('calc-loan-sum').textContent = '$' + Math.round(loanAmount).toLocaleString();
}