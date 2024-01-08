$(document).ready(function(){
    $('.like-btn').click(function(e){
        e.preventDefault();
       
        if($(this).hasClass('like'))
        {
            $(this).removeClass('like');
            $(this).addClass('dislike');
            $(this).html('Dislike');
        }
        else
        {
            $(this).removeClass('dislike');
            $(this).addClass('like');
            $(this).html('Like');
        }
    });
});