var list = '';
$(document).ready(function() {
    
    console.log("at start");
    var url = ' http://api.themoviedb.org/3/movie/popular?',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=bab007b9a6288af1455b8cee1f4f9d36';

    $('#pop').click(function() {
//        var input = $('#movie').val(),
//            movieName = encodeURI(input);
        $.ajax({
            type: 'GET',
            url: url + mode  + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
                list =json.result;
                mylist();
            },
            error: function(e) {
                console.log(e.message);
            }
        });
    });
});

function mylist(){
    
    for (i=0; i < list.length ; i++){
       $("#movies").append("<p>"+list[i].original_title+"</p>");
   
    }
}