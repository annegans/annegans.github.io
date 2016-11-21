
 //js code for Tic Tac Toe 

 //looks true two array's for similair values
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; 
  return a.filter(function (e) {
  if (b.indexOf(e) !== -1) return true;
  });
}

var player1 = "X";
var player2 = "O";
var xMoves = [];
var oMoves = [];
var turn = 0;
var winningLines =[
["b1", "b2", "b3"], ["b4", "b5", "b6"], ["b7", "b8", "b9"], ["b1", "b4", "b7"], ["b2", "b5", "b8"], ["b3", "b6", "b9"], ["b1", "b5", "b9"], ["b3", "b5", "b7"]
]

$(document).ready(function(){
 
  //Get Box's input box even and odd
  var inputBox = $(".box").on('click', function(){
    if (turn%2 === 0){
        inputBox = player1
        xMoves.push(this.id)
        $(this).addClass('red')
      }else{
       inputBox = player2
        oMoves.push(this.id)
       $(this).addClass('blue') 
      }
         turn++;
      
    //Show Box on the page 
    $(this).html(inputBox); 
    winners(); 
  });

    //Get winner loops true the array//unbined click 
function winners(){
  var result;
  var winLoseResult = winningLines.some(function(value){
  var xSame = intersect(value, xMoves)
  var oSame = intersect(value, oMoves)

   if(xSame.length === 3){
    // $(".square").addClass('hello');
    $('#l1').text('');
    $('#l2').text('');
    $('#l3').text('');
    $('#l4').text('');
    $('#l5').text('');
    $('#l6').text('');
    $('#l7').text('');
    $('#l8').text('');
    $('#l9').text('');
    $('.box').text('');
    $('#lxo').html("X");
    $('#l5').html("W");
    $('#l6').html("I");
    $('#ln').html("N");
    $('#l7').html("S");
    
    result = "PLAYER 1 : X WINS";
    $('.box').off('click'); 
    return true;

   }else if(oSame.length === 3){
    $('#l1').text('');
    $('#l2').text('');
    $('#l3').text('');
    $('#l4').text('');
    $('#l5').text('');
    $('#l6').text('');
    $('#l7').text('');
    $('#l8').text('');
    $('#l9').text('');
    $('.box').text('');
    $('#lxo').html("O");
    $('#l5').html("W");
    $('#l6').html("I");
    $('#ln').html("N");
    $('#l7').html("S");
    result = "PLAYER 2 : O WINS";
    $('.box').off('click');
    return true;
   }
   //show winner on the page      
  });
 
  if ((!winLoseResult) && xMoves.length === 5) {
    result = "IT'S A TIE"
    $('#l1').text('');
    $('#l2').text('');
    $('#l3').text('');
    $('#l4').text('');
    $('#l5').text('');
    $('#l6').text('');
    $('#l7').text('');
    $('#l8').text('');
    $('#l9').text('');
    $('.box').text('');
    $('#l4').html("T");
    $('#l5').html("I");
    $('#l6').html("E");
    
  };

  $(".results").html(result);  
  console.log(result)
}


$('.title').on('click', function(){
  console.log("kjbsfd")
  $('.box').on('click');
  $('.box').each(function(index, element){
    if($(element).hasClass( "red" )){
      $(element).removeClass('red');
      $(element).html('')
      xMoves=[]
      turn = 0
    }
    else if($(element).hasClass( "blue" )){
      $(element).removeClass('blue');
      $(element).html('')
      oMoves=[]
      turn =0
    }  
  }) 
});

var boxes = $('#allbox .square');
var original = boxes.css('background-color');
var colors = ['rgba(205,255,254,0.5)', 'rgba(255,180,239,0.5', 'rgba(126,178,177,0.5)', 'rgba(128,204,201,0.5)', 'rgba(39,178,173,0.5)', 'rgba(144,255,254,0.5)', 'rgba(255,169,246,0.5)', 'rgba(83,178,169,0.5)', 'rgba(160,186,255,0.5)', 'rgba(71,178,174,0.5)','rgba(126,255,250,0.5)','rgba(255,246,97,0.5)','rgba(255,113,87,0.5)','rgba(255,152,97,0.5)','rgba(120,54,127,0.5)','rgba(255,152,97,0.5)','rgba(255,111,97,0.5)','rgba(255,181,173,0.5)', ];

boxes.hover(function () { //mouseover
    var col2 = Math.floor(Math.random() * colors.length);
    var newcolor = colors[col2];
    $(this).css('background-color', newcolor);
}, function () { //mouseout
    $(this).css('background-color', original);
});

$(".square").on('click', function(){
  $('#l1').html("T");
  $('#l2').html("I");
  $('#l3').html("C");
  $('#l4').html("T");
  $('#l5').html("A");
  $('#l6').html("C");
  $('#l7').html("T");
  $('#l8').html("O");
  $('#l9').html("E");
  
});

$(".square").on('click', function(){
  $('#text1').text('');
  $('#text2').text('');
  $('#text3').text('');
  $('#text4').text('');
  $('#text5').text('');
  $('#text6').text('');
  $('#text7').text('');
  $('#text8').text('');
  $('#text9').text('');
 
});

});

