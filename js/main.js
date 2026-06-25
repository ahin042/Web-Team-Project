let button = document.getElementById('button');

button.onclick = function() {
    alert('정상적으로 제출되었습니다.')
}


let welocation = document.getElementById('location'); // 변수
let mapImages = document.getElementsByClassName('map-img');
let cardHeader = document.getElementsByClassName('card-header');

welocation.onclick = function() { // 함수
    welocation.innerHTML = "현재 지역 : <달성군 구지면>";

    cardHeader[0].innerHTML = "📍 홈푸드마트 앞"
    cardHeader[1].innerHTML = "📍 달성화성파크드림"
    cardHeader[2].innerHTML = "📍 구지중학교 후문"
    cardHeader[3].innerHTML = "📍 벚꽃공원"

    mapImages[0].src = "../images/안전구역-4.jpeg";
    mapImages[1].src = "../images/안전구역-3.jpg";
    mapImages[2].src = "../images/안전구역-2.jpg";
    mapImages[3].src = "../images/안전구역-1.jpg";
}