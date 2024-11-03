document.querySelectorAll("#menu li").forEach(element => {
    element.addEventListener("click",()=>{
        document.querySelectorAll("#menu li").forEach(e => e.classList.remove("select"))
        element.classList.add("select")
    })
});

var carrow1=0
document.querySelectorAll("#block-project .arrow").forEach(arrow => {
    arrow.addEventListener("click",()=>{
        Carrosel("#block-project .arrow","#grid-project",28.5,3,arrow)
    })
});

document.querySelectorAll("#habil .arrow").forEach(arrow => {
    var click=1;  
    arrow.addEventListener("click",()=>{
        let bloco=document.querySelectorAll("#habil-elements .habil-data")
        bloco.forEach((e,i)=> {
            if (e.classList.contains("select"))
                click=i
            e.classList.remove("select")
        })
        if (document.querySelectorAll("#habil .arrow").item(0)==arrow)
            click-=click!=0?1:0;
        else if(click!=bloco.length-1)
            click++;
        bloco.item(click).classList.add("select")   
        Carrosel("#habil .arrow","#habil-elements",25,2,arrow)
    })
});


function Carrosel(arrowClass,block,value,count,arrow) {
    var length= (document.querySelector(block).children.length-count)*value;
    if (document.querySelectorAll(arrowClass).item(0)==arrow) {
        carrow1+=carrow1!=0?value:carrow1;
        let child=`margin-left:${carrow1}vw;transition:0.3s;`
        document.querySelector(block).style=child;
    } else if (carrow1!=-length){
        carrow1-=value;
        let child=`margin-left:${carrow1}vw;transition:0.3s;`
        document.querySelector(block).style=child;
    }       
}