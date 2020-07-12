console.log('content script fired.');

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://workday--vsabb.my.salesforce.com/services/data/v37.0/sobjects/");

//xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
xhr.setRequestHeader('Authorization', ' Bearer 00D0v0000005NaB!AQ4AQErxL2OYZZDfmW4ni7AmrYWQG_pN9xkHedchmNRIgmycJiJWl.Pub5MlCP3GGRhpsoHb1nSTf3ZXpuaxertayw9gFMlq');
//Authorization: Bearer 00D1b0000004eZ8!AQwAQPJNH49.LTf0pbc3Nzmmi2VJnPWEd82n76UTNptQIMCMspDupwt0wFPC_G7vaCxDzxquMtoORVRARQJ2gBjVKl17qmhX
//client.setRequestHeader('X-Test', 'two');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
    //var resp = eval("(" + xhr.responseText + ")");
    debugger;
    console.log('reseponse retrieved..'+xhr.responseText);
    
  }
}
xhr.send();
