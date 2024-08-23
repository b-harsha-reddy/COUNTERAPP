function createCounter(){
    let count=0;
    function counter(param){
        if(param==='increment'){
           count++;
           return count;
        }
        else if(param==='decrement'){
            if(count==0)
            {
                return count=0;
            }
            return  count-=1;
        }
        else if(param==='reset'){
            return count=0;
        }
    }
    return counter;
}
const counter = createCounter();

function increment(){

    document.getElementById("count").innerHTML=counter('increment');
  
    
}
function decrement(){
    document.getElementById("count").innerHTML = counter('decrement');
}
function reset(){
    document.getElementById("count").innerHTML = counter('reset');


}
