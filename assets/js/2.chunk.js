webpackJsonp([2],{45:function(e,n){$(document).ready(function(){function e(e){var n=e.querySelector("input[type='email']").value;return!(!n||!n.length)&&-1!=n.indexOf("@")}function n(e){for(var n={},r=e.querySelectorAll("input, select, textarea"),t=0;t<r.length;++t){var s=r[t],i=s.name,u=s.value;i&&(n[i]=u)}return JSON.stringify(n)}function r(e,r){$.ajax({type:"GET",url:e.action,data:n(e),cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",success:function(e){if("success"!=e.result){var n=e.msg||"Sorry. Unable to subscribe. Please try again later.";r.style.color="red",e.msg&&e.msg.indexOf("already subscribed")>=0&&(n="You're already subscribed. Thank you."),r.innerHTML=n}else r.innerHTML="Thank you!<br>You must confirm the subscription in your inbox."}})}var t=document.querySelector(".subscribe-form"),s=document.querySelector(".subscribe-result");t&&t.addEventListener("submit",function(n){if(n.preventDefault(),s.classList.remove("hidden"),e(t))s.innerHTML="Subscribing...",r(t,s);else{s.innerHTML="A valid email address must be provided.",s.style.color="red"}})})}});