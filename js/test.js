

$(function(){
    
    $('.js-gallary').css('margin','10px').css('width', '20rem').css('height', '20rem').css('display', 'grid').css('grid-template-columns', ' 1fr 1fr 1fr 1fr 1fr 1fr',).css('grid-template-rows','1fr 1fr 1fr 1fr 1fr 1fr');
    $('img').css('width','100%').css('height','100%').css('object-fit','cover');
    
    
    var i = 1;
    $('div').each(function(){
    $(this).addClass('div'+i);
    var $div = $('.div'+ i);
    var $img_num = $(this).find('img').length;
    
    var y = 1;
    $(this).find('img').each(function(){
        $(this).addClass('img'+y);
        y++;
    });


    // var getImageSize = $(function) getImageSize () {
    //     var y = 1;
    //     var vertical = 0;
    //     $(this).find('img').each(function(){
    //         var height = $(this).height();
    //         var width = $(this).width();
    //         if(height > width){
    //             vertical = vertical + 1;
    //         };
    //         y++;
    //     });
    //     // $('.test').text(vertical);
    // }
        
        switch ($img_num) {

            case 1:
                $(this).find('.img1').css('grid-column','1/7').css('grid-row', '1/7');
            break;
            case 2:
                
            
                var y = 1;
                var vertical = 0;
                $(this).find('img').each(function(){
                    var height = $(this).height();
                    var width = $(this).width();
                    if(height > width){
                        vertical = vertical + 1;
                    };
                    y++;
                });
                // $('.test').text(vertical);
                
                if (vertical >= 1){
                    //2-a
                    $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/7');
                    $(this).find('.img2').css('grid-column','4/7').css('grid-row', '1/7');
                }else{
                    //2-b
                    $(this).find('.img1').css('grid-column','1/7').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','1/7').css('grid-row', '4/7');
                };
            break;

            case 3:
                var y = 1;
                var vertical = 0;
                $(this).find('img').each(function(){
                    var height = $(this).height();
                    var width = $(this).width();
                    if(height > width){
                        vertical = vertical + 1;
                    };
                    y++;
                });
                // $('.test').text(vertical);

                if (vertical == 0){
                    //3-c
                    $(this).find('.img1').css('grid-column','1/7').css('grid-row', '1/5');
                    $(this).find('.img2').css('grid-column','1/4').css('grid-row', '5/7');
                    $(this).find('.img3').css('grid-column','4/7').css('grid-row', '5/7');
                }else if(vertical == 2){
                    //3-b  
                    $(this).find('.img1').css('grid-column','1/7').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','1/4').css('grid-row', '4/7');
                    $(this).find('.img3').css('grid-column','4/7').css('grid-row', '4/7');
                }else{
                     //3-a  
                     $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/7');
                     $(this).find('.img2').css('grid-column','4/7').css('grid-row', '1/4');
                     $(this).find('.img3').css('grid-column','4/7').css('grid-row', '4/7');
                };
            break;

            case 4:
                var y = 1;
                var vertical = 0;
                $(this).find('img').each(function(){
                    var height = $(this).height();
                    var width = $(this).width();
                    if(height > width){
                        vertical = vertical + 1;
                    };
                    y++;
                });
                // $('.test').text(vertical);

                if (vertical == 0){
                    //4-a
                    $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','4/7').css('grid-row', '1/4');
                    $(this).find('.img3').css('grid-column','1/4').css('grid-row', '4/7');
                    $(this).find('.img4').css('grid-column','4/7').css('grid-row', '4/7');
                }else if(vertical == 1){
                     //4-b
                    $(this).find('.img1').css('grid-column','1/7').css('grid-row', '1/5');
                    $(this).find('.img2').css('grid-column','1/3').css('grid-row', '5/7');
                    $(this).find('.img3').css('grid-column','3/5').css('grid-row', '5/7');
                    $(this).find('.img4').css('grid-column','5/7').css('grid-row', '5/7');
                }else if(vertical >= 2){
                     //4-c  
                     $(this).find('.img1').css('grid-column','1/5').css('grid-row', '1/7');
                     $(this).find('.img2').css('grid-column','5/7').css('grid-row', '1/3');
                     $(this).find('.img3').css('grid-column','5/7').css('grid-row', '3/5');
                     $(this).find('.img4').css('grid-column','5/7').css('grid-row', '5/7');
                };
            break;

            case 5:
                var y = 1;
                var vertical = 0;
                $(this).find('img').each(function(){
                    var height = $(this).height();
                    var width = $(this).width();
                    if(height > width){
                        vertical = vertical + 1;
                    };
                    y++;
                });
                // $('.test').text(vertical);

                if (vertical == 0){
                    //5-a
                    $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','1/4').css('grid-row', '4/7');
                    $(this).find('.img3').css('grid-column','4/7').css('grid-row', '1/3');
                    $(this).find('.img4').css('grid-column','4/7').css('grid-row', '3/5');
                    $(this).find('.img5').css('grid-column','4/7').css('grid-row', '5/7');
                }else if(vertical == 1){
                     //5-b
                    $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','4/7').css('grid-row', '1/4');
                    $(this).find('.img3').css('grid-column','1/3').css('grid-row', '4/7');
                    $(this).find('.img4').css('grid-column','3/5').css('grid-row', '4/7');
                    $(this).find('.img5').css('grid-column','5/7').css('grid-row', '4/7');
                }else if(vertical == 2){
                     //5-c
                     $(this).find('.img1').css('grid-column','1/4').css('grid-row', '1/5');
                     $(this).find('.img2').css('grid-column','4/7').css('grid-row', '1/5');
                     $(this).find('.img3').css('grid-column','1/3').css('grid-row', '5/7');
                     $(this).find('.img4').css('grid-column','3/5').css('grid-row', '5/7');
                     $(this).find('.img5').css('grid-column','5/7').css('grid-row', '5/7');
                }else if(vertical >= 3){
                    //5-d
                    $(this).find('.img1').css('grid-column','1/5').css('grid-row', '1/4');
                    $(this).find('.img2').css('grid-column','1/5').css('grid-row', '4/7');
                    $(this).find('.img3').css('grid-column','5/7').css('grid-row', '1/3');
                    $(this).find('.img4').css('grid-column','5/7').css('grid-row', '3/5');
                    $(this).find('.img5').css('grid-column','5/7').css('grid-row', '5/7');
                };
            break;
            
        }
        
    　i++;
    });

    var mySmartPhoto = new SmartPhoto(".js-smartPhoto-fit");
     $('.js-smartPhoto').onClick.mySmartPhoto.zoomPhoto();

    



});

