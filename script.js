function compute()
{
    var p = document.getElementById("principal").value;
    if(p<=0)
    {
        alert("Enter a positive number")
        principal.focus();
    }
    if(p>0){
        var rate= document.getElementById("rate").value;
        var years=document.getElementById("years").value;
        var interest=(p*rate*years)/100;
        interest.toFixed(4)
        var amount=Number(p)+Number(interest);
        amount.toFixed(4)
        var year= new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML=
        "If you deposit "+"<span class='highlight'>"+p+"</span>"+"\<br\> at an interest rate of "+"<span class='highlight'>"+rate+"%"+"</span>"+"\<br\>You will receive an amount of "+"<span class='highlight'>"+
        amount+"</span>"+"<span class='highlight'>"+"</span>"+"\<br\> with an interest of "+"<span class='highlight'>"+interest+"</span>"+", in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>"

    }

  
}

function updaterange()
{
    var rateval= document.getElementById("rate").value;
    document.getElementById("range_val").innerText=rateval+" %";
}

        
