(function( $ ){
	$.fn.autoFloatMenu = function(options) {
		var that = this;
		var defaults = {
			blockSelector: ".content",
			titleSelector: "h3",
			menuElClass: "menu-item",
			flowable:true,
			autoGenerate:true
		}
		settings = $.extend({}, defaults, options);
		
		if(settings.flowable)
		{
			that.css("position", that.css("position")=="absolute"?"absolute":"relative");

			$(document).scroll(function() {
				that.stop();
				that.animate({
					top: ($(this).scrollTop())
				});
			});
		}
		
		if(settings.autoGenerate)
		{
			that.append($("<nav/>"));
			$(settings.blockSelector).each(function(key, item){
				that.find("nav").first().append(
						$("<a/>")
							.text($(item).find(settings.titleSelector).first().text())
							.attr("href","#"+$(item).attr("id"))
							.addClass(settings.menuElClass)
							.click(function(){
								$(document.body).animate({
								    'scrollTop': $(item).offset().top
								}, 500);
							})
					)
			});
		}
	};
})( jQuery );
