﻿function randomInteger(min, max) {
	var rand_numb;
	rand_numb = min - 0.5 + Math.random() * (max-min+1)
	rand_numb = Math.round(rand_numb);
	return rand_numb;
}

function change() {
	var user_input = document.getElementById("user_input");
	response_label = document.getElementById("response_label");
	right_answer = document.getElementById("right_answer");
    if (user_input.value>10||user_input.value<0) {
    	response_label.innerHTML = "НЕДОПУСТИМОЕ ЗНАЧЕНИЕ";
    	return;
    }
    if (user_input.value!==typeof 'number'){response_label.innerHTML = "Это не цифры";

}
    right_answer.innerHTML = "Попытка№ "+counter();
	if(user_input.value<rand_numb) {	
		response_label.innerHTML = "мало";
	} 
	else if(user_input.value>rand_numb) {
		response_label.innerHTML = "много";
	}
	else if(user_input.value==rand_numb){
		document.body.innerHTML = '<span class = "victory">Поздравляем, Вы выиграли!!! <br/><button class="new_game" onclick = "location.reload()">Сыграть заново!</button></span>'
	}

}

function makeCounter() {
    var currentCount = 1;
    return function(){
        return currentCount++;
    };
}

var counter = makeCounter();
rand_numb = randomInteger(0, 10);
