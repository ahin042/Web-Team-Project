let button = document.getElementById('button');

if (button) { 
    button.onclick = function() {
        alert('정상적으로 제출되었습니다.');
    };
}


let welocation = document.getElementById('location');
let mapImages = document.getElementsByClassName('map-img');
let cardHeader = document.getElementsByClassName('card-header');

if (welocation) { 
    welocation.onclick = function() {
        welocation.innerHTML = "현재 지역 : &lt;달성군 구지면&gt;";

        if (cardHeader.length >= 4) {
            cardHeader[0].innerHTML = "📍 홈푸드마트 앞";
            cardHeader[1].innerHTML = "📍 달성화성파크드림";
            cardHeader[2].innerHTML = "📍 구지중학교 후문";
            cardHeader[3].innerHTML = "📍 벚꽃공원";
        }

        if (mapImages.length >= 4) {
            mapImages[0].src = "../images/안전구역-4.jpeg";
            mapImages[1].src = "../images/안전구역-3.jpg";
            mapImages[2].src = "../images/안전구역-2.jpg";
            mapImages[3].src = "../images/안전구역-1.jpg";
        }
    };
}