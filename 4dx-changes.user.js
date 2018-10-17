// ==UserScript==
// @name     4dx Changes
// @author        GSHR
// @match      *://www.4dxos.com/*
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @downloadURL      https://gist.github.com/TheEskimonian/3e94bb640294816719628c89b519a1ac/raw/4dx-changes.user.js
// @version        2.1
// @description        4dx Updates
// @run-at      document-start
// ==/UserScript==

var $ = window.jQuery;
var saveChanges = {
    set1: function(){
        console.log("saveChanges")
        alert('Changes Saved');
    }
};
$('body').on('click', '.muButton', saveChanges.set1);

/////////////////////////////////////////////////////////////////////////////////

var addPlaceholder = {
    set2: function(){
        console.log("Adding")
        $("textarea.addCommitmentTextarea").attr('placeholder', '\nIs it measurable?\nExpected time/day to complete this?\nDoes it directly impact our leads?');
        $(".addCommitmentDiv").attr('style', 'height: 150px;');
        $(".addCommitmentDiv").attr('title', 'Are you meeting your criteria?');
    }
}
$('body').on('mouseover', '.addCommitmentDiv', addPlaceholder.set2);

/////////////////////////////////////////////////////////////////////////////////

var editPlaceholder = {
    set3: function(){
        console.log("Editing")
        $("textarea.editCommitmentTextarea").attr('placeholder', '\nIs it measurable?\nExpected time/day to complete this?\nDoes it directly impact our leads?');
        $(".commitmentElementEdit").attr('style', 'height: 220px;');
        $(".editCommitmentTextarea").attr('title', 'Are you meeting your criteria?');
        $(this).attr('style', 'height: 150px;');
    }
}
$('body').on('focusin', 'textarea.editCommitmentTextarea', editPlaceholder.set3);

/////////////////////////////////////////////////////////////////////////////////

var editPlaceholderUnfocus = {
    set5: function(){
        console.log("unFocus")
        $(this).removeAttr('style');
        $('.commitmentElementEdit').removeAttr('style');
    }
}
$('body').on('focusout', 'textarea.editCommitmentTextarea', editPlaceholderUnfocus.set5);

/////////////////////////////////////////////////////////////////////////////////
