const images = [
 "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"

] ;

choosenImage = images[Math.floor(Math.random()*images.length)];

//자바스크립트에서 html만들기
const bgImage = document.createElement  ("img");
bgImage.src = `img/${choosenImage}`;

//html 문서에 추가
document.body.appendChild(bgImage);
//append 는 가장 아래에, prepend는 가장 위에 삽입