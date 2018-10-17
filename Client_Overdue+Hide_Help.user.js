// ==UserScript==
// @name     Client_Overdue+Hide_Help
// @author        GSHR
// @match      *://*/*
// @version        1.3.6
// @downloadURL      https://github.com/Eskimonian/userscripts/raw/master/Client_Overdue+Hide_Help.user.js
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @description        Alerts User if they access a Client Site that is past overdue on payments + Hides Help Icon
// @run-at      document-end
// ==/UserScript==
var $ = window.jQuery;

//Overdue clients Array

var overdueClients = [
    "www.anaheim.net",
    "www.uniontownship.com",
    "www.cityofwesthaven.com",
    "www.placer.ca.gov",
    "www.yatescounty.org",
    "www.idahofallsidaho.gov",
    "www.nassaucountyny.gov",
    "www.townofmarlboroughny.org",
    "www.cityofbelmont.org",
    "www.riverbaycorp.com",
    "ga-mountvernon.civicplus.com",
    "capemaycountynj.gov",
    "www.romeoville.org",
    "cityofbethany.org",
    "www.villageofriverdale.net",
    "www.cityofazle.org",
    "www.twp.howell.nj.us",
    "www.beaumontca.gov",
    "www.chevychasevillagemd.gov",
    "www.elburn.il.us",
    "www.missouricitytx.gov",
    "www.colonialheightsva.gov",
    "www.wallacenc.gov",
    "www.cedarcity.org",
    "www.lowndescounty.com",
    "www.fremont.gov",
    "homecareandhospice.org",
    "www.ci.adelanto.ca.us",
    "www.oconeecounty.com",
    "www.roswellnm.org",
    "va-halifaxcounty.civicready.com",
    "rioc.ny.gov",
    "www.vonormytexas.com",
    "cityofwarrensville.com",
    "www.magistratefulton.org",
    "www.frankfort.ky.gov",
    "hamptoncountysc.org",
    "www.aps1.net",
    "www.university-park-il.com",
    "www.hydeparkny.us",
    "www.lemont.il.us",
    "www.riverdaleculture.com",
    "www.cityofhesperia.us",
    "www.petersburgva.gov",
    "www.njdwsc.com",
    "cityofmathis.com",
    "www.draper.ut.us",
    "www.wrga.gov",
    "www.eastlongmeadowma.gov",
    "wy-tetoncountylibrary.civicplus.com",
    "www.pasadenatx.gov",
    "www.anaheim.net",
    "www.uniontownship.com",
    "ct-westhaven.civicplus.com",
    "ca-placercounty.civicplus.com",
    "www.yatescounty.org",
    "www.idahofallsidaho.gov",
    "ny-nassaucounty2.civicplus.com",
    "www.townofmarlboroughny.org",
    "www.cityofbelmont.org",
    "ny-riverbaycorp.civicplus.com",
    "ga-mountvernon.civicplus.com",
    "capemaycountynj.gov",
    "www.romeoville.org",
    "cityofbethany.org",
    "il-riverdale.civicplus.com",
    "www.cityofazle.org",
    "www.twp.howell.nj.us",
    "ca-beaumont2.civicplus.com",
    "www.chevychasevillagemd.gov",
    "il-elburn2.civicplus.com",
    "tx-missouricity2.civicplus.com",
    "www.colonialheightsva.gov",
    "www.wallacenc.gov",
    "www.cedarcity.org",
    "www.lowndescounty.com",
    "fremont.gov",
    "homecareandhospice.org",
    "www.ci.adelanto.ca.us",
    "www.oconeecounty.com",
    "www.roswellnm.org",
    "va-halifaxcounty-cr.civicplus.com",
    "rioc.ny.gov",
    "tx-vonormycore.civicplus.com",
    "oh-warrensvilleheights.civicplus.com",
    "www.magistratefulton.org",
    "www.frankfort.ky.gov",
    "hamptoncountysc.org",
    "aps1.net",
    "www.university-park-il.com",
    "ny-hydepark.civicplus.com",
    "www.lemont.il.us",
    "www.riverdaleculture.com",
    "www.cityofhesperia.us",
    "www.petersburgva.gov",
    "www.njdwsc.com",
    "tx-mathis.civicplus.com",
    "www.draper.ut.us",
    "www.wrga.gov",
    "www.eastlongmeadowma.gov",
    "wy-tetoncountylibrary.civicplus.com",
    "tx-pasadena.civicplus.com",
    "ca-anaheim.civicplus.com",
    "nj-uniontownship.civicplus.com",
    "ct-westhaven.civicplus.com",
    "ca-placercounty.civicplus.com",
    "ny-yatescounty.civicplus.com",
    "id-idahofalls.civicplus.com",
    "ny-nassaucounty2.civicplus.com",
    "ny-marlborough.civicplus.com",
    "nc-belmont.civicplus.com",
    "ny-riverbaycorp.civicplus.com",
    "ga-mountvernon.civicplus.com",
    "nj-capemaycounty.civicplus.com",
    "il-romeoville.civicplus.com",
    "ok-bethany.civicplus.com",
    "il-riverdale.civicplus.com",
    "tx-azle3.civicplus.com",
    "nj-howelltownship2.civicplus.com",
    "ca-beaumont2.civicplus.com",
    "md-chevychasevillage.civicplus.com",
    "il-elburn2.civicplus.com",
    "tx-missouricity2.civicplus.com",
    "va-colonialheights2.civicplus.com",
    "nc-wallace.civiccities.com",
    "ut-cedarcity3.civicplus.com",
    "ga-lowndescounty.civicplus.com",
    "ca-fremont2.civicplus.com",
    "ks-homecareandhospice2.civicplus.com",
    "ca-adelanto.civicplus.com",
    "ga-oconeecounty.civicplus.com",
    "nm-roswellchamber.civicplus.com",
    "va-halifaxcounty-cr.civicplus.com",
    "ny-rioc.civicplus.com",
    "tx-vonormycore.civicplus.com",
    "oh-warrensvilleheights.civicplus.com",
    "ga-fultoncountymagistratecourt.civicplus.com",
    "ky-frankfort.civicplus.com",
    "sc-hamptoncounty3.civicplus.com",
    "ma-andoverpublicschools2.civicplus.com",
    "il-universitypark.civicplus.com",
    "ny-hydepark.civicplus.com",
    "il-lemont2.civicplus.com",
    "ga-riverdalearts.civicplus.com",
    "ca-hesperia2.civicplus.com",
    "va-petersburg2.civicplus.com",
    "nj-njdwsc.civicplus.com",
    "tx-mathis.civicplus.com",
    "ut-drapercity2.civicplus.com",
    "ga-warnerrobins.civicplus.com",
    "ma-eastlongmeadow2.civicplus.com",
    "wy-tetoncountylibrary.civicplus.com",
    "tx-pasadena.civicplus.com"
]
function checkOverdue() {
    var currentClient = window.location.href.toLowerCase();
    var currentClientIsOverdue = false;
    $.each(overdueClients, function() {
        if (currentClient.indexOf(this) !== -1) {
            currentClientIsOverdue = true;
        }
    });
    if (currentClientIsOverdue) {
        $('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">')
        var addDiv = document.createElement("p");        // Create a <div> element
        addDiv.className = "fa fa-exclamation-triangle";        // Create 'newDiv' ID for <div> element
        addDiv.id = "hideMe";
        addDiv.title = "Client is 60+ Days Overdue";
        addDiv.style.cssText = 'font-size: 200px; color: orange; width: 0; height: 0; position: fixed; bottom: 190px; left: 5px; z-index: 1000000; margin-bottom: 0px !important; background-color: white;';
        document.body.appendChild(addDiv);        // Append <div> to <body>
        document.getElementById('hideMe').onclick = function(){
            alert("Client is 60+ Days Overdue");
            document.getElementById('hideMe').style.display = "none";
        };

    } else {
        console.log(currentClient + " is not overdue.");
    }
}
checkOverdue();

$("<style id='hide-help-button'>.zEWidget-launcher {display: none;}</style>").appendTo("body");
