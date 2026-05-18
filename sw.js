self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // వెబ్‌సైట్ ఆఫ్‌లైన్ లో ఉన్నా పనిచేయడానికి ఇది భవిష్యత్తులో వాడుకోవచ్చు
});
