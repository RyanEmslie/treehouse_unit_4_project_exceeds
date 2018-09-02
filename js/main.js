//Ryan Emslie - JavaScript Full Stack
//Techdegree - Unit 4 - Exceeds Expectation
//This version of the program is set up to be a human verse computer player
//One issue I ran into was that the computer 'plays' too quickly for the blue 'active' class to be visible
//I did not use the minmax algorithm, instead I wanted to porgram with the knowledge I had
//I designed this so it wasn't a 'perfect game' - meaning a tie everytime - the computer is beatable
//Still feel like I am still not achieving "D.R.Y." programming but getting better


function startGame(){
    //This block of code sets up the board and resets variables
    let count = 0;
    $('#start').show();
    $('#board').hide();
    $('#finish').hide();
    $("ul.boxes li").removeClass('box-filled-1 box-filled-2');
    $('#finish').removeClass('screen-win-one screen-win-two screen-win-tie');
    player1Moves = [0,0,0,0,0,0,0,0,0];
    computerMoves = [0,0,0,0,0,0,0,0,0];
    let player1Name;
    $('#player1').removeClass('active');
    $('#player2').removeClass('active');







//Click event tied to Start Game button
    $( "#start .button" ).click( function()  {
//****************** EXTRA CREDIT ************************
    //I hard coded the input text boxes into the index.html file 
    count = 0;
    //Resets the player1Moves and player2Moves objects
    for (let i =0; i < 10; i++) {
        player1Moves[i] = 0;
        computerMoves[i] = 0;
    }
//*********************EXTRA CREDIT************************    
    player1Name = $('#player1Input').val();
     //Tests if Player 1 name was entered
       if ( $('#player1Input').val().length < 1 ) {
            alert('Please enter Player 1 Name');
            return;
        } 
        $('#board').show();
        $('#start').hide();
        $('#player1').addClass('active');
        $('.player1Label').text(player1Name);
    });







//Hover event displaying possible move
    $("ul.boxes li").hover(function(){
        $("ul.boxes li").removeClass('image-1 image-2');
        if ( $(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2') ) {
        } else {
            $(this).addClass('image-1');
        } 
    })







//Click event to put circle or cross
    $("ul.boxes li").click(function(){
        $('#player1').addClass('active');
        //Player 1 fills in the board square if it is not already selected
        if ( $(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2') ) {
            return;
        } else {
            $(this).addClass('box-filled-1');
        }
        
        //Record Player 1 Moves
        let num = $(this).attr("id");
        player1Moves[num-1] = 1;
        //Calculated number of turns to help determine if a Tie is achieved
        count = count + 1;
        if ( count > 8 ) {
            $('#player1').removeClass('active')
            $('#player2').removeClass('active')
            endGame();
            return;
        }
        //Tests Player 1 move to see if it is a winning move
        testGameOver();
        //Logic for Computer Move
        calcCompMov();    
        //For testing - logs the spaces occupied
        console.log(`Player 1 moves ${player1Moves}`);
        console.log(`Computer moves ${computerMoves}`);
        $('#player1').addClass('active');
    });







//Function that determines the computers move
    const calcCompMov = () => {
        $('#player1').removeClass('active')
        $('#player2').addClass('active')
            if (!$("ul.boxes li:nth-child("+ 5 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 5 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 5 +")").addClass('box-filled-2')
                computerMoves[4] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 1 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 1 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 1 +")").addClass('box-filled-2')
                computerMoves[0] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 3 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 3 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 3 +")").addClass('box-filled-2')
                computerMoves[2] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 7 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 7 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 7 +")").addClass('box-filled-2')
                computerMoves[6] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 9 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 9 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 9 +")").addClass('box-filled-2')
                computerMoves[8] = 1;
            }
            else if (!$("ul.boxes li:nth-child("+ 2 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 2 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 2 +")").addClass('box-filled-2')
                computerMoves[1] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 4 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 4 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 4 +")").addClass('box-filled-2')
                computerMoves[3] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 6 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 6 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 6 +")").addClass('box-filled-2')
                computerMoves[5] = 1;
            } 
            else if (!$("ul.boxes li:nth-child("+ 8 +")").hasClass('box-filled-1') && !$("ul.boxes li:nth-child("+ 8 +")").hasClass('box-filled-2')) {
                $("ul.boxes li:nth-child("+ 8 +")").addClass('box-filled-2')
                computerMoves[7] = 1;
            } 
            else {
                //For Testing
                console.log('All FALSE!!!!!!!');
            } 
            $('#player2').removeClass('active')
            $('#player1').addClass('active')
            count = count + 1;
            testGameOver(); 
    }



//Game logic to determine winner of human vs. computer game
    const testGameOver = () => {
        $('#player1').removeClass('active')
        $('#player2').removeClass('active')

        if ( ((player1Moves[0] + player1Moves[1] + player1Moves[2]) == 3)  ||
                ((player1Moves[3] + player1Moves[4] + player1Moves[5]) == 3 ) ||
                ((player1Moves[6] + player1Moves[7] + player1Moves[8]) == 3 ) ||
                ((player1Moves[0] + player1Moves[3] + player1Moves[6]) == 3 ) ||
                ((player1Moves[1] + player1Moves[4] + player1Moves[7]) == 3 ) ||
                ((player1Moves[2] + player1Moves[5] + player1Moves[8]) == 3 ) ||
                ((player1Moves[0] + player1Moves[4] + player1Moves[8]) == 3 ) ||
                ((player1Moves[2] + player1Moves[4] + player1Moves[6]) == 3 ) )
        {
            $('#player1').addClass('active')
            endGame();
        } else if ( ((computerMoves[0] + computerMoves[1] + computerMoves[2]) == 3)  ||
                ((computerMoves[3] + computerMoves[4] + computerMoves[5]) == 3 ) ||
                ((computerMoves[6] + computerMoves[7] + computerMoves[8]) == 3 ) ||
                ((computerMoves[0] + computerMoves[3] + computerMoves[6]) == 3 ) ||
                ((computerMoves[1] + computerMoves[4] + computerMoves[7]) == 3 ) ||
                ((computerMoves[2] + computerMoves[5] + computerMoves[8]) == 3 ) ||
                ((computerMoves[0] + computerMoves[4] + computerMoves[8]) == 3 ) ||
                ((computerMoves[2] + computerMoves[4] + computerMoves[6]) == 3 ) )
        {
            $('#player2').addClass('active')
            endGame();
        }
    }


    
//Function closes board and displays 'Winner' - called in click event
    const endGame = () => {
        $('#board').hide();
        $('#finish').show().addClass('screen-win'); 
        //If statement determining which winner/tie screen to display
        if ( $('#player1').hasClass('active') ) {
            $('#finish').addClass('screen-win-one');
            $('.message').text(`${player1Name} is the Winner`); 
        } else if ( $('#player2').hasClass('active') ) {
            $('#finish').addClass('screen-win-two')
            $('.message').text(`Computer is the Winner`);
        } else {
            $('#finish').addClass('screen-win-tie')
            $('.message').text("It's a Tie!");
        } 
        console.log(`This is the count at end: ${count}`)
    };


//When 'New Game' button is pressed the Start Game function is called
    $("#finish .button").click(function(){
        startGame();
    });
};


startGame();
