
function openNewTab(tab){
  //var url = 
  chrome.tabs.create( {url:"dataExport.html?host=test.salesforce.com",active:true})
  var greeting = "hello, ";
  //document.getElementById('sampleSecond').addEventListener('click', openNewTab);
  //alert("clicked button.");
      //button.person_name = "Bob";
      // button.addEventListener("click", function() {
      //   alert("clicked button.");
      // }, false);

      
}
function tabCreated(Tabs){
  console.log('tab is created.')
  alert('tab here.');
}


//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('sampleSecond').addEventListener('click', openNewTab);
//document.getElementById('15min').addEventListener('click', setAlarm);
// document.getElementById('30min').addEventListener('click', setAlarm);
// document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);


/**
 * 
 * 
 * var xhr = new XMLHttpRequest();
xhr.open("GET", "https://workday--vsabb.my.salesforce.com/services/data/v37.0/sobjects/");

xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
xhr.setRequestHeader('Authorization', ' Bearer 00D0v0000005NaB!AQ4AQAdEE1tjzG8iuARQcfeMT4Kq7tEKdigrlWIAv.2IjV_l7YOyMNyxVV1uTo8BajbPN8CTe0.bJOwK0ZYIsGAg9OaX3h6v');
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

 */