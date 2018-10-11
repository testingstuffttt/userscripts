// ==UserScript==
// @name     ember-view sender
// @author        GSHR
// @match      *://*/*
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @version        1.0
// @description        Copy Sender Name to Clipboard
// @run-at      document-start
// ==/UserScript==
var $ = window.jQuery;
//alert($.fn.jquery)
//ember-view tab web selected
window.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.keyCode == 106) {
            console.log("Attempting to Copy Name")
            //Copy Name
            var firstName;
            $("#main_panes div.workspace").not(".apps").each(function() {
                if ($(this).is(":visible")) {
                    firstName = $(this).find(".ember-view.sender").text().split(" ")[0];
                    var inputField = document.createElement("input");
                    inputField.setAttribute("value", firstName);
                    document.body.appendChild(inputField);
                    inputField.select();
                    document.execCommand('copy');
                    inputField.remove();
                    console.log("Attempting to Update Div")
                    //Updating Editor
                    var textElement = $(this).find(".zendesk-editor--rich-text-comment p:first-of-type")[0]
                    console.log(textElement)
                    var pText = textElement.innerText
//////////////////////CHANGE THE FIELD BELOW BASED ON YOUR PREFERENCE
                    var rcText = "Hello " + firstName + ", :D"
                    console.log(rcText)
                    textElement.innerHTML = rcText
                    console.log("Update Complete")
                    console.log(firstName)
                }});
        }
        }
                       )