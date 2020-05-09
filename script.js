$(document).ready(function(){

    var ingredientBtn = $("#ingredient");
    var categoryBtn = $("#category");
    var randomBtn = $("#random");

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

        
        // var userChoice = event.target;
        // console.log(userChoice);

        // var tequilaBtn = $("<button class='btn btn-default' type='button' id='refBtn'> Choose your ingredient: </button>")
        // Populate new item - card? - that looks like the original button
            // Underneath populate box buttons each with a different liquor choice 
            // tequila, vodka, gin, whiskey, rum 
        
    })
    $(".stepTwo-container").on("click", ".liquor-btn", function(){
        console.log($(this).val());
    })
        // var searchTerm = $(this).val()
        // if (searchTerm == Tequila) {}
        // randomBtn.on("click", function(){
    randomBtn.on("click", function(){
        //also hide the dropdown button
        $(".dropdown").attr("style", "display:none");
        var randomDrinks = ["Clover Club", "City Slicker", "Brandy Alexander", "Affair", "Mimosa", "Shanghai Cocktail"," Scotch Cobbler", "Run Milk Punch", "Army Special", "Hot Chocolate to Die for"];
        // // for (var i=0; i<randomDrinks.length; i++){
    
        var selectedRandomDrink = Math.floor(Math.random()*10)+1;
        console.log(selectedRandomDrink);
        var youSelected = "Here is your drink " + randomDrinks[selectedRandomDrink];
        console.log(youSelected);

        $.ajax({
            type: "GET",
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        })
        
        // }
    })
    // categoryBtn.on("click", function(){
    //     // Hide dropdown
    //     // Populate new item that looks like original button
    //         // Underneath populate box buttons each with a different category
    //         // Show input with selection box for music 
    // })

})