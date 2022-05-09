var autoclicker = setInterval(function(){ try { document.getElementById('bigCookie').click(); } catch (err) { clearInterval(); } }, 1);
