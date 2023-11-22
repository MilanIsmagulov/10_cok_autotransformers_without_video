var row = document.getElementById('row2');
var field1 = document.getElementById('0')
var field2 = document.getElementById('1')
var field3 = document.getElementById('2')
var field4 = document.getElementById('3')
var field5 = document.getElementById('4')
var field6 = document.getElementById('5')
var field7 = document.getElementById('6')

var arr = [field1,field2,field3,field4,field5,field6,field7]

window.onload = () => {
    calcImg();
}

function calcImg() {
    let heightImg = document.getElementById('img').clientHeight;

    document.getElementById('left-col').style.height = `${heightImg}px`;
    document.getElementById('right-col').style.height = `${heightImg}px`;
}

new Sortable(row, {
            
            group: {
                name: 'shared',
                put: false // Do not allow items to be put into this list
            },
            
            animation: 150,
            onEnd: function(e) {

                if (e.to.className != "row2" ) 
                    e.item.style = "background-color: white; color: black; border: none; box-shadow: none";
                
            }
        });



for (i of arr){
    new Sortable(i, {

            group: 'shared',
            animation: 150,
            onAdd: function(e){
                var itemEl = e.item;
                var targetList = e.to;
                if (targetList.children.length > 1) {

                    var existingItem;
                    if (targetList.children[0] === itemEl) {
                        existingItem = targetList.children[1];
                    } else {
                        existingItem = targetList.children[0];
                    }
                    
                    var sourceList = e.from;
                    sourceList.appendChild(existingItem);
                    targetList.appendChild(itemEl);

                    if (targetList.className != "field") itemEl.style = "";
                    if (sourceList.className == "row2") existingItem.style = "";
                    
                }
            },
            onEnd: function(e) {
                if (e.to.className == "row2") e.item.style = "";
            }

        });
}

let plan=['Ознакомьтесь с правилами безопасной работы.','Ознакомьтесь с конструкцией однофазного автотрансформатора.','Установите соответствие между изображениями и названиями элементов лабораторного регулируемого однофазного автотрансформатора.','Ознакомьтесь с методикой определения основных параметров автотрансформатора.','Вычислите число витков вторичной обмотки w₂.','Ознакомьтесь с конструкцией и назначением элементов трёхобмоточного трансформатора.','Установите соответствие между номерами на изображении и названиями элементов трехобмоточного трансформатора.','Установите соответствие между назначением и названием элементов трехобмоточного трансформатора.','Установите соответствие между изображениями и названиями элементов вспомогательного оборудования трехобмоточного трансформатора. ']


let numberOfQuestionSum =9
let numberOfQuestion = 9

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

function openPopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.remove('close')
}

function closePopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.add('close')
}

let planPopUp=document.querySelector('.popup_text')
i=1
for(let elem of plan){
   text=document.createElement('h3')
   text.innerHTML="<p><span>"+ i + ".</span> " + elem + "</p>"
   planPopUp.appendChild(text)
   i++
}