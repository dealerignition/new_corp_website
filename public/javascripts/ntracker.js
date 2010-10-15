<script type="text/javascript" language="javascript" onload='window.setInterval("timeHere()", 100)' onunload="sayTime()" >
  //<![CDATA[

  var uniq_key = randomUniqueId(50);

  if(navigator.userAgent.indexOf("MSIE")==-1)
    window.addEventListener("load",add_listener,false);
  else
    window.attachEvent("onload", add_listener);

  function add_listener(){
    if(navigator.userAgent.indexOf("MSIE") == -1)
      window.addEventListener("submit",post_action,false);
    else{
      for(var i = 0; i < document.forms.length; i++){
        document.forms[i].attachEvent("onsubmit", post_action);
      }
    }
  }

  function add_img(activity_str,form_name){
    var img = document.createElement("img");
    if(navigator.userAgent.indexOf("MSIE") != -1)
    {
      img.style.setAttribute("display", "none");
    }
    else
    {
      img.style.display = "none";
    }

    referer = document.referrer;
    strRef = document.location;
    strRef = encodeURIComponent(strRef);
    str = document.cookie;
    str = str.replace('; remember=','');
    arr = str.split(';');
    record = true;

    for(var j=0; j < arr.length; j++){
      var new_str = arr[j].replace(/^ +/,'');
      if(new_str.split('=')[0] == '_w')
      {
        if (activity_str =='track_url')
          src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?l=" + strRef + "&" + new_str + "&ac=MDAwMDAwMDAwMDI4"+"&uniq_key="+uniq_key+"&ref="+referer;
        else
          src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?l=" + strRef + "&" + new_str + "&ac=MDAwMDAwMDAwMDI4"+"&ref="+referer+"&form_name="+form_name;
      }else{
        if (record){
          if (activity_str == 'track_url')
            src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?l=" + strRef + "&" + new_str + "&ac=MDAwMDAwMDAwMDI4"+"&uniq_key="+uniq_key+"&ref="+referer;
          else
            src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?l=" + strRef + "&" + new_str + "&ac=MDAwMDAwMDAwMDI4"+"&ref="+referer+"&form_name="+form_name;
        }
        record = false
      }
      img.src = src;
      document.body.appendChild(img);
    }
  }

  function post_action(e){
    var form_action = e.srcElement ? e.srcElement.action : e.target.action;
    var form_name = e.srcElement ? e.srcElement.name : e.target.name;
    if (form_name=="")
      var form_name = e.srcElement ? e.srcElement.id : e.target.id;

    add_img('form_response',form_name);
  }



  function getArgs(){
    var args  = new Object();
    var query = location.search.substring(1);
    var pairs = query.split('&');

    for(var i = 0; i < pairs.length; i++){
      var pos = pairs[i].indexOf('=');
      if(pos == -1) continue;
      kookie = pairs[i]+'; expires=Mon, 31 Dec 2012 23:59:59 UTC';
      document.cookie   = kookie;
      var argname = pairs[i].substring(0,pos);
      var value   = pairs[i].substring(pos+1);

      value = decodeURIComponent(value);
      args[argname] = value;
    }
    return args;
  }

  getArgs();

  add_img('track_url','');


  // Browsing time on the page.
  var time=1;
  function timeHere() {
    time = time + 1;
    finalTime = time / 10;
  }

  window.onbeforeunload = function(){
    var img = document.createElement("img");
    if(navigator.userAgent.indexOf("MSIE") != -1)
    {
      img.style.setAttribute("display", "none");
    }
    else
    {
      img.style.display = "none";
    }

    finalTime = time / 10;
    activity_str = 'update_activity'

    src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?uniq_key="+uniq_key + "&time_spent=" + finalTime;
    img.src = src;
    window.document.body.appendChild(img);

    pausecomp(1000);
  }

  window.setInterval("timeHere()", 100);

  function pausecomp(millis)
  {
    var date = new Date();
    var curDate = null;

    do { curDate = new Date(); }
    while(curDate-date < millis);
  }

  function randomUniqueId(length){
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var unique_id = "";
    for(var x=0;x < length;x++){
      i = Math.floor(Math.random() * 62);
      unique_id += chars.charAt(i);
    }
    var date = new Date();
    unique_id = date.getTime()+unique_id;
    return encrypt(unique_id,"password");
  }

  function encrypt(str, pwd) {
    var prand = "";
    for(var i=0; i < pwd.length; i++) {
      prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos*2) + prand.charAt(sPos*3) + prand.charAt(sPos*4) + prand.charAt(sPos*5));
    var incr = Math.ceil(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;

    var salt = Math.round(Math.random() * 1000000000) % 100000000;
    prand += salt;
    while(prand.length > 10) {
      prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for(var i=0; i < str.length; i++) {
      enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
      if(enc_chr < 16) {
        enc_str += "0" + enc_chr.toString(16);
      } else enc_str += enc_chr.toString(16);
      prand = (mult * prand + incr) % modu;
    }
    salt = salt.toString(16);
    while(salt.length < 8)salt = "0" + salt;
    enc_str += salt;
    return enc_str;
  }

  function prefill_data(){
      var nm = getURLParam("full_name").split('@');
      document.getElementById('first_name').value = nm[0];
      document.getElementById('last_name').value = nm[1];
      document.getElementById('company').value = getURLParam("company_name").gsub('@',' ');
      document.getElementById('title').value = getURLParam("title").gsub('@',' ');
      document.getElementById('email').value = getURLParam("email_add");
      document.getElementById('phone').value = getURLParam("phone_number").gsub('@',' ');
  }

  function getURLParam(strParamName){
    var strReturn = "";
    var strHref = window.location.href;
    if ( strHref.indexOf("?") > -1 ){
      var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
      var aQueryString = strQueryString.split("&");
      for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
        if (
        aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 ){
          var aParam = aQueryString[iParam].split("=");
          strReturn = aParam[1];
          break;
        }
      }
    }
    return unescape(strReturn);
  }

  prefill_data();
  //]]>
</script>