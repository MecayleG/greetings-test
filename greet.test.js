describe("The Greetings exercise", function(){
	describe("the langButton function", function(){
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
	});
	describe("the counter function", function(){
		it("should show 3 names are in the array", function(){
		let greetFunction = TheGreetFunction(["lila", "likla", "jan"]);
	
		assert.deepEqual(greetFunction.counter(), 3);
		});
		it("should show 4 names are in the array", function(){
		let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle"]);
	
		assert.deepEqual(greetFunction.counter(), 4);
		});
		it("should show 6 names are in the array", function(){
		let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle", "jay", "kay"]);
	
		assert.deepEqual(greetFunction.counter(), 6);
	});
	});
	describe("the namestored function", function(){
		it("should add the name John if it has not been entered", function(){
			let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle"]);
			var nameEntered = "john";
			greetFunction.namesStored(nameEntered)
			assert.deepEqual(greetFunction.alreadyGreeted(), ["lila", "likla", "jan", "mecayle", "john"] )
		});
		it("should add the name Mary if it has not been entered", function(){
			let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle", "john"]);
			var nameEntered = "mary";
			greetFunction.namesStored(nameEntered)
			assert.deepEqual(greetFunction.alreadyGreeted(), ["lila", "likla", "jan", "mecayle", "john", "mary"] )
		});
		it("should not add the name John again if has already been entered", function(){
			let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle", "john"]);
			var nameEntered = "john";
			greetFunction.namesStored(nameEntered)
			assert.deepEqual(greetFunction.alreadyGreeted(), ["lila", "likla", "jan", "mecayle", "john"] )
		});
		it("should not add the name Mary again if has already been entered", function(){
			let greetFunction = TheGreetFunction(["lila", "likla", "jan", "mecayle", "mary"]);
			var nameEntered = "mary";
			greetFunction.namesStored(nameEntered)
			assert.deepEqual(greetFunction.alreadyGreeted(), ["lila", "likla", "jan", "mecayle", "mary"] )
		});
	});
	describe("the lettersOnly function", function(){
			it("should return a name without numbers and special characters", function(){
				let greetFunction = TheGreetFunction();
				assert.deepEqual(greetFunction.lettersOnly("#Meek$24"), "meek");
				assert.deepEqual(greetFunction.lettersOnly("$y*o&u_s-u^c#k"), "yousuck");
			});
		});
});
