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

        // var searchTerm = $(this).val()
        // if (searchTerm == Tequila) {}

    })

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