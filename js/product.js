// $(document).ready(function(){
//     let cate_no = get_url_info("cate_no");

//     // 
//     $('.sec_head').text(title_array[cate_no])
//     // sec에 아이디 넣기
//     let v_id = menu_array[cate_no];
//     $('.sec').prop('id',v_id);

//     load_items(cate_no, 8)


//     // 무한스크롤링
//     let tmp = 0;
//     $(window).scroll(function(){
//         let s_bot = $(window).scrollTop() + $(window).height();
//         let f_o_top = $('.footer').offset().top;

//         if(s_bot >= f_o_top) {
//             load_items(cate_no, 8)
//         }
    

//     })

// })

/***** 햄버거 메뉴판 나오는 코드 시작 *****/
$(document).ready(function() {
    let chk = true;

$('.hamberg').click(function(){
$('.menu_pan').toggleClass('menu_pan_active')

/***** X자 만드는 코드 시작 *****/
if(chk) { // X자 만드는부분
$('#line_top').css({
   transform: 'translateY(10px)',
})
setTimeout(function(){
   $('#line_top').css({
       transform: 'translateY(10px) rotate(45deg)',
   })
}, 500)

setTimeout(function(){
   $('#line_mid').css({
       transform: 'scale(0)'
   })
}, 500)

$('#line_bot').css({
   transform: 'translateY(-10px)',
})
setTimeout(function(){
   $('#line_bot').css({
       transform: 'translateY(-10px) rotate(-45deg)',
   })
}, 500)
}
else { // = 자 만드는부분
$('#line_top').css({
   transform: 'translateY(10px) rotate(0)',
})
setTimeout(function(){
   $('#line_top').css({
       transform: 'translateY(0)',
   })
}, 500)

setTimeout(function(){
   $('#line_mid').css({
       transform: 'scale(1)'
   })
}, 500)

$('#line_bot').css({
   transform: 'translateY(-10px) rotate(0)',
})
setTimeout(function(){
   $('#line_bot').css({
       transform: 'translateY(0)',
   })
}, 500)
}
chk = !chk;

/***** X자 만드는 코드 끝 *****/
})
})
/***** 햄버거 메뉴판 나오는 코드 끝 *****/