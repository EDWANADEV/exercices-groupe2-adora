var screen = document.getElementById("screen")
const touchs =document.querySelectorAll(".value")
const remove =document.getElementById("delete")
const equal=document.getElementById("equal")
let expression=false

touchs.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(expression){
            screen.value=""
            expression=false
        }
    screen.value +=btn.innerHTML; 
    })
});
equal.addEventListener("click", ()=>{
    try {
        const result=eval(screen.value)
        screen.value=result
        expression=true
    } catch (e) {
        screen.value="error"
     
    }
})
remove.addEventListener("click",()=>{
    screen.value=""
})