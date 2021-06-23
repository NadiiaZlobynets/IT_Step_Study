// Задание 1
// Создать html-страницу со списком ссылок.
//     Ссылки на внешние источники (которые начинаются с http://)
//     необходимо подчеркнуть пунктиром.
//     Искать такие ссылки в списке и устанавливать им дополни-
// тельные стили необходимо с помощью JS.

let elemNode = document.querySelectorAll('a')
let elem =  Array.from(elemNode)

elem.forEach(function(item) {
    let result = item.href;
    a = result.replaceAll(location.protocol + "//" + location.host + "/", "")
    if(a.startsWith('http')  || a.startsWith('https')) {
        item.classList.add('js-a-style')
        item.addEventListener('mouseover',
            (e) => {
                item.classList.toggle('js-a-style')
                item.classList.toggle('js-a-style2')
            })

        item.addEventListener('mouseout',
            (e) => {
                item.classList.toggle('js-a-style')
                item.classList.toggle('js-a-style2')
            })

    }
    item.addEventListener('mouseover',
        (e) => {
            item.style.color = "white"
        })
    item.addEventListener('mouseout',
        (e) => {
            item.style.color = "black"
        })
});


// Задание 2
// Создать html-страницу с деревом вложенных директорий.
//     При клике на элемент списка, он должен сворачиваться или
// разворачиваться. При наведении на элемент, шрифт должен ста-
// новится жирным (с помощью CSS).


$(".Collapsable").click(function () {
    $(this).parent().children().toggle();
    $(this).toggle();
}) ;



//
// Задание 3
// Создать html-страницу со списком книг.
//     При щелчке на элемент, цвет текста должен меняться на оран-
// жевый. При повторном щелчке на другую книгу, предыдущей
// необходимо возвращать прежний цвет.
//     Если при клике мышкой была зажата клавиша Ctrl, то элемент
// добавляется/удаляется из выделенных. Если при клике мышкой
// была зажата клавиша Shift, то к выделению добавляются все
// элементы в промежутке от предыдущего кликнутого до текущего.

function Check(a){
    a.style.background = a.style.background=='white'? 'orange':'white';
}

//
// Задание 4
// Создать html-страницу для отображения/редактирования текста.
//     При открытии страницы текст отображается с помощью тега
// div. При нажатии Ctrl + E, вместо div появляется textarea с тем
// же текстом, который теперь можно редактировать. При нажатии
// Ctrl + S, вместо textarea появляет div с уже измененным текстом.
//     Не забудьте выключить поведение по умолчанию для этих соче-
// таний клавиш.


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        event.stopPropagation();
        texta.value = text.innerHTML;
        text.style.display = "none"
        texta.style.display = "block"
    }
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        event.stopPropagation();
        text.innerHTML = texta.value;
        texta.style.display = "none"
        text.style.display = "block"
    }
});

function F1() {}

// Задание 5
// Создать html-страницу с большой таблицей.
//     При клике по заголовку колонки, необходимо отсортировать
// данные по этой колонке. Например: на скриншоте люди отсо-
// ртированы по возрасту. Учтите, что числовые значения должны
// сортироваться как числа, а не как строки.



//
// Задание 6
// Создать html-страницу с блоком текста в рамочке.
//     Реализовать возможность изменять размер блока, если зажать
// мышку в правом нижнем углу и тянуть ее дальше.