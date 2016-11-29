/**
 * Created by Przemek on 2016-11-29.
 */
$(window).resize(function(){
    if($(window).width() < 768){

        $('.xlink').on('click', function(){
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
        });
    }
    else{

    }
});