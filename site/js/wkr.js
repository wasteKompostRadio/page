// sticky effect
let mynavbar = $("#myframe");
let mytitle = $("#mytitle");
let myjumbo=$("#jumbo");

let titleDim =mytitle.height();

let detectMenuChanges=false;

let home=true;

let index_flag=false;

let stick_flag=1; // 1= jumbo; 2 = stick

$( document ).ready(function() {
  if(myjumbo.hasClass("myjumbotron_index")){
    index_flag=true;
  } else {
    index_flag=false;
  }
  
  // detect if it is a phone
  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //   $(".paddingPhones").addClass("padding_phones");
  //  } 
});



window.onscroll = function() { 
  let current_stick;
  if (window.pageYOffset >= titleDim+40 ) { // 40=somma dei padding e margin
    current_stick=2;
  } else {
    current_stick=1;
  }
  if(current_stick!=stick_flag){
    stick_flag=current_stick;
    dealStick();
    
  }
};

function dealStick(){

  if (stick_flag==2) { 

    mynavbar.addClass("fixed-top");
    
    if(!index_flag){ // se non sono nell'index
     
      myjumbo.removeClass("myjumbotron");
      myjumbo.addClass("myjumbosticky");

    } else {
      myjumbo.removeClass("myjumbotron_index");
      myjumbo.addClass("myjumbosticky_index");
    }
     
  } else {
      mynavbar.removeClass("fixed-top");

    if(!index_flag){ // se non sono nell'index       
      myjumbo.removeClass("myjumbosticky");
      myjumbo.addClass("myjumbotron");

    } else {
      myjumbo.removeClass("myjumbosticky_index");
      myjumbo.addClass("myjumbotron_index");
    }

  }

}

       // carico il giusto html a ogni click sulla navbar
       $(".image_button").each(function() {
   
        $(this).on("click", function(){
            // load the work specific page
            window.location = $(this).attr("data-page")+".html";
        });
        
      });

      $( "#myButton" ).click(
        function () {
          if(!($( "#navbarCollapse" ).hasClass("show"))){
            $( ".fa" ).removeClass("notHiddenIco").addClass("hiddenIco");
          } else {
            $( ".fa" ).removeClass("hiddenIco").addClass("notHiddenIco");
          }   
      }     
    );

  


