var autoclicker2 = setInterval(function() { Game.shimmers.forEach(function(shimmer) { if(shimmer.type == "golden" && shimmer.wrath == 0) { shimmer.pop() } }) }, 500);
