function tipamount(bill,service){
    
    if(service ==="good"){ 
        return (bill * .2) + bill
        }
    else if(service ==="fair"){
        return (bill * .15) + bill
        }
    else if(service ==="bad"){
        return (bill * .1)  + bill
        }
    }
        console.log(tipamount(100,"good"))