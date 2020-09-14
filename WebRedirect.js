/// index.js refers to WebRedirect.js to pull off the web redirection

const http = require('http'); require('dotenv').config(); /// nodejs http and env required to make this work (will involve ENVs WEB_HOST and WEB_SELECT)

/// START OF DXC NETWORK BOT DEFAULT DECLARATION
/// [DXC Main Bots] [Hosts undecided] [Ports: 392xx ( HEC: xxx41 / DXC: xxx59 )] - FIXED BY DXC
const siteForBotHEC = "https://support.dxchiam.com/";  const portForBotHEC = 39241; /// [MainBotHEC] Default Port; Site Redirect as of now
const siteForBotDXC = "http://www.dxcellon.com/bots/"; const portForBotDXC = 39259; /// [PersonalBotDXC] Default Port; Site Redirect as of now
/// [Old Misc Bots (Bot Group 19)] [Hosts: "old" hosts] [Ports: 199xx ( H:19X: xxx42 / E:19Y: xxx55 / C:19Z: xxx67 )] - FIXED BY DXC
const oldSiteDXCH = "https://old.dxchiam.com/";  const oldPort19X = 19942; /// [MiscBot19X] Default Site and Port - FIXED VAR DO NOT MODIFY
const oldSiteDXCE = "https://old.dxcellon.com/"; const oldPort19Y = 19955; /// [MiscBot19Y] Default Site and Port - FIXED VAR DO NOT MODIFY
const oldSiteDXCC = "https://old.dxcc.sg/";      const oldPort19Z = 19967; /// [MiscBot19Z] Default Site and Port - FIXED VAR DO NOT MODIFY
/// [New Misc Bots (Bot Group 20)] [Hosts: "www" hosts] [Ports: 207xx ( H:20A: xxx12 / E:20B: xxx25 / C:20C: xxx37 )] - FIXED BY DXC
const newSiteDXCH = "http://www.dxchiam.com/";  const newPort20A = 20712; /// [MiscBot20A] Default Site and Port - FIXED VAR DO NOT MODIFY
const newSiteDXCE = "http://www.dxcellon.com/"; const newPort20B = 20725; /// [MiscBot20B] Default Site and Port - FIXED VAR DO NOT MODIFY
const newSiteDXCC = "http://www.dxcc.sg/";      const newPort20C = 20737; /// [MiscBot20C] Default Site and Port - FIXED VAR DO NOT MODIFY
/// END OF DXC NETWORK BOT DEFAULT DECLARATION

/// START OF DEFAULT REDIRECT DECLARATION
/// Defaults setup for hostname and port for web redirection - FIXED BY DXC
const defaultSite = "https://discord.com/invite/xaE65tz/"; /// Default Host to redirect if env.WEB_HOST and env.WEB_SELECT is undefined - FIXED VAR DO NOT MODIFY
const defaultPort = 3920;                                  /// Default Port to host locally if env.PORT and env.WEB_SELECT is undefined - FIXED VAR DO NOT MODIFY
/// END OF DEFAULT REDIRECT DECLARATION

/// START OF SELECTION
/// Declaration of vars SELECTOR; selectedSite to redirect; selectedPort to host locally; For Logical Use
const SELECTOR = (process.env.WEB_SELECT || ""); /// SELECTOR as env.WEB_SELECT
selectedSite = defaultSite;                      /// defaultSite as selectedSite
selectedPort = defaultPort;                      /// defaultPort as selectedPort
/// Selection Phase: Only if SELECTOR is well defined
if (SELECTOR=="HEC"){      selectedSite = siteForBotHEC; selectedPort = portForBotHEC; }
else if (SELECTOR=="DXC"){ selectedSite = siteForBotDXC; selectedPort = portForBotDXC; }
else if (SELECTOR=="19X"){ selectedSite = oldSiteDXCH;   selectedPort = oldPort19X; }
else if (SELECTOR=="19Y"){ selectedSite = oldSiteDXCE;   selectedPort = oldPort19Y; }
else if (SELECTOR=="19Z"){ selectedSite = oldSiteDXCC;   selectedPort = oldPort19Z; }
else if (SELECTOR=="20A"){ selectedSite = newSiteDXCH;   selectedPort = newPort20A; }
else if (SELECTOR=="20B"){ selectedSite = newSiteDXCE;   selectedPort = newPort20B; }
else if (SELECTOR=="20C"){ selectedSite = newSiteDXCC;   selectedPort = newPort20C; }
/// END OF SELECTION

module.exports={
  WebRedirect(){
    /// START OF REDIRECT
    const HOSTNAME = (process.env.WEB_HOST || selectedSite); const LOCALPORT = (process.env.PORT || selectedPort);
    const SERVER = http.createServer((reg,res) => { res.writeHead(302, {'Location' : `${HOSTNAME}`}); res.end(); }); /// The Redirect
    SERVER.listen(LOCALPORT, () => { console.log(`[LOG] Web Redirection to [${HOSTNAME}] running at [${LOCALPORT}]\n`); }); /// The Log
    /// END OF REDIRECT
  }
}
