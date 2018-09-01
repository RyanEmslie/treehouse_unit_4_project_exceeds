//Ryan Emslie - JavaScript Full Stack
//Techdegree - Unit 4 - Exceeds Expectation


function startGame(){
    //This block of code sets up the board and resets variables
    let count = 1;
    $('#start').show();
    $('#board').hide();
    $('#finish').hide();
    $("ul.boxes li").removeClass('box-filled-1 box-filled-2');
    $('#finish').removeClass('screen-win-one screen-win-two screen-win-tie');
    player1Moves = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
    player2Moves = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
    let player1Name;


    //Click event tied to Start Game button
    $( "#start .button" ).click( function()  {
 //****************** EXTRA CREDIT ************************
 //I hard coded the input text boxes into the index.html file 
    player1Name = $('#player1Input').val();
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
        } else if ( $('#player1').hasClass('active') ) {
            $(this).addClass('image-1');
        } else {
            $(this).addClass('image-2');
        }
    })

    //Click event to put circle or cross
    $("ul.boxes li").click(function(){
        if ( count > 8 ) {
            $('#player1').removeClass('active');
            endGame();
        }
        
        
        //Fills in the board square if it is not already selected
        if ( $(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2') ) {
            return;
        } else if ( $('#player1').hasClass('active') ) {
            $(this).addClass('box-filled-1');
        } else {
            $(this).addClass('box-filled-2');
        }
        
        







        //Assigns "score" to each player
        if ( $('#player1').hasClass('active') ) {
            let num = $(this).attr("id");
            player1Moves[num] = player1Moves[num] + 1;
        } else if ( $('#player2').hasClass('active') ) {
            let num = $(this).attr("id");
            player2Moves[num] = player2Moves[num] + 1;
        };
        
        testGameOver();
        count = count + 1;
        changePlayer();  
    });


    const testGameOver = () => {
        //Game logic to determine winner of human vs. human game
        if ( ((player1Moves[1] + player1Moves[2] + player1Moves[3]) == 3)  ||
                ((player1Moves[4] + player1Moves[5] + player1Moves[6]) == 3 ) ||
                ((player1Moves[7] + player1Moves[8] + player1Moves[9]) == 3 ) ||
                ((player1Moves[1] + player1Moves[4] + player1Moves[7]) == 3 ) ||
                ((player1Moves[2] + player1Moves[5] + player1Moves[8]) == 3 ) ||
                ((player1Moves[3] + player1Moves[6] + player1Moves[9]) == 3 ) ||
                ((player1Moves[1] + player1Moves[5] + player1Moves[9]) == 3 ) ||
                ((player1Moves[3] + player1Moves[5] + player1Moves[7]) == 3 ) )
        {
            endGame();
        } else if ( ((player2Moves[1] + player2Moves[2] + player2Moves[3]) == 3)  ||
                ((player2Moves[4] + player2Moves[5] + player2Moves[6]) == 3 ) ||
                ((player2Moves[7] + player2Moves[8] + player2Moves[9]) == 3 ) ||
                ((player2Moves[1] + player2Moves[4] + player2Moves[7]) == 3 ) ||
                ((player2Moves[2] + player2Moves[5] + player2Moves[8]) == 3 ) ||
                ((player2Moves[3] + player2Moves[6] + player2Moves[9]) == 3 ) ||
                ((player2Moves[1] + player2Moves[5] + player2Moves[9]) == 3 ) ||
                ((player2Moves[3] + player2Moves[5] + player2Moves[7]) == 3 ) )
        {
            endGame();
        }
    }


    //Function changes the .active for player - called by click event
    const changePlayer = () => {   
        if ( $('#player1').hasClass('active') ) {
            $('#player1').removeClass('active')
            $('#player2').addClass('active');
        } else {
            $('#player1').addClass('active');
            $('#player2').removeClass('active')
        };
    };

    //Function closes board and displays 'Winner' - called in click event
    const endGame = () => {
        $('#board').hide();
        $('#finish').show().addClass('screen-win'); 
        count = 0;
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
        //Resets the player1Moves and player2Moves objects
        for (let i =0; i < 10; i++) {
            player1Moves[i] = 0;
            player2Moves[i] = 0;
        }
    };


    //When 'New Game' button is pressed the Start Game function is called
    $("#finish .button").click(function(){
        startGame();
    });

};


startGame();