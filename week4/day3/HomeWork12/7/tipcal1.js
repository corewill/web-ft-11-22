function tipamount(bill,service){
    
if(service ==="good"){ 
    return (bill * .2) + bill
    }
else if(service ==="fair"){
    return (bill * .15) 
    }
else if(service ==="bad"){
    return (bill * .1) 
    }
}
    console.log(tipamount(100,"good"))