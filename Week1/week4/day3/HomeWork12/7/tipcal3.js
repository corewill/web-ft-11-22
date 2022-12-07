function splitAmount(bill,service,party){
    
    if(service ==="good"){ 
        return ((bill * .2) + bill) / party
        }
    else if(service ==="fair"){
        return ((bill * .15) + bill) / party
        }
    else if(service ==="bad"){
        return ((bill * .1) + bill) / party
        }
    }
        console.log(splitAmount(100,"good",5))