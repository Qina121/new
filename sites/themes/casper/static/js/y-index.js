// banner动画
$(".carousel").carousel({
  interval: 2000
});




$(function() {
  $.scrollify({
    section : ".fixHeight",
    before:function(i,sections) {
      $('.small_nav').find('a').css("backgroundColor", "#fff");
      $(sections[i]).find(".opacity0").animate({ opacity: 0,scale:0}, 0);
      $(sections[i]).find(".h3_title").stop().animate({ opacity: 0,scale:0.5}, 0);
      $(sections[i]).find(".h3_title").css({ transform: "scale(0,0)", transition: "0s" });
      $(sections[i]).find(".text_color").animate({ opacity: 0,scale:0,color:'#000'}, 0);
    },
    after:function(i,sections) {
      $('.small_nav').find('a').eq(i).css("backgroundColor", "#ccc");
      $(sections[i]).find(".title_1").stop().animate({ opacity: 1,scale:1}, 400);
      $(sections[i]).find(".title_2").stop().animate({ opacity: 1,scale:1}, 600);
      $(sections[i]).find(".title_3").stop().animate({ opacity: 1,scale:1}, 800);
      $(sections[i]).find(".title_4").stop().animate({ opacity: 1,scale:1}, 1000);
      $(sections[i]).find(".function1").stop().animate({ opacity: 1,scale:1}, 1000);
      $(sections[i]).find(".arrow1").stop().animate({ opacity: 1,scale:1}, 1200);
      $(sections[i]).find(".function2").stop().animate({ opacity: 1,scale:1}, 1400);
      $(sections[i]).find(".arrows").stop().animate({ opacity: 1,scale:1}, 1600);
      $(sections[i]).find(".add_thing").stop().animate({ opacity: 1,scale:1}, 1800);
      $(sections[i]).find(".arrows_five").stop().animate({ opacity: 1,scale:1}, 2000);
      $(sections[i]).find(".people").stop().animate({ opacity: 1,scale:1}, 2200);
      $(sections[i]).find(".cover_arrow").stop().animate({ opacity: 1,scale:1}, 2400);
      $(sections[i]).find(".data").stop().animate({ opacity: 1,scale:1}, 2600);
      // 轻量级动画
      $(sections[i]).find(".text_1").stop().animate({ opacity: 1,scale:1}, 300);
      $(sections[i]).find(".text_2").stop().animate({ opacity: 1,scale:1}, 600);
      $(sections[i]).find(".text_3").stop().animate({ opacity: 1,scale:1}, 900);
      //h3动画
      $(sections[i]).find(".h3_title").stop().animate({ opacity: 1}, 100);
      $(sections[i]).find(".h3_title").css({ transform: "scale(1,1)", transition: "0.1s" });
      $(sections[i]).find(".text_color").stop().animate({ opacity: 1,scale:1}, 900,function(){
    
          $(sections[i]).find(".text_color").css({ transform: "scale(1.1,1.1)", transition: "0.2s" });
       
      });
    },
  });
});


  //form表单
//  $(".email").blur(function(){
//   var val = $('.email').val();
//   console.log(val)
//   var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
//   if(re.test(val)){
//     $(this).css('border','1px solid #f2f2f2')
//   }else{
//     $(this).css('border','1px solid red')
//   }
  
//  })
 
//  $(".phone").blur(function(){
//   var val = $('.phone').val();
//   console.log(val)
//   var t = /^1\d{10}$/;
//   if(t.test(val)){
//     console.log(1111)
//     $(this).css('border','1px solid #f2f2f2')
//   }else{
//     console.log(2222)
//     $(this).css('border','1px solid red')
//   }
  
//  })
 

//点击滚屏营销自动化
var navA = $('.small_nav').find('a');
navA.on("click", function() {

  var index = $(this).index();
  navA.css('backgroundColor','#fff');
  console.log($(this))
  $(this).css('backgroundColor','#ccc');

  $.scrollify.move(index);
});


//给导航添加下划线
window.onload = function(){
 
 var url=window.location.pathname;  
  //转换成字符串  
  console.log(url)
  url=url.toString();  
  var array=new Array();//用来存放分分割后的字符串  
  array=url.split("/");  
  console.log(array[2])
for(var i=0;i<$('.nav_item').length;i++){
  
  console.log($('.nav_item').eq(i).attr("mark"));
  console.log($('.nav_item').eq(i))
  if($('.nav_item').eq(i).attr("mark")==array[2]){
    
    $('.nav_item').eq(i).find('.line').stop().animate({ width:'100px',opacity:1}, 200)
  }
}
  

}

//每个导航栏的移入下划线
$('.nav_item').mouseenter(function(){
  $(this).find('.line').stop().animate({ width:'100px',opacity:1}, 300);
})
$('.nav_item').mouseleave(function(){
  $(this).find('.line').stop().animate({ width:'0px',opacity:0}, 300);
})

//监测滚动条变化
var header = $('.y-header');
$(window).scroll(function (){
  if($(window).scrollTop()>0){
    header.css({'box-shadow':'0px 0px 2px 2px #ccc'})
  }else{
    header.css({'box-shadow':'none'})
  }
})



// $(window).scroll(function () {
//   var header = $('.y-header');
//   var child_nav = $('.child_nav');
//   var auto_item = $('.auto_item');
//   var green_bg = $('.green_bg');
//   if($(window).scrollTop()>0){
//     header.css({'box-shadow':'0px 0px 2px 2px #ccc',"backgroundColor":"#fff"})
//     header.find('a').css('color','#666');
//     $('#tip').find('.scope').css('color','#666');
//     child_nav.find('li').css('backgroundColor','#fff');
//     auto_item.find('li').css('backgroundColor','#fff');
  
//     $('.green_bg'). mouseenter (function(){
//       $(this).css('backgroundColor','#339966');
//       $(this).find('a').eq(0).css('color','#fff');
//     })
//     $('.green_bg'). mouseleave(function(){
//       $(this).css('backgroundColor','#fff');
//       $(this).find('a').eq(0).css('color','#666');
//     })

//     $('.nav_item').mouseenter(function(){
//       $(this).find('.scope').css('color','#000')
//     })
//     $('.nav_item').mouseleave(function(){
//       $(this).find('.scope').css('color','#666')
//     })

//     $('#tip').find('.scope').mouseenter(function(){
//       $(this).css('color','#000')
//     })
//     $('#tip').find('.scope').mouseleave(function(){

//       $(this).css('color','#666')
//     })
//   }else{
//     //banner的背景色
//     header.css({'box-shadow':'0px 0px 0px 0px #ccc',"backgroundColor":"rgb(0,0,0,0.8)"})
//     header.find('a').css('color','#ccc');
//     $('#tip').find('.scope').css('color','#ccc');
//     //二级导航和三级导航的背景色
//     child_nav.find('li').css('backgroundColor','rgba(0,0,0)');
//     auto_item.find('li').css('backgroundColor','rgba(0,0,0)');

//     //移入移出时每个li的颜色
//     $('.green_bg'). mouseenter (function(){
//       $(this).css('backgroundColor','#339966');
//       $(this).find('a').eq(0).css('color','#fff');
//     })
//     $('.green_bg'). mouseleave(function(){
//       $(this).css('backgroundColor','#000');
//       $(this).find('a').eq(0).css('color','#ccc');
//     })

//     $('.nav_item').mouseenter(function(){
//       $(this).find('.scope').css('color','#fff')
//     })
//     $('.nav_item').mouseleave(function(){
//       $(this).find('.scope').css('color','#ccc')
//     })
//     $('#tip').find('.scope').mouseenter(function(){
//       $(this).css('color','#fff')
//     })
//     $('#tip').find('.scope').mouseleave(function(){

//       $(this).css('color','#ccc')
//     })
    
//   }
  
// })

// 导航

$(document).ready(function() {

    //页面加载之后执行三个小block下滑突出的效果
  slide();
    function slide(){
      $('.y-apply .block').stop().animate({ "marginTop": "0"}, 600);
    }
    

  $(".nav_item"). mouseenter(function() {
    // console.log(1)
    $(this)
      .find(".child_nav")
      .stop()
      .animate({ opacity: "1", height: "120px" }, 300);
    
  });
  $(".nav_item"). mouseleave(function() {
    $(this)
      .find(".child_nav")
      .stop()
      .animate({ opacity: "0", height: "0" }, 300);
    
    });
    $(".auto_marking"). mouseenter (function() {
       console.log(1)
      $(this).find(".auto_item")
        .stop()
        .animate({ opacity: "1", height:"160px" }, 300);
      
    });
    $(".auto_marking"). mouseleave(function() {
    
      $(this).find(".auto_item")
        .stop()
        .animate({ opacity: "0", height:"0"}, 300);
      
      });

      $('.green_bg'). mouseenter (function(){
              $(this).css('backgroundColor','#52bad5');
              $(this).find('a').eq(0).css('color','#fff');
            })
            $('.green_bg'). mouseleave(function(){
              $(this).css('backgroundColor','#fff');
              $(this).find('a').eq(0).css('color','#666');
            })
        
            $('.nav_item').mouseenter(function(){
              $(this).find('.scope').css('color','#52c41a')
            })
            $('.nav_item').mouseleave(function(){
              $(this).find('.scope').css('color','#666')
            })
        
            // $('#tip').find('.scope').eq(1).mouseenter(function(){
            //   $(this).css('color','#52bad5')
            // })
            // $('#tip').find('.scope').eq(1).mouseleave(function(){
        
            //   $(this).css('color','#666')
            // })
            // $('.consult').mouseenter(function(){
            //   $(this).css('backgroundColor','#2c9ab7')
            // })
            // $('.consult').mouseleave(function(){
            //   $(this).css('backgroundColor','#52bad5')
            // })
            // $('.consult').mouseenter(function(){
            //   $(this).find('a').css('color','#fff')
            // })
            // $('.consult').find('a').mouseleave(function(){
            //   $(this).css('color','#ccc')
            // })

      // $('.green_bg'). mouseenter (function(){
      //   $(this).css('backgroundColor','#339966');
      //   $(this).find('a').eq(0).css('color','#fff');
      // })
      // $('.green_bg'). mouseleave(function(){
      //   $(this).css('backgroundColor','#000');
      //   $(this).find('a').eq(0).css('color','#ccc');
      // })
      // $('.nav_item').mouseenter(function(){
      //   $(this).find('.scope').css('color','#fff')
      // })
      // $('.nav_item').mouseleave(function(){
      //   $(this).find('.scope').css('color','#ccc')
      // })

      var win_state = true;
    
        $('.y-consult').on('click',function(event){
          if(win_state){
            $('.consult_win').stop().animate({ opacity: "1", height: "344px" ,width:"270px"}, 300);
            win_state = false;
           
          }else{
            
              $('.consult_win').stop().animate({ opacity: "0", height: "0px",width:"0px" }, 300);
              win_state = true;
          }

          event.stopPropagation();
          
          
        })
        $(".consult_win").on('click',function(event){
               event.stopPropagation();
        });

        $(document).on('click',function(){
         
          $('.consult_win').stop().animate({ opacity: "0", height: "0px",width:"0px" }, 300);
          win_state = true;
         }) 

        $(".email").blur(function(){
          var val = $(this).val();
          console.log(val)
          var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
          if(re.test(val)){
            $(this).css('border','1px solid #f2f2f2');
          }else{
            $(this).css('border','1px solid red');
          }
          
         })
         
         $(".phone").blur(function(){
          var val = $(this).val();
          console.log(val)
          var t = /^1\d{10}$/;
          if(t.test(val)){
            console.log(11)
            $(this).css('border','1px solid #f2f2f2');
          }else{
            console.log(222)
            $(this).css('border','1px solid red');
          }
          
         })
      
         var block = $('.y-apply .model .block')
         console.log(block)
         block.mouseenter(function(){
          
          $(this).find('.desc').css({ display: "block", transition: "1s" });
          $(this).find('.desc').stop().animate({ height: "80px",opacity:"1" }, 300);
          // $(this).css({ transform: "scale(1.1,1.1)", transition: "0.7s" });
          
         })
         block.mouseleave(function(){
          // $(this).css({ transform: "scale(1,1)", transition: "0.7s" });
          
          $(this).find('.desc').stop().animate({ "height": "0px" ,opacity:"0"}, 600,function(){
            console.log(33333333)
            //$(this).css({ display: "none"});
          });
         })


         


         
})

  var W = $(window).width()+'px';
var H = $(window).width()+'px';
  $('.y-header .child_nav_2').css("width",W)
  console.log($(window).width()+'px')

  $('.introduction').mouseenter(function(){
    $('.y-header .child_nav_2').animate({ opacity: "0.8", height: "60px" }, 300);
  })
  $('.y-header .header_logo').mouseenter(function(){
    out();
  })
  $('.y-header .show').mouseenter(function(){
    out();
  })
  $('.y-header .child_nav_2').mouseleave(function(){
    out();
  })
function out(){
  $('.y-header .child_nav_2').animate({ opacity: "0", height: "0" }, 300);
}

$('.y-header .child_nav_2 a').mouseenter(function(){
  $(this).css({ transform: "scale(1,1)", transition: "0.6s" });
})
$('.y-header .child_nav_2 a').mouseleave(function(){
  $(this).css({ transform: "scale(0.9,0.9)", transition: "0.6s" });
})
  