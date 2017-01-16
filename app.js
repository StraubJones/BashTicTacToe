
var turn = 1;
var board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

var $boardEl = $('#board');

function initBoard() {
  board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  $boardEl.empty();
  board.forEach(function (line, i) {
    line.forEach(function (spot, j) {
      if(spot === ' '){
        $($boardEl).append($('<span id="'+i+j+'">_</span>'));
      } else {
        $($boardEl).append($('<span id="'+i+j+'">' + spot + '</span>'));
      }
      $($boardEl).append($('<span>|</span>'));
    });
    $($boardEl).append($('<br>'));

  });
  $boardEl.append('<span id="turn">Player Turn:' + turn + '</span>');
}


$('document').ready(function () {
  initBoard();
  $boardEl.on('click', function (e) {
    var id = String($(e.target)[0].id);
    var spot = board[Number(id[0])][Number(id[1])];
    if(spot === ' ' && turn === 1){
      spot = 'X';
      turn = 2;
      board[Number(id[0])][Number(id[1])] = spot;
      checkWin(Number(id[0]), Number(id[1]), spot);
    } else if (spot === ' ' && turn === 2) {
      spot = 'O';
      turn = 1;
      board[Number(id[0])][Number(id[1])] = spot;
      checkWin(Number(id[0]), Number(id[1]), spot);
    }

    $(e.target).text(spot);
    $('#turn').text('Player Turn:' + turn);
  });
});


function checkWin(iIndex, jIndex, spot) {
  if(iIndex - 2 === 0) {
    if(board[iIndex - 2][jIndex] === board[iIndex - 1][jIndex] && board[iIndex - 1][jIndex] === board[iIndex][jIndex]){
      console.log(spot + ' wins!');
      initBoard();
    }
  }
}
