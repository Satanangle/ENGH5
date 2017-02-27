$(function(){
   $('header div span').fadeIn(2000);
   
});
 jQuery(document).ready(function($) {
            $('a[data-rel^=lightcase]').lightcase();//简单例子
            
            $('a[data-rel="lightcase:example_group:slideshow"]').lightcase({showSequenceInfo : false, transition : 'scrollHorizontal'});//相册例子
            
            $('a[data-rel="lightcase:example_group"]').lightcase({showSequenceInfo:false});
            
            $('#example1').lightcase({transition : 'none'});
            
            $('#example2').lightcase({transition : 'fade'});
            
            $('#example3').lightcase({transition : 'elastic'});
            
            $('#example4').lightcase({transition : 'scrollTop'});
            
            //video as html5 with fallback
            $('#various5').lightcase({
                showSequenceInfo:false,
                onStart:function() {
                    html5media();
                }
            });
            
            // video as iframe
            $('#various6').lightcase({
                iframe : {
                    width : 516,
                    height : 315,
                    frameborder : 0
                }
            });
            
            // video as flash
            $('#various7').lightcase({
                type : 'flash',
                flash : {
                    width : 516,
                    height : 315
                }
            });

            $('#box1.all>a').click(function(){
                $(this).css('background','red').siblings().css('background','')
            });

            $('#box1.all>a').eq(1).click(function(){
                $('#box1.all').css('height','572px');
            }).siblings().click(function(){
                $('#box1.all').css('height','');
            });


        })