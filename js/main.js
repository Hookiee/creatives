lazyload(),$((function(){new Lazyload($(".map"));const t=(t,o)=>{$("html, body").animate({scrollTop:$(""+t).offset().top},o)};function o(){var t=$(window).scrollTop();$(".header").toggleClass("header__scroll",t>0),$(".gotop__wrap").toggleClass("gotop_toggle",t>0)}scrolling=function(){document.addEventListener("click",o=>{o.target.dataset.modal?myModal.open():o.target.dataset.akita?t(".contact",600):o.target.dataset.pages?t(".design",600):o.target.dataset.features?t(".blog",700):o.target.dataset.team&&t(".team",700)})},$(".btn-scroll").click((function(o){o.preventDefault,t("#feature",600)})),scrolling(),$(document).ready((function(){o()})),$(window).on("scroll",(function(){o()}))}));var gotop=$(".gotop");gotop.on("click",(function(t){t.preventDefault(),$(window).scrollTop(0)})),$(".burger").on("click",(function(){$(".nav-sm").addClass("show")})),$(".nav-sm").on("click",t=>{t.target.dataset.close&&$(".nav-sm").removeClass("show")});