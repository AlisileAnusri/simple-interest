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
        <!--var amount=Number(p)+Number(interest);-->
        var year= new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML=
        "If you deposit "+"<span class='highlight'>"+p+"\<br\> at an interest rate of "+"<span class='highlight'>"+rate+"<span class='highlight'>"+"%"+"\<br\>You will receive an amount of "+"<span class='highlight'>"+
        interest+",\<br\> in the year "+"<span class='highlight'>"+year+"\<br\>"

    }

  
}

function updaterange()
{
    var rateval= document.getElementById("rate").value;
    document.getElementById("range_val").innerText=rateval+" %";
}

        
