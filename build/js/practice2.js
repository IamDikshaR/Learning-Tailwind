const btn = document.getElementsByClassName("open-btn")
const qs = document.getElementsByClassName("question")
const ans = document.getElementsByClassName("answer")

for (let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        ans[i].style.display ='block';
        btn[i].style.transform = "rotate(180deg)";
        let turn = btn[i];
        turn.addEventListener('click', function(){
            ans[i].style.display = 'none';
            // btn[i].style.transform = "rotate(180deg)";
        })
    })
}

for (let i=0; i<qs.length; i++){
    qs[i].addEventListener('click', function(){
        ans[i].style.display ='block';
    })
}

