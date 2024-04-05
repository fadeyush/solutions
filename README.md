# solutions
Тестовое задание на вакансию frontend-разработчика (React) в компанию NVI Solutions LLC

Проект написан на **TypeScript** с использованием библиотелки **React**. Для хранения глобального состояния применяется хранилище **Redux** с расширением **Thunk**. Стилизован с помощью препроцессора **Sass(scss)** с использоваем modules. 

## Задача: 
реализовать с помощью TypeScript и React одностраничное приложение для отображения графиков курса трех валют по отношению к рублю.

### Функциональные требования:
- Приложение собирается и поднимается локально с помощью npm.

- Есть 3 чекбокса: «Евро», «Доллар», «Юань». При нажатии на чекбокс появляется
соответствующая линия на графике справа. Если нажаты все чекбоксы, то на одном
графике должно быть несколько линий разного цвета. При старте приложения ничего
не должно быть выбрано.

- Есть 2 поля для выбора дат: в них выбираются границы интервала для отображения
графика. При старте приложения там должна быть выбрана последняя неделя.

- На экране постоянно отображается «число запросов в API». Это число GET-запросов
для текущего клиента с момента запуска приложения.

- Для получения данных для построения графика используйте следующий API:
https://github.com/fawazahmed0/exchange-api.

- Вы можете использовать любые UI kit’ы, дизайн-системы и библиотеки для создания
интерфейса и построения графика.

##  Установка и запуск приложения:

Клонировать репозиторий:

    git clone https://github.com/fadeyush/solutions

Запустить приложение:

    npm start

## Инструкция для тестирования:

При старте приложения ничего не выбрано. Пустой график с текущей неделей (до сегодняшнего дня)

1. При нажатии на чекбоксы «Евро», «Доллар» и/или «Юань», если не менять даты в полях ниже.

 **Ожидается**: на графике появится линия курса валют для выбранной валюты на промежуток текущей недели. Цвет каждой валюты указан в легенде графика.

2. При смене дат - если выбран хотя бы один чекбокс
   
**Ожидается**: показывается новый график(линия) курса валют к рублю на выбранный промежуток выбранной валюты.

3. При смене дат - если не выбран ни один чекбокс
   
**Ожидается**: на графике нет линий, но меняется промежуток на заданный. Если в новом промежутке нажать на чекбокс валюты - появится ее график.

4. На каждый запрос к API увеличивается число запросов API на один.
5. Даты выбираются от более раннего к более позднему. В обратном случае графика не будет.

### Примечания:
- Предоставленное API отображает курс валют с 02.03.2024, поэтому выбрать дату позднее этой нельзя.
- выбор дат реализован с помощью дефолтного `<input type="date">`, функционал которого ограничен. Поэтому при выборе даты, изменения считываются даже если пользователь еще не выбрал дату, а, например, перелистнул месяц. Следовательно, запросы отправляются, т к дата становится другой. (исправить можно, использовав в разработке не дефолтный календарь, или отпрявлять запрос по кнопке, например)
- Также нельзя выбрать дату позднее текущего дня =)