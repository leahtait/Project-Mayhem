$(document).ready(function()  {
    var q = "bitcoin"
    var apiKey = "a5d3ce7509aa44c08d88ab9be804d0fb"
    var queryURL = "https://newsapi.org/v2/everything?q=" + q + "&apiKey=" + apiKey
    console.log(queryURL)
    
    $.ajax({
        url : queryURL,
        method : "GET"
    }).then (function(response){
        console.log(response)
        var stringResponse = JSON.stringify(response);
        document.getElementById("stringResponse").innerHTML = stringResponse;
    })
});