var autoclicker = setInterval(function(){ try { document.getElementById('bigCookie').click(); } catch (err) { clearInterval(); } }, 1);
setInterval(function() { Game.shimmers.forEach(function(shimmer) { if(shimmer.type == "golden" && shimmer.wrath == 0) { shimmer.pop() } }) }, 500);
(function () {  Game.LoadMod('https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js');}());
