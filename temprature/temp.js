
document.getElementById("btn").onclick = function(){
    let temp;

    if(document.getElementById("ctemp").checked){

        temp = document.getElementById("tempbox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("result").innerHTML = temp+"°C";


    }
    else if(document.getElementById("ftemp").checked){
        temp = document.getElementById("tempbox").value;
        temp = Number(temp);
        temp = toFahrenhiet(temp);
        document.getElementById("result").innerHTML = temp+"°F";


    }
    else{
        document.getElementById("result").innerHTML = "Please Select a Unit!!!"
    }

}


function toCelcius(temp){
    return (temp-32)*(5/9);
}
function toFahrenhiet(temp){
    return temp*9/5+32;
}