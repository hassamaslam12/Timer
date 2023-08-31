var timerInpHour 
var timerInpMin  
var timerInpSec  

var s , m , hr , interval


function start(){




    timerInpHour = document.getElementById("timerInpHour");
    timerInpMin = document.getElementById("timerInpMin");
    timerInpSec = document.getElementById("timerInpSec");

    document.getElementById("timerInpHour").disabled = true;
document.getElementById("timerInpMin").disabled = true;
document.getElementById("timerInpSec").disabled = true;
    
    
    s = timerInpSec.value , m = timerInpMin.value , hr = timerInpHour.value;

    if( s === "" ){
        s = 0  ;
    }
    if( m === "" ){
        m = 0;
    }
    if ( hr === "" ) {
        hr = 0;
    }

    if (s === 0 && m === 0 && hr === 0) {
        alert("hey! input a value");
        stop();
    }
else{
    
    if(s >= 60 ||
        m >= 60  ||
        hr >= 24){
            
            alert('Invalid Input');
            
        }
        else{

            
document.getElementById("btn-start").className = "btn hidden"
document.getElementById("btn-stop").className = "btn btn-display"
document.getElementById("btn-restart").className = "btn btn-display"


            
            interval = setInterval(()=>{
           
                
                
                
                
                if (s === 0) {
                    if (m === 0) {
                        
                        if(hr === 0){
                            s = "";
                            timerInpSec.value = s;
                            
                            greetings();
                            stop();
                        }else{
                            
                            hr--;
                            m = 59 ;
                            s = 60
                            timerInpSec.value = s;
                            timerInpHour.value = hr;
                            timerInpMin.value = m;
                        }
                    }else{
                        
                        m--;
                        s = 60;
                        timerInpSec.value = s;
                        timerInpMin.value = m;
                    }
                }else{

                    s--;
                    
                    timerInpSec.value = s;
                }
            
            },1000)
    }
            
    
}
}   
            
        

function stop(){
    interval = clearInterval(interval);
    document.getElementById("btn-start").className = "btn btn-display"
    document.getElementById("btn-stop").className = "btn hidden"



    document.getElementById("timerInpHour").disabled = false;
    document.getElementById("timerInpMin").disabled = false;
    document.getElementById("timerInpSec").disabled = false;
}


function restart(){
    stop();
    document.getElementById("btn-restart").className = "btn hidden"
    m = 0 , hr = 0 , s = 0;
    timerInpHour.value = "";
    timerInpMin.value = "";
    timerInpSec.value = "";
    
}


function greetings(){
    
     document.getElementById("body").innerHTML = "<video autoplay muted loop id='myvideo' style=' min-width: 100vw;min-height: 100vh;'>        <source src='./images/321.mp4' type = 'video/mp4'/>     </video>"

     setTimeout(()=>{location.reload();},4000);

}