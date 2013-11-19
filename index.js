(function($) {
    var methods = {
        init : function(options) {
            var settings = {
                callback: function() {}
            };

            if ( options ) {
                $.extend( settings, options );
                }

            $(":jqmData(role='page')").each(function() {
                $(this).bind("swiperight", function() {
                    var nextPage = parseInt($(this).attr("id").split("page")[1]) - 1;
                    if (nextPage === 0) 
                        nextPage = 3;

                    $.mobile.changePage("#page"+nextPage, "slide");
                    });                        

                $(this).bind("swipeleft", function() {
                    var nextPage = parseInt($(this).attr("id").split("page")[1]) +1;
                    if (nextPage === 4) 
                        nextPage = 1;

                    $.mobile.changePage("#page"+nextPage, "slide");
                });
            })
        }
        }

    $.fn.initApp = function(method) {
        if ( methods[method] ) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } 
        else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } 
        else {
            $.error( 'Method ' + method + ' does not exist' );
        }
    }
    })(jQuery);

$(document).ready(function(){
    $().initApp();
});
