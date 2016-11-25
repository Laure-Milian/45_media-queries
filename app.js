(function() {
	
	var app = {
		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('button').on('click', this.displayMenu);
		},

		displayMenu: function() {
			$('.navItem').show();
			$('h1').css('color', 'red');
		}
	}

	app.init();

})();