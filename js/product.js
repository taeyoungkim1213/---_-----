$(document).ready(function(){
    let cate_no = get_url_info("cate_no");

    // 
    $('.sec_head').text(title_array[cate_no])
    // sec에 아이디 넣기
    let v_id = menu_array[cate_no];
    $('.sec').prop('id',v_id);

    load_items(cate_no, 8)


    // 무한스크롤링
    let tmp = 0;
    $(window).scroll(function(){
        let s_bot = $(window).scrollTop() + $(window).height();
        let f_o_top = $('.footer').offset().top;

        if(s_bot >= f_o_top) {
            load_items(cate_no, 8)
        }
    

    })

})