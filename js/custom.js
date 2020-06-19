//load more and load less

$(document).ready(function() {
    size_li = $("#post.post-preview").size();
    x = 3;
    $('#post.post-preview:lt(' + x + ')').show();
    $('#loadMore').click(function() {
      x = (x + 5 <= size_li) ? x + 5 : size_li;
      $('#post.post-preview:lt(' + x + ')').show();
    });
    $('#showLess').click(function() {
      x = (x - 5 < 0) ? 3 : x - 5;
      $('#post.post-preview').not(':lt(' + x + ')').hide();
    });
  });


// scroll back to top
  
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});