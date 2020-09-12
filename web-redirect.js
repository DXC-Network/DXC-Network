const http = require('http'); require('dotenv').config(); /// nodejs http and env required to make this work

const dxcBotWorks = "http://www.dxcellon.com/bots"; const dxcDefaultPort = 3920; /// Defaults for [MainBotHEC] and [PersonalBotDXC]

/// [Old Misc Bots (Bot Group 19)]
const oldSiteDXChiam  = "https://old.dxchiam.com/";  const oldPort19X = 7243; /// [MiscBot19X]
const oldSiteDXCellon = "https://old.dxcellon.com/"; const oldPort19Y = 7544; /// [MiscBot19Y]
const oldSiteDXCC     = "https://old.dxcc.sg/";      const oldPort19Z = 7745; /// [MiscBot19Z]

/// [New Misc Bots (Bot Group 20)]
const newSiteDXChiam  = "http://www.dxchiam.com/";  const newPort20A = 7221; /// [MiscBot20A]
const newSiteDXCellon = "http://www.dxcellon.com/"; const newPort20B = 7522; /// [MiscBot20B]
const newSiteDXCC     = "http://www.dxcc.sg/";      const newPort20C = 7723; /// [MiscBot20C]

const hostname = (process.env.WEB_HOST || "127.0.0.1"); const port = (process.env.WEB_PORT || dxcDefaultPort);

const server = http.createServer((req, res, next) => {
  res.writeHead(301, {'Location' : `${dxcBotWorks}`});
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
