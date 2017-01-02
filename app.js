$(document).ready(function () {

  $("#movie-search-button").on("click",function(){
    var userSearch = $("#movie-title").val();
    
    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t=" + encodeURIComponent(userSearch),
      success: function(movie) { // people can be used interchangebly with anything as long as it is consistent in the code
        $("#search-input-box").hide();

        HANDLE.renderTemplate({
          templateSource: "#movies",
          data: movie,
          where: "#movie-card-container",
          clearOriginal: false
        });
      },
      error: function () {
        alert("Error getting Movies!");
      }
    });
  });
});
