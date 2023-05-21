MassiveOfQuestions = ['Какой язык программирования применяется для работы с базами данных MySQL?',
'Каким образом можно выбрать все записи из таблицы "users", где данные в поле "username" начинаются с буквы "A"?', 
'Каким образом можно выбрать максимальное значение поля "age" из таблицы "users"?', 'Каким образом можно создать новую таблицу "products" с полями "id", "name" и "price"?', 'Каким образом можно удалить все записи из таблицы "orders", где статус равен "canceled"?', "Какой тип нереляционных баз данных наиболее часто используется?", "Какой тип нереляционных баз данных наиболее эффективен для хранения данных в виде JSON-документов?", "В чем отличие нереляционных баз данных от реляционных?", "Какие из этих баз данных можно использовать для хранения больших объемов данных и обеспечения горизонтального масштабирования?", "Каким образом можно получить данные из нереляционной базы данных?", 
"Что такое наследование?","Что такое полиморфизм?", "Что такое инкапсуляция?", "Что такое абстрактный класс?", "Что такое интерфейс?", "Что означает аббревиатура REST?", "Какие операции HTTP используются в RESTful API?", "Что такое ресурс в RESTful API? ", "Какой формат данных обычно используется в RESTful API для передачи информации?", "Что означает код ответа HTTP 404 в RESTful API?", "Что означает аббревиатура VCS?", "Какая команда используется для создания новой ветки в git?", "Какие команды используются для отправки изменений из локального репозитория в удаленный?", "Какая команда используется для объединения двух веток в git?", "Что произойдет, если в удаленный репозиторий были добавлены изменения, которых нет в локальной версии, и была использована команда git pull?",
"Что такое Shell в Linux?", "Какая команда используется для просмотра содержимого текущей директории в терминале Linux?", "Какая команда используется для перемещения файлов и директорий в терминале Linux?", "Какая команда используется для завершения работы сессии терминала в Linux?", "Как называется структура данных, в которой элементы хранятся в порядке их добавления?", "Какой алгоритм нужно использовать для поиска минимального элемента в неотсортированном массиве?", "Какой алгоритм сортировки имеет худшую временную сложность O(n^2)?", "Что такое хеш-таблица?", "Какие типы данных могут быть использованы в структурах данных?", 
"Что такое unit-тесты?", "Какие виды тестирования существуют?", "Что такое отладка (debugging)?", "Что такое сценарий (scenario)?", "Какой тип тестирования позволяет обнаружить ошибки в работе приложения под высокой нагрузкой?", "Выберите язык программирования",
"Чем отличается функция от метода в Python?", "Как проверить, что две переменные ссылаются на один и тот же объект?", "Какой символ обозначает комментарий в Python?", "С помощью какого оператора можно добавить элемент в конец списка в Python?", "Какой модуль нужно импортировать в Python, чтобы работать с файлами?", //Python
"Как создать новый проект в Django?", "Как создать новое Django-приложение внутри проекта?", "Как создать новую модель (таблицу) в Django?", "Как создать новую функцию-представление (View) в Django?", "Как включить поддержку административной панели в Django?", //Python фрейворки
"Что такое объект в Java?", "Что такое наследование в Java?", "Как объявить переменную типа int в Java?", "Что такое JVM в Java?","Какая коллекция в Java используется для хранения элементов без повторений?", //Java
"Как создать новый проект Spring MVC?", "Какие 3 основные составляющие архитектуры Spring MVC?", "Какой способ наиболее предпочтителен для описания маршрутов в Spring MVC?", "Какой аннотацией помечается метод контроллера, который обработает GET-запрос по определенному маршруту?", "Каким образом в Spring MVC можно передать данные между представлением и контроллером?", //Java фрейфорк
"Что такое переменная в PHP?", "Что такое пространство имён (namespace) в PHP?", "Как создать новый объект класса в PHP?", "Как вывести на экран содержимое массива в PHP?", "Какой оператор в PHP используется для проверки равенства по значению, но не по типу?", //PHP
"Как создать новый проект в Laravel?", "Как запустить внутренний сервер для проекта Laravel?", "Как создать новую миграцию в Laravel?", "Как создать новый контроллер в Laravel?", "Как создать новый маршрут (route) в Laravel?", //Laravel 
"Какая из приведенных ниже конструкций используется для создания нового объекта в C#?", "Какой тип данных используется в C#, если вы хотите представить целое число?", "Как объявить строку в C#?", "Как объявить метод в C#?", "Какой оператор используется в C#, чтобы выполнить операцию сравнения?", //C#
"Какой из следующих языков программирования НЕ является частью фреймворка .NET?", "Что такое GarbagenCollection в .NET?", "Что такое атрибуты в .NET?", "Что такое LINQ в .NET?", "Что такое NuGet в .NET?", //C# фреймворки
"Как создать новый объект в Ruby?", "Как объявить переменную в Ruby?", "Как объявить метод в Ruby?", "Как объявить строку в Ruby?", "Какой оператор в Ruby используется для проверки равенства по значению и типу данных?", //Ruby
"Как создать новый проект в Rails?", "Как создать новую модель (таблицу) в Rails?", "Как создать новый контроллер в Rails?", "Как создать новый маршрут (route) в Rails?", "Как включить поддержку аутентификации (authentication) в Rails?", //Ruby фреймворк
]


MassiveOfAnswers = [['SQL', 'Java', 'Python', 'Ruby', 'PHP'],
["SELECT * FROM users WHERE username LIKE 'A%'","SELECT * FROM users WHERE username = 'A%'", "SELECT * FROM users WHERE username LIKE '%A'", "SELECT * FROM users WHERE username = '%A'", "SELECT * FROM users WHERE username LIKE '%A%'"],
["SELECT MAX('age') FROM users", "SELECT MAX(age) FROM users", "SELECT COUNT(age) FROM users", "SELECT AVG(age) FROM users", "SELECT SUM(age) FROM users"], ["CREATE TABLE products (id INT, name VARCHAR(255), price INT)", "CREATE TABLE id, name, price FROM products", "INSERT INTO products (id, name, price)", "SELECT products (id, name, price)", "UPDATE products SET id, name, price"], 
["DELETE FROM orders WHERE status = 'canceled'", "TRUNCATE orders WHERE status = 'canceled'", "UPDATE orders SET status = 'completed' WHERE status = 'canceled'", "DROP orders WHERE status = 'canceled'", "SELECT orders WHERE status = 'canceled'"],
["Ключ-значение", "Графовые базы данных", "Семейства документов", "Столбцовые базы данных", "Реляционные базы данных"], ["Ключ-значение", "Графовые базы данных", "Семейства документов", "Столбцовые базы данных", "Реляционные базы данных"], ["Нереляционные базы данных не поддерживают SQL", "Нереляционные базы данных не имеют жесткой структуры", "Нереляционные базы данных не могут хранить связанные данные", "Нереляционные базы данных не предназначены для хранения больших объемов данных", "Нереляционные базы данных применяются только для хранения текстовых данных"], ["Ключ-значение", "Семейства документов", "Столбцовые базы данных", "Реляционные базы данных", "Все вышеперечисленные базы данных"],
["SQL-запросы", "Cypher-запросы", "CQL-запросы", "С помощью документо-ориентированных библиотек", "С помощью ORM (Object-Relational Mapping)"],
["Возможность создания нескольких объектов одного класса", "Возможность изменения параметров объекта во время выполнения программы", "Возможность получения свойств и методов родительского класса в дочернем классе", "Механизм, позволяющий методам дочернего класса вызывать методы родительского класса", "Механизм, позволяющий изменять связи между объектами"], ["Возможность создания объектов на основе абстрактных классов или интерфейсов", "Возможность доступа к объектам класса из любой части программы", "Возможность переопределения методов родительского класса в дочерних классах", "Возможность использования одного и того же метода для разных типов данных", "Возможность создания объектов с динамическим типом данных"], ["Возможность создания классов с несколькими уровнями доступа к переменным и методам", "Возможность создания объектов на основе абстрактных классов или интерфейсов", "Возможность изменения параметров объекта во время выполнения программы", "Возможность доступа к объектам класса из любой части программы", "Механизм, позволяющий методам дочернего класса вызывать методы родительского класса"], ["Класс, у которого не может быть создан объект", "Класс, который не может содержать абстрактных методов", "Класс, который содержит только статические методы", "Класс, который может наследоваться только один раз", "Класс, который не может быть унаследован"], ["Класс, который может содержать только конструкторы", "Способ связи объектов между собой", "Язык программирования для создания веб-приложений", "Описание методов, которые должны быть реализованы классом, реализующим интерфейс", "Способ передачи параметров между методами одного класса"],
["Расширенный стандарт передачи состояния", "Представление состояния передачи", "Представление перенаправления", "Передача состояния с помощью HTTP", "Представление передачи состояни"], ["GET, POST, PUT, DELETE", "GET, POST, UPDATE, DELETE", "INSERT, SELECT, UPDATE, DELETE", "REQUEST, RESPONSE, INSERT, DELETE", "GET, REQUEST, RESPONSE, DELETE"], ["Пароль для доступа к API", "URL-адрес, по которому можно получить данные", "Данные, которые возвращаются в ответ на запрос", "Алгоритм шифрования, используемый в API", "Метод, который используется для запроса данных"], ["XML", "JSON", "HTML", "CSV", "TXT"], ["Ресурс не найден", "Необходимо войти в систему для доступа к ресурсу", "Недостаточно прав для выполнения операции", "Сервер временно недоступен", "Ошибка валидации переданных данных"],
["Visual Code Studio", "Version Control System", "Visual Control System", "Version Communication System", "Visual Communication Studio"], ["git status", "git branch", "git commit", "git log", "git checkout"], ["git init, git add, git commit", "git clone, git push", "git log, git branch, git merge", "git pull, git status", "git checkout, git stash"], ["git push", "git clone", "git merge", "git checkout", "git rebase"], ["Локальная версия будет обновлена до версии в удаленном репозитории.", "Локальная версия будет перезаписана версией в удаленном репозитории.", "Локальная версия будет объединена с изменениями из удаленного репозитория.", "Локальная версия будет удалена.", "Никаких изменений не произойдет."],
["Интерфейс для работы с файловой системой", "Текстовый редактор", "Графический интерфейс пользователя", "Командная оболочка для работы в терминале", "Ядро операционной системы"], ["list", "dir", "cd", "pwd", "ls"], ["touch", "cat", "rm", "mkdir", "chmod"], ["shutdown", "poweroff", "exit", "log-off", "close"], 
["Массив", "Стек", "Очередь", "Список", "Дерево"], ["Бинарный поиск", "Поиск в ширину", "Поиск в глубину", "Линейный поиск", "Сортировка пузырьком"], ["Быстрая сортировка", "Сортировка вставками", "Сортировка слиянием", "Сортировка выбором", "Красно-черное дерево"], ["Структура данных, которая используется для хранения элементов в порядке их добавления", "Структура данных, которая используется для хранения элементов в отсортированном порядке", "Структура данных, которая используется для быстрого поиска элементов по ключу", "Метод сжатия данных", "Алгоритм шифрования данных"],["Только числовые", "Только строковые", "Только булевы (логические)", "Числовые, строковые, булевы, а также дата-структуры и списки", "Только символьные"],
["Тесты, которые проверяют корректность пользовательского интерфейса", "Тесты, которые проверяют работу всей системы целиком", "Тесты, которые проверяют работу конкретного класса или функции", "Тесты, которые запускаются автоматически при каждом запросе пользователя", "Тесты, которые запускаются регулярно по расписанию"], ["Ручное и автоматическое тестирование", "Функциональное и нефункциональное тестирование", "Быстрое и медленное тестирование", "Локальное и удалённое тестирование", "Тестирование перед релизом и тестирование после релиза"],["Методический подход к тестированию кода", "Процесс исправления ошибок в коде", "Тестирование кода на скорость работы", "Тестирование кода на безопасность", "Анализ пользовательских данных и последующее их использование"],["Условия и последовательность действий, которые выполняются в ответ на запрос пользователя", "Числовое значение, которое используется в программе для вычислений", "Класс или функция, которые занимаются обращением к базе данных", "Модуль, который используется для отправки электронных писем", "Алгоритм шифрования данных"],["Модульное тестирование", "Интеграционное тестирование", "Системное тестирование", "Юзабилити-тестирование", "Нагрузочное тестирование"], 
["Python", "Java", "PHP", "C#", "Ruby"], 
["Функция оперирует только с константами, а метод - с переменными", "Функция должна быть прописана глобально, а метод - внутри класса", "Функция не возвращает значения, а метод - всегда возвращает результат выполнения", "Функция может быть вызвана из любой части кода, а метод - только через экземпляр класса", "Функция и метод - это синонимы в Python"], ["С помощью метода equals()", "С помощью метода is()", "С помощью оператора ==", "С помощью оператора is", "С помощью встроенной функции id()"],["//", "--", "/*", "#", "%%"], ["+", "-", "*", "/", "append()"],["math", "os", "datetime", "logging", "time"], 
["python new_project.py", "django-admin startproject new_project", "manage.py makeproject new_project", "django new_project", "start.new_project()"],["python startapp.py", "run.py startapp", "createapp.py", "django-admin startapp app_name", "app = startapp.create()"], ["class MyModel(models.Model):", "def MyModel(models.Model):", "MyModel.create(models.Model):", "MyModel.objects.models.Model()", "MyModel.objects.create(models.Model)"],["class MyView(View):", "function MyView(View):", "MyView.create(View)", "MyView.create(function):", "MyView(View).function()"], ["Включение поддержки административной панели в Django происходит автоматически при создании нового проекта.", "Для включения поддержки административной панели нужно установить сторонний модуль.", "В settings.py нужно раскомментировать соответствующие настройки и создать суперпользователя для доступа к административной панели.", "В urls.py нужно добавить соответствующий маршрут и создать суперпользователя для доступа к административной панели.", "Поддержка административной панели в Django отключена по умолчанию."],
["Это число, которое хранится в памяти компьютера", "Это сущность, которая содержит данные (переменные) и методы (функции)", "Это строка, которую можно выводить на экран", "Это ключевое слово в Java для определения переменных", "Это класс, который не нужно создавать для использования"],["Это возможность получать доступ к чужим переменным и методам без их копирования", "Это возможность унаследовать класс от интерфейса", "Это возможность создавать новый класс на основе существующего класса", "Это возможность использовать классы из других пакетов", "Это возможность изменять первоначальный класс без его копирования"],["int = 10;", "int variable = 10;", "variable int = 10;", "int variable;", "int = variable;"],["Это программный модуль, который запускает код на других языках программирования", "Это модуль, который занимается сборкой мусора в Java", "Это модуль, который оптимизирует код в Java", "Это виртуальная машина, которая исполняет байт-код Java", "Это конструктор классов и методов в Java"],["ArrayList", "LinkedList", "Set", "Map", "Vector"], ["С использованием Spring Boot Initializr", "С использованием Maven quickstart archetype", "Используя команду spring mvc new, после установки Spring Framework", "Создав вручную файлы конфигурации для Spring MVC в пустой директории проекта", "Создав проект с помощью командыspring create-project"], ["Модель, представление, контроллер", "Сервлеты, JSP, JSTL", "Репозиторий, сервис, слой контроля транзакций", "Фабрики, бины, контекст внедрения зависимостей", "Сервер, клиент, база данных"], ["Использование аннотаций @RequestMapping и их атрибутов", "Создание файлов XML-конфигурации", "Использование файлов свойств (properties) для описания маршрутов", "Использование аннотаций @Controller и @ResponseBody", "Создание классов-конфигурации с помощью аннотации @Configuration"], ["@GetMapping", "@PostMapping", "@PutMapping", "@DeleteMapping", "@RequestMapping"], ["Через модель (Model) и объекты ModelAndView", "Через запросы GET/POST", "Через сессии (Sessions)", "Через аттрибуты запроса (Request attributes)", "Через Servlet API"], 
["Это функция, которая работает с данными", "Это область памяти, в которой хранятся значения", "Это синтаксическое правило языка PHP", "Это массив, в котором хранятся данные", "Это тип данных в PHP"], ["Это способ хранения данных в массиве", "Это функция, которая создаёт переменные", "Это функция, которая создаёт переменные", "Это оператор, который выполняет условное выражение", "Это массив, который хранит ссылки на другие массивы"], ["$object = new(classname);", "new($classname) $object;", "$classname.new_object($object);", "$object = new classname;", "Создание объекта не нужно - можно использовать статические методы класса."], ["echo $array;", "print_r($array);", "array_to_string($array);", "array_to_json($array);", "toString($array);"], ["==", "=", "===", "<<=", "^"], ["laravel new project_name", "new_project laravel", "project_name laravel new", "create_laravel project_name", "create_new project_name laravel"], ["php artisan start", "php server", "start_artisan", "artisan server", "server_laravel"], ["php artisan make:migration create_users_table", "php make:migration create_users_table", "php artisan new_migration create_users_table", "php artisan migration:create create_users_table", "php artisan create_migration create_users_table"], ["php artisan make:controller MyController", "php create:controller MyController", "php artisan controller:create MyController", "php artisan new_controller MyController", "php artisan create_controller MyController"], ["Route::get('/users', 'UserController@index');", "Route::post('/users', 'UserController@index');", "create_route('/users', 'UserController@index');", "new Route('/users', 'UserController@index');", "Route->add('/users', 'UserController@index');"],
["create object;", "new object;", "Object.create;", "object.New;", "Объекты создаются автоматически при объявлении переменной"], ["Integer", "Float", "Double", "String", "Char"],['string MyString = "This is a string";', 'MyString = "This is a string";', 'MyString : "This is a string";', '[MyString] = "This is a string";', '"This is a string"'],["int myMethod {return 0};", "[int]myMethod() { return 0; }", "int myMethod() { return 0; }", "void myMethod() { return; }", "myMethod = int { return 0; }"],["==", "=", "===", "<=>", "#"],["C#", "#", "Ruby", "VB.NET", "C++/CLI"],["Методология для сборки мусора в компьютерных программах.", "Компонент фреймворка, который обеспечивает автоматическую сборку мусора.", "Особенность операционной системы, обеспечивающая более быструю разработку приложений.", "Административный инструмент для управления ресурсами компьютера.", "Никакой из вышеперечисленных вариантов."],["Дизайнерские элементы, помогающие визуально оформить приложение.", "Механизм, позволяющий использовать библиотеки и компоненты из других языков.", "Маркеры, которые могут быть добавлены компонентами кода для предоставления дополнительной информации о том, как использовать компоненты  кода.", "Библиотеки классов для создания пользовательских компонентов управления.", "Средства для управления потоками в приложении."],["Язык программирования, разработанный компанией Microsoft.", "Расширение языка C#, позволяющее создавать более короткий и выразительный код для работы с данными.", "Фреймворк для написания многопоточных приложений.", "База данных, используемая для хранения нформации о приложении.", "Средство для компиляции кода в байт-код исполнения его на любой платформе."],["Библиотека,содержащая класссы для работы с сетевыми протоколами.", "Менеджер пакетов, позволяющий устанавливать и обновлять сторонние библиотеки и компоненты в проектах .NET.", "Опциональный компонент, который позволяет компилировать и выполнять код в браузере.", "Библиотека, содержащая классы для работы с графическими интерфейсами.", "Фреймворк для создания распределенных систем."],
["object = Object.new", "new Object = object", "object.new(Object)", "ObjectCreate(object)", "object.create(Object)"], ["variable MyVariable", "MyVariable = Variable.new", "MyVariable = value", "new MyVariable", "variable MyVariable = value"], ["def myMethod", "method myMethod", "myMethod = def", "define myMethod", "myMethod(def)"], ["'This is a string'", '"This is a string"', "string MyString = 'This is a string'", 'MyString = "This is a string"', 'string MyString = "This is a string"'], ["==", "=", "===", "<=>", "#"], ["rails new project_name", "project_name new rails", "new_rails project_name", "create_rails project_name", "create_new project_name rails"], ["Использовать генератор модели rails generate model MyModel", "Создать новый класс-модель вручную в директории app/models", "Использовать миграции rails db:migrate", "Обновить базу данных вручную используя SQL-запросы", "Создать новую базу данных из консоли rails db:create"], ["Использовать генератор контроллера rails generate controller MyController", "Создать новый класс-контроллер вручную в директории app/controllers", "Использовать миграции rails db:migrate", "Обновить базу данных вручную используя SQL-запросы", "Создать новую базу данных из консоли rails db:create"], ["Использовать метод get или post в конфигурационном файле routes.rb", "Использовать метод route в конфигурационном файле routes.rb", "Создать новый класс-маршрут в директории app/routes", "Использовать метод redirect в конфигурационном файле routes.rb", "Создать новый файл маршрутов и добавить его в директорию config/routes"], ["Включение поддержки аутентификации в Rails происходит автоматически при создании нового проекта.", "Для включения поддержки аутентификации нужно установить сторонний гем (например, devise)", "В config/application.rb нужно раскомментировать соответствующие настройки и создать файл user.rb в директории app/models", "В app/helpers нужно создать файл authentication_helper.rb и включить его в представлениях.", "Поддержка аутентификации в Rails отключена по умолчанию."]]






ArrayAnswer = ['PHP',"SELECT * FROM users WHERE username LIKE 'A%'", "SELECT MAX(age) FROM users", "CREATE TABLE products (id INT, name VARCHAR(255), price INT)", "DELETE FROM orders WHERE status = 'canceled'", "Семейства документов", "Семейства документов", "Нереляционные базы данных не имеют жесткой структуры", "Все вышеперечисленные базы данных", "С помощью документо-ориентированных библиотек", "Возможность получения свойств и методов родительского класса в дочернем классе", "Возможность использования одного и того же метода для разных типов данных", "Возможность создания классов с несколькими уровнями доступа к переменным и методам", "Класс, у которого не может быть создан объект", "Описание методов, которые должны быть реализованы классом, реализующим интерфейс", "Передача состояния с помощью HTTP", "GET, POST, PUT, DELETE", "URL-адрес, по которому можно получить данные", "JSON", "Ресурс не найден",
"Version Control System", "git branch", "git clone, git push", "git merge", "Локальная версия будет объединена с изменениями из удаленного репозитория.",
"Командная оболочка для работы в терминале", "ls", "mkdir", "mv", "exit",
"Список", "Линейный поиск", "Сортировка выбором", "Структура данных, которая используется для быстрого поиска элементов по ключу", "Числовые, строковые, булевы, а также дата-структуры и списки",
"Тесты, которые проверяют работу конкретного класса или функции", "Функциональное и нефункциональное тестирование", "Процесс исправления ошибок в коде", "Условия и последовательность действий, которые выполняются в ответ на запрос пользователя", "Нагрузочное тестирование",
"Функция может быть вызвана из любой части кода, а метод - только через экземпляр класса", "С помощью метода is()", "#", "append()", "os", "django-admin startproject new_project", "django-admin startapp app_name", "class MyModel(models.Model):", "class MyView(View):", "В settings.py нужно раскомментировать соответствующие настройки и создать суперпользователя для доступа к административной панели.",
"Это сущность, которая содержит данные (переменные) и методы (функции)", "Это возможность создавать новый класс на основе существующего класса", "int variable = 10;", "Это виртуальная машина, которая исполняет байт-код Java", "Set", "С использованием Spring Boot Initializr", "Модель, представление, контроллер", "Использование аннотаций @RequestMapping и их атрибутов", "@GetMapping", "Через модель (Model) и объекты ModelAndView",
"Это область памяти, в которой хранятся значения", "Это способ группировки кода и избежания конфликтов имён","$object = new classname;", "print_r($array);", "==", "laravel new project_name", "artisan server","php artisan make:migration create_users_table", "php artisan make:controller MyController", "Route::get('/users', 'UserController@index');",
"new object;", "Integer", 'string MyString = "This is a string";', "int myMethod() { return 0; }", "==", "Ruby", "Компонент фреймворка, который обеспечивает автоматическую сборку мусора.", "Маркеры, которые могут быть добавлены компонентами кода для предоставления дополнительной информации о том, как использовать компоненты  кода.", "Расширение языка C#, позволяющее создавать более короткий и выразительный код для работы с данными.", "Менеджер пакетов, позволяющий устанавливать и обновлять сторонние библиотеки и компоненты в проектах .NET.",
"object = Object.new", "MyVariable = value", "def myMethod", '"This is a string"', "==", "rails new project_name", "Использовать генератор модели", "Использовать генератор модели rails generate model MyModel", "Использовать генератор контроллера rails generate controller MyController", "Использовать метод get или post в конфигурационном файле routes.rb", "Для включения поддержки аутентификации нужно установить сторонний гем (например, devise)"] //Правильные ответы теста всего

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
const restApi = document.querySelector('#RESTfulAPI')
const linux = document.querySelector('#linux')
const algorithms = document.querySelector('#algorithms')
const testing = document.querySelector('#testing')
const programmingVid = document.querySelector('#programming')
const frameworks = document.querySelector("#frameworks")
const backend = document.querySelector('#backendDeveloper')
let listAnswerSpan = document.getElementsByTagName('span')
let flPython = 0
let flJava = 0
let flPhp = 0
let flCSharp = 0
let flRuby = 0





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

            if(step < 50){
                numberQuestion.innerText = step + 1
            }
            else if(step >= 50 && flJava == 1){
                numberQuestion.innerText = step - 9
            }
            else if(step >= 60 && flPhp == 1){
                numberQuestion.innerText = step - 19
            }
            else if(step >= 70 && flCSharp == 1){
                numberQuestion.innerText = step - 29
            }
            else if(step >= 80 && flRuby == 1){
                numberQuestion.innerText = step - 39
            }
            start();
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
            numberQuestion.innerText = step + 1
            start();
            
        }
    }
}



function showResult(){
    alert('ТЫ прошёл тест!')
    result.classList.remove('_active')
    test.classList.add('_active')

    let procetbackend = scores.rights * 100 / 50 + '%'
    backend.style.width = procetbackend
    let procentBases =  scores.bases * 100 / 10 + '%'
    baseData.style.width = procentBases
    
    procentOop =  scores.ScoresOop * 100 / 5 + '%'
    oop.style.width = procentOop

    let procentApi =  scores.api * 100 / 5 + '%'
    restApi.style.width = procentApi

    let procentLinux =  scores.linux * 100 / 5 + '%'
    linux.style.width = procentLinux

    let procentAlg =  scores.alg * 100 / 5 + '%'
    algorithms.style.width = procentAlg

    let procentTest =  scores.testing * 100 / 5 + '%'
    testing.style.width = procentTest
    
    let procentProgram =  scores.programming * 100 / 5 + '%'
    programmingVid.style.width = procentProgram

    let procentFrame =  scores.frameworks * 100 / 5 + '%'
    frameworks.style.width = procentFrame

}
further.addEventListener('click', furtherQuestion);
back.addEventListener('click', backQuestion);




// Добавить массив с темами и ответами