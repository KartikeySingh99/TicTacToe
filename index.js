let myAudio = new Audio('click2.mp3');
let box = document.getElementsByClassName('box');
let btn = document.getElementById('hi');
let info = document.getElementById('turn');
let turn = "X";
let gameover = false;

//Turn function
function changeTurn() {
    if (turn === "X") {
        info.innerText = "Turn For: O";
        return turn = "O";
    }
    else if (turn === "O") {
        info.innerText = "Turn For: X";
        return turn = "X";
    }
}

// check winner
function check() {
    let text = document.getElementsByClassName('text');
    //[index,index,index,rotate,translateX,translateY]
    let win = [
        [0, 1, 2, 0, 0, -100],
        [3, 4, 5, 0, 0, 0],
        [6, 7, 8, 0, 0, 100],
        [0, 3, 6, 90, 0, 100],
        [1, 4, 7, 90, 0, 0],
        [2, 5, 8, 90, 0, -100],
        [0, 4, 8, 45, 0, 0],
        [2, 4, 6, -45, 0, 0],
    ];

    win.forEach(e => {

        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== "")) {
            console.log(text[e[0]].innerText + " wins");
            document.getElementById('turn').innerText = text[e[0]].innerText + " Wins";
            gameover = true;
            document.querySelector('.line').style.transform = `rotate(${e[3]}deg) translate(${e[4]}px,${e[5]}px)`;
            document.querySelector('.line').style.visibility = "visible";
        }
    });
}

let arr = Array.from(box);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    let text = document.getElementsByClassName('text');
    text[i].removeEventListener
    text[i].addEventListener('click', () => {
        // console.log("hello");
        if (text[i].innerText == '') {
            text[i].innerText = turn;
            myAudio.play();
            turn = changeTurn();
            check();
            if (!gameover) {
                document.getElementById('turn').innerText = "Turn For: " + turn;
            }
            else if (gameover) {
                text[i].removeEventListener('click');
            }
        }
    });
}