$(document).ready(function () {
  var ingredientBtn = $("#ingredient");
  var categoryBtn = $("#category");
  var randomBtn = $("#random");
  var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

  // Adding event listener to the ingredient initial ingredient button
  ingredientBtn.on("click", function () {
    // Hide original dropdown menu
    $(".dropdown").attr("style", "display: none");
    var chooseIngredient = $("<button class='btn btn-default' type='button' id='refBtn'> Choose your ingredient: </button>");
    $(".stepTwo-container").append(chooseIngredient);

    var liquorChoices = ["Tequila", "Vodka", "Gin", "Rum", "Whiskey"];
    for (var i = 0; i < liquorChoices.length; i++) {
      var liquorBtn = $("<button class='btn btn-default liquor-btn' type='button' value='" +
          liquorChoices[i] + "'>" + liquorChoices[i] + "</button>");
      $(".stepTwo-container").append(liquorBtn);
    }

  });

  $(".stepTwo-container").on("click", ".liquor-btn", function () {
    var userChoice = $(this).val();
    var queryUrl = baseUrl + "filter.php?i=" + userChoice;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (cocktails) {
      console.log(cocktails);
      var drinkOptions = cocktails.drinks; // this is an array
      var randomSelection = drinkOptions[Math.floor(Math.random() * drinkOptions.length)];
      console.log(randomSelection);

      $(".row-1").attr("style", "display: block");
      $(".row-2").attr("style", "display: block");
      $(".stepTwo-container").attr("style", "display: none");
      $(".your-drink").append(randomSelection.strDrink);

      var img = $(
        "<img src='" +
          randomSelection.strDrinkThumb +
          "' class='drinkImg img-fluid clearfix' />"
      );
      console.log(randomSelection.strDrinkThumb);
      $(".drink-image").append(img);

      var displayCocktail = randomSelection.idDrink;

      getRecipe(displayCocktail);
    });
  });

  function getRecipe(x) {
    var recipeUrl = baseUrl + "lookup.php?i=" + x;
    console.log(recipeUrl);
    var options = {
      async: true,
      crossDomain: true,
      url: recipeUrl,
      method: "GET",
    };

    $.ajax(options).then(function (response) {
      console.log(response);
      var drinkRecipe = response.drinks[0];

      $(".glass-type").append(drinkRecipe.strGlass);

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

      for (var i = 0; i < allIngredients.length; i++) {
        console.log(allIngredients[i]);
        if (allIngredients[i].ingredient !== null && allIngredients[i].measure !== null) {
          $(".ingredient-list").append("<li class='ingredient'>" + allIngredients[i].measure + " " + allIngredients[i].ingredient + "</li>");
        }
        else if (allIngredients[i].ingredient !== null && allIngredients[i].measure == null) {
          $(".ingredient-list").append("<li class='ingredient'>" + allIngredients[i].ingredient + "</li>");
        }
      }

      $(".instructions").append(drinkRecipe.strInstructions);
    });
  }

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
                $(".row-2").attr("style","display:block");

                drinkImg = getRandomDrink.drinks[0].strDrinkThumb;
                console.log(drinkImg);
                $(".img").attr("src", drinkImg);
                

            }
        })
    })

});

