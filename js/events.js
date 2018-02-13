//define functions here
function getIt(){
  $('p').on('click',alert("Hey!"));
}

function frameIt(){
  /*$("img").on('load',);*/
  $("img").addClass("tasty");
}

function submitIt()
{
  $('form').on('submit',alert('Your form is going to be submitted now.'));
}

function pressIt()
{
  $('form').on('keydown',function(){
    if($("input:first")==="G"){
      alert('You pressed G');
    }
  })
}
$(document).ready(function(){

// call functions here
 getIt();
 frameIt();
 submitIt();
 pressIt();
});
