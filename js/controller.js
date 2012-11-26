var Controller = ( function(){
	var imageManager = {};
		attachHandlers = function(){
			var imageView = $($('#image_view'));
			$('#prev-btn').click(function(event) {
				imageView.attr('src', './images/' + imageManager.getPreviousImage());
			});

			$('#next-btn').click(function(event) {
				imageView.attr('src', './images/' + imageManager.getNextImage());
			})
		};
	return{
		init: function(){
			imageManager = ImageManager.getInstance(attachHandlers);
		}
	}

})();



	