$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    // console.log(ITEM_LIST[cate_no][item_no])
    
    const ITEM = ITEM_LIST[cate_no][item_no];

    let list = `<div class="big_img">
                    <img src="./ABC_img/${menu_array[cate_no]}/${ITEM.src}" alt="">
                    <div class="magnifier" style="background: url('./ABC_img/${menu_array[cate_no]}/${ITEM.src}')"></div>
                </div>
                <div class="item_info">
                <div class="item_title">${ITEM.title}</div>
                <div class="item_desc">${ITEM.desc}</div>                        
                <div class="item_opt">
                    <table class="item_sec1">
                        <tbody>
                            <tr>
                                <td class="tb_title">소비자가</td>
                                <td><del class="nomal_price">${ITEM.o_price.toLocaleString("ko")}원</del></td>
                            </tr>
                            <tr>
                                <td class="tb_title">판매가</td>
                                <td class="tb_s_price">${ITEM.s_price.toLocaleString("ko")}원</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="item_sec1">
                            <tbody>
                                <tr>
                                    <td>사이즈</td>
                                    <td>
                                        <div class="color_box_container">
                                            <div class="size_box">
                                                <div class="cb_black">220</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_white">230</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_gray">240</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_gray">250</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_gray">260</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_gray">270</div>
                                            </div>
                                            <div class="size_box">
                                                <div class="cb_gray">280</div>
                                            </div>
                                        </div>
                                        <div class="div">[필수] 사이즈를 선택해 주세요</div>
                                    </td>
                                </tr> 
                            </tbody>
                        </table> 
                    <br>
                    <div class="min_limit">(최소주문수량 1개 이상)</div>
                    <div class="sel_opt_container">
                        
                    </div>
                    <div class="total_price_box">

                        TOTAL: <span class="total_price">0원</span>
                    </div>
                    </div>

                    <div class="btn_box">
                        <div class="btn_buy_it_now">구매하기</div>
                        <div class="btn_add_cart">장바구니 담기</div>
                    </div>
                    
                </div>`;


    $('.detail_area').prepend(list)
    
    // 색 옵션 이미 선택해놨었는지 확인하는 용도
    let btn_chk = [false, false, false]; 
    // $('.color_box').click(function(){
    $(document).on('click', '.size_box', function(){
        if(!btn_chk[$(this).index()]) {

            btn_chk[$(this).index()]=true;

            let sel_opt = `<div class="opt_item">
                                <div class="opt_name">
                                    <div>${ITEM.title}</div>
                                    <div>${ITEM.desc}</div>
                                    <div>-${$(this).text()}</div>
                                </div>
                                <div class="opt_qty">
                                    <input type="button" value="-" class="btn_qty btn_minus">
                                    <input type="text" value="1" class="txt_qty">
                                    <input type="button" value="+" class="btn_qty btn_plus">

                                    <img src="file:///C:/Users/user1/Desktop/web/Web1,Web2/img/theComma/product/btn_price_delete.gif" alt="" class="btn_close_opt">
                                    <input type="hidden" value="${$(this).index()}" class="opt_order">
                                    
                                </div>
                                <div class="opt_price">
                                    <div>${$('.tb_s_price').text()}</div>
                                </div>
                            </div>`;

            $('.sel_opt_container').append(sel_opt)
            
        
            total_price();
        }
        else {
            alert("이미 선택한 사이즈 입니다.")
        }
    })

    $(document).on('click', '.btn_plus', function(){
        let tmp_qty = +$(this).prev('.txt_qty').val()  + 1  
        $(this).prev('.txt_qty').val(tmp_qty)
        
        total_price();
    })
    $(document).on('click', '.btn_minus', function(){
        if(+$(this).next('.txt_qty').val()  - 1  > 0) {
            let tmp_qty = +$(this).next('.txt_qty').val()  - 1  
            $(this).next('.txt_qty').val(tmp_qty)

        
            total_price();
        }
    })
    
    $(document).on('click', '.btn_close_opt', function(e){
        $(this).parent().parent('.opt_item').remove();

        // console.log(btn_chk)
        let tmp_idx = $(this).next().val(); // 현재 클릭한 X 다음 요소(몇번째꺼냐 btn_chk = [false, false, false]; )
        btn_chk[tmp_idx] = false;
        // console.log(btn_chk)
        
        total_price();
    })

    function total_price() {
        
        let total_price = 0;

        for(let i=0; i<$('.txt_qty').length; i++) {
            // console.log($('.txt_qty').eq(i).val() , $('.tb_s_price').text().replace("원","").replace(",","")    )
            total_price += $('.txt_qty').eq(i).val() * $('.tb_s_price').text().replace("원","").replace(",","")    
        }
        $('.total_price').text(total_price.toLocaleString("ko")+"원")
        

    }
    // 돋보기 움직임 감지
    $(document).on('mousemove', '.big_img', function(event){
        // 부모 영역내 마우스 위치 찾기
        let mouseX = event.pageX - $('.big_img').offset().left;
        let mouseY = event.pageY - $('.big_img').offset().top;

        // 마우스가 돋보기 가운데 오기 하기(transform: translate(-50%, -50%) 나 마찬가지)
        let posx = mouseX - $('.magnifier').width() / 2;
        let posy = mouseY - $('.magnifier').height() / 2;

        // 배경 이미지가 원의 가운데 오게 하기
        let bg_x = -mouseX + $('.magnifier').width() / 2;
        let bg_y = -mouseY + $('.magnifier').height() / 2;
        

        $('.magnifier').css({
            left: posx,
            top: posy,

            backgroundPosition: `${bg_x}px ${bg_y}px`,
            backgroundSize: `${$('.big_img').width() }px ${$('.big_img').height() }px`,
        })

        
        // console.log(event.offsetX, event.offsetY) 
    });

    
    // $(document).on('mouseleave', '.big_img', function(event){
    //     $('.magnifier').css({
    //         opacity: 0
    //     })
    // });
    // $(document).on('mouseenter', '.big_img', function(event){
    //     $('.magnifier').css({
    //         opacity: 1
    //     })
    // });

});

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