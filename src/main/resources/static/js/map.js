var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.5855,127.0194), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

var Snu = [
    {
        title: '관악학생생활관',
        content: '<div class="wind" style="padding:5px;">1</div>',
        latlng: new kakao.maps.LatLng(37.4632,126.9585)
    },
];

var KonKuK = [
    {
        title: '쿨하우스',
        content: '<div class="wind" style="padding:5px;">2</div>',
        latlng: new kakao.maps.LatLng(37.5393,127.078)
    },
];

var Kyonggi = [
    {
        title: '경기드림타워 - 수원캠',
        content: '<div class="wind" style="padding:5px;">3</div>',
        latlng: new kakao.maps.LatLng(37.298,127.0383)
    },
];

var Khu = [
    {
        title: '세화원',
        content: '<div class="wind" style="padding:5px;">4</div>',
        latlng: new kakao.maps.LatLng(37.5955,127.0528)
    },
    {
        title: '우정원',
        content: '<div class="wind" style="padding:5px;">4</div>',
        latlng: new kakao.maps.LatLng(37.2461,127.077)
    },
    {
        title: '행복기숙사 A동 - 아름원',
        content: '<div class="wind" style="padding:5px;">4</div>',
        latlng: new kakao.maps.LatLng(37.5953,127.0545)
    },
    {
        title: '행복기숙사 B동 - 이문동',
        content: '<div class="wind" style="padding:5px;">4</div>',
        latlng: new kakao.maps.LatLng(37.5939,127.0561)
    },
];

var Korea = [
    {
        title: '안암학사',
        content: '<div class="wind" style="padding:5px;">5</div>',
        latlng: new kakao.maps.LatLng(37.5916,127.0289)
    },
];

var Kw = [
    {
        title: '행복기숙사 빛솔재',
        content: '<div class="wind" style="padding:5px;">6</div>',
        latlng: new kakao.maps.LatLng(37.6217,127.057)
    },
];


var Kookmin = [
    {
        title: '교내생활관 A동 ~ D동',
        content: '<div class="wind" style="padding:5px;">7</div>',
        latlng: new kakao.maps.LatLng(37.61,126.9989)
    },
    {
        title: '제1정릉 생활관',
        content: '<div class="wind" style="padding:5px;">7</div>',
        latlng: new kakao.maps.LatLng(37.6117,127.0055)
    },
    {
        title: '제2정릉 생활관',
        content: '<div class="wind" style="padding:5px;">7</div>',
        latlng: new kakao.maps.LatLng(37.6062,126.9988)
    },
    {
        title: '길음생활관',
        content: '<div class="wind" style="padding:5px;">7</div>',
        latlng: new kakao.maps.LatLng(37.6054,127.0248)
    },
];

var Dongguk = [
    {
        title: '남산학사',
        content: '<div class="wind" style="padding:5px;">8</div>',
        latlng: new kakao.maps.LatLng(37.5586,126.9981)
    },
    {
        title: '충무학사',
        content: '<div class="wind" style="padding:5px;">8</div>',
        latlng: new kakao.maps.LatLng(37.5607,126.9936)
    },
];

var Mju = [
    {
        title: '인문생활관',
        content: '<div class="wind" style="padding:5px;">9</div>',
        latlng: new kakao.maps.LatLng(37.5811,126.9232)
    },
    {
        title: '자연생활관 - 3동',
        content: '<div class="wind" style="padding:5px;">9</div>',
        latlng: new kakao.maps.LatLng(37.2241,127.1832)
    },
    {
        title: '자연생활관 - 명덕관',
        content: '<div class="wind" style="padding:5px;">9</div>',
        latlng: new kakao.maps.LatLng(37.2241,127.1818)
    },
];

var Sogang = [
    {
        title: '벨라르미노 학사',
        content: '<div class="wind" style="padding:5px;">10</div>',
        latlng: new kakao.maps.LatLng(37.5492,126.9401)
    },
];

var Ssu = [
    {
        title: '레지던스 홀',
        content: '<div class="wind" style="padding:5px;">12</div>',
        latlng: new kakao.maps.LatLng(37.4952,126.9607)
    },
];

var Yonsei = [
    {
        title: '무악학사',
        content: '<div class="wind" style="padding:5px;">13</div>',
        latlng: new kakao.maps.LatLng(37.5743,126.9396)
    },
    {
        title: '법현학사',
        content: '<div class="wind" style="padding:5px;">13</div>',
        latlng: new kakao.maps.LatLng(37.5658,126.8456)
    },
];

var Cau = [
    {
        title: '블루미르홀',
        content: '<div class="wind" style="padding:5px;">14</div>',
        latlng: new kakao.maps.LatLng(37.502,126.9568)
    },
    {
        title: '퓨처하우스',
        content: '<div class="wind" style="padding:5px;">14</div>',
        latlng: new kakao.maps.LatLng(37.5088,126.9599)
    },
    {
        title: '글로벌하우스',
        content: '<div class="wind" style="padding:5px;">14</div>',
        latlng: new kakao.maps.LatLng(37.5058,126.9546)
    },
];

var Hanyang = [
    {
        title: '제1학생생활관',
        content: '<div class="wind" style="padding:5px;">15</div>',
        latlng: new kakao.maps.LatLng(37.5591,127.0469)
    },
    {
        title: '제2학생생활관',
        content: '<div class="wind" style="padding:5px;">15</div>',
        latlng: new kakao.maps.LatLng(37.5598,127.0498)
    },
    {
        title: '제3학생생활관',
        content: '<div class="wind" style="padding:5px;">15</div>',
        latlng: new kakao.maps.LatLng(37.5597,127.0468)
    },
    {
        title: '개나리관',
        content: '<div class="wind" style="padding:5px;">15</div>',
        latlng: new kakao.maps.LatLng(37.560017,127.049680)
    },
    {
        title: '행복기숙사 - 제5학생생활관',
        content: '<div class="wind" style="padding:5px;">15</div>',
        latlng: new kakao.maps.LatLng(37.559534,127.045614)
    },
];

var Hongik = [
    {
        title: '제1기숙사',
        content: '<div class="wind" style="padding:5px;">16</div>',
        latlng: new kakao.maps.LatLng(37.5481,126.9258)
    },
    {
        title: '제2기숙사',
        content: '<div class="wind" style="padding:5px;">16</div>',
        latlng: new kakao.maps.LatLng(37.5495,126.9248)
    },
    {
        title: '제3기숙사',
        content: '<div class="wind" style="padding:5px;">16</div>',
        latlng: new kakao.maps.LatLng(37.5596,126.9141)
    },
];

var Skku = [
    {
        title: '자연과학캠퍼스 - 봉룡학사',
        content: '<div class="wind" style="padding:5px;">17</div>',
        latlng: new kakao.maps.LatLng(37.2966,126.9726)
    },
    {
        title: '인문사회과학캠퍼스 - 명륜학사',
        content: '<div class="wind" style="padding:5px;">17</div>',
        latlng: new kakao.maps.LatLng(37.5874,126.9945)
    },
];

var Catholic = [
    {
        title: '스테파노관 - 성심교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.48544182504057,126.80346021747607)
    },
    {
        title: '안드레아관 - 성심교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.48573826139105,126.80292236817107)
    },
    {
        title: '양업관 - 성신교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.5853,127.0044)
    },
    {
        title: '강학관 - 성신교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.5847,127.006)
    },
    {
        title: '수덕관 - 성신교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.5842,127.0062)
    },
    {
        title: '대건관 - 성신교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.5861,127.0054)
    },
    {
        title: '기숙사 - 성의교정',
        content: '<div class="wind" style="padding:5px;">18</div>',
        latlng: new kakao.maps.LatLng(37.4881,127.0108)
    },

];

var Kaist = [
    {
        title: '소정사',
        content: '<div class="wind" style="padding:5px;">19</div>',
        latlng: new kakao.maps.LatLng(37.5955,127.0467)
    },
    {
        title: '해정사',
        content: '<div class="wind" style="padding:5px;">19</div>',
        latlng: new kakao.maps.LatLng(37.5955,17.0461)
    },
    {
        title: '파정사',
        content: '<div class="wind" style="padding:5px;">19</div>',
        latlng: new kakao.maps.LatLng(37.595,127.0463)
    },
];

var Ewha = [
    {
        title: '한우리집',
        content: '<div class="wind" style="padding:5px;">20</div>',
        latlng: new kakao.maps.LatLng(37.5645,126.9502)
    },
];

var Sungshin = [
    {
        title: '기숙사 별관',
        content: '<div class="wind" style="padding:5px;">21</div>',
        latlng: new kakao.maps.LatLng(37.5935,127.0195)
    },
    {
        title: '성미료',
        content: '<div class="wind" style="padding:5px;">21</div>',
        latlng: new kakao.maps.LatLng(37.5907,127.0221)
    },
];

var Sookmyung = [
    {
        title: '명재관',
        content: '<div class="wind" style="padding:5px;">22</div>',
        latlng: new kakao.maps.LatLng()
    },
];

var Snue = [
    {
        title: '기숙사',
        content: '<div class="wind" style="padding:5px;">23</div>',
        latlng: new kakao.maps.LatLng(37.4899,127.0177)
    },
];

var Hufs = [
    {
        title: '기숙사',
        content: '<div class="wind" style="padding:5px;">24</div>',
        latlng: new kakao.maps.LatLng(37.5966,127.0574)
    },
];

var Karts = [
    {
        title: '천창관',
        content: '<div class="wind" style="padding:5px;">25</div>',
        latlng: new kakao.maps.LatLng(37.6065,127.055)
    },
    {
        title: '신길관',
        content: '<div class="wind" style="padding:5px;">25</div>',
        latlng: new kakao.maps.LatLng(37.5056,126.9083)
    },
];

var Seoultech = [
    {
        title: '불암학사',
        content: '<div class="wind" style="padding:5px;">26</div>',
        latlng: new kakao.maps.LatLng(37.6364,127.0761)
    },
    {
        title: 'KB학사',
        content: '<div class="wind" style="padding:5px;">26</div>',
        latlng: new kakao.maps.LatLng(37.6359,127.0761)
    },
    {
        title: '성림학사',
        content: '<div class="wind" style="padding:5px;">26</div>',
        latlng: new kakao.maps.LatLng(37.6356,127.0759)
    },
    {
        title: '누리학사',
        content: '<div class="wind" style="padding:5px;">26</div>',
        latlng: new kakao.maps.LatLng(37.6347,127.077)
    },
    {
        title: '수림학사',
        content: '<div class="wind" style="padding:5px;">26</div>',
        latlng: new kakao.maps.LatLng(37.6362,127.0784)
    },
];

var University = [
    {
        title: '서울대학교',
        content: '1. 서울대학교',
        latlng: new kakao.maps.LatLng(37.4566, 126.95)
    },
    {
        title: '건국대학교',
        content: '2. 건국대학교',
        latlng: new kakao.maps.LatLng(37.5409, 127.0793)
    },
    {
        title: '경기대학교',
        content: '3. 경기대학교',
        latlng: new kakao.maps.LatLng(37.3006,127.0358)
    },
    {
        title: '경희대학교',
        content: '4. 경희대학교',
        latlng: new kakao.maps.LatLng(37.248,127.0774)
    },
    {
        title: '고려대학교',
        content: '5. 고려대학교',
        latlng: new kakao.maps.LatLng(37.5909,127.0278)
    },
    {
        title: '광운대학교',
        content: '6. 광운대학교',
        latlng: new kakao.maps.LatLng(37.6195,127.0598)
    },
    {
        title: '국민대학교',
        content: '7. 국민대학교',
        latlng: new kakao.maps.LatLng(37.611,126.9973)
    },
    {
        title: '동국대학교',
        content: '8. 동국대학교',
        latlng: new kakao.maps.LatLng(37.5584,127.0002)
    },
    {
        title: '명지대학교 - 인문캠퍼스',
        content: '9. 명지대학교 - 인문캠퍼스',
        latlng: new kakao.maps.LatLng(37.5795,126.9215)
    },
    {
        title: '명지대학교 - 자연과학캠퍼스',
        content: '9. 명지대학교 - 자연과학캠퍼스',
        latlng: new kakao.maps.LatLng(37.2228,127.1901)
    },
    {
        title: '서강대학교',
        content: '10 .서강대학교',
        latlng: new kakao.maps.LatLng(37.5511,126.9411)
    },
    {
        title: '숭실대학교',
        content: '12. 숭실대학교',
        latlng: new kakao.maps.LatLng(37.4965,126.9568)
    },
    {
        title: '연세대학교',
        content: '13. 연세대학교',
        latlng: new kakao.maps.LatLng(37.566,126.9386)
    },
    {
        title: '중앙대학교',
        content: '14. 중앙대학교',
        latlng: new kakao.maps.LatLng(37.50487829769219,126.95506657126738)
    },
    {
        title: '한양대학교',
        content: '15. 한양대학교',
        latlng: new kakao.maps.LatLng(37.5574,127.0454)
    },
    {
        title: '홍익대학교',
        content: '16. 홍익대학교',
        latlng: new kakao.maps.LatLng(37.5517,126.925)
    },
    {
        title: '성균관대학교 - 인문사회과학캠퍼스',
        content: '17. 성균관대학교 - 인문사회과학캠퍼스',
        latlng: new kakao.maps.LatLng(37.5884,126.9936)
    },
    {
        title: '성균관대학교 - 자연과학캠퍼스',
        content: '17. 성균관대학교 - 자연과학캠퍼스',
        latlng: new kakao.maps.LatLng(37.2997,126.9765)
    },
    {
        title: '가톨릭대학교 - 성신교정',
        content: '18. 가톨릭대학교 - 성신교정',
        latlng: new kakao.maps.LatLng(37.5859,127.0048)
    },
    {
        title: '가톨릭대학교 - 성심교정',
        content: '18. 가톨릭대학교 - 성심교정',
        latlng: new kakao.maps.LatLng(37.48597597874843,126.80229421464104)
    },
    {
        title: '가톨릭대학교 - 성의교정',
        content: '18. 가톨릭대학교 - 성의교정',
        latlng: new kakao.maps.LatLng(37.5005,127.006)
    },
    {
        title: '한국과학기술원 - 경영대학',
        content: '19. 한국과학기술원 - 경영대학',
        latlng: new kakao.maps.LatLng(37.5926,127.0467)
    },
    {
        title: '이화여자대학교',
        content: '20. 이화여자대학교',
        latlng: new kakao.maps.LatLng(37.5619,126.9468)
    },
    {
        title: '성신여자대학교',
        content: '21. 성신여자대학교',
        latlng: new kakao.maps.LatLng(37.5915,127.022)
    },
    {
        title: '숙명여자대학교',
        content: '22. 숙명여자대학교',
        latlng: new kakao.maps.LatLng(37.5467,126.9647)
    },
    {
        title: '서울교육대학교',
        content: '23. 서울교육대학교',
        latlng: new kakao.maps.LatLng(37.4899,127.0153)
    },
    {
        title: '한국외국어대학교',
        content: '24. 한국외국어대학교',
        latlng: new kakao.maps.LatLng(37.5972,127.0588)
    },
    {
        title: '한국예술종합학교',
        content: '25. 한국예술종합학교',
        latlng: new kakao.maps.LatLng(37.6069,127.0571)
    },
    {
        title: '서울과학기술대학교',
        content: '26. 서울과학기술대학교',
        latlng: new kakao.maps.LatLng(37.6318,127.0774)
    },
];

var Dormitory = [
    {
        title: '홍제행복기숙사',
        content: '공통',
        latlng: new kakao.maps.LatLng(37.5862, 126.938)
    },
    {
        title: '경기푸른미래관',
        content: '공통',
        latlng: new kakao.maps.LatLng(37.6518, 127.0212)
    },
    {
        title: '평택시장학관',
        content: '공통',
        latlng: new kakao.maps.LatLng(37.6342, 127.0229)
    }
];


var Sample = [
    {
        title: '행복기숙사 - 새날관',
        content: "http://43.200.215.193:8080/sejongDormitory",
        latlng: new kakao.maps.LatLng(37.5534,127.0727)
    },
    {
        title: '강원학사(도봉)',
        content: "http://43.200.215.193:8080/gangwonDobong",
        latlng: new kakao.maps.LatLng(37.6501, 127.0349)
    },
    {
        title: '강원학사(관악)',
        content: "http://43.200.215.193:8080/gangwonGwanak",
        latlng: new kakao.maps.LatLng(37.5001, 126.9222)
    },
    {
        title: '탐라영재관',
        content: "http://43.200.215.193:8080/tamla",
        latlng: new kakao.maps.LatLng(37.5628, 126.8528)
    },
    {
        title: '충남학사(서울)',
        content: "http://43.200.215.193:8080/chongnam",
        latlng: new kakao.maps.LatLng(37.4970, 126.8433)
    },
];

var UniversitySample = [
    {
        title: '11. 세종대학교',
        content: "http://43.200.215.193:8080/sejongDormitory",
        latlng: new kakao.maps.LatLng(37.5519,127.0737)
    }
];

// 지도에 마커를 표시하는 함수입니다
function displayMarker(data) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: data.latlng,
        title: data.title,
        clickable: true,
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        window.open(data.content);
    });
}

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
var imageSize = new kakao.maps.Size(24, 35); // 마커 이미지의 이미지 크기
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);//이미지 적용

function displayMarkerIMG(data) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: data.latlng,
        image : markerImage, // 마커 이미지
        title: data.title,
        clickable: true
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        window.open(data.content);
    });
}

for(let i=0; i < Sample.length; i++){
    var data = Sample[i];
    displayMarker(data);
}

for(let i=0; i < UniversitySample.length; i++){
    var data = UniversitySample[i];
    displayMarkerIMG(data);
}


/*----------------------커스텀 오버레이------------------------*/
for (var i = 0; i < UniversitySample.length; i ++) {
    var customOverlay = new kakao.maps.CustomOverlay({
        position: UniversitySample[i].latlng,
    });
    customOverlay.setMap(map);
}

for (var i = 0; i < Sample.length; i ++) {
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Sample[i].latlng,
    });
    customOverlay.setMap(map);
}


function closeOverlay() {
    overlay.setMap(null);
}

// 학사 5개
//홍제, 강원(도봉/관악), 경기푸른미래관, 평택시 장학관
for (var i = 0; i < Dormitory.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true,
        position: Dormitory[i].latlng, // 마커를 표시할 위치
        title : Dormitory[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Dormitory[i].latlng,
    });
    customOverlay.setMap(map);
}

for (var i = 0; i < Snu.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Snu[i].latlng,
        title : Snu[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Snu[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}

for (var i = 0; i < KonKuK.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: KonKuK[i].latlng,
        title : KonKuK[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: KonKuK[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}
for (var i = 0; i < Kyonggi.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Kyonggi[i].latlng,
        title : Kyonggi[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Kyonggi[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}
for (var i = 0; i < Khu.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Khu[i].latlng,
        title : Khu[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Khu[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}
for (var i = 0; i < Korea.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Korea[i].latlng,
        title : Korea[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Korea[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}
for (var i = 0; i < Kw.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Kw[i].latlng,
        title : Kw[i].title,
    });
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Kw[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Kookmin.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Kookmin[i].latlng,
        title : Kookmin[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Kookmin[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Dongguk.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Dongguk[i].latlng,
        title : Dongguk[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Dongguk[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Mju.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Mju[i].latlng,
        title : Mju[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Mju[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Sogang.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Sogang[i].latlng,
        title : Sogang[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Sogang[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Ssu.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Ssu[i].latlng,
        title : Ssu[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Ssu[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Yonsei.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Yonsei[i].latlng,
        title : Yonsei[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Yonsei[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Cau.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Cau[i].latlng,
        title : Cau[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Cau[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Hanyang.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Hanyang[i].latlng,
        title : Hanyang[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Hanyang[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Hongik.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Hongik[i].latlng,
        title : Hongik[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Hongik[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Skku.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Skku[i].latlng,
        title : Skku[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Skku[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Catholic.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Catholic[i].latlng,
        title : Catholic[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Catholic[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Kaist.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Kaist[i].latlng,
        title : Kaist[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Kaist[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Ewha.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Ewha[i].latlng,
        title : Ewha[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Ewha[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Sungshin.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Sungshin[i].latlng,
        title : Sungshin[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Sungshin[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Sookmyung.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Sookmyung[i].latlng,
        title : Sookmyung[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Sookmyung[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Snue.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Snue[i].latlng,
        title : Snue[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Snue[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Hufs.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Hufs[i].latlng,
        title : Hufs[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Hufs[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Karts.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Karts[i].latlng,
        title : Karts[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Karts[i].latlng,
        removable : true

    });
    customOverlay.setMap(map);

}
for (var i = 0; i < Seoultech.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: Seoultech[i].latlng,
        title : Seoultech[i].title,
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: Seoultech[i].latlng,
        removable : true
    });
    customOverlay.setMap(map);
}


// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

var markers = [];

for (var i = 0; i < University.length; i ++) {

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        clickable: true, // 마커를 표시할 지도
        position: University[i].latlng, // 마커를 표시할 위치
        title : University[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지
    });
    marker.setMap(map);
    var customOverlay = new kakao.maps.CustomOverlay({
        position: University[i].latlng,
        xAnchor: 0.3,
        yAnchor: 0.91
    });
    customOverlay.setMap(map);
}