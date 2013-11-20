$(document).on('pagebeforeshow', 'div[data-role="page"]', function(){    
    selectbubble($(this));
});

$(document).off('swipeleft').on('swipeleft', 'div[data-role="page"]', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('div[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).off('swiperight').on('swiperight', 'div[data-role="page"]', function(event){   
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('div[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});

function selectbubble(page) {
    $.each($('#bubble-holder div'), function (index,value) {
        var bubble = $(this);
        bubble.css('background','#3408AE'); 
        if(bubble.attr('id') === 'page' + page.attr('data-pagination') + '-bubble'){
            bubble.css('background','#0B0228');
        }
    });    
}