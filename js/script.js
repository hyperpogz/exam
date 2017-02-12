$(function(){

    $('a[href="#"],.categorySubmit input').click(function(e){
        e.preventDefault(); 
    });

    $('.closeBtn,.overlay,.close span').click(function(){
        $('.modals,.overlay').fadeOut();
    });

    $('.readReview').each(function(){
        $(this).click(function(){
            $(this).parents('.rConTxt').next().fadeIn()
            $('.overlay').fadeIn();
        });
    });
   
    $('.categoryBtn').click(function(){
        $('.otherCategory,.overlay').fadeIn();
    });
   

    $('#category').change(function(){
        
        var category = $(this).val();
        $('.categoryModal,.overlay').fadeIn();
        $('.modalHTxt span').text(category);
        
    });


    var city  =  ["Nowheressville, XX 000000"];

    $("#inputAddress").autocomplete({
        source: city,
        open : function(){
            $(".ui-autocomplete:visible").css({top:"+=1",left:"+=25"});
        }
    });

});