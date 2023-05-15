MassiveOfQuestions = ['Какой язык программирования применяется для работы с базами данных MySQL?',
'Каким образом можно выбрать все записи из таблицы "users", где данные в поле "username" начинаются с буквы "A"?', 
'Каким образом можно выбрать максимальное значение поля "age" из таблицы "users"?', 'Каким образом можно создать новую таблицу "products" с полями "id", "name" и "price"?', 'Каким образом можно удалить все записи из таблицы "orders", где статус равен "canceled"?', "Какой тип нереляционных баз данных наиболее часто используется?", "Какой тип нереляционных баз данных наиболее эффективен для хранения данных в виде JSON-документов?", "В чем отличие нереляционных баз данных от реляционных?", "Какие из этих баз данных можно использовать для хранения больших объемов данных и обеспечения горизонтального масштабирования?", "Каким образом можно получить данные из нереляционной базы данных?", 
"С помощью документо-ориентированных библиотек", "Что такое полиморфизм?", "Что такое инкапсуляция?", "Что такое абстрактный класс?", "Что такое интерфейс?", "Что означает аббревиатура REST?", "Какие операции HTTP используются в RESTful API?", "Что такое ресурс в RESTful API? ", "Какой формат данных обычно используется в RESTful API для передачи информации?", "Что означает код ответа HTTP 404 в RESTful API?", "Что означает аббревиатура VCS?", "Какая команда используется для создания новой ветки в git?", "Какие команды используются для отправки изменений из локального репозитория в удаленный?", "Какая команда используется для объединения двух веток в git?", "Что произойдет, если в удаленный репозиторий были добавлены изменения, которых нет в локальной версии, и была использована команда git pull?",
"Что такое Shell в Linux?", "Какая команда используется для просмотра содержимого текущей директории в терминале Linux?", "Какая команда используется для перемещения файлов и директорий в терминале Linux?", "Какая команда используется для завершения работы сессии терминала в Linux?", "Как называется структура данных, в которой элементы хранятся в порядке их добавления?", "Какой алгоритм нужно использовать для поиска минимального элемента в неотсортированном массиве?", "Какой алгоритм сортировки имеет худшую временную сложность O(n^2)?", "Что такое хеш-таблица?", "Какие типы данных могут быть использованы в структурах данных?", 
"Что такое unit-тесты?", "Какие виды тестирования существуют?", "Что такое отладка (debugging)?", "Что такое сценарий (scenario)?", "Какой тип тестирования позволяет обнаружить ошибки в работе приложения под высокой нагрузкой?", "Выберите язык программирования"]

MassiveOfAnswers = [['SQL', 'Java', 'Python', 'Ruby', 'PHP'],
["SELECT * FROM users WHERE username LIKE 'A%'","SELECT * FROM users WHERE username = 'A%'", "SELECT * FROM users WHERE username LIKE '%A'", "SELECT * FROM users WHERE username = '%A'", "SELECT * FROM users WHERE username LIKE '%A%'"],
["SELECT MAX('age') FROM users", "SELECT MAX(age) FROM users", "SELECT COUNT(age) FROM users", "SELECT AVG(age) FROM users", "SELECT SUM(age) FROM users"], ["CREATE TABLE products (id INT, name VARCHAR(255), price INT)", "CREATE TABLE id, name, price FROM products", "INSERT INTO products (id, name, price)", "SELECT products (id, name, price)", "UPDATE products SET id, name, price"], 
["DELETE FROM orders WHERE status = 'canceled'", "TRUNCATE orders WHERE status = 'canceled'", "UPDATE orders SET status = 'completed' WHERE status = 'canceled'", "DROP orders WHERE status = 'canceled'", "SELECT orders WHERE status = 'canceled'"],
["Ключ-значение", "Графовые базы данных", "Графовые базы данных", "Столбцовые базы данных", "Реляционные базы данных"], ["Ключ-значение", "Графовые базы данных", "Семейства документов", "Столбцовые базы данных", "Реляционные базы данных"], ["Нереляционные базы данных не поддерживают SQL", "Нереляционные базы данных не имеют жесткой структуры", "Нереляционные базы данных не могут хранить связанные данные", "Нереляционные базы данных не предназначены для хранения больших объемов данных", "Нереляционные базы данных применяются только для хранения текстовых данных"], ["Ключ-значение", "Семейства документов", "Столбцовые базы данных", "Реляционные базы данных", "Все вышеперечисленные базы данных"],
["SQL-запросы", "Cypher-запросы", "CQL-запросы", "С помощью документо-ориентированных библиотек", "С помощью ORM (Object-Relational Mapping)"],
["Возможность создания нескольких объектов одного класса", "Возможность изменения параметров объекта во время выполнения программы", "Возможность получения свойств и методов родительского класса в дочернем классе", "Механизм, позволяющий методам дочернего класса вызывать методы родительского класса", "Механизм, позволяющий изменять связи между объектами"], ["Возможность создания объектов на основе абстрактных классов или интерфейсов", "Возможность доступа к объектам класса из любой части программы", "Возможность переопределения методов родительского класса в дочерних классах", "Возможность использования одного и того же метода для разных типов данных", "Возможность создания объектов с динамическим типом данных"], ["Возможность создания классов с несколькими уровнями доступа к переменным и методам", "Возможность создания объектов на основе абстрактных классов или интерфейсов", "Возможность изменения параметров объекта во время выполнения программы", "Возможность доступа к объектам класса из любой части программы", "Механизм, позволяющий методам дочернего класса вызывать методы родительского класса"], ["Класс, у которого не может быть создан объект", "Класс, который не может содержать абстрактных методов", "Класс, который содержит только статические методы", "Класс, который может наследоваться только один раз", "Класс, который не может быть унаследован"], ["Класс, который может содержать только конструкторы", "Способ связи объектов между собой", "Язык программирования для создания веб-приложений", "Описание методов, которые должны быть реализованы классом, реализующим интерфейс", "Способ передачи параметров между методами одного класса"]
["Расширенный стандарт передачи состояния", "Представление состояния передачи", "Представление перенаправления", "Передача состояния с помощью HTTP", "Представление передачи состояни"], ["GET, POST, PUT, DELETE", "GET, POST, UPDATE, DELETE", "INSERT, SELECT, UPDATE, DELETE", "REQUEST, RESPONSE, INSERT, DELETE", "GET, REQUEST, RESPONSE, DELETE"], ["Пароль для доступа к API", "URL-адрес, по которому можно получить данные", "Данные, которые возвращаются в ответ на запрос", "Алгоритм шифрования, используемый в API", "Метод, который используется для запроса данных"], ["XML", "JSON", "HTML", "CSV", "TXT"], ["Ресурс не найден", "Необходимо войти в систему для доступа к ресурсу", "Недостаточно прав для выполнения операции", "Сервер временно недоступен", "Ошибка валидации переданных данных"],
["Visual Code Studio", "Version Control System", "Visual Control System", "Version Communication System", "Visual Communication Studio"], ["git status", "git branch", "git branch", "git log"], ["git init, git add, git commit", "git clone, git push", "git log, git branch, git merge", "git pull, git status", "git checkout, git stash"], ["git push", "git clone", "git merge", "git checkout", "git rebase"], ["Локальная версия будет обновлена до версии в удаленном репозитории.", "Локальная версия будет перезаписана версией в удаленном репозитории.", "Локальная версия будет объединена с изменениями из удаленного репозитория.", "Локальная версия будет удалена.", "Никаких изменений не произойдет."],
["Интерфейс для работы с файловой системой", "Текстовый редактор", "Графический интерфейс пользователя", "Командная оболочка для работы в терминале", "Ядро операционной системы"], ["list", "dir", "cd", "pwd", "ls"], ["touch", "cat", "rm", "mkdir", "chmod"], ["shutdown", "poweroff", "exit", "log-off", "close"], 
["Массив", "Стек", "Очередь", "Список", "Дерево"], ["Бинарный поиск", "Поиск в ширину", "Поиск в глубину", "Линейный поиск", "Сортировка пузырьком"], ["Быстрая сортировка", "Сортировка вставками", "Сортировка слиянием", "Сортировка выбором", "Красно-черное дерево"], ["Структура данных, которая используется для хранения элементов в порядке их добавления", "Структура данных, которая используется для хранения элементов в отсортированном порядке", "Структура данных, которая используется для быстрого поиска элементов по ключу", "Метод сжатия данных", "Алгоритм шифрования данных"],["Только числовые", "Только строковые", "Только булевы (логические)", "Числовые, строковые, булевы, а также дата-структуры и списки", "Только символьные"],
["Тесты, которые проверяют корректность пользовательского интерфейса", "Тесты, которые проверяют работу всей системы целиком", "Тесты, которые проверяют работу конкретного класса или функции", "Тесты, которые запускаются автоматически при каждом запросе пользователя", "Тесты, которые запускаются регулярно по расписанию"], ["Ручное и автоматическое тестирование", "Функциональное и нефункциональное тестирование", "Быстрое и медленное тестирование", "Локальное и удалённое тестирование", "Тестирование перед релизом и тестирование после релиза"],["Методический подход к тестированию кода", "Процесс исправления ошибок в коде", "Тестирование кода на скорость работы", "Тестирование кода на безопасность", "Анализ пользовательских данных и последующее их использование"],["Условия и последовательность действий, которые выполняются в ответ на запрос пользователя", "Числовое значение, которое используется в программе для вычислений", "Класс или функция, которые занимаются обращением к базе данных", "Модуль, который используется для отправки электронных писем", "Алгоритм шифрования данных"],["Модульное тестирование", "Интеграционное тестирование", "Системное тестирование", "Юзабилити-тестирование", "Нагрузочное тестирование"], 
["Python", "Java", "PHP", "C#", "Ruby"]]

// pythonQuestions = ["Чем отличается функция от метода в Python?", "Как проверить, что две переменные ссылаются на один и тот же объект?"]
// pythonAnswers = [['A', 'B', 'C', 'D', "E"], ['A', 'B', 'C', 'D', "E"]]
// ArrayPythonAnsew = ['A', 'E']




ArrayAnswer = ['PHP','Python', 'A', 'E', "SELECT * FROM users WHERE username LIKE 'A%'", "LECT MAX(age) FROM users", "CREATE TABLE products (id INT, name VARCHAR(255), price INT)", "DELETE FROM orders WHERE status = 'canceled'", "Семейства документов", "Семейства документов", "Нереляционные базы данных не имеют жесткой структуры", "Все вышеперечисленные базы данных", "С помощью документо-ориентированных библиотек", "Возможность получения свойств и методов родительского класса в дочернем классе", "Возможность использования одного и того же метода для разных типов данных", "Возможность создания классов с несколькими уровнями доступа к переменным и методам", "Класс, у которого не может быть создан объект", "Описание методов, которые должны быть реализованы классом, реализующим интерфейс", "Передача состояния с помощью HTTP", "GET, POST, PUT, DELETE", "URL-адрес, по которому можно получить данные", "JSON", "Ресурс не найден",
"Version Control System", "git branch", "git clone, git push", "git merge", "Локальная версия будет объединена с изменениями из удаленного репозитория.",
"Командная оболочка для работы в терминале", "ls", "mkdir", "mv", "exit",
"Список", "Линейный поиск", "Сортировка выбором", "Структура данных, которая используется для быстрого поиска элементов по ключу", "Числовые, строковые, булевы, а также дата-структуры и списки",
"Тесты, которые проверяют работу конкретного класса или функции", "Функциональное и нефункциональное тестирование", "Процесс исправления ошибок в коде", "Условия и последовательность действий, которые выполняются в ответ на запрос пользователя", "Нагрузочное тестирование"] //Правильные ответы теста всего

let scores = {
    rights: 0,
    wrongs: 0
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


let listAnswerSpan = document.getElementsByTagName('span')



window.onload = start 

function start(){ //выставляю вопросы
    headline.innerText = MassiveOfQuestions[step]
    for( let p = 0; p < listAnswer.length; p++){
        console.log(MassiveOfAnswers[step][p], step, p);
        listAnswerSpan[p].innerHTML = MassiveOfAnswers[step][p]
    }
}


const furtherQuestion = () =>{
    for(let i = 0; i < listAnswer.length; i++){
        if(listAnswer[i].checked == true){
            answerGiven = true;
            console.log(listAnswerSpan[i].innerText);
            console.log(ArrayAnswer[step]);
            if(listAnswerSpan[i].innerText == ArrayAnswer[step]){
                scores.rights = scores.rights + 1
                savedAnswers.push('rights')
            }
            else{
                scores.wrongs = scores.wrongs + 1
                savedAnswers.push('wrongs')
                wrongsAnswer.push(listAnswerSpan[i].innerText)
            }
            if(step == 1){
            switch (listAnswerSpan[i].innerText) { //Выбор языка програмирования
                case "Python":
                    alert('hell1')
                    
                    break
                case "Java":
                    alert('hell2')
                    step = step + 1
                    break
                case "Php":
                    alert('hell3')
                    break
                case "C#":
                    alert('hell4')
                    break
                case "Ruby":
                    alert()
                    break
                default:
                    break
            }
            }
            console.log(wrongsAnswer);
            console.log(scores);
            if(step < 39){ //до это момента стоят чекбоксы
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
    procent =  scores.rights * 100 / 11 + '%'
    baseData.style.width = procent
    console.log(procent);
    
}
further.addEventListener('click', furtherQuestion);
back.addEventListener('click', backQuestion);




// Добавить массив с темами и ответами