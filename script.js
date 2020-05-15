$(document).ready(function () {
  // Declaring buttons as variables for later use
  var ingredientBtn = $("#ingredient");
  var categoryBtn = $("#category");
  var randomBtn = $("#random");
  // Declaring baseurl for AJAX calls
  var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
  var filter= "";


  // Adding event listener to the ingredient initial ingredient button
  ingredientBtn.on("click", function () {
    // Hide original dropdown menu
    $(".dropdown").attr("style", "display: none");
    // Create a disabled button as step 2 for user and append to the correct container
    var chooseIngredient = $("<button class='btn btn-default btn-prompt' type='button' id='refBtn'> Choose Your Ingredient: </button>");
    $(".stepTwo-container").append(chooseIngredient);

    // Create buttons for liquor choices by looping through array & append them to the container
    var liquorChoices = ["Tequila", "Vodka", "Gin", "Rum", "Whiskey"];
    for (var i = 0; i < liquorChoices.length; i++) {
      var liquorBtn = $("<button class='btn btn-default rounded-0 liquor-btn " +liquorChoices[i]+"' type='button' value='" +
          liquorChoices[i] + "'>" + liquorChoices[i] + "</button>");
      $(".stepTwo-container").append(liquorBtn);
    }
    filter = "filter.php?i=";
    return filter;

  });

  // Adding event listener to category button 
  categoryBtn.on("click", function () {
    // Hide original dropdown menu
    $(".dropdown").attr("style", "display: none");
    var chooseCategory = $("<button class='btn btn-default btn-prompt' type='button' id='refBtn'> Choose your glass type: </button>");
    $(".stepTwo-container").append(chooseCategory);

    // Set three categories
    var categoryChoices = ["Novelty Glass", "Stemmed Glass", "Standard Cup"];
    for (var i = 0; i < categoryChoices.length; i++) {
      var catBtn = $("<button id='" + categoryChoices[i] + "' class='btn btn-default rounded-0 category-btn' type='button' value='" + categoryChoices[i] + "'>" + categoryChoices[i] + "</button>");
      $(".stepTwo-container").append(catBtn);
    }
  });

// Create event listener for the category button
  $(".stepTwo-container").on("click", ".category-btn", function () {
    // Empty .stepTwo-container div, making it ready for new buttons
    $(".stepTwo-container").empty();
    var glassType = $("<button class='btn btn-default btn-prompt' type='button' id='refBtnTwo'>" + this.value + "</button>");
    $(".stepTwo-container").append(glassType);

    if(this.value === "Novelty Glass") {
      var glassChoices = ["Coffee mug", "Jar", "Punch bowl", "Pitcher", "Copper Mug", "Mason jar"];
      for (var i = 0; i < glassChoices.length; i++) {
      var glassBtn = $("<button class='btn btn-default rounded-0 liquor-btn' type='button' value='" + glassChoices[i] + "'>" + glassChoices[i] + "</button>");
      $(".stepTwo-container").append(glassBtn);
      }
    }else if(this.value === "Stemmed Glass") {
      var glassChoices = ["Cocktail glass", "Pousse cafe glass", "Champagne flute", "Whiskey sour glass", "Brandy snifter", "White wine glass", "Nick and Nora Glass", "Hurricane glass", "Irish coffee cup", "Wine Glass", "Cordial glass", "Margarita/Coupette glass", "Parfait glass", "Martini Glass", "Balloon Glass", "Coupe Glass"];
      for (var i = 0; i < glassChoices.length; i++) {
      var glassBtn = $("<button class='btn btn-default rounded-0 liquor-btn' type='button' value='" + glassChoices[i] + "'>" + glassChoices[i] + "</button>");
      $(".stepTwo-container").append(glassBtn);
    }
    }else if(this.value === "Standard Cup") {
      var glassChoices = ["Highball glass", "Old-fashioned glass", "Collins glass", "Pint glass", "Beer mug", "Beer pilsner", "Beer Glass", "Shot Glass"];
      for (var i = 0; i < glassChoices.length; i++) {
      var glassBtn = $("<button class='btn btn-default rounded-0 liquor-btn' type='button' value='" + glassChoices[i] + "'>" + glassChoices[i] + "</button>");
      $(".stepTwo-container").append(glassBtn);
      }
    } 
    filter = "filter.php?g=";
    return filter;
  });

  $(".stepTwo-container").on("click", ".liquor-btn", function() {
    var userChoice = $(this).val();
    var queryUrl = baseUrl + filter + userChoice;

    getDrink(userChoice, queryUrl);
  });

    // When random button is clicked, the second step is skipped and the drink & recipe are pulled using a different function and API call
    randomBtn.on("click", function(){
      $(".dropdown").attr("style","display:none");
      var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  
      $.ajax({
          url: url,
          method:"GET",
          success: function(getRandomDrink){
  
              drinkName = getRandomDrink.drinks[0].strDrink;
              $(".your-drink").append(drinkName);
              $(".row-1").attr("style","display:block");
              $(".spotify-container").attr("style", "display:inline-block");
              $(".drink-container").attr("style", "display:inline-block");
  
              drinkImg = getRandomDrink.drinks[0].strDrinkThumb;
              console.log(drinkImg);
              $(".drinkImg").attr("src", drinkImg);
  
              glassType = getRandomDrink.drinks[0].strGlass;
              $("p.glass-type").append(glassType);
  
              //for the in ingredient list
              for (var i = 1; i <16; i++){
  
                  if (getRandomDrink.drinks[0]["strIngredient"+[i]] === null){
                      break;
                  }
                  var ingredient = document.createElement("ingredient-from-the-online-list");
                  ingredient.innerHTML = getRandomDrink.drinks[0]["strMeasure"+[i]] + ": " + getRandomDrink.drinks[0]["strIngredient"+[i]]+"<br/>";
                  $("ul.ingredient-list").append(ingredient);
              }
              
              var someInstruction = document.createElement("some-online-instruction");
              someInstruction.innerHTML = getRandomDrink.drinks[0].strInstructions;
              $("p.instructions").append(someInstruction);  
              
              getMusic(glassType);
              
  
          }
      })
  })

  function getDrink(userChoice, queryUrl){
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (cocktails) {
      // console.log(cocktails);
      // drinkOptions captures the array of returned drinks
      var drinkOptions = cocktails.drinks;
      // This randomly selects one drink from the returned array
      var randomSelection = drinkOptions[Math.floor(Math.random() * drinkOptions.length)];
      // console.log(randomSelection);

      // Show Row 1
      $(".row-1").attr("style", "display: block");
      // Show music container
      $(".spotify-container").attr("style", "display: inline-block");
      // Show drink container
      $(".drink-container").attr("style", "display: inline-block");
      // Hide container from step 2
      $(".stepTwo-container").attr("style", "display: none");
      // Add the drink title to the drink container
      $(".your-drink").append(randomSelection.strDrink);
      $(".your-drink").attr("style", "color:orange");

      // Get the drink image and add classes so that we can style and size it and so it's fluid
      var img = $("<img src='" + randomSelection.strDrinkThumb + "' class='drinkImg img-fluid clearfix' />");
      // Append drink to container
      $(".drink-image").append(img);

      // Create displayCocktail variable so that we can pass the drink selection through to get the recipe
      var displayCocktail = randomSelection.idDrink;

      // Call getRecipe function for the randomly selected drink
      getRecipe(displayCocktail);
      // Call getMusic function to pass through the userChoice as the variable that determines the playlist
      getMusic(userChoice);
  });
}

  // Create function to get the recipe with a separate AJAX call to the Cocktail DB
  function getRecipe(x) {
    var recipeUrl = baseUrl + "lookup.php?i=" + x;
    // console.log(recipeUrl);
    var options = {
      async: true,
      crossDomain: true,
      url: recipeUrl,
      method: "GET",
    };

    $.ajax(options).then(function (response) {
      console.log(response);
      // Drink recipe is the first object in the response, setting to variable
      var drinkRecipe = response.drinks[0];

      // Append the type of glass to use for this drink
      $(".glass-type").append(drinkRecipe.strGlass);

      // Ingredients and measurements on the recipe response are all individual objects, 0-15, put those into an array
        // with ingredient & measure
      var allIngredients = [
        {ingredient: drinkRecipe.strIngredient1, measure: drinkRecipe.strMeasure1},
        {ingredient: drinkRecipe.strIngredient2, measure: drinkRecipe.strMeasure2},
        {ingredient: drinkRecipe.strIngredient3, measure: drinkRecipe.strMeasure3},
        {ingredient: drinkRecipe.strIngredient4, measure: drinkRecipe.strMeasure4},
        {ingredient: drinkRecipe.strIngredient5, measure: drinkRecipe.strMeasure5},
        {ingredient: drinkRecipe.strIngredient5, measure: drinkRecipe.strMeasure5},
        {ingredient: drinkRecipe.strIngredient6, measure: drinkRecipe.strMeasure6},
        {ingredient: drinkRecipe.strIngredient7, measure: drinkRecipe.strMeasure7},
        {ingredient: drinkRecipe.strIngredient8, measure: drinkRecipe.strMeasure8},
        {ingredient: drinkRecipe.strIngredient9, measure: drinkRecipe.strMeasure9},
        {ingredient: drinkRecipe.strIngredient10, measure: drinkRecipe.strMeasure10},
        {ingredient: drinkRecipe.strIngredient11, measure: drinkRecipe.strMeasure11},
        {ingredient: drinkRecipe.strIngredient12, measure: drinkRecipe.strMeasure12},
        {ingredient: drinkRecipe.strIngredient13, measure: drinkRecipe.strMeasure13},
        {ingredient: drinkRecipe.strIngredient14, measure: drinkRecipe.strMeasure14},
        {ingredient: drinkRecipe.strIngredient15, measure: drinkRecipe.strMeasure15},
      ];

      // Loop through allIngredients in drink
      for (var i = 0; i < allIngredients.length; i++) {
        // console.log(allIngredients[i]);
        // If the ingredient & the measurement exist and aren't null
        if (allIngredients[i].ingredient !== null && allIngredients[i].measure !== null) {

          // then append the measurement + ingredient to the ingredient list
          $(".ingredient-list").append("<li class='ingredient'>" + allIngredients[i].measure + " " + allIngredients[i].ingredient + "</li>");
        }
        // Or if there is an ingredient but not a measurement
        else if (allIngredients[i].ingredient !== null && allIngredients[i].measure == null) {
          // then just append the ingredient
          $(".ingredient-list").append("<li class='ingredient'>" + allIngredients[i].ingredient + "</li>");
        }
      }

      // Pull the instructions from the response and append to the instructions element
      $(".instructions").append(drinkRecipe.strInstructions);
    });
  }

// Function to add music, passing through the userchoice or the glasstype (when random)
  function getMusic(c) {
      //if main ingredient is tequila, show latin playlist
      if (c == "Tequila" || c == "Punch bowl" || c == "Margarita/Coupette glass") {
          var playlistId = "1388276297"
      // if main ingredient is vodka, show quarantini playlist
      } else if (c == "Vodka" || c == "Jar" || c == "Pitcher" || c == "Highball glass" || c == "Shot Glass" || c == "Cocktail Glass" || c == "White wine glass" || c == "Martini Glass") {
          var playlistId = "1908130662"
      // if main ingredient is gin, play mellow playlist
      } else if (c == "Gin" || c == "Copper Mug" || c == "Collins glass" || c == "Beer pilsner" || c == "Pousse cafe glass" || c == "Champagne flute" || c == "Brandy snifter"
        || c == "Nick and Nora Glass" || c == "Cordial Glass" || c == "Coup Glass" ) {
          var playlistId = "3105343146"
      // if main ingredient is rum, play island playlist
      } else if (c == "Rum" || c == "Mason jar" || c == "Hurricane glass" || c == "Pint glass" || c == "Parfait glass" || c == "Balloon Glass") {
          var playlistId = "2904767962"
      // otherwise, if the main ingredient is whiskey or it's another type of glass, play the Americana playlist
      } else {
          var playlistId = "3105159006";
      }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/" + playlistId,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "e848fc66ddmsh2d6e8bd7a32f596p146456jsn0e52436ec250"
        }
    }

    // Make AJAX call to Deezer
    $.ajax(settings).done(function(playlist){
        // Append cover image with link to actual playlist to the music container
        $(".coverImg").append("<a href='" + playlist.link + "'><img src='" + playlist.picture_big +"' class='img-fluid'></a>")
        // Add the playlist description underneath the image
        $(".playlist-description").append(playlist.description);

        // Call second function to display playlist tracks so user can play right from web page
        getTracks(playlistId);
    });

    // Function to add the playlist's songs
    function getTracks(playlistId) {
        $(".playlist").append(
            "<iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=playlist&id=" + playlistId + "&app_id=1' width='100%' height='350'></iframe>");

    }

  }
    $(".title").attr("style","font-family: 'Courgette', cursive");
    $(".title").attr("style","color:orange");


    randomBtn.on("click", function(){
        $(".dropdown").attr("style","display:none");
        var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

        $.ajax({
            url: url,
            method:"GET",
            success: function(getRandomDrink){
                console.log(getRandomDrink.drinks[0].strDrink);

                drinkName = getRandomDrink.drinks[0].strDrink;
                $(".your-drink").append(drinkName);
                $(".drink-container").attr("style","display:block");
                $(".your-drink").attr("style","color:orange");

                drinkImg = getRandomDrink.drinks[0].strDrinkThumb;
                console.log(drinkImg);
                $(".drinkImg").attr("src", drinkImg);

                glassType = getRandomDrink.drinks[0].strGlass;
                console.log(glassType);
                $("p.glass-type").append(glassType);
    
                //for the in ingredient list
                for (var i = 1; i <16; i++){
                    console.log(i);
    
    
                    if (getRandomDrink.drinks[0]["strIngredient"+[i]] === null){
                        break;
                    }
                    var ingredient = document.createElement("ingredient-from-the-online-list");
                    ingredient.innerHTML = getRandomDrink.drinks[0]["strMeasure"+[i]] + ": " + getRandomDrink.drinks[0]["strIngredient"+[i]]+"<br/>";
                    console.log(ingredient);
                    $("ul.ingredient-list").append(ingredient);
                }
                
                var someInstruction = document.createElement("some-online-instruction");
                someInstruction.innerHTML = getRandomDrink.drinks[0].strInstructions;
                $("p.instructions").append(someInstruction);    
                

            }
        })
    })
});

