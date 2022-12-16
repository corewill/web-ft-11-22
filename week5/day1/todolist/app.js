


document.getElementById("adbut").addEventListener("click", function(){
    let input = document.getElementById("input").value;
    let elem=document.createElement('li');
    let adbut1=document.createElement('button');
    let adbut2=document.createElement('button');
    adbut1.innerText="done";
    adbut2.innerText="delete";
    let ul=document.querySelector('ul');

    ul.appendChild(elem);
    elem.appendChild(btn1)
    elem.appendChild(btn2)


});

