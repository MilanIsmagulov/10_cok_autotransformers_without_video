
let numberOfQuestion = 5; 
rightans=800

divBtn=document.querySelector('.main_buttons')

let nextBtn1 = document.createElement('button')
nextBtn1.innerText = 'Назад'
nextBtn1.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`)
divBtn.appendChild(nextBtn1)

nextbtn=document.createElement('button')
nextbtn.classList.add('blocked')
nextbtn.setAttribute('disabled','true')
nextbtn.id="nextbutton"
nextbtn.innerHTML="Далее"

ansbutton=document.createElement('button')
ansbutton.id='checkAns'

ansbutton.addEventListener('click',function(event)
{
    let ans=document.getElementById('answer').value
    ans=ans.replace(",", ".");
    if (parseFloat(ans) == rightans){
        document.getElementById('answer').classList.add('correct')
        document.getElementById('answer').classList.remove('incorrect')
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
        let nxt = document.getElementById('nextbutton')
        nxt.removeAttribute('disabled')
        nxt.classList.remove('blocked')
        nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
        event.target.setAttribute('disabled',true)
        event.target.classList.add('blocked')
    }
    else{
        document.getElementById('answer').classList.add('incorrect')
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
        event.target.innerHTML="Повторить"
        event.target.setAttribute('onclick', "window.location.reload();")
        let nxt = document.getElementById('nextbutton')
        nxt.removeAttribute('disabled')
        nxt.classList.remove('blocked')
        nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
    }
})
ansbutton.innerHTML="Ответить";
divBtn.appendChild(ansbutton);
divBtn.appendChild(nextbtn);

