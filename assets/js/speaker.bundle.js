webpackJsonp([2],{0:function(t,a){+function(t){"use strict";function a(a){return this.each(function(){var n=t(this),i=n.data("bs.tab");i||n.data("bs.tab",i=new e(this)),"string"==typeof a&&i[a]()})}var e=function(a){this.element=t(a)};e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.prototype.show=function(){var a=this.element,e=a.closest("ul:not(.dropdown-menu)"),n=a.data("target");if(n||(n=a.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var i=e.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:a[0]}),o=t.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(s),a.trigger(o),!o.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(n);this.activate(a.closest("li"),e),this.activate(r,r.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},e.prototype.activate=function(a,n,i){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var o=n.find("> .active"),r=i&&t.support.transition&&(o.length&&o.hasClass("fade")||!!n.find("> .fade").length);o.length&&r?o.one("bsTransitionEnd",s).emulateTransitionEnd(e.TRANSITION_DURATION):s(),o.removeClass("in")};var n=t.fn.tab;t.fn.tab=a,t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var i=function(e){e.preventDefault(),a.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery)},12:function(t,a,e){e(0);var n=document.querySelectorAll(".talks__tabs ul li:first-child"),i=document.querySelectorAll(".talks__content .tab-pane:first-child");n.length&&n[0].classList.add("active"),i.length&&i[0].classList.add("active");var s=window.location.hash;s&&$('ul.nav a[href="'+s+'"]').tab("show"),$(".nav-tabs a").click(function(t){$(this).tab("show");var a=$("body").scrollTop()||$("html").scrollTop();window.location.hash=this.hash,$("html,body").scrollTop(a)})}},[12]);