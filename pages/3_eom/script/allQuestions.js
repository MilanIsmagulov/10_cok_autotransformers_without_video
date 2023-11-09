// Массив с вопросами. Не Зашифрован :)

let themeName = "Трехобмоточные трансформаторы. Автотрансформаторы";

let allQuestions = [
	{
        type: 3, // Тип вопроса
        price: 250, // Цена вопроса
        text: 'Установить соответствие между принципиальными схемами и названиями трансформаторов.',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: [
            "Cхема трехобмоточного трансформатора с двумя первичными и одной вторичной обмотками",
            "Cхема понижающего однофазного автотрансформатора",
            "Cхема трехобмоточного трансформатора с одной первичной и двумя вторичными обмотками",
            "Cхема понижающего трёхфазного автотрансформатора",
            "Cхема повышающего однофазного автотрансформатора"
        ],// Варианты ответов.
        correctAnswer: [4,3,2,1,0],   // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5, // Тип вопроса
        price: 350, // Цена вопроса
        text: 'Определите элементы насадочной колонны.',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: [
            "Обмотка низкого напряжения (НН)",
            "Обмотка среднего напряжения СН",
            "Обмотка высокого напряжения (ВН)",
            ],
        correctAnswer: [2,0,1],     // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,
        price: 1,
        text: 'Выберите из предложенных вариантов, назначение маслоуказателя',
        image: false,
        answers: [
            'контроль уровня масла в расширителе.',
            'защита от скапливания газа в баке трансформатора.',
            'охлаждение трансформаторного масла.',
            'локализация колебаний уровня масла в трансформаторе при изменении температуры.'
        ],
        correctAnswer: [0],
        answered: null,
    },
    {
        type: 0,
        price: 1,
        text: 'Выберите из предложенных вариантов назначение воздухоосушителя.',
        image: false,
        answers: [
            'поглощение влаги из воздуха.',
            'охлаждение трансформаторного масла.',
            'локализация колебаний уровня масла в трансформаторе при изменении температуры.',
            'отключение трансформатора.'
        ],
        correctAnswer: [0],
        answered: null,
    },
    {
        type: 0,
        price: 1,
        text: 'Каково назначение термосифонного фильтра?',
        image: false,
        answers: [
            'локализация колебаний уровня масла в трансформаторе при изменении температуры.',
            'защита от скапливания газа в баке трансформатора.',
            'регенерация масла в трансформаторе с целью увеличения срока службы трансформаторного масла - замедление его старения.',
            'отключения трансформатора.'
        ],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 0,
        price: 2,
        text: 'Каково назначение предохранительной трубы?',
        image: false,
        answers: [
            'защищает от скапливания газа в баке трансформатора.',
            'отключает трансформатор.',
            'контролирует уровень трансформаторного масла.',
            'охлаждает трансформаторное масло.'
        ],
        correctAnswer: [0],
        answered: null,
    },
    {
        type: 0,
        price: 123,
        text: 'Каково назначение расширителя?',
        image: false,
        answers: [
            'охлаждение трансформаторного масла.',
            'локализация колебаний уровня масла в трансформаторе при изменении температуры.',
            'отключение трансформатора.',
            'контроль уровня масла.'
        ],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 0,
        price: 3122,
        text: 'Продолжить фразу из предложенных вариантов. Автотрансформаторы предназначены для …',
        image: false,
        answers: [
            'понижения величин напряжения и тока',
            'повышения величин напряжения и тока',
            'преобразования напряжения',
            'преобразования тока',
            'преобразования энергии с одного значения напряжения на другое'
        ],
        correctAnswer: [4],
        answered: null,
    },
    {
        type: 3, // Тип вопроса
        price: 350, // Цена вопроса
        text: 'Установить соответствия между изображениями и названиями автотрансформатора',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: [
            "Трёхобмоточный  автотрансформатор",
            "Двухобмоточный  автотрансформатор",
            "Автотрансформатор с расщеплённой обмоткой",
            ],
        correctAnswer: [2,1,0],     // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5, // Тип вопроса
        price: 350, // Цена вопроса
        text: 'Установите соответствие между изображениями и названиями элементов трехобмоточного трансформатора',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: [
            "Расширитель",
            "Анцапфа",
            "Бак",
            "Подъёмная скоба",
            "Сливной вентиль"
            ],
        correctAnswer: [4,2,3,1,0],     // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
];