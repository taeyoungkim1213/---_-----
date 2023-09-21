const ITEM_LIST = [
//hotdeal
    [
        {item_no: 0, src: '0.jpg', title: '비에스큐티바이클래시',desc: '887 뭔헨 독일군 스니커즈', o_price: 84500, s_price: 39800,},
        {item_no: 1, src: '1.jpg', title: '나이키',desc: '우먼스 나이키다운쉬프터12', o_price: 79000, s_price: 39000, },
        {item_no: 2, src: '2.jpg', title: '나이키',desc: '우먼스 나이키 리뉴 런 4', o_price: 99000, s_price: 49000,  },
        {item_no: 3, src: '3.jpg', title: '나이키',desc: '우먼스 나이키 코트 비전 알타 레더', o_price: 89000, s_price: 39000, },
        {item_no: 4, src: '4.jpg', title: '나이키',desc: '우먼스 나이키 에어 맥스 시스템', o_price: 109000, s_price: 49000, },
        {item_no: 5, src: '5.jpg', title: '나이키',desc: '나이키 리뉴 런 4', o_price: 99000, s_price: 49000, },
        {item_no: 6, src: '6.jpg', title: '비에스큐티바이클래시',desc: '886 슈베린 키높이 스니커즈 빈티즈 화이트', o_price: 55000, s_price: 34800, },
        {item_no: 7, src: '7.jpg', title: '비에스큐티바이클래시',desc: 'A1012 에펠 베이직 미니멀 레더 크로스백', o_price: 42600, s_price: 18900, },
        {item_no: 8, src: '8.jpg', title: '이머전시',desc: 'EGBCCC 와그너모라 베이직 가죽 벨트', o_price: 25800, s_price: 9800, },
        {item_no: 9, src: '9.jpg', title: '비에스큐티바이클래시',desc: '378 어거스트 3홀 더비 구두 빈티지 블랙', o_price: 69000, s_price: 41900, },
        {item_no: 10, src: '10.jpg', title: '앨빈클로',desc: '앨빈클로 마운티널스 루즈핏 후드집업 AZH564', o_price: 65900, s_price: 29800, },
        {item_no: 11, src: '11.jpg', title: '커스텀에이드',desc: '4.5cm 캔버스 스니커즈 스탠다드', o_price: 99000, s_price: 38250, },
    ],
//newarrivals
    [
   
        {item_no: 0, src: '0.jpg', title: '아디다스',desc: '가젤 우먼스',s_price: 12900},
        {item_no: 1, src: '1.jpg', title: '아디다스',desc: '가젤 우먼스',s_price: 12900},
        {item_no: 2, src: '2.jpg', title: '아디다스',desc: '가젤 우먼스',s_price: 12900},
        {item_no: 3, src: '3.jpg', title: '아디다스',desc: '가젤 우먼스',s_price: 12900},
        {item_no: 4, src: '4.jpg', title: '스케쳐스(슬립인스)',desc: '맥스 쿠셔닝',s_price: 13900},
        {item_no: 5, src: '5.jpg', title: '스케쳐스(슬립인스)',desc: '맥스 쿠셔닝',s_price: 13900},
        {item_no: 6, src: '6.jpg', title: '스케쳐스(슬립인스)',desc: '맥스 쿠셔닝',s_price: 13900},
        {item_no: 7, src: '7.jpg', title: '스케쳐스(슬립인스)',desc: '맥스 쿠셔닝',s_price: 13900},
        {item_no: 8, src: '8.jpg', title: '에이비씨 셀렉트',desc: '베이비 샤크 런',s_price: 59000},
        {item_no: 9, src: '9.jpg', title: '에이비씨 셀렉트',desc: '베이비 샤크 런',s_price: 59000},
        {item_no: 10, src: '10.jpg', title: '크록스',desc: '클래식 컬러 딥 클로그 T',s_price: 49900},
        {item_no: 11, src: '11.jpg', title: '크록스',desc: '클래식 컬러 딥 클로그 T',s_price: 49900},
        {item_no: 12, src: '12.jpg', title: '크록스',desc: '클래식 컬러 딥 클로그 T',s_price: 49900},
        {item_no: 13, src: '13.jpg', title: '휠라',desc: '휠라 꾸미 라이트 레빗',s_price: 69000},
        {item_no: 14, src: '14.jpg', title: '휠라',desc: '휠라 꾸미 라이트 레빗',s_price: 69000},
        {item_no: 15, src: '15.jpg', title: '휠라',desc: '패디드 숄더 백',s_price: 59000},
        {item_no: 16, src: '16.jpg', title: '휠라',desc: '패디드 숄더 백',s_price: 59000},
    ],
    [
        
    ]
]

const menu_array = ['hotdeal','newarrivals','mdpick','trend','best','baaner'];
const title_array = ['HOT DEAL','NEW ARRIVALS','MD_S PICK','TRAND ON','+ PICK','BEST BRAND'];
const img_addr = "ABC_img/"; 

function get_url_info(key) {
    let url =location.href;
    url = url.split("?")[1];
    if(url.length > 1){
        url = url.split("&")
        for(let i=0; i<url.length; i++){
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == key) {
                return tmp_url[1].split("#")[0];
            }
        }
    }
    else {
        console.log("없어")
        alert("잘못된 접근입니다.");
        location.replace('ABC마트/ABC_HTML/포트폴리오(ABC마트).html')
    }
}

function load_items(cate_no, qty) {  
    let item_length = $(`#${menu_array[cate_no]} .item_container > li`).length;
    let qty_limit = item_length+qty;

    if(item_length+qty > ITEM_LIST[cate_no].length) { 
        qty_limit = ITEM_LIST[cate_no].length 
    } 
    for(let i=item_length; i<qty_limit; i++) {
        let item = ITEM_LIST[cate_no][i];
        
        let for_new = '';
        if(cate_no == 1) {
            for_new = `<img src="./ABC_img/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].covered_src}" alt=""> `
        }

        let list = `<li class="item ${menu_array[cate_no]}_item_li item_init">
        <a href="상품주문화면.html?cate_no=${cate_no}&item_no=${ITEM_LIST[cate_no][i].item_no}">
            <div class="item_img">
                <img src="./ABC_img/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt=""> 
                ${cate_no==1?for_new:'' /* 여기가 for_new 쓰는곳 */}
            </div>
            <div class="item_info">
            <div class="item_desc_title">${ITEM_LIST[cate_no][i].title}</div>
            <div class="item_desc">${ITEM_LIST[cate_no][i].desc}</div>
                <div class="origin_price"><del>${ITEM_LIST[cate_no][i].o_price.toLocaleString("ko")}원</del></div>
                <div class="sale_price">${comma(ITEM_LIST[cate_no][i].s_price)}원</div>
            </div>
        </a>
    </li>`;

$(`#${menu_array[cate_no]} .item_container`).append(list)

    }

}

function comma(num){
 
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}