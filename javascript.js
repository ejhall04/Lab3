function eventHandler() {
   var x = document.getElementById("num1");
   var y = document.getElementById("num2");
   var numx = parseInt(x.value);
   var numy = parseInt(y.value)
   var max = Math.max(numx, numy);
   setTimeout(() => { alert(max) }, 3000);
   setTimeout(() => { console.log(max) }, 3000);
}

let xhr = new XMLHttpRequest();
let url = new URL('https://api.weather.gov/glossary')

xhr.open('GET', url);

xhr.send();
xhr.responseType = 'json'
xhr.onload = function() {
    let responseObj = xhr.response;
    setTimeout(() => { console.log(responseObj); }, 3000);
};
