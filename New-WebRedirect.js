/// New-WebRedirect.js calls for WebRedirect.json

/// nodejs http and env required to make this work (will involve ENVs WEB_HOST and WEB_SELECT)
const http = require('http'); require('dotenv').config();

/// summons the list and set up the default site to redirect and port to use locally
const List = require('./WebRedirect.json'); const defaultSite = "https://www.google.com.sg"; const defaultPort = 3920;



module.exports={
  WebRedirect(){
    /// The selection. Must match with any of the 8 ( HEC | 19{X/Y/Z} | 20{A/B/C} | DXC ) or the default be used
    selectedSite = defaultSite; selectedPort = defaultPort; selector = (process.env.WEB_SELECT || "");
    for (var Sel of List){
      if (Sel.Bot==selector){
        selectedSite = Sel.Site;
        selectedPort = Sel.Port;
      }
    }

    /// The redirection.
    const HOSTNAME = (process.env.WEB_HOST || selectedSite); const LOCALPORT = (process.env.PORT || selectedPort);
    const SERVER = http.createServer((reg,res) => { res.writeHead(302, {'Location' : `${HOSTNAME}`}); res.end(); }); /// The Redirect
    SERVER.listen(LOCALPORT, () => {
      console.log(`[LOG] Running on Local Port [${LOCALPORT}]`);
      console.log(`[LOG] Redirecting to Website [${HOSTNAME}]\n`);
    }); /// The Log
  }
}
