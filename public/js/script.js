var API_KEY     = 'AIzaSyAWWmUl2iNij7nKBIQpajWAsDI6IaT9Ymc';
var SEARCH_URL  = 'https://www.googleapis.com/youtube/v3/search';
var MAX_RESULTS = '5';


$(function(){

    httpAjaxRequest();
});

$(function(){
    $('.video-list').on('click', '.video', function( e ){
        e.preventDefault();
        $('.embed-responsive-item').attr('src', $(this).attr('href'));
        $('.embed-responsive').removeClass('d-none');
    });
});


$(function(){
    $('.form').on('submit', function( e ){
        e.preventDefault();
        httpAjaxRequest( $( this ) );
    });
});

function httpAjaxRequest( $form = null ){

    var param = {
        key: API_KEY ,
        part: 'snippet',
    };

    if( $form ){

        $.each( $form.serializeArray(), function(i, input){
            param[ input.name ] = input.value;
        });

        $.ajax({
            url: $form.attr('action'), 
            data: param,
            success: function( response ){
                generateVideoList( response );
            }
        });
    }
    else{

        $.ajax({
            url: SEARCH_URL, 
            data: param,
            success: function( response ){
                generateVideoList( response );
            }
        });
    }
}


function generateVideoList( response ){
    var dom = '';

    $.each( response.items, function(i, item){
        dom += '<li class="media mb-3 bg-light">';
        dom += '<img src="'+item.snippet.thumbnails.medium.url+'" class="mr-3" alt="...">';
        dom += '<div class="media-body pt-2">';
        dom += '<h5 class="mt-0 mb-1 "><a class="video text-dark" href="https://www.youtube.com/embed/'+item.id.videoId+'">'+item.snippet.title+'</a></h5>';
        dom += '<div class="video-info small text-secondary  mb-3">';
        dom += '<span>' + item.snippet.channelTitle + '</span>';
        dom += '<span class="ml-3">' + moment( item.snippet.publishedAt , "YYYYMMDD").fromNow() + '</span>';    
        dom += '</div>';
        dom += '<span class="small">'+ item.snippet.description + '</span>';
        dom += '</div>';
        dom += '</li>';
    });

    $('.video-list').html( dom );
    
}