thirdTask();
function rand(){
    var c= Math.floor( Math.random()*10) ;
    if (c<=5){return -1;}
    else {return 1;}
}
function thirdTask(){
    var g=rand(),f=rand();


 var a=(Math.floor( Math.random()*10)+ 1)*g;
 
 console.log(a);
var b =(Math.floor( Math.random()*10)+ 1)* f ;

console.log(b);
if (f==1 && g==1){ console.log(a-b);}
else if(f==-1 && g==-1){ console.log(a*b);}
else if(f!=g){ console.log(a+b);}
}
fourthTask();
function fourthTask(){
    var a =5;
    switch(a){
    case 0 :
        console.log("0");
        a++;
        
        case 1 :
            console.log("1");
            a++;
            
            case 2 :
                console.log("2");
                a++;
               
                case 3 :
                    console.log("3");
                    a++;
                    
                    case 4 :
                        console.log("4");
                        a++;
                       
                        case 5 :
                            console.log("5");
                            a++;
                            
                            case 6 :
                                console.log("6");
                                
                                case 7 :
                                    console.log("7");
                                    a++;
                                    
                                    case 8 :
                                        console.log("8");
                                        a++;
                                        
                                        case 9 :
                                            console.log("9");
                                            a++;
                                            
                                            case 10 :
                                                console.log("10");
                                                a++;
                                               
                                                case 11 :
                                                console.log("11");
                                                a++;
                                               
                                                case 12 :
                                                console.log("12");
                                                a++;
                                                
                                                case 13 :
                                                console.log("13");
                                                a++;
                                                
                                                case 14 :
                                                    console.log("14");
                                                    a++;
                                                  
                                                    case 15 :
                                                        console.log("15");
                                                        a++;
                                                        break;

}
    
}
fifthTask();
function fifthTask()
{   var a =4;b=5;
  
   
        console.log(fifthTask0(a,b));
        console.log(fifthTask1(a,b));
        console.log(fifthTask2(a,b));
        console.log(fifthTask3(a,b));
        
    
    }
   
function fifthTask0(a,b) {
    return a+b;

}
function fifthTask1(a,b) {
    return a-b;

}
function fifthTask2(a,b) {
    return a*b;

}
function fifthTask3(a,b) {
    return a/b;
}
mO();
function mO(){
    var arg1=parseInt(prompt("enter arg1"));
    var arg2=parseInt(prompt("enter arg2"));
    var operation=prompt("enter operation(plus,minus,pros,del)");
   
 
    if(operation=="plus"||operation=="pros"||operation=="minus"||operation=="del");
    else{
        operation= prompt("enter operation(plus,minus,pros,del)");
        
    }
     mathOperation(arg1, arg2, operation)
}
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'minus' :
            console.log(fifthTask1(arg1,arg2));
         break;
         case 'plus' :
            console.log(fifthTask0(arg1,arg2));
         break;
         case 'pros' :
            console.log(fifthTask2(arg1,arg2));
         break;
         case 'del' :
            console.log(fifthTask3(arg1,arg2));
         break;
     }
    
     
}
 var result= power(2,4);
 console.log(result);
function power(val, pow){
    if (pow === 1){
        return val;
    }
    else{
         
        return val * power(val,pow-1);
       
    }
}