function TheGreetFunction(greetedNames){

	const TheGreetedNames = greetedNames || [];

	 // Get input from user and greet in language selected
		function langButton(valSelected, theName){
		if(theName === ""){
			return("enter name!") 
		}
		if(valSelected === "English"){
		 return ("Hello, " + theName);
		}
		else if(valSelected === "Español"){
		return ("Hola, " + theName);
		}
		else if(valSelected === "Japanese"){
		return ("Kon'nichiwa, " + theName);
		}
	}
	function namesStored(nameEntered){
	// if user input(name) has never been entered and user input is not empty push to localStorage
		if(!TheGreetedNames.includes(nameEntered) && nameEntered !== ""){
			TheGreetedNames.push(nameEntered)
		}
		
      }
	function counter(){
		return TheGreetedNames.length
	}
	function alreadyGreeted(){
		return TheGreetedNames;
	}
	

	return{
		langButton,
		namesStored,
		counter,
		alreadyGreeted
	}
}