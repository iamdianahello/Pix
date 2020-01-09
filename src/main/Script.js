  window.onload = function() {

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

//количество ячеек 150 на 50.
//чтобы получить длину поля (не точные координаты, а длину):
//умножаем длину экрана на 0.95,
//делим полученное на 150 и отбрасываем остаток к хуям
//ага, это длина и ширина одной ячейки
var onePice = Math.trunc(screenWidth * 0.95 / 150);
var fieldWidth = onePice * 150;
var fieldHeight = onePice * 50;


var field = document.getElementById("field"),
context = field.getContext('2d');
field.width  = screenWidth;
field.height = screenHeight;

alert(screenHeight + " " + screenWidth);
//вычисляем длину пустого пространства, она же координата начала поля.
//из длины экрана вычли длину поля, остаток делим на 2. В нашем случае это (1920-80)/2 = 60
//высоту поля захардкодила.
var xFieldStart = (screenWidth - fieldWidth) / 2;
var yFieldStart = 100;
context.fillRect(xFieldStart, yFieldStart, fieldWidth, fieldHeight);



for (var i = xFieldStart; i <= xFieldStart + fieldWidth; i += onePice) {
    context.beginPath();
   	context.strokeStyle = 'red';
   	context.moveTo(i, yFieldStart);
   	context.lineTo(i,  yFieldStart + fieldHeight);
   	context.stroke();
}

for (var i = yFieldStart; i <= yFieldStart + fieldHeight; i += onePice) {
    context.beginPath();    
   	context.strokeStyle = 'red';
   	context.moveTo(xFieldStart, i);
   	context.lineTo(xFieldStart + fieldWidth, i);
   	context.stroke();
}



}
