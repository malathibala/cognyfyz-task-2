function getGreetingmessage() {
   var currenttime = new Date();
   var currenthour = currenttime.getHours();

   var getGreetingmessage;

   if(currenthour<12){
    getGreetingmessage = "Happy Morning!!!!";
   } else if (currenthour < 18){
    getGreetingmessage = "Good Afternoon!!!!";
   } else {
    getGreetingmessage = "Happy Evening!!!!";
   }

   return getGreetingmessage;
}

    var greeting = getGreetingmessage();
    alert(greeting);












