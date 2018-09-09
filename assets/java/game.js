var randon_result;
var lost = 0;
var win = 0;
var previous = 0;



var startGame = function(){
    $(".crystals").empty();
    var images = [
        'http://icongal.com/gallery/image/179491/sapphire_jewel_gem_faceted_blue.png', 
        'https://vignette.wikia.nocookie.net/finalfantasy/images/9/9b/Crystal1.jpg/revision/20110101215851', 
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045', 
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/f/f3/Crystal_multi_spidergwen.png/revision/latest?cb=20151121235822'
]

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html('Random Result: ' + random_result);
     
    for(var i = 0; i < 4; i++){
      
     var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);


     var crystal = $("<div>");
         crystal.attr({
             "class": 'crystal', 
             "data-random": random
             
         });
    crystal.css({
        "background-image":"url('" + images[i] + "')",
    })
   
 

    
       $(".crystals").append(crystal);

       $("#previous").html("Total Score:" + previous);
    
    }
}
startGame();

var reset = function(){

}

$(document).on('click', ".crystal" , function(){


    var num = parseInt($(this).attr('data-random'));
     previous += num;
     $("#previous").html("Total Score:" + previous);

     if(previous > random_result){
         lost--;
         
         $("#lost").html("Losses: " + lost);
         
        previous = 0;

         startGame();

     }
     else if(previous === random_result){
        win ++;
        $("#win").html("Wins: " + win);

        previous = 0;

        startGame();

     }
    




});