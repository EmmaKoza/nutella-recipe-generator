$(function() {

	$('form').scrollNav({
		showTopLink: false,
		arrowKeys:true
	});

	// console.log(recipeCollection.['Crepes with Fruit and Nutella'])
	$('.feedMe').on('click', function(e){ //listen for when the form's submit button is clicked
		e.preventDefault(); // prevent default event (page refresh)
		var userTime = $('input:radio[name = time]:checked').val();	//store the answer of the first question as a var to be accessed later 
		var userDifficulty = $('input:radio[name = difficulty]:checked').val();	
		var userFlavour =$('input:radio[name = flavour]:checked').val();
	    var userHeaviness =$('input:radio[name = heaviness]:checked').val();
	    
		// Create new array for filtered options
		var filteredRecipes = [];

		//Create a new array for the filtered options that don't match with skill level
		var noMatchRecipes = [];

		// Enumerate the collection
		for(title in recipeCollection ) {
			//Use the user values to check to see if the current objects values match
			if(recipeCollection[title].time === userTime && recipeCollection[title].difficulty === userDifficulty && recipeCollection[title].flavour === userFlavour  && recipeCollection[title].heaviness === userHeaviness){
				//IF yes push to array.
				filteredRecipes.push(recipeCollection[title]);
			} else if (recipeCollection[title].time === userTime && recipeCollection[title].difficulty !== userDifficulty && recipeCollection[title].flavour === userFlavour  && recipeCollection[title].heaviness === userHeaviness) {				
				noMatchRecipes.push(recipeCollection[title]);
				var htmlNoMatchResult = '<p class="sorry"> Unfortunately we couldn\'t find a recipe that best matched your preferences. Try this one instead or take the quiz again.</p>';
			};
		};
		//see whether filteredRecipes is empty.
		//if not, do A:
		//if yes, do B:
		if (filteredRecipes.length != 0){		
			// A
			// Produce a random recipe based on the matching results 
			var randomNum = Math.floor(Math.random() * filteredRecipes.length);

			var bestRecipe = filteredRecipes[randomNum];
				console.log(bestRecipe);

			//select the required data from the object

			var htmlTitle = '<h1 class="recipeTitle">' + bestRecipe.title + '</h1>'
			//create a variable to hold the ingredients as a UL to be printed on html
			var htmlIngredients = '<h2 class="recipeIngredients">' + 'Ingredients Needed: ' + '</h2>' 
			 htmlIngredients += '<ul class="ingredientItems">'  //make a for loop to insert ingredients as list items 
			 for(var i = 0; i < bestRecipe.ingredients.length; i ++){
			 	htmlIngredients += '<li>' + bestRecipe.ingredients[i] + '</li>'	
			 }
			 htmlIngredients += '</ul>'
			 //create a variable to hold the recipe as a OL to be printed on html
			 var htmlRecipe = '<h2 class="recipeSteps">' + 'Directions' + '</h2>'
			 htmlRecipe += '<ol class="steps">' //make a for loop to insert recipe steps as list items
			 for (var i = 0; i < bestRecipe.recipe.length; i ++){
			 	htmlRecipe += '<li>' + bestRecipe.recipe[i] + '</li>'
			 }
			 	htmlRecipe += '</ol>'

			 var htmlImage = '<div class="imgWrapper">' + '<img src=' + bestRecipe.image + '>' + '</div>'

			 var button = '<div class="goBack"><a href="questionaire.html">' + 'Try Again' + '</a></div>'

			 var htmlResults = '<div class="recipeContainer">' + htmlTitle + htmlImage + htmlIngredients + htmlRecipe + button + '</div>'
				//print the required data to the page 
				$('.discoverNutella').html(htmlResults)
		} else if (filteredRecipes.length === 0){
			// console.log("it's empty");
			var randomNum = Math.floor(Math.random() * noMatchRecipes.length);

			var bestRecipe = noMatchRecipes[randomNum];
				console.log(bestRecipe);

			//select the required data from the object

			var htmlTitle = '<h1 class="recipeTitle">' + bestRecipe.title + '</h1>'
			//create a variable to hold the ingredients as a UL to be printed on html
			var htmlIngredients = '<h2 class="recipeIngredients">' + 'Ingredients Needed: ' + '</h2>' 
			 htmlIngredients += '<ul class="ingredientItems">'  //make a for loop to insert ingredients as list items 
			 for(var i = 0; i < bestRecipe.ingredients.length; i ++){
			 	htmlIngredients += '<li>' + bestRecipe.ingredients[i] + '</li>'	
			 }
			 htmlIngredients += '</ul>'
			 //create a variable to hold the recipe as a OL to be printed on html
			 var htmlRecipe = '<h2 class="recipeSteps">' + 'Directions' + '</h2>'
			 htmlRecipe += '<ol class="steps">' //make a for loop to insert recipe steps as list items
			 for (var i = 0; i < bestRecipe.recipe.length; i ++){
			 	htmlRecipe += '<li>' + bestRecipe.recipe[i] + '</li>'
			 }
			 	htmlRecipe += '</ol>'

			 var htmlImage = '<div class="imgWrapper">' + '<img src=' + bestRecipe.image + '>' + '</div>'

			 var button = '<div class="goBack"><a href="questionaire.html">' + 'Try Again' + '</a></div>'

			 var htmlResults = '<div class="recipeContainer">' + htmlNoMatchResult +  htmlTitle + htmlImage + htmlIngredients + htmlRecipe + button + '</div>'
				//print the required data to the page 
				$('.discoverNutella').html(htmlResults)
		//B
	}
	});


});
			

