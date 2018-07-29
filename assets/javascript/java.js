var player1={
    Health:0,
    Attack:0,
    
}

var player2={
    Health:0,
    Attack:0,
    CounterA:0
}






var Putin={
    health: 300,
    attack: 15,
    CounterA: 30
};
var Trump={
        health: 250,
        attack: 10,
        CounterA: 50
    };
var Angela={
        health: 200,
        attack: 5,
        CounterA: 20
    };
var Justin={
        health: 50,
        attack: 3,
        CounterA: 10
    };    

numP=0;
numJ=0;
numT=0;
numA=0;

$(document).ready(function(){
 
 /*Player1 segment*/   

   
 /*Putin segment*/  

    $(".Putin").on("click", function() {
        
        numP=numP+1;
        if(numJ==1||numT===1||numA==1)
    {console.log("blocked")}
    else{
        console.log(player1.Health=Putin.health);
        console.log(player1.Attack=Putin.attack);
        $( ".Justin" ).appendTo( ".opponent0" );
        $( ".Trump" ).appendTo( ".opponent1" );
        $( ".Angela" ).appendTo( ".opponent2" );
        console.log("You have seleceted player 1");
        document.getElementById("x1").innerHTML = player1.Health;
        document.getElementById("x2").innerHTML = player1.Attack;
   
        $(".Justin").on("click", function() {   
            console.log(player2.Health=Justin.health);
            console.log(player2.Attack=Justin.attack);
            console.log(player2.CounterA=Justin.CounterA);
            $( ".Justin" ).appendTo( ".player2" );
            document.getElementById("y1").innerHTML = player2.Health;
            document.getElementById("y2").innerHTML = player2.Attack;  
            $( ".Angela" ).appendTo( ".opponent0" );
            $( ".Trump" ).appendTo( ".opponent1" );   
            console.log("You have seleceted player 2");
                  
        });
        
        $(".Angela").on("click", function() {
            console.log(player2.Health=Angela.health);
            console.log(player2.Attack=Angela.attack);
            console.log(player2.CounterA=Angela.CounterA);
            $( ".Angela" ).appendTo( ".player2" ); 
            $( ".Justin" ).appendTo( ".opponent0" );
            $( ".Trump" ).appendTo( ".opponent1" );  
            console.log("You have seleceted player 2");
            document.getElementById("y1").innerHTML = player2.Health;
            document.getElementById("y2").innerHTML = player2.Attack;        
        });
        
        $(".Trump").on("click", function() {
            console.log(player2.Health=Trump.health);
            console.log(player2.Attack=Trump.attack);
            console.log(player2.CounterA=Trump.CounterA);
            $( ".Trump" ).appendTo( ".player2" );
            $( ".Justin" ).appendTo( ".opponent0" );
            $( ".Angela" ).appendTo( ".opponent1" );   
            console.log("You have seleceted player 2");
            document.getElementById("y1").innerHTML = player2.Health;
            document.getElementById("y2").innerHTML = player2.Attack;       
        });}



  });

  /*Justin segment*/

  $(".Justin").on("click", function() {
    numJ=numJ+1;
    if(numP===1||numT===1||numA===1)
    {console.log("blocked")}
    else{
    console.log(player1.Health=Justin.health);
    console.log(player1.Attack=Justin.attack);
    
    $( ".Putin" ).appendTo( ".opponent0" );
    $( ".Trump" ).appendTo( ".opponent1" );
    $( ".Angela" ).appendTo( ".opponent2" );
    console.log("You have seleceted player 1");
    document.getElementById("x1").innerHTML = player1.Health;
    document.getElementById("x2").innerHTML = player1.Attack;
    
    $(".Angela").on("click", function() {
        console.log(player2.Health=Angela.health);
        console.log(player2.Attack=Angela.attack);
        console.log(player2.CounterA=Angela.CounterA);
        $( ".Angela" ).appendTo( ".player2" ); 
        $( ".Trump" ).appendTo( ".opponent1" );  
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;        
    });
    
    $(".Trump").on("click", function() {
        console.log(player2.Health=Trump.health);
        console.log(player2.Attack=Trump.attack);
        console.log(player2.CounterA=Trump.CounterA);
        $( ".Trump" ).appendTo( ".player2" );
        $( ".Angela" ).appendTo( ".opponent1" );   
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;       
    });
    
    $(".Putin").on("click", function() {
     
        console.log(player2.Health=Putin.health);
        console.log(player2.Attack=Putin.attack);
        console.log(player2.CounterA=Putin.CounterA);
        $( ".Putin" ).appendTo( ".player2" );
        $( ".Angela" ).appendTo( ".opponent0" );   
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;      
    });
}
                
});


/*Trump segment*/

$(".Trump").on("click", function() {
    numT=numT+1;
    if(numP==1||numJ==1||numA==1)
    {console.log("blocked")}
    else{
 
    console.log(player1.Health=Trump.health);
    console.log(player1.Attack=Trump.attack);
    $( ".Putin" ).appendTo( ".opponent0" );
    $( ".Justin" ).appendTo( ".opponent1" );
    $( ".Angela" ).appendTo( ".opponent2" );
    console.log("You have seleceted player 1");
    document.getElementById("x1").innerHTML = player1.Health;
    document.getElementById("x2").innerHTML = player1.Attack; 

    $(".Justin").on("click", function() {   
        console.log(player2.Health=Justin.health);
        console.log(player2.Attack=Justin.attack);
        console.log(player2.CounterA=Justin.CounterA);
        $( ".Justin" ).appendTo( ".player2" );
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;  
        $( ".Angela" ).appendTo( ".opponent0" );
        $( ".Putin" ).appendTo( ".opponent1" ); 
        console.log("You have seleceted player 2");
              
    });
    
    $(".Angela").on("click", function() {
        console.log(player2.Health=Angela.health);
        console.log(player2.Attack=Angela.attack);
        console.log(player2.CounterA=Angela.CounterA);
        $( ".Angela" ).appendTo( ".player2" ); 
        $( ".Justin" ).appendTo( ".opponent0" );
        $( ".Putin" ).appendTo( ".opponent1" );
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;        
    });
    
    $(".Putin").on("click", function() {
     
        console.log(player2.Health=Putin.health);
        console.log(player2.Attack=Putin.attack);
        console.log(player2.CounterA=Putin.CounterA);
        $( ".Putin" ).appendTo( ".player2" );
        $( ".Justin" ).appendTo( ".opponent0" );
        $( ".Angela" ).appendTo( ".opponent1" );   
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;      
    });


}            
});

/*Angela section*/

$(".Angela").on("click", function() {
    numA=numA+1;
    if(numP==1||numJ==1||numT==1)
    {console.log("blocked")}
    else{
    console.log(player1.Health=Angela.health);
    console.log(player1.Attack=Angela.attack);
    $( ".Putin" ).appendTo( ".opponent0" );
    $( ".Trump" ).appendTo( ".opponent1" );
    $( ".Justin" ).appendTo( ".opponent2" );
    console.log("You have seleceted player 1");
    document.getElementById("x1").innerHTML = player1.Health;
    document.getElementById("x2").innerHTML = player1.Attack; 
    $(".Justin").on("click", function() {   
        console.log(player2.Health=Justin.health);
        console.log(player2.Attack=Justin.attack);
        console.log(player2.CounterA=Justin.CounterA);
        $( ".Justin" ).appendTo( ".player2" );
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;  
        $( ".Putin" ).appendTo( ".opponent0" );
        $( ".Trump" ).appendTo( ".opponent1" );   
        console.log("You have seleceted player 2");
              
    });
    
    $(".Trump").on("click", function() {
        console.log(player2.Health=Trump.health);
        console.log(player2.Attack=Trump.attack);
        console.log(player2.CounterA=Trump.CounterA);
        $( ".Trump" ).appendTo( ".player2" );
        $( ".Justin" ).appendTo( ".opponent0" );
        $( ".Putin" ).appendTo( ".opponent1" );
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;       
    });
    
    $(".Putin").on("click", function() {
     
        console.log(player2.Health=Putin.health);
        console.log(player2.Attack=Putin.attack);
        console.log(player2.CounterA=Putin.CounterA);
        $( ".Putin" ).appendTo( ".player2" );
        $( ".Justin" ).appendTo( ".opponent0" );
        $( ".Trump" ).appendTo( ".opponent1" );
        console.log("You have seleceted player 2");
        document.getElementById("y1").innerHTML = player2.Health;
        document.getElementById("y2").innerHTML = player2.Attack;      
    });



}            
});


 
$(".Attack").on("click", function() {
   
    player2.Health=(player2.Health-player1.Attack);
    player1.Health=(player1.Health-player2.Attack);

    document.getElementById("y1").innerHTML = player2.Health;
    document.getElementById("y2").innerHTML = player2.Attack; 
    document.getElementById("x1").innerHTML = player1.Health;
    document.getElementById("x2").innerHTML = player1.Attack; 

    if(player2.Health<=0){
        alert("You win");

    } 
    else if(player1.Health<=0){
        alert("You loose")
    }
});
 

});


