var ImageManager = (function() {
	var instance = null,
		currentImageIndex = -1,
		dataArray = null;

	function init(callback) {
		$.ajax({
			url:'./php/images.php',
			async:'true',
			success: function(data){
				data = data.substring(0,data.length-1);
				dataArray = data.split(';');
				callback();
				$('#next-btn').click();	
			}
		});
	
		return {
			getNextImage: function() {
				currentImageIndex = (currentImageIndex + 1)%dataArray.length;
				return dataArray[currentImageIndex];
			},
			getPreviousImage: function() {
				currentImageIndex = Math.abs((currentImageIndex - 1)%dataArray.length);
				return dataArray[currentImageIndex];
			}
		}
	}
	return {
		getInstance : function(callback){
			if(!instance) {
				instance = init(callback);
			}
			return instance;
		}
		
	};
})();
