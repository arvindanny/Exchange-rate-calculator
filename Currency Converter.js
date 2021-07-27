 var flag = 0;
function ConvertCurrency(){
    var from = document.getElementById("currency-one").value;
    var to = document.getElementById("currency-two").value;
    var request = new XMLHttpRequest();
    request.open('GET','https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'+ from +"/"+to+'.json' );

request.onload = function(){
     var JsResult = JSON.parse(request.responseText);
     console.log(JsResult)
     console.log(JsResult[to]);
     //console.log(JsResult[to]);
    var Unit = JsResult[to];
     //console.log(Unit);
     var amt = document.getElementById("amount-one").value;
     //console.log(amt);
     document.getElementById("amount-two").value = (amt*Unit).toFixed(2);
     var Calc = document.getElementById("Calc").innerHTML="1 " + from.toUpperCase() +" = "+ Unit.toFixed(5) + " " + to.toUpperCase();
};
request.send();
}

function swap(){
    var txt1 = document.getElementById("currency-one");
    var txt2 = document.getElementById("currency-two");
    var temp = txt1.value;
    txt1.value = txt2.value;
    txt2.value = temp;

    ConvertCurrency();
}

// function mode(){
//     if(flag==0){
//     document.body.style.background="#28263C";
//     document.getElementById("mode-btn").style.color="white";
//     document.getElementById("mode-btn").innerHTML="Dark Mode";
//     flag=1;
//     }
//     else{
//         document.body.style.background="#F5FBF9";
//         document.getElementById("mode-btn").style.color="black";
//         document.getElementById("mode-btn").innerHTML="Light Mode";
//         flag=0;
//     }
// }