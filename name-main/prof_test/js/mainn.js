MassiveOfQuestions = ['Какой метод решения проблем вы предпочитаете?', 'Как вы обычно проводите свое свободное время?', 'Как вы подходите к вызовам или препятствиям?', 'Насколько важно для вас творчество?','Заинтересованы ли вы в изучении новых технологий или языков программирования?', 'Как вы общаетесь с другими?',
'Заинтересованы ли вы в создании визуальных медиа или работе с ними?', 'Насколько важна для вас командная работа?', 'Как вы подходите к дедлайнам или тайм-менеджменту?', 'Заинтересованы ли вы в дизайне пользовательского интерфейса или юзабилити?','Нравится ли вам проводить исследования или решать проблемы?', 'Насколько важно для вас критическое мышление?',
'Заинтересованы ли вы в разработке продукта или внедрении инноваций?', 'Вам нравятся головоломки или игры, в которых вы решаете проблемы?', 'Насколько важно для вас внимание к деталям?', 'Вас интересует дизайн пользовательского интерфейса или UX / UI?', 'Насколько важен для вас анализ данных?', 'Нравится ли вам работать с людьми на разных должностях или в разных отделах?',
'Заинтересованы ли вы в создании или реализации стратегий?', 'Насколько важны для вас инновации или креативность?']

MassiveOfAnswers = [
    ['Мне нравится находить креативные решения','Я предпочитаю логический или системный подходы', 'Я заинтересован в поиске решений с помощью языка программирования'], ['Мне нравится рисовать или создавать визуальное искусство','Я провожу много времени за компьютером или играю в видеоигры', 'Мне нравится изучать новые языки программирования или работать над программными проектами'], ['Мне нравится решать проблемы, и я склонен сохранять позитивный настрой перед лицом невзгод','Я предпочитаю анализировать проблему и находить практические решения', 'Мне нравится разбивать проблемы на более мелкие части и находить решения с помощью программирования'], ['Я высоко ценю креативность и получаю удовольствие от возможности выразить ее в своей работе','Я считаю, что креативность важна, но не обязательно является самым важным аспектом моей работы'],
    ['Я заинтересован в изучении новых технологий и языков программирования', 'Я готов изучать новые технологии, но это не является моим основным интересом - дизайнер, специалист по рекламе'], ['Я склонен быть более визуальным или выразительным в своей коммуникации', 'Я предпочитаю четкое и прямое общение'], ['Я заинтересован в создании визуальных медиа или работе с ними', 'Мой интерес заключается в работе с технологиями и программированием'], ['Мне нравится сотрудничать с другими и я ценю командную работу на рабочем месте', 'Мне комфортно работать самостоятельно, но я все еще могу хорошо работать в команде'], ['Я отлично справляюсь со сроками и получаю удовольствие от возможности соответствующим образом планировать свою работу', 'Я признаю важность соблюдения сроков, но предпочитаю работать в своем собственном темпе'], ['Мне нравится думать о том, как пользователи взаимодействуют с продуктами и как улучшить их восприятие', 'Я больше сосредоточен на технических аспектах своей работы'],
    ['Мне нравится исследовать новые идеи', 'Мне нравится решать проблемы и разрабатывать решения'], ['Я ценю критическое мышление и получаю удовольствие от возможности применять его в своей работе', 'Я считаю, что критическое мышление важно, но не обязательно является самым важным аспектом моей работы'], ['Мне нравится разрабатывать новые продукты или внедрять инновации в существующие', 'Мой интерес заключается в разработке технических решений или повышении безопасности'], ['Мне нравится решать головоломки или игры', 'Я больше сосредоточен на творческом или техническом решении проблем'], ['Я ценю внимание к деталям и получаю удовольствие от возможности применять его в своей работе', 'Я считаю, что внимание к деталям важно, но не обязательно является самым важным аспектом моей работы'], ['Мне нравится работать с дизайном пользовательского интерфейса и UX / UI', 'Мой интерес больше связан с техническими аспектами моей работы'], //16 вопрос
    ['Я ценю возможность анализировать данные и использовать их для улучшения продуктов или стратегий', 'Я считаю, что анализ данных важен, но не обязательно является самым важным аспектом моей работы'], ['Мне нравится работать с людьми на разных должностях или в разных отделах', 'Я предпочитаю более независимо работать над своими проектами'], ['Мне нравится создавать и внедрять стратегии для проектов или команд', 'Мой интерес заключается в создании технических решений или языков программирования'], ['Я ценю инновации и креативность в своей работе', 'Я считаю, что инновации и креативность важны, но не обязательно являются самым важным аспектом моей работы - ИТ-менеджера, разработчика программного обеспечения или специалиста по информационной безопасности']
]


let scores = {
    management:0,
    design: 0,
    programming: 0,
    marketing: 0
}


let listAnswer = document.getElementsByTagName('input')
const further = document.querySelector('.btnFurther')
const back = document.querySelector('.btnBack')
let headline = document.querySelector('h1')
let numberQuestion = document.querySelector('#numberQuestion')
const result = document.querySelector('#result')
const test = document.querySelector('#test')
let marketingSpace = document.querySelector('#marketingSpace')
let managmentSpace = document.querySelector('#managmentSpace')
let programmingSpace = document.querySelector('#programmingSpace')
let designSpace = document.querySelector('#designSpace')
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
            scores[choice] = scores[choice] + 1
            if(choice == 'a'){
                scores.design = scores.design + 1
                scores.marketing = scores.marketing + 1
            }else{
                scores.management = scores.management + 1
                scores.programming = scores.programming + 1
            }




            if(step < 19){ //до это момента стоят чекбоксы
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
            
            
            if(savedAnswers[savedAnswers.length - 1] == 'a'){
                scores.design = scores.design - 1
                scores.marketing = scores.marketing - 1
            }else{
                scores.management = scores.management - 1
                scores.programming = scores.programming - 1
            }

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

    let procentManagment = scores.management * 100 / 20 + '%'
    managmentSpace.style.width = procentManagment

    let procentProgr = scores.programming * 100 / 20 + '%'
    programmingSpace.style.width = procentProgr

    let procentDesign = scores.design * 100 / 20 + '%'
    designSpace.style.width = procentDesign

    let procentMarketing = scores.marketing * 100 / 20 + '%'
    marketingSpace.style.width = procentMarketing
}
further.addEventListener('click', furtherQuestion);
back.addEventListener('click', backQuestion);




