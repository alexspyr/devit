webpackJsonp([0],{12:function(e,n){$(document).ready(function(){function e(e){var n=e.querySelector("input[type='email']").value;return!(!n||!n.length)&&-1!=n.indexOf("@")}function n(e,n){$.ajax({url:"http://check-connectivity.us2.list-manage.com/subscribe/post-json?u=249dbe460c3c1857a489dde05&amp;id=faa2000c02&c=?",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8",cache:!1,data:$(e).serialize(),success:function(e){if("success"!=e.result){var r=e.msg||"Sorry. Unable to subscribe. Please try again later.";n.style.color="red",e.msg&&e.msg.indexOf("already subscribed")>=0&&(r="You're already subscribed. Thank you."),n.innerHTML=r}else n.innerHTML="Thank you!<br>You must confirm the subscription in your inbox."}})}var r=document.querySelector(".subscribe-form"),s=document.querySelector(".subscribe-result");r&&r.addEventListener("submit",function(t){if(t.preventDefault(),s.classList.remove("hidden"),e(r))s.innerHTML="Subscribing...",n(r,s);else{s.innerHTML="A valid email address must be provided.",s.style.color="red"}})})}});