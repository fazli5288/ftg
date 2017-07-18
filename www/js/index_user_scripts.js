/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    
    
        /* button  .uib_w_7 */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_8 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#firstpage"); 
         return false;
    });
    
        /* button  .uib_w_9 */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#secondpage"); 
         return false;
    });
    
        /* button  .uib_w_17 */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_23 */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         /*global activate_page */
         activate_page("#firstpage"); 
         return false;
    });
    
        /* button  .uib_w_24 */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global activate_page */
         activate_page("#video"); 
         return false;
    });
    
        /* button  .uib_w_28 */
    $(document).on("click", ".uib_w_28", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_31 */
    
    
        /* button  .uib_w_12 */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_page */
         activate_page("#locate"); 
         return false;
    });
    
        /* button  .uib_w_11 */
    $(document).on("click", ".uib_w_11", function(evt)
    {
       document.location.href = 'tel:+6098315813';
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_34 */
    $(document).on("click", ".uib_w_34", function(evt)
    {
        alert("Prepared by\nFazli Jamalluddini\nFire Risk Assessment");

        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  .uib_w_35 */
    
    
        /* button  .uib_w_35 */
    $(document).on("click", ".uib_w_35", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
