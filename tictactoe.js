/*Player 1 is X. Player 2 is O. Player 1 always starts. When he/she is done, the "active class"
should be removed and set to Player 2. activePlayer should change to 1. This goes back and forth until
one player gets a row/column of X's or O's */

var activePlayer, board, flag;
init();

function init() {
	activePlayer = 0;
	board = [["","",""],["","",""],["","",""]];
	flag = 0;
}
//displaying X or O on the squares
$(".square").on("click", function() {
	if (activePlayer === 0)
	{
		if ($(this).text() !== "")
		{
			alert("try another square");
		}
		else
		{
			$(this).text("X");
			fillBoard();
			nextPlayer();
		}
	}
	else
	{
		if ($(this).text() !== "")
		{
			alert("try another square");
		}
		else
		{
			//checkWinner();
			$(this).text("O");
			fillBoard();
			nextPlayer();
		}
	}
});


function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	//document.querySelector(".player1").classList.toggle('active');
	//document.querySelector(".player2").classList.toggle('active');
}

//storing elements in an array and comparing them
function fillBoard() {
	for (var i = 0; i < 9; i++)
	{
		board[i] = $(".sq"+i).text();
	}
	flag = checkWinner();
	if (flag === 1)
	{
		document.querySelector(".player"+activePlayer).innerHTML = "WINNER!";
		$(".square").off("click");
	}
}


 
 function checkWinner() {
 	for (var i = 0; i < 9; i+=3)
	{
		if (board[i] !== "")
		{
			 if ((board[i] === board[i+1]) && (board[i+1] === board[i+2]))
	    		return 1;
		}
	}

	for (var i = 0; i < 9; i++)
	{
		if (board[i] !== "")
		{
			if ((board[i] === board[i+3]) && (board[i] === board[i+6]))
			{
	  			return 1;
			}
		}
	  
	}
	i = 0;
	if (board[i] !== "")
	{
		if ((board[i] === board[i+4]) && (board[i] === board[i+8]))
	    	return 1;
	}
	

	i = 2;
	if (board[i] !== "")
	{
		if ((board[i] === board[i+2]) && (board[i] === board[i+4]))
    		return 1;	
	}
	checkDraw();
}	 

function checkDraw() {
	var temp = 0;
	for (var i = 0; i < 9; i++)
	{
    	if ($(".sq"+i).text() !== "")
        	temp++;
	}
	if (temp === 9)
		$("#draw").text("DRAW!");
}

document.querySelector("#reset").addEventListener("click", init());