let err = document.getElementById("errMsg");
function generateNumber(){
    const number = document.getElementById("inputbox").value;

    //gives out the error msg if we type any other than numbers//
   if(isNaN(number)){
    err.innerHTML = "Please enter a number in a digits";
    return;
   }
   else{
    err.innerHTML = "";
   }

   //code to generate numbers//

   if(!isNaN(number)){
    var result = [];
    for(let i =0;i<number;i++){
        result.push(i);
        }
        document.getElementById("genratedNum").innerText = result.join(' ');
       
    }
   }

