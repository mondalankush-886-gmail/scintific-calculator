document.addEventListener("DOMContentLoaded",function(){
    const display=document.getElementById("calc-display");
    const buttons=document.getElementsByClassName("btn");
    
    let currentvalue="";

    function evaluate(){
        const convert=currentvalue.replace('%', '*0.01');
        const result =eval(convert);
        currentvalue = result.toString() ;
        display.value=currentvalue ;
    }

    for (let i=0;i< buttons.length;i++ ){
        const button=buttons[i];
        button.addEventListener('click', function(){
        const value=button.innerText;


            if (value == "AC"){
                currentvalue="";
                display.value = currentvalue;
            } 
            
            else if (value == "="){
                evaluate();
            }
            
            else{
                currentvalue += value;
                 display.value=currentvalue;
            }


            

        })
    }
})