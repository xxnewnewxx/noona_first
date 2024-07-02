let computerNum = document.getElementById("computer-Num");
// computerNum 변수의 선언은 게임을 위한 컴퓨터의 랜덤번호를 담아주기 위한 변수공간이다 여기에 담기는 숫자와 유저가 적는 숫자를 비교하여 UP, down이 판가름된다
let playButton = document.getElementById("play-button");
// playButton의 변수에 html에서 버튼에 붙여준 id명을 불러들여서 playButton 변수를 이용해 버튼이 눌러질때 어떤 액션을 JS에서 처리하기 위해 해당 변수에 버튼 id요소를 담아주는것이다

let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
// 정확히 말하면, html div박스에 준 id명 result-area를 JS에서 선언한 변수 resultArea에 담아줌으로써 화면에 내가 만들어준 함수 play의 연산 결과값을 여기 공간에 보여주게 되는것이다

let resetButton = document.getElementById("reset-button");

let chanceArea = document.getElementById("chance-area");

let history = [];

let chances = 3;
let gameOver = false;

playButton.addEventListener("click", play);
//버튼이 클릭되었을때 어떤 함수를 실행시킬것인지 뒤에 매개변수로 만들어준 함수를 넘겨주었다

resetButton.addEventListener("click", reset);

userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
  alert(computerNum);

  // document.write(computerNum);
}

function play() {
  let userValue = userInput.value; //유저가 input란에 입력한 그 값을 가져온다

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해주세요";

    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자네요, 다른 숫자를 입력하세요!";

    return;
  }

  chances--;
  chanceArea.textContent = `남은기회 : ${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "그 이상의 숫자입니다 UP!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = " 그 이하의 숫자 입니다 down !";
  } else {
    resultArea.textContent = "정답입니다";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";

  pickRandomNum();

  resultArea.textContent = "결과 값이 여기 나옵니다! ";
}

pickRandomNum();
