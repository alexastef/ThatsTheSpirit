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

    $(".stepTwo-container").on("click", ".liquor-btn", function(){
        var userChoice = $(this).val();
        var queryUrl = baseUrl + "filter.php?i=" + userChoice;

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(cocktails){;
            console.log(cocktails);
            var drinkOptions = cocktails.drinks // this is an array
            var randomSelection = drinkOptions[Math.floor(Math.random()*drinkOptions.length)];
            console.log(randomSelection);

            $(".row-1").attr("style", "display: block");
            $(".row-2").attr("style", "display: block");
            $(".stepTwo-container").attr("style", "display: none");
            $(".drink-container").append("<h3>" + randomSelection.strDrink + "</h3>" );

            var img = $("<img src='" + randomSelection.strDrinkThumb + "' class='drinkImg img-fluid clearfix' />");
            console.log(randomSelection.strDrinkThumb);
            $(".drink-container").append(img);

            var displayCocktail = randomSelection.idDrink;

            getRecipe(displayCocktail);

        })

    })

    function getRecipe(x) {
        var recipeUrl = baseUrl + "lookup.php?i=" + x;
        console.log(recipeUrl);
        
        $.ajax({
            queryUrl: recipeUrl,
            method: "GET",
            data: jsonData,
            dataType: "json"
            // crossDomain: true,
        }).then(function(response){
            console.log(response);
        })
        
    }

    // categoryBtn.on("click", function(){
    //     // Hide dropdown
    //     // Populate new item that looks like original button
    //         // Underneath populate box buttons each with a different category
    //         // Show input with selection box for music 
    // })

    // randomBtn.on("click", function(){
    //     // populate 
    // })

})