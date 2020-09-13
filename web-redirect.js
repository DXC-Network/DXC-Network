const http = require('http'); require('dotenv').config(); /// nodejs http and env required to make this work (will involve ENVs WEB_HOST and WEB_SELECT)

/// [DXC Main Bots] + Defaults setup for hostname and port for web redirection
const defaultSite    = "https://discord.com/invite/xaE65tz/"; /// Discord Server C3 Invite to be used when env.WEB_HOST is undefined
const siteForBotHEC  = "https://support.dxchiam.com/";        /// [MainBotHEC] redirect as of now
const siteForBotDXC  = "http://www.dxcellon.com/bots/";       /// [PersonalBotDXC] redirect as of now
const dxcDefaultPort = 3920;                                  /// Default Ports for [MainBotHEC] and [PersonalBotDXC] - FIXED VAR DO NOT MODIFY

/// [Old Misc Bots (Bot Group 19)] Host: old and Ports: 199xx ( H:19X: xxx42 / E:19Y: xxx55 / C:19Z: xxx67 ) - FIXED BY DXC
const oldSiteDXChiam  = "https://old.dxchiam.com/";  const oldPort19X = 19942; /// [MiscBot19X] Default Site and Port - FIXED VAR DO NOT MODIFY
const oldSiteDXCellon = "https://old.dxcellon.com/"; const oldPort19Y = 19955; /// [MiscBot19Y] Default Site and Port - FIXED VAR DO NOT MODIFY
const oldSiteDXCC     = "https://old.dxcc.sg/";      const oldPort19Z = 19967; /// [MiscBot19Z] Default Site and Port - FIXED VAR DO NOT MODIFY

/// [New Misc Bots (Bot Group 20)] Host: old and Ports: 207xx ( H:20A: xxx12 / E:20B: xxx25 / C:20C: xxx37 ) - FIXED BY DXC
const newSiteDXChiam  = "http://www.dxchiam.com/";  const newPort20A = 20712; /// [MiscBot20A] Default Site and Port - FIXED VAR DO NOT MODIFY
const newSiteDXCellon = "http://www.dxcellon.com/"; const newPort20B = 20725; /// [MiscBot20B] Default Site and Port - FIXED VAR DO NOT MODIFY
const newSiteDXCC     = "http://www.dxcc.sg/";      const newPort20C = 20737; /// [MiscBot20C] Default Site and Port - FIXED VAR DO NOT MODIFY

/// Phase One = Setting Everything to Defaults
hostname       = (process.env.WEB_HOST || defaultSite); /// Default Site to Redirect in General - FIXED VAR DO NOT MODIFY
port           = (process.env.PORT || dxcDefaultPort);  /// Default Port to Host Locally in General - FIXED VAR DO NOT MODIFY

/// Phase Two = If ENV WEB_SELECT Exists
const selector = (process.env.WEB_SELECT || "");

/// For Main Bots
if (selector=="HEC"){      hostname = siteForBotHEC; }
else if (selector=="DXC"){ hostname = siteForBotDXC; }

/// For Misc Bots
else if (selector=="19X"){ hostname = oldSiteDXChiam;  port = (process.env.PORT || oldPort19X); } /// Redirects to old.dxchiam.com
else if (selector=="19Y"){ hostname = oldSiteDXCellon; port = (process.env.PORT || oldPort19Y); } /// Redirects to old.dxcellon.com
else if (selector=="19Z"){ hostname = oldSiteDXCC;     port = (process.env.PORT || oldPort19Z); } /// Redirects to old.dxcc.sg
else if (selector=="20A"){ hostname = newSiteDXChiam;  port = (process.env.PORT || newPort20A); } /// Redirects to www.dxchiam.com
else if (selector=="20B"){ hostname = newSiteDXCellon; port = (process.env.PORT || newPort20B); } /// Redirects to www.dxcellon.com
else if (selector=="20C"){ hostname = newSiteDXCC;     port = (process.env.PORT || newPort20C); } /// Redirects to www.dxcc.sg

/// The Redirect
const server = http.createServer((req, res) => {
  res.writeHead(302, {'Location' : `${hostname}`});
  res.end();
});

/// The Log
server.listen(port, () => {
  console.log(`[LOG] Server running at port [${port}] to redirect to [${hostname}]`);
});
