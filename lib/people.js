(function() {
var people = {
	people: [],
	init: function() {
		this.cacheDom();
	},
	cacheDom: function() {
		this.$el = $('#peopleModule');
		this.$button = this.$el.find()
	}
};

people.init();

})();