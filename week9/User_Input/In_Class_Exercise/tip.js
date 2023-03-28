document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", calcTip);
});

function moneyRound(num) {
  return Math.round(num * 100) / 100;
}

function calcTip() {
  var result = document.getElementById("output");

  var bill = document.getElementById("bill").value;

  bill = parseFloat(bill);

  var arrTip = document.getElementsByName("tip");
  var percent = 0;
  for (var i = 0; i < arrTip.length; i++) {
    if (arrTip[i].checked) {
      percent = arrTip[i].value;
      percent = parseFloat(percent);
      break;
    }
  }

  console.log(bill);
  console.log(percent);

  var tip = moneyRound(bill * percent);
  var total = moneyRound(bill + tip);

  console.log('the bill is ' + bill);
  console.log('the tip is ' + tip);
  console.log('the total is ' + total);


  var p
}