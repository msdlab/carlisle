jQuery(document).ready(function($){$("body *:first-child").addClass("first-child"),$("body *:last-child").addClass("last-child"),$("body *:nth-child(even)").addClass("even"),$("body *:nth-child(odd)").addClass("odd");var s=$("#footer-widgets div.widget").length;$("#footer-widgets").addClass("cols-"+s),$.each(["show","hide"],function(s,a){var i=$.fn[a];$.fn[a]=function(){return this.trigger(a),i.apply(this,arguments)}}),$(".nav-header ul.menu>li").after(function(){return!$(this).hasClass("last-child")&&$(this).hasClass("menu-item")&&"none"!=$(this).css("display")?'<li class="separator">|</li>':void 0}),$(".nav-footer ul.menu>li").after(function(){return!$(this).hasClass("last-child")&&$(this).hasClass("menu-item")&&"none"!=$(this).css("display")?'<li class="separator">|</li>':void 0}),$(".section.expandable .expand").click(function(){var s=$(this).parents(".section-body").find(".content");console.log(s),s.hasClass("open")?(s.removeClass("open"),$(this).html('MORE <i class="fa fa-angle-down"></i>')):(s.addClass("open"),$(this).html('LESS <i class="fa fa-angle-up"></i>'))})});