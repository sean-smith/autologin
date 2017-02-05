
var IE4 = document.all;
var NS4 = document.layers;
function enter_key_trap (e) {
  var keyPressed;
  if (NS4)
    keyPressed = String.fromCharCode(e.which);
  else if (IE4)
    keyPressed = String.fromCharCode(window.event.keyCode);

  if (keyPressed == "\r" || keyPressed == "\n") {
    document.theform.submit();
  }
}

function css_select(server,wantsMobile) {
  var style;
  var ref;

  if (wantsMobile == "true") {
    style="style-mobile.css";
  } else {
    style="style.css";
  }
    ref="href=\""+ server + '/lib/css/' + style;
    document.write("<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" "+ ref+"\" />");
}

function first_focus () {
  var bFound = false;
 
  // for each form

  for (f=0; f < document.forms.length; f++) {
    // for each element in each form
    for (i=0; i < document.forms[f].length; i++) {
      if (document.forms[f][i].type != "hidden") {
        if (document.forms[f][i].disabled != true) {
          document.forms[f][i].focus();
          var bFound = true;
        }
      }
      if (bFound == true)
        break;
    }
    if (bFound == true) 
      break;
  }
}

function init_page (pwvar,user) {
  pwvar.value="";
  if (arguments.length == 2) {
    user.focus();
  } 
}

// Setup the enter keytrap code
if (window.document.captureEvents != null) {
window.document.captureEvents(Event.KEYPRESS);
window.document.onkeypress = enter_key_trap;
}

function start () {
  init_page();
  load_page_images();
}

//
// Allow only one press of the submit button
//
var allowSubmit = 1
var canCopyData = 0
var copiedData  = 0

// 
// before submiting move the password into the hidden variable 
// and clear the public field (src:BUweblogin)
//
function doSubmit (pwin,pwvar) {
   if (allowSubmit > 0) {
    copyData(pwin,pwvar)
    allowSubmit = 0
    return(true);
  } else {
    return(false);
  }
}


function doCancel () {
   document.theform.act.value = "cancel";
}

//
//
function copyData (pwin,pwvar) {
   if (canCopyData > 0) { 
      if (copiedData > 0) {
         alert("Password already used");
	 1;
      } else {
         alert("Password being used");
         pwvar.value = pwin.value;
         pwin.value.replace(/.+/g, "*");
         copiedData = 1
      }
   } else {
      // test to see if the password field has some text filled in
      // before deciding to issue the "ignore saved pw" error.
      if (pwin.value.length > 0) {
         document.theform.jserror.value = "<ignoresavedpw>";
         alert("Password is NOT being used");
      }
   }
}


function focused (pwin) {
   //alert("onFocus");
   canCopyData = 1;
   pwin.value = "";
   return(true);
}

function pwChanged (pwin,pwvar) {
   copiedData = 0;
   copyData(pwin,pwvar);
   alert("pwChanged");
}

function doCancel () {
   document.theform.act.value = "cancel";
}

function setVisible(obj)
{
  var item = document.getElementById(obj);
  item.style.visibility = 'visible';
}
