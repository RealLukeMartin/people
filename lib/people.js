var Person = (function () {
	
	var _age = 26;
	var incrementAge = function() {
		_age++;
	}
	var getAge = function () {
		return _age;
	}

	return {
		incrementAge: incrementAge,
		getAge: _age
	};

})();

console.log(Person.getAge);

var bill = new Person();