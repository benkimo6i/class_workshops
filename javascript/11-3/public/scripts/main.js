//turn generic array into bulleted list
//(works for any number of Stooges)
var renderList = function(list) {
  //start bulleted list
  var ul = document.createElement("ul");

  //loop through each item in the array
  for (var i in list) {
    //create list item element for each item
    var li = document.createElement("li");
    //copy the data from the array item to the list item element
    $(li).html(list[i]);
    //add the list item element to the bulleted list
    $(ul).append(li);
  }

  //return the bulleted list
  return ul;
}

//on page load
$(function() {
  $(".stooges-menu a").click(function(event) {
    event.preventDefault(); //don't follow link

    var clickedLink = event.target;

    console.debug(clickedLink); //debug: what did we click?

    //get destination URL from link's href property
    var url = $(clickedLink).prop("href");

    console.debug(url); //debug: where are we going?

    $.get(url, function(response) {
      var responseType = "N/A";
      var stoogesHTML = "";

      //what kind of response did we get?
      //(usually you would know in advance, so this is unusual)
      if (response.constructor == String) {
        //we got HTML from the view template
        responseType = "HTML";

        //put it on the page as is
        var stoogesHTML = response;

      } else if (response.constructor == Array) {
        //we got data as JSON (converted to an Array by jQuery):
        responseType = "JSON";

        //render it (i.e. turn the data into HTML) in the browser
        stoogesHTML = renderList(response);

      } else {
        //it's always good to have "else" to handle unusual situations
        console.warn("Response type: None of the above!");
        console.warn(response.constructor);
      }

      $("#stooges").html("<p>Got "+ responseType +" from the server!</p>");
      $("#stooges").append(stoogesHTML);
    });
  });
});
