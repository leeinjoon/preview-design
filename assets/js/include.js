(function($){
    var obj      = { path : 'img/', extension : '.png' },
        filename = obj.path + window.location.href.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1] + obj.extension;
    $(function(){
        $('img').attr('src', filename);
        jQuery.event.add(window, 'load', function(){
            var p1 = delay1(),
                p2 = p1.then(delay2),
                p3 = p2.then(delay3);
            function delay1() {
                var d = new $.Deferred;
                setTimeout(function(){
                    var isSrc = $('img').height() > 100 ? obj.extension = '.png' : obj.extension = '.jpg';
                    filename  = obj.path + window.location.href.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1] + obj.extension;
                    $('img').attr('src', filename);
                    d.resolve();
                }, 1000);
                return d.promise();
            }
            function delay2() {
                setTimeout(function(){
                    $('body').height($('img').height()).css({
                        'background':'url(' + filename + ') center no-repeat'
                    });
                }, 500);
            }
            function delay3() {
                $('img').hide();
            }
        });
    });
})(jQuery);