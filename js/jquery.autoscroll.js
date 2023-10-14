/*
 * Version: 1.0.0
 * Author: Vidvan
 * Date: 2020-03-30
 * 
 * */
(function($) {
	$.fn.autoscroll = function(options) {
		var settings = $.extend({}, $.fn.autoscroll.defaults, options);
		return this.each(function() {
			var $this = $(this);
			if ($this.length > 0 &&
				$this[0].scrollHeight > $this[0].clientHeight) {
				var scrollTimer,
					scrollTop = 0;

				function scrollList() {
					var itemHeight = 700;
					// $this.children().eq(1).outerHeight(true); // 取第二个高度防止第一个没有上间距
					scrollTop++;
					//console.log("scrolltop"+scrollTop);
					if (scrollTop >= itemHeight) {
						$this.scrollTop(scrollTop).children().eq(0).appendTo($this);
						scrollTop =0;
						
						
					} else {
						$this.scrollTop(scrollTop);
					}
				}
				// 鼠标悬停时停止播放
				$this.hover(function() {
					clearInterval(scrollTimer);
					$this.css("overflow-y", "auto");
					if (settings.hideScrollbar) {
						$this.addClass("hide-scrollbar");
					}
					if($.type(settings.handlerIn) === "function") {
						settings.handlerIn();
					}
				}, function() {
					$this.css("overflow-y", "hidden");
					scrollTimer = setInterval(function() {
						scrollList();
					}, settings.interval);
					if($.type(settings.handlerOut) === "function") {
						settings.handlerOut();
					}
				}).trigger("mouseleave");
			}
		});
	}
	$.fn.autoscroll.defaults = {
		interval: 50, 
		hideScrollbar: true, 
		handlerIn: null, 
		handlerOut: null 

	};
	$(function() {
		
		$("[data-autoscroll]").autoscroll();
	});
})(jQuery);
