describe("The Greetings exercise", function(){
	it("should greet Mecayle in English", function(){
		let greetFunction = TheGreetFunction();
		var valSelected = "English";
		var theName = "Mecayle";
		assert.equal(greetFunction.langButton(valSelected, theName), "Hello, Mecayle");
	});
	it("should greet Flora in Español", function(){
		let greetFunction = TheGreetFunction();
		var valSelected = "Español";
		var theName = "Flora";
		assert.equal(greetFunction.langButton(valSelected, theName), "Hola, Flora");
	});
	it("should greet Sasuki in Japanese", function(){
		let greetFunction = TheGreetFunction();
		var valSelected = "Japanese";
		var theName = "Sasuki";
		assert.equal(greetFunction.langButton(valSelected, theName), "Kon'nichiwa, Sasuki");
	});
	
	it("if input is empty should return 'enter name!'", function(){
		let greetFunction = TheGreetFunction();
		var valSelected = null;
		var theName = "";
		assert.equal(greetFunction.langButton(valSelected, theName), "enter name!");
	});
	describe("It should also add new names to the array", function(){
		it("should add Lila to array", function(){
		let greetFunction = TheGreetFunction();
		var nameEntered = "lila";
		var arrayNames =   {array : ["john", "sally", "mike"]};
		assert.deepEqual(greetFunction.namesStored(nameEntered, arrayNames),  {array : ["john", "sally", "mike", "lila"]});
	});
	it("should add Amy to array", function(){
		let greetFunction = TheGreetFunction();
		var nameEntered = "amy";
		var arrayNames =   {array : ["john", "sally", "mike"]};
		assert.deepEqual(greetFunction.namesStored(nameEntered, arrayNames),  {array : ["john", "sally", "mike", "amy"]});
	});
	})
});

