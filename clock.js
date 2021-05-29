let name = prompt("İsminiz nedir?");
let info = document.querySelector("#myName");
info.innerHTML = `${name}`

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDay();

    days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    var time = hour + ":" + minute + ":" + second + " " + days[day];
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
  
    setTimeout(showTime, 1000);
  }
  showTime();