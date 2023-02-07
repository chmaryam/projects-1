function init(){

    const cell= document.querySelectorAll('.cell');
    const winnerCondition= document.querySelector('message');
    const reset=document.querySelector('.reset')
    let players =['X','O'];
    // cell.forEach(cell => {
    //     cell.addEventListener('click',handleClick)
    // });
    // const hasWon = (players) => {
    //     const winConditions =[
    //         [0,1,2],
    //         [3,4,5],
    //         [6,7,8],
    //         [0,3,6],
    //         [1,4,7],
    //         [2,5,8],
    //         [0,4,8],
    //         [2,4,6]
    //     ];
    // };
    // for (let i =0; i<winnerCondition.length; i++){
    //     const []

    // } 
    let winner =('');
    function handleClick(event) {
        const cell= event.target;
         if (checkWin(players)){
            winner= players;
           winnerCondition.innerHTML = `${players.toUppeCase()}wins!`;
         } else if (checkDraw(players)){
            winnerCondition.inner
         }
    
    }

  

}

window.addEventListener('DOMContentLoaded', init)