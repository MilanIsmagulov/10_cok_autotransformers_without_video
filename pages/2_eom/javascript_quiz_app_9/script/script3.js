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