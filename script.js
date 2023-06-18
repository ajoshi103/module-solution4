(function (){
    

 var names = ["Yaakov"," John" ,  "Jen" ,"Frank " ,"Jason ", 
 "Larry", "Paula", "Laura ",  "Jim"];

 for(var i = 0; i < names.length;i++)
 {
      var firstLetter = names[i].charAt(0).toLowerCase();

      
             if(firstLetter === 'j'){

             
             
                helloSpeaker(names[i]);
            }

 }

})();