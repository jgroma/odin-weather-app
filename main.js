(()=>{"use strict";console.log("Test"),function(){let o=fetch("http://api.weatherapi.com/v1/current.json?key=90d680eb454742b8a73160825232309&q=London",{mode:"cors"}).then((function(o){console.log(o.json())})).catch((function(o){console.log("Something went wrong.")}));console.log(o)}(),console.log("This is data file")})();