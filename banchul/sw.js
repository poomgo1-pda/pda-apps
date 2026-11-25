// 설치용 최소 서비스워커 (저장·캐시 안 함, 그대로 통과)
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ });
