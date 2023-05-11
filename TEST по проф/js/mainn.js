MassiveOfQuestions = ['Ваш друг приглашает вас принять участие в стартап-проекте. Какая роль была бы вам интересна?',
'Вам нужно организовать команду для завершения проекта. Каков ваш подход?', 
'Вам предоставляется задание на разработку нового веб-сайта. Каков ваш первый шаг?']

MassiveOfAnswers = [['Менеджер проекта', 'Дизайнер пользовательского опыта ', 'Back-end разработчик', 'Контент-маркетолог', 'Аналитик данных '],
['Установите четкие цели и позвольте членам команды взять на себя инициативу', 'Сотрудничать с членами команды для мозгового штурма идей', 'Разделяй и властвуй над задачами на основе индивидуальных сильных сторон', 'Разработать маркетинговый план по продвижению проекта', 'Используйте данные, чтобы определить лучший подход для команды '],
['Определить объем и сроки проекта ', 'Создание каркаса для визуализации макета ', 'Разработать функциональную спецификацию ', 'Провести исследование рынка, чтобы понять потребности пользователей ', 'Анализ данных с существующего веб-сайта для обоснования проектных решений']]


let scores = {
    management:0,
    design: 0,
    programming: 0,
    marketing: 0,
    dataAnalysis:0
}


let listAnswer = document.getElementsByTagName('input')
const further = document.querySelector('.btnFurther')
const back = document.querySelector('.btnBack')
let headline = document.querySelector('h1')
let numberQuestion = document.querySelector('#numberQuestion')
const result = document.querySelector('#result')
const test = document.querySelector('#test')
let savedAnswers = []
let answerGiven = false;
let choice =  ''
let step = 0



let listAnswerSpan = document.getElementsByTagName('span')



window.onload = start 

function start(){ //выставляю вопросы
    headline.innerText = MassiveOfQuestions[step]
    for( let p = 0; p < listAnswer.length; p++){
        listAnswerSpan[p].innerHTML = MassiveOfAnswers[step][p]
    }
}


const furtherQuestion = () =>{
    for(let i = 0; i < listAnswer.length; i++){
        if(listAnswer[i].checked == true){
            answerGiven = true;
            choice = listAnswer[i].value
            savedAnswers.push(choice)
            console.log(savedAnswers);
            scores[choice] = scores[choice] + 1
            console.log(scores);
            if(step < 2){ //до это момента стоят чекбоксы
                step = step + 1;
            }
            else{
                showResult();
            }
            // console.log(step);
            numberQuestion.innerText = step + 1
            start();
            // console.log(choice);
        }
    }
    if(answerGiven == false){
    alert('Вы не ответили')

    }
}


const backQuestion = () =>{
    for(let i = 0; i < listAnswer.length; i++){
        if(listAnswer[i].checked == true){
            answerGiven = true;
            // choice = listAnswer[i].value
            scores[savedAnswers[step - 1]] = scores[savedAnswers[step - 1]] - 1
            savedAnswers.pop()
            if(step != 0){ //здесь поставить ограничение на количество вопросов - 1
                step = step - 1;
            }
            // console.log(step);
            numberQuestion.innerText = step + 1
            start();
            // console.log(choice);
        }
    }
}



function showResult(){
    alert('ТЫ прошёл тест!')
    result.classList.remove('_active')
    test.classList.add('_active')
}
further.addEventListener('click', furtherQuestion);
back.addEventListener('click', backQuestion);




