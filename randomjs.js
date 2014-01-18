/** 
* randomjs library 
**/

(function (){

   'use strict' ; 
   
   
    var max, min ; 
    var randomjs =
    { 
      /**
       * Description :this function return random Integer between min and max
       * @method randomInteger
       * @param {} min
       * @param {} max
       * @return random Integer
       */

      randomInteger : function (min, max) {
         return Math.floor(Math.random() * (max - min + 1) + min);
      } , 
   
   
     
      
      /**
       * Description : this function return random number between min and max
       * @method randomNumber
       * @param {} min
       * @param {} max
       * @return random number 
       */
      randomNumber : function (min, max) {
          return Math.random() * (max - min) + min;
      } ,
      
      
      /**
       * Description : randomString return random string for the given length
       * @method randomString
       * @param {} length : Integer
       * @param {} allownumber : Boolean 
       * @return random string 
       */
      randomString : function (length,allownumber){
        
          var randomstr = "";

         if (allownumber == true)
         {

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for( var i=0; i < length; i++ )
            {
               randomstr += possible.charAt(Math.floor(Math.random() * possible.length));
            }

         }
 
         else if (allownumber == false)
         {

             var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ; 
             for( var i=0; i < length; i++ )
             {
               randomstr += possible.charAt(Math.floor(Math.random() * possible.length));
             }

         }
         return randomstr ; 
     }
         
   }

   if(!window.randomjs){window.randomjs=randomjs;}

})();

