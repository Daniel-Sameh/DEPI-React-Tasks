$(document).ready(function(){
    $('.favorite').click(function(){
        $(this).find('i').fadeOut(200,  ()=>{
            if($(this).find('i').attr("class")=="far fa-heart"){
                $(this).find('i').attr("class","fas fa-heart");
            }else{
                $(this).find('i').attr("class","far fa-heart");
            }
        });
        $(this).find('i').fadeIn(200);
    });
});
