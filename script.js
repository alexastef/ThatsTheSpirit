$(document).ready(function(){

    var ingredientBtn = $("#ingredient");
    var categoryBtn = $("#category");
    var randomBtn = $("#random");
    var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/"

    // if (ingredient) {
    //     showIngredients();
    //     // create ingredient option buttons
    //     // append to container
    //     //show music option
    // } else if {

    ingredientBtn.on("click", function(){
        // Hide original dropdown menu
        $(".dropdown").attr("style", "display: none");
        var chooseIngredient = $("<button class='btn btn-default' type='button' id='refBtn'> Choose your ingredient: </button>");
        $(".stepTwo-container").append(chooseIngredient);

        var liquorChoices = ["Tequila", "Vodka", "Gin", "Rum", "Whiskey"];
        for (var i=0; i<liquorChoices.length; i++) {
            var liquorBtn = $("<button class='btn btn-default liquor-btn' type='button' value='" + liquorChoices[i] + "'>" + liquorChoices[i] + "</button>");
            $(".stepTwo-container").append(liquorBtn);
        }
        
        // Grab user's button click choice
        // var userChoice = JSON.stringify(event.target);
        // console.log(userChoice);
        // var queryUrl = baseUrl + "filter.php?i=" + userChoice.toString();
        // console.log(queryUrl);
        // Make AJAX call for liquor choice




        // var tequilaBtn = $("<button class='btn btn-default' type='button' id='refBtn'> Choose your ingredient: </button>")
        // Populate new item - card? - that looks like the original button
            // Underneath populate box buttons each with a different liquor choice 
            // tequila, vodka, gin, whiskey, rum 
        
    })
    //break
    // $(".stepTwo-container").on("click", ".liquor-btn", function(){
    //     var userChoice = $(this).val();
    //     var queryUrl = baseUrl + "filter.php?i=" + userChoice;

    //     $.ajax({
    //         url: queryUrl,
    //         method: "GET"
    //     }).then(function(cocktails){;
    //         console.log(cocktails);
    //         var drinkOptions = cocktails.drinks // this is an array
    //         var randomSelection = drinkOptions[Math.floor(Math.random()*drinkOptions.length)];
    //         console.log(randomSelection);

    //         $(".row-1").attr("style", "display: block");
    //         $(".row-2").attr("style", "display: block");
    //         $(".stepTwo-container").attr("style", "display: none");
    //         $(".your-drink").append(randomSelection.strDrink);

    //         var img = $("<img src='" + randomSelection.strDrinkThumb + "' class='drinkImg img-fluid clearfix' />");
    //         console.log(randomSelection.strDrinkThumb);
    //         $(".drink-image").append(img);

    //         var displayCocktail = randomSelection.idDrink;

    //         getRecipe(displayCocktail);

    //     })

    //     $.ajax({
    //         type: "GET",
    //         url: "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    //     })
        
    //     // }
    // })

    // function getRecipe(x) {
    //     var recipeUrl = baseUrl + "lookup.php?i=" + x;
    //     console.log(recipeUrl);
    //     var options = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": recipeUrl,
    //         "method": "GET",
    //     }
        
    //     $.ajax(options).then(function(response){
    //         console.log(response);
    //         var drinkRecipe = response.drinks[0];

    //         var allIngredients = [
    //             {ingredient: drinkRecipe.strIngredient1, measure: drinkRecipe.strMeasure1},
    //             {ingredient: drinkRecipe.strIngredient2, measure: drinkRecipe.strMeasure2},
    //             {ingredient: drinkRecipe.strIngredient3, measure: drinkRecipe.strMeasure3},
    //             {ingredient: drinkRecipe.strIngredient4, measure: drinkRecipe.strIngredient5}, 
    //             {ingredient: drinkRecipe.strIngredient6, measure: drink
    //             drinkRecipe.strIngredient7, drinkRecipe.strIngredient8, drinkRecipe.strIngredient9,
    //             drinkRecipe.strIngredient10, drinkRecipe.strIngredient11, drinkRecipe.strIngredient12,
    //             drinkRecipe.strIngredient13, drinkRecipe.strIngredient14, drinkRecipe.strIngredient15
    //         ];

    //         // var allMeasures = [
    //         //     drinkRecipe.strMeasure1, drinkRecipe.strMeasure2, drinkRecipe.strMeasure3,
    //         //     drinkRecipe.strMeasure4, drinkRecipe.strMeasure5, drinkRecipe.strMeasure6,
    //         //     drinkRecipe.strMeasure7, drinkRecipe.strMeasure8, drinkRecipe.strMeasure9,
    //         //     drinkRecipe.strMeasure10, drinkRecipe.strMeasure11, drinkRecipe.strMeasure12,
    //         //     drinkRecipe.strMeasure13, drinkRecipe.strMeasure14, drinkRecipe.strMeasure15
    //         // ];

    //         $(".glass-type").append(drinkRecipe.strGlass);

    //         for (var i=0; i < allIngredients.length; i++) {
    //             if (allIngredients[i] == null) {
    //                 return;
    //             } else {
    //                 for (var i=0; i < allMeasures.length; i++) {
    //                     // if (allMeasures[i] !== null) {
    //                         $(".ingredient-list").append("<li>" + allMeasures[i] + allIngredients[i] + "</li>" )   
    //                     // }
    //                 }
    //             }
    //         }
    //         // $(".ingredient-list").append("<li>" + drinkRecipe.strIngredient1 + "," + drinkRecipe.strMeasure1 + "</li>");
    //         // $(".ingredient-list").append("<li>" + drinkRecipe.strIngredient2 + "," + drinkRecipe.strMeasure2 + "</li>");

    //         $(".instructions").append(drinkRecipe.strInstructions);
    //     })
        
    // }
    //break
    // categoryBtn.on("click", function(){
    //     // Hide dropdown
    //     // Populate new item that looks like original button
    //         // Underneath populate box buttons each with a different category
    //         // Show input with selection box for music 
    // })
    // categoryBtn.on("click", function(){
    //     // Hide dropdown
    //     // Populate new item that looks like original button
    //         // Underneath populate box buttons each with a different category
    //         // Show input with selection box for music 
    // })
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

})