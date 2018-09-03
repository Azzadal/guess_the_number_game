function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max-min + 1));
}

function change() {
    var user_input = document.getElementById("user_input");
    response_label = document.getElementById("response_label");
    right_answer = document.getElementById("right_answer");
    if (user_input.value > 10 || user_input.value < 0) {
        response_label.innerHTML = "недопустимое значение";
        return;
    }
    right_answer.innerHTML = "Попытка№ " + counter();
    if(user_input.value < rand_numb) {	
        response_label.innerHTML = "мало";
    } 
    else if(user_input.value > rand_numb) {
        response_label.innerHTML = "много";
    }
    else if(user_input.value == rand_numb) {
        document.body.innerHTML = '<span class = "victory">Поздравляем, Вы выиграли!!! <br/><button class="new_game" onclick = "location.reload()">Сыграть заного!</button></span>'
    }
}

function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
}

var counter = makeCounter();
rand_numb = randomInteger(0, 10);
