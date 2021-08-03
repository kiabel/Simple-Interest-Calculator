function compute(){
  var rate = document.getElementById("rate");
  var principal = document.getElementById("principal");
  var years = document.getElementById("years");
  
  if(principal.value < 1){
      alert("Minimum Amount Is 1")
      principal.focus()
      return
  }
  let interest = principal.value * years.value * rate.value / 100;
  futYear = new Date().getFullYear() + parseInt(years.value);
  result = document.getElementById("result")
  result.innerHTML = "<br> <h>Result: <br>"+"<p>If you deposit <mark>"+ principal.value +"</mark>,<br>an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+futYear+"</mark></p>";

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

