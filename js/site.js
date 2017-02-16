//'use strict'

$(document).ready(function() {
    $('input[placeholder]').blur(function(){
        var elem = $(this);
        if(elem.val() === ''){
            elem.addClass('error');
        } else {
            elem.removeClass('error');
        }
    });
	$("#form").submit(function() {
        var arrError = [];
        $(this).find('input[placeholder]').each(function(){
            var elem = $(this);
            if(elem.val() === ''){
                arrError.push("false");
                elem.addClass('error');
            } else {
                elem.removeClass('error');
            }
        });
        for(var i = 0; i < arrError.length; i++){
            if(arrError[i] === 'false'){
                console.log('false');
                return false;
            }
        }
        $.ajax({
            type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $("#form").trigger("reset");

        });
        if($(this).hasClass('form3')){
            $('.dogincircle').show();
        }
        return false;
	});

});




