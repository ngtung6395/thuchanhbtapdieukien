function operator(){
    let numb1=parseInt(document.getElementById('numb1').value);
    let numb2=parseInt(document.getElementById('numb2').value);
    let operator=document.getElementById('operator').value;
    let result=eval(numb1+operator+numb2);
        // switch (operator){
        //     case '+':
        //         result=numb1+numb2;
        //         break;
        //     case '-':
        //         result=numb1-numb2;
        //         break;
        //     case '*':
        //         result=numb1*numb2;
        //         break;
        //     case '/':
        //         result=numb1/numb2;
        //         break;
        //
        // }
    document.getElementById('result').innerText=result;
}