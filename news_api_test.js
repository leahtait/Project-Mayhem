$(document).ready(function()  {
    
    // Global Variables 
    // =============================================================================



    // Building the query parameters for API call (will be based on)
    function buildApiQuery() {
        // this should be called whenever a new value is added 
        var q = "bitcoin"
        var apiKey = "a5d3ce7509aa44c08d88ab9be804d0fb"
        var queryURL = "https://newsapi.org/v2/everything?q=" + q + "&apiKey=" + apiKey
        
        // testing 
        console.log(queryURL)
        
        return queryURL
    }
    
    // API call 
    function apiCallToGoogleNews(queryURL) { // 
        // Call the build query function ()
        buildApiQuery();

        $.ajax({
            url : queryURL,
            method : "GET"
        }).then (function(response){
            console.log(response)
            // var stringResponse = JSON.stringify(response);
            // document.getElementById("stringResponse").innerHTML = stringResponse;
        return response
        }) 
    };
    
    // Displaying links to news stories that meet the filtering criteria (could change this to trending articles from a specific source)
    function displayingScrubbedArticles(response) {
        
        // calling the API call function 
        apiCallToGoogleNews();

        for (var i = 0; i < 20; i++) {
            
            // Creating a div to hold the movie
            var articles = $("<div id='articles'>");
            
            // Storing the title of the article 
            var pTitle = $("<p>").text("Title: " + response.articles[i].title)
            console.log(response.articles[i].title)
            // Displaying the title
            articles.append(pTitle)
            
            // Append the built div to the page
            $("#MainDisplay").append(articles);
        }
    };  
    
    // Function Calls
    //=============================================================================
    
    // On click of submit "Give me news I choose" call the API call 
    $('filtered-news-button').on('click', function() {
        // Stops the default behavior of the input from overriding our desired behavior
        event.preventDefault();

        displayingScrubbedArticles();
        // 
    });

    // Testing 
    buildApiQuery();
    apiCallToGoogleNews();


}); // clousure to document on ready 