document.addEventListener('DOMContentLoaded', function() {
    const nums=document.querySelectorAll('.num');
    const input=document.querySelector('input');
    const ops=document.querySelectorAll('.op');
    const float=document.querySelector('#float')
    let curr='';
    let stepOne='';
    let stepTwo='';
    let operator='';
    for(let num of nums){
        num.addEventListener('click',()=>{

            curr+=num.innerHTML;

            input.value=curr;
            if(stepOne!==''){
                stepTwo=curr;
            }
        })
    }
    for(let op of ops){
        op.addEventListener('click',()=>{
            float.disabled=false;
            if(stepOne===''){
                stepOne=input.value;
                curr='';
            }else if(stepTwo===''){
                stepTwo=input.value;
                curr='';   
            }else{
                let val=calc(stepOne,stepTwo,operator);
                if(val!=='Zero!'){
                    curr='';
                    stepOne=val;
                    stepTwo='';
                    input.value=val;
                }else{
                    curr=''
                    stepOne='';
                    stepTwo=''
                    input.value=`You can't divide by zero, Bud.`
                }

            }
            operator=op.innerHTML;

        })
    }
    document.querySelector('#clear').addEventListener('click',()=>{
        curr='';
        stepOne='';
        stepTwo='';
        operator='';
        input.value='';
        float.disabled=false;
    })
    document.querySelector('#posneg').addEventListener('click',()=>{
        if(curr[0]==='-'){
            curr=curr.slice(1);
            input.value=curr;
        }else{
            curr=`-${curr}`;
            input.value=curr;
        }
    })

    float.addEventListener('click',()=>{
        if(!curr.includes('.')){
            curr+='.'
            input.value=curr;
            float.disabled=true;
        }
    })
    
    document.querySelector('#evaluate').addEventListener('click',()=>{
        if(stepTwo!==''){
            let val=calc(stepOne,stepTwo,operator);
            if(val!=='Zero!'){
                curr=val;
                stepOne='';
                stepTwo='';
                operator='';
                input.value=curr;
            }else{
                curr=''
                stepOne='';
                stepTwo=''
                input.value=`You can't divide by zero, Bud.`
            }
        }
    })

    document.querySelector('#posneg')

})


function calc(n1,n2,op){
    let num1=parseFloat(n1);
    let num2=parseFloat(n2);
    if(op==='/'){
        if(num2===0){
            return 'Zero!'
        }
        return (num1/num2).toFixed(4);
    }else if(op==='x'){
        return (num1*num2).toFixed(4);
    }else if(op==='-'){
        return (num1-num2).toFixed(4);
    }else if(op==='+'){
        return (num1+num2).toFixed(4);
    }
}

