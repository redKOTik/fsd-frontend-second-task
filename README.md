<div align="center"> 
  
  <h1>Практика верстки</h1>
   
  <strong>[Макет](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/) страниц по поиску номеров в отеле.</strong>
</div>

Добро пожаловать! Это руководство может Вам ознакомиться с проектом, а также разобраться с его запуском.

## Описание проекта

Данный проект представляется верстку 8 страниц учебного макета. Применялись компонентная архитектуру, с переиспользованием блоков, препроцессоры [PUG](https://pugjs.org) и [SASS](https://sass-lang.com), а также javascript. Проект написан с использованием сборщика проектов [webpack](https://webpack.js.org). <br/>
Некоторые компоненты были разработаны с использованием библиотек [jQuery](https://jquery.com), [Moment.js](https://momentjs.com).

## Оглавление

- [Описание проекта](#описание-проекта)
- [Оглавление](#оглавление)
- [Демо](#демо)
- [Приступая к работе](#приступая-к-работе)
  - [Клонирование репозитория](#клонирование-репозитория)
  - [Требуемые зависимости](#требуемые-зависимости)
  - [Установка](#установка)
  - [Запуск](#запуск)
  - [Production](#production)
- [Автор](#автор)

## Демо
См. Демонстрацию на страницах проекта.
### [Список страниц задания](https://redkotik.gitlab.io/fsd-static-pages/)
- [Страница регистрации](https://redkotik.gitlab.io/fsd-static-pages/#register)
- [Детали номера](https://redkotik.gitlab.io/fsd-static-pages/#details)
- [Поиск номера / фильтр](https://redkotik.gitlab.io/fsd-static-pages/#filter)
- [Целевая страница](https://redkotik.gitlab.io/fsd-static-pages/#findroom)
- [Формы](https://redkotik.gitlab.io/fsd-static-pages/#cards)
- [Элементы](https://redkotik.gitlab.io/fsd-static-pages/#elements)
- [Headers and footers](https://redkotik.gitlab.io/fsd-static-pages/#haf)
- [Шрифты](https://redkotik.gitlab.io/fsd-static-pages/#cat)

## Приступая к работе
  
  ### Клонирование репозитория
  Клонирования осуществляется командой `git clone` c указанием ссылки на удаленный репозиторий проекта.  
  ### Требуемые зависимости
  Перед запуском проекта необходимо установить все необходимые зависимости, которые указаны в файле `package.json`
  в свойствах dependencies и devDependencies.  
  ### Установка
  Для установки зависимостей вам потребуется: <br/>
  - Установить [NodeJS](https://nodejs.org/en/)
  - Используя [NPM](https://www.npmjs.com/) выполнить команду `npm install`
  ### Запуск
  Запуск проекта в development режиме осуществляется скриптами `npm build` и `npm start`.
  Скрипт, исполняемый первой командой, подготовик сборку проекта. Второй запустит локальный сервер, с самим проектом.
  ### Production
  Для демонстрации проекта была использована площадка GitLab Pages. 
  Подготовка сборки проекта в production режиме осуществляется скриптом `npm build-prod`.
  
## Автор
- [Victor Kiselev](https://github.com/redKOTik)



