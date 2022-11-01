

let idButton = 1;
let idQuestion = 1;
let idAnswer = 1;



let id = 1;

let i = 1;
let mas = [];
var x = 0;

let quiz = 0;
let question = [[10]];
let answer = [];

/*
<button type="button" id="${i}" onclick="addquestion(this.id);" class="btn btn-primary">Новый вопрос</button>*/


function addcard(){
    let card = `
        <div class="quiz__card" id="${i}">

            <div class="quiz__top">
                <input type="email" class="c" placeholder="Enter name quiz">
                <button type="button" id="button-close" class="btn btn-primary">-</button>
            </div>

            <div class="quiz__question">

                <div class="quiz__question-quest">
                    <input type="email" class="form-control" placeholder="Enter name question">
                    <button type="button" id="button-close" class="btn btn-primary">-</button>
                </div>

                <div class="quiz__question-answerlist" id="${idButton}">

                    <div class="quiz__question-answer">
                        <input type="email" placeholder="answer">
                        <div>
                            <input type="radio" id="scales" name="${idButton}">
                            <label for="scales">True</label>
                        </div>
                    </div>

                    <div class="quiz__question-answer">
                        <input type="email" placeholder="answer">
                        <div>
                            <input type="radio" id="scales" name="${idButton}">
                            <label for="scales">True</label>
                        </div>
                    </div>

                    <button type="button" id="button-addanswer" class="btn-primary">Новый ответ</button>

                </div>
            </div>
            <button type="button" id="button-addquestion" class="btn-primary">Новый вопрос</button>
            </div>
        `;

/*	$('body').append(card);*/

    let quizcard = document.createElement('div');
    quizcard.classList.add('quiz__card');
    quizcard.id = i;

    let quiztop = document.createElement('div');
    quiztop.classList.add('quiz__top');

    let title = document.createElement('input');
    title.classList.add('card__title');
    title.placeholder = 'Enter name quiz';

    let addanswer = document.createElement('button');
    addanswer.classList.add('button-addanswer');
    addanswer.type = 'button';
    addanswer.id = 'button-addanswer';
    addanswer.innerText = 'New answer';

    let question = document.createElement('div');
    question.classList.add('quiz__question');


    let quest = document.createElement('div');
    quest.classList.add('quiz__question-quest');

    let name = document.createElement('input');
    name.classList.add('answer__title');
    name.classList.add('form-control');
    name.placeholder = 'Enter name question';

    let buttonclose = document.createElement('button');
    buttonclose.classList.add('button__close');
    buttonclose.type = 'button';
    buttonclose.id ='button-close';

    let buttonclose2 = document.createElement('button');
    buttonclose2.classList.add('button__close');
    buttonclose2.type = 'button';
    buttonclose2.id ='button-close';

    let list = document.createElement('div');
    list.classList.add('quiz__question-answerlist');
    list.id = idButton;

    let answer = document.createElement('div');
    answer.classList.add('quiz__question-answer');

    let text = document.createElement('input');
    text.classList.add('ans');
    text.placeholder = 'answer';

    let div = document.createElement('div');
    div.classList.add('check');

    let checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = 'scales';
    checkbox.name = idButton;

    let label = document.createElement('label');
    label.for = 'scales';
    label.innerText= 'True';

    let close = document.createElement('button');
    close.type = 'button';
    close.id = 'button-close-answer';
    close.innerText = '-';

    let addquestion = document.createElement('button');
    addquestion.classList.add('button__question');
    addquestion.type = 'button';
    addquestion.id = 'button-addquestion';
    addquestion.innerText = 'New question';

    div.append(checkbox);
    div.append(label);

    answer.append(text);
    answer.append(div);

    list.append(answer);
    list.append(addanswer);

    quest.append(name);
    quest.append(buttonclose);

    question.append(quest);
    question.append(list);

    quiztop.append(title);
    quiztop.append(buttonclose2);

    quizcard.append(quiztop);
    quizcard.append(question);
    quizcard.append(addquestion);

    i++;
    idButton++;

    return quizcard;
}

function addquestion(){

    let addanswer = document.createElement('button');
    addanswer.classList.add('button-addanswer');
    addanswer.type = 'button';
    addanswer.id = 'button-addanswer';
    addanswer.innerText = 'New answer';

    let question = document.createElement('div');
    question.classList.add('quiz__question');


    let quest = document.createElement('div');
    quest.classList.add('quiz__question-quest');

    let name = document.createElement('input');
    name.classList.add('answer__title');
    name.classList.add('form-control');
    name.placeholder = 'Enter name question';

    let buttonclose = document.createElement('button');
    buttonclose.classList.add('button__close');
    buttonclose.type = 'button';
    buttonclose.id ='button-close';

    let list = document.createElement('div');
    list.classList.add('quiz__question-answerlist');
    list.id = idButton;

    let answer = document.createElement('div');
    answer.classList.add('quiz__question-answer');

    let text = document.createElement('input');
    text.classList.add('ans');
    text.placeholder= 'answer';

    let div = document.createElement('div');
    div.classList.add('check');

    let checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = 'scales';
    checkbox.name = idButton;

    let label = document.createElement('label');
    label.for = 'scales';
    label.innerText= 'True';

    let close = document.createElement('button');
    close.type = 'button';
    close.id = 'button-close-answer';
    close.innerText = '-';

    div.append(checkbox);
    div.append(label);

    answer.append(text);
    answer.append(div);

    list.append(answer);
    list.append(addanswer);

    quest.append(name);
    quest.append(buttonclose);

    question.append(quest);
    question.append(list);
    idButton++;
    return question;
}

function addanswer(value){

    let answer = document.createElement('div');
    answer.classList.add('quiz__question-answer');


    let text = document.createElement('input');
    text.classList.add('ans');
    text.placeholder= 'answer';

    let div = document.createElement('div');
    div.classList.add('check');

    let checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = 'scales';
    checkbox.name = value;

    let label = document.createElement('label');
    label.for = 'scales';
    label.innerText= 'True';

    let close = document.createElement('button');
    close.classList.add('button__close');
    close.type = 'button';
    close.id = 'button-close-answer';
    close.innerText = '-';

    div.append(checkbox);
    div.append(label);

    answer.append(text);
    answer.append(div);
    answer.append(close);

    return answer;


}





function sendinput(){
    let data = Array.from(document.querySelectorAll('input')).map(inputElement => inputElement.value);
    console.log(data);
    for (let elem of data) {
        if(elem == "") {
            alert("All fields must be filled");
            break;
        }
    }
    elements = document.getElementById('1').getElementsByClassName('form-control');
    x = 1;
    let card = {};
    for (let elem of elements) {
        alert(elem.value);
        card[x] = elem.value;
        x++;


    }
    console.log(card);
}






document.addEventListener('click', function (e) {

    let closeBtns = document.querySelectorAll('#button-close');

        for (let elem of closeBtns) {
        if(elem == e.target) {
            elem.parentNode.parentNode.remove();
        }
    }
});

document.addEventListener('click', function (e) {

    let closeBtns = document.querySelectorAll('#button-close-answer');

        for (let elem of closeBtns) {
        if(elem == e.target) {
            elem.parentNode.remove();
        }
    }
});


document.addEventListener('click', function (e) {

    let addQuestionBtn = document.querySelectorAll('#button-addanswer');

        for (let elem of addQuestionBtn) {
        if(elem == e.target) {
            let parent = elem.parentNode;
            let newElem = addanswer(parent.id);
            parent.insertBefore(newElem, elem);

        }
    }
});

document.addEventListener('click', function (e) {

    let addQuestionBtn = document.querySelectorAll('#button-addquestion');

        for (let elem of addQuestionBtn) {
        if(elem == e.target) {
            let parent = elem.parentNode;
            let newElem = addquestion();
            parent.insertBefore(newElem, elem);

        }
    }
});

document.addEventListener('click', function (e) {

    let addQuestionBtn = document.querySelectorAll('#button__create');

        for (let elem of addQuestionBtn) {
        if(elem == e.target) {
            let parent = elem.parentNode;
            let newElem = addcard();
            parent.insertBefore(newElem, elem);

        }
    }
});
