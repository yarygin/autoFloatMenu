(function( $ ){
	$.fn.autoFloatMenu = function(options) {
		var that = this;
		$(document).scroll(function() {
			$(that).stop();
			$(that).animate({
				top: ($(this).scrollTop())
			});
		});
		var defaults = {
			blockSelector: ".content",
			titleSelector: "h3",
			menuElClass: "menu-item"
		}
		settings = $.extend({}, defaults, options);
		$(settings.blockSelector).each(function(key, item){
			that.append(
				$("<nav/>").append(
					$("<a/>")
						.text($(item).find(settings.titleSelector).text())
						.attr("href","#"+$(item).attr("id"))
						.addClass(settings.menuElClass)
				)
			);
		});
	};
})(jQuery);
