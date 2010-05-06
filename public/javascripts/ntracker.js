<script type="text/javascript" language="javascript">
//<![CDATA[

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

 function add_img(activity_str){
   var img = document.createElement("img");
   if(navigator.userAgent.indexOf("MSIE") != -1)
   {
     img.style.setAttribute("display", "none");
   }
   else
   {
     img.style.display = "none";
   }
   
   strRef = document.location;
   strRef = encodeURIComponent(strRef);
   str = document.cookie;
   str = str.replace('; remember=','');
   arr = str.split(';');
   for(var j=0; j < arr.length; j++){
     var new_str = arr[j].replace(/^ +/,'');

     if(new_str.split('=')[0] == '_w')
     {
       src = "http://ntracker.nurturehq.com/activities/" + activity_str + "?l=" + strRef + "&" + new_str;
       img.src = src;
       document.body.appendChild(img);
     }
   }
 }

 function post_action(e){
   var form_action = e.srcElement ? e.srcElement.action : e.target.action;

   add_img('form_response');
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
     // document.location = document.location.toString().replace(/(\?|&)(_w=[^&]+&?)(.*)/,'$1$3').replace(/(\?|&)$/,'');

     var argname = pairs[i].substring(0,pos);
     var value   = pairs[i].substring(pos+1);

     value = decodeURIComponent(value);
     args[argname] = value;
   }
   return args;
 }

 getArgs();

 add_img('track_url');

//]]>
</script>
