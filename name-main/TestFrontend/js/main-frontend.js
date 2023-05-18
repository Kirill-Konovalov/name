MassiveOfQuestions = ["Какое расширение должны иметь файлы с HTML-кодом?", "Какой тег используется для создания заголовка страницы?", "3.	Какой атрибут используется для задания ссылки на другую страницу?", "Какой тег нужно использовать для создания списка с маркерами?", "Какой тег нужно использовать для создания таблицы?",
"Какой атрибут используется для задания цвета фона элемента?", "Как называется свойство CSS, которое позволяет задавать размер шрифта?", "Какие единицы измерения можно использовать при задании размера элемента в CSS?", "Какая команда CSS используется для изменения положения элемента на странице?", "Какая команда CSS используется для изменения внешнего вида ссылки при наведении курсора на нее?",
"Что такое Flex и Grid CSS?","Что делает команда justify-content?", "Что делает команда align-items?",//flex and grid
"Для чего предназначены CSS препроцессоры?", "Что такое CSS препроцессоры?", "Что такое миксины в CSS препроцессорах?",//css предпроцессоры
]


MassiveOfAnswers = [[".css", ".js", ".html"],['<header>','<title>','<h1>'],['href','src','alt'],['<ol>','<ul>','<li>'],['<table>', '<tr>', '<td>'], //html5
['color', 'background-color', 'font-size'],['font-weight', 'font-family', 'font-size'],['пиксели (px)', 'проценты (%)', 'все перечисленные варианты'],['margin', 'padding', 'position'],['hover', 'active', 'visited'],//css
['Технологии верстки надежных адаптивных веб-страниц, которые позволяют легче создавать динамические сайты и удобнее структурировать их содержимое.', 'Фундаментальные технологии, без знания которых не обойтись ни одному веб-разработчику.', 'Язык программирования, который используется как при разработке клиентской стороны веб-приложения, так и серверной.'], ['Выравнивает элементы горизонтально.', 'Выравнивает элементы вертикально.', 'Задает направление, в котором будут расположены элементы в контейнере.'], ['Выравнивает элементы горизонтально.', 'Выравнивает элементы вертикально.', 'Задает направление, в котором будут расположены элементы в контейнере.'], //flex and grid?
['Динамически изменять разметку, осуществлять интерактивное взаимодействие с пользователем, анимировать изображения, совершать валидацию форм.', 'Для ускорения процесса написания кода, упрощения чтения кода и дальнейшей его поддержки, минимизации рутинной работы при написании кода.', '•	Существенно сокращать баги в коде, упрощать рефакторинг кода, обеспечивать качественное отделение интерфейса от реализации.'], ['Программа, которая имеет свой собственный синтаксис, но может сгенерировать из него CSS код.', 'Система контроля версий, которая позволяет вести историю разработки проекта с возможностью доступа к каждой сохраненной версии.', 'Фундаментальные технологии, без знания которых не обойтись ни одному веб-разработчику.'], ['Это классы, которые можно применять к различным элементам страницы.', 'Это функции, которые можно вызывать из разных мест кода.', 'Это специальные команды, которые определяют базовые стили страницы.']//css предпроцессоры
]






ArrayAnswer = ['.html', '<title>', 'href', '<ul>', '<table>', 'background-color', 'font-size', 'все перечисленные варианты', 'position', 'hover', //html and css
'Технологии верстки надежных адаптивных веб-страниц, которые позволяют легче создавать динамические сайты и удобнее структурировать их содержимое.', 'Выравнивает элементы горизонтально.', 'Выравнивает элементы вертикально.', //flex
'Программа, которая имеет свой собственный синтаксис, но может сгенерировать из него CSS код.', 'Система контроля версий, которая позволяет вести историю разработки проекта с возможностью доступа к каждой сохраненной версии.', 'Это функции, которые можно вызывать из разных мест кода.', //css предпроцессоры
]
let scores = {
    bases: 0,
    ScoresOop:0,
    api: 0,
    git: 0,
    linux: 0,
    alg: 0,
    testing: 0,
    programming: 0,
    frameworks: 0,
    wrongs:0,
    rights:0
}



let listAnswer = document.getElementsByTagName('input')
const further = document.querySelector('.btnFurther')
const back = document.querySelector('.btnBack')
let headline = document.querySelector('h1')
let numberQuestion = document.querySelector('#numberQuestion')
const result = document.querySelector('#result')
const test = document.querySelector('#test')
let wrongsAnswer = []
let savedAnswers = []
let answerGiven = false;
let choice =  ''
let step = 0
const baseData = document.querySelector('#baseData')
const gitH = document.querySelector('#git')
const oop = document.querySelector('#OOP')
const restApi = document.querySelector('#RESTful API')
const linux = document.querySelector('#linux')
const algorithms = document.querySelector('#algorithms')
const testing = document.querySelector('#testing')
const programmingVid = document.querySelector('#programming')
const frameworks = document.querySelector("#frameworks")
let listAnswerSpan = document.getElementsByTagName('span')
let flPython = 0
let flJava = 0
let flPhp = 0
let flCSharp = 0
let flRuby = 0



console.log(step);


window.onload = start 

function start(){ //выставляю вопросы
    console.log(oop.style);
    headline.innerText = MassiveOfQuestions[step]
    for( let p = 0; p < listAnswer.length; p++){
        listAnswerSpan[p].innerHTML = MassiveOfAnswers[step][p]
    }
}


const furtherQuestion = () =>{
    for(let i = 0; i < listAnswer.length; i++){
        if(listAnswer[i].checked == true){
            answerGiven = true;
            console.log(listAnswerSpan[i].innerText);
            console.log(ArrayAnswer[step]);
            console.log(step);
            if(listAnswerSpan[i].innerText == ArrayAnswer[step]){
                if(step < 10){
                    scores.bases = scores.bases + 1
                }
                else if(step < 15 && step >= 10){
                    scores.ScoresOop = scores.ScoresOop + 1
                }
                else if(step < 15 && step >= 10){
                    scores.api = scores.api + 1
                }
                else if(step < 20 && step >= 15){
                    scores.git = scores.git + 1
                }
                else if(step < 25 && step >= 20){
                    scores.linux = scores.linux + 1
                }
                else if(step < 35 && step >= 35){
                    scores.alg = scores.alg + 1
                }
                else if(step < 40 && step >= 35){
                    scores.testing = scores.testing + 1
                }
                else if(step < 45 && step >= 40 ){
                    scores.programming = scores.programming + 1
                }
                else if(step < 50 && step >= 45){
                    scores.frameworks = scores.frameworks + 1
                }
                else if(step < 55 && step >= 50){
                    scores.programming = scores.programming + 1
                }
                else if(step < 60 && step >= 55){
                    scores.frameworks = scores.frameworks + 1
                }
                else if(step < 65 && step >= 60){
                    scores.programming = scores.programming + 1
                }
                else if(step < 70 && step >= 65){
                    scores.frameworks = scores.frameworks + 1
                }
                else if(step < 75 && step >= 70){
                    scores.programming + scores.programming + 1
                }
                else if(step < 80 && step >= 75){
                    scores.frameworks = scores.frameworks + 1
                }
                else if(step < 85 && step >= 80){
                    scores.programming + scores.programming + 1
                }
                else if(step < 90 && step >= 85){
                    scores.frameworks = scores.frameworks + 1
                }


                scores.rights = scores.rights + 1
                savedAnswers.push('rights')
                step = step + 1
            }
            else{
                scores.wrongs = scores.wrongs + 1
                savedAnswers.push('wrongs')
                wrongsAnswer.push(listAnswerSpan[i].innerText)
                step = step + 1
            }


            if(step == 40){
            switch (listAnswerSpan[i].innerText){ //Выбор языка програмирования
                case "Python":
                    alert('Ты выбрал Python')
                    flPython = 1;
                    break
                case "Java":
                    alert('Ты выбрал Java')
                    step = step + 10
                    flJava = 1;
                    break
                case "PHP":
                    alert('Ты выбрал PHP')
                    step = step + 20
                    flPhp = 1;
                    break
                case "C#":
                    alert('Ты выбрал C#')
                    step = step + 30
                    flCSharp = 1;
                    break
                case "Ruby":
                    alert('Ты выбрал Ruby')
                    step = step + 40
                    flRuby = 1;
                    break
                default:
                    break
            }
            }
            if(step == 50 && flPython == 1 ){ //до это момента стоят чекбоксы
                showResult();
            }
            else if(step == 60 && flJava == 1 ){
                showResult();
                console.log(headline.innerText);
            }else if(step == 70 && flPhp == 1 ){
                showResult();
            }
            else if(step == 80 && flCSharp == 1 ){
                showResult();
            }
            else if(step == 90 && flRuby == 1){
                showResult();
            }
            // else if{
            //     step = step + 1
            // }
            // console.log(step);
            console.log(scores);
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
            if(step != 0){ 
                step = step - 1;
            }

            if(savedAnswers[savedAnswers.length - 1] == 'rights'){
            if(step < 10){
                    scores.bases = scores.bases - 1
                }
                else if(step < 15 && step >= 10){
                    scores.api = scores.api - 1
                }
                else if(step < 20 && step >= 15){
                    scores.git = scores.git - 1
                }
                else if(step < 25 && step >= 20){
                    scores.linux = scores.linux - 1
                }
                else if(step < 35 && step >= 35){
                    scores.alg = scores.alg - 1
                }
                else if(step < 40 && step >= 35){
                    scores.testing = scores.testing - 1
                }
                else if(step < 45 && step >= 40 ){
                    scores.programming = scores.programming - 1
                }
                else if(step < 50 && step >= 45){
                    scores.frameworks = scores.frameworks - 1
                }
                else if(step < 55 && step >= 50){
                    scores.programming = scores.programming - 1
                }
                else if(step < 60 && step >= 55){
                    scores.frameworks = scores.frameworks - 1
                }
                else if(step < 65 && step >= 60){
                    scores.programming = scores.programming - 1
                }
                else if(step < 70 && step >= 65){
                    scores.frameworks = scores.frameworks - 1
                }
                else if(step < 75 && step >= 70){
                    scores.programming + scores.programming - 1
                }
                else if(step < 80 && step >= 75){
                    scores.frameworks = scores.frameworks - 1
                }
                else if(step < 85 && step >= 80){
                    scores.programming + scores.programming - 1
                }
                else if(step < 90 && step >= 85){
                    scores.frameworks = scores.frameworks - 1
                }
            }



            if(step == 49){
                step = step - 10
                console.log("Step - 10");
                flJava = 0
            }
            if(step == 59){
                step = step - 20
                flPhp = 0
            }
            if(step == 69){
                step = step - 30
                flCSharp = 0
            }
            if(step == 79){
                step = step - 40
                flRuby = 0
            }
            savedAnswers.pop()
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

    procentBases =  scores.bases * 100 / 10 + '%'
    baseData.style.width = procentBases
    
    procentOop =  scores.ScoresOop * 100 / 5 + '%'
    oop.style.width = procentOop

    procentApi =  scores.api * 100 / 5 + '%'
    restApi.style.width = procentApi

    procentLinux =  scores.linux * 100 / 5 + '%'
    linux.style.width = procentLinux

    procentAlg =  scores.alg * 100 / 5 + '%'
    algorithms.style.width = procentAlg

    procentTest =  scores.testing * 100 / 5 + '%'
    testing.style.width = procentTest
    
    procentProgram =  scores.programming * 100 / 5 + '%'
    programmingVid.style.width = procentProgram

    procentFrame =  scores.frameworks * 100 / 5 + '%'
    frameworks.style.width = procentFrame

    console.log(procentBases, procentFrame, procentApi);
}
further.addEventListener('click', furtherQuestion);
back.addEventListener('click', backQuestion);




// Добавить массив с темами и ответами