const uxui=document.getElementById('uxui'); 

let oddChildren=[...document.querySelectorAll('#uxui li:nth-child(2n+1)')]
console.log(oddChildren.length);

let evenChildren=[...document.querySelectorAll('#uxui li:nth-child(2n)')];
console.log(evenChildren);

for(let i=0;i<oddChildren.length;i++){
    oddChildren[i].classList.add('bg-warning');
}
for(let i=0;i<evenChildren.length;i++){
    evenChildren[i].classList.add('bg-success');
}

let abc=[...document.querySelectorAll('#uxui .list-group-item')];

for(i=0; i<abc.length;i++){
    console.log(abc[i]);
    abc[i].addEventListener('click',(e)=>{
        // console.log(e.target.previousElementSibling);
        if(e.target.previousElementSibling==null){
        }else{
            let clickedItem=getColorClass(e.target);
            console.log(clickedItem);
            let prevItem=getColorClass(e.target.previousElementSibling);
            console.log(prevItem);
            let temp1=prevItem;
            prevItem=clickedItem;
            clickedItem=temp1;
            e.target.classList.remove(prevItem);
            e.target.classList.add(clickedItem);
            e.target.previousElementSibling.classList.remove(clickedItem);
            e.target.previousElementSibling.classList.add(prevItem);
        }
    })
}

function getColorClass(abc){
    console.log(abc);
        let attr=abc.getAttribute('class');
        let temp=attr.split(" ");
        // console.log(temp[0]);
        for(j=0;j<temp.length;j++){
            if(temp[j].includes('bg-')){
                // console.log(temp[j]);
                return temp[j];
            }
        }
}