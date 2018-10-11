// ==UserScript==
// @name     Redirect_Saml
// @author        GSHR
// @exclude        https://*.netsuite.com*
// @exclude        https://fs.civicplus.com*
// @exclude        https://*.ultipro.com*
// @match      *://*/*
// @version        2018.08.20
// @description        Redirect SAML Sites to Internal Login Page
// @run-at      document-end
// ==/UserScript==
window.onload = function Redirect() {
  var currenturl = window.location.href //define current URL
  if(currenturl.indexOf("/adfs") > -1) {
    var newurl = "//" + new URL(document.referrer).hostname + '/admin?saml=off'; //set destination URL
    if(confirm("|E.1|   SAML Site Detected. Would you like to redirect to an internal login page?")) {
    window.location = newurl;
}
  }
} //redirect URL if the currently existing url contains "adfs" in its pathname