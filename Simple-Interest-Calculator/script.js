function compute()
{
    var principal = document.getElementById("amount").value;
    
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("amount").value = "";
        document.getElementById("amount").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var simple_interest = (principal * years * rate) / 100;

    var NowDate = new Date();
    var CurrentYear = parseInt(NowDate.getFullYear()) + parseInt(years);
    
    var display_result = document.getElementById("result");
    display_result.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>,"  + "<br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + simple_interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + CurrentYear + "</span>";
}

function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; 

    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
