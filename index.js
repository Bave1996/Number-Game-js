const settings = {
  min: 0,
  max: 100,
  attemps: 10,
};

function getRandomNumber() {
  const number = Math.round(Math.random() * 100);
  return number;
}

function getUserName(p) {
  let condition = true;
  let name;
  while (condition) {
    const name = prompt("Как тебя зовут?", "");
    if (name) {
      condition = false;
    } else {
      alert("Нужно написать");
    }
  }
  return name;
}

const randomNumber = getRandomNumber();
const userName = getUserName();

function game(objSettings, number, name) {
  // Приветствие
  const answers = [];
  alert(`Привет!
Я загадал число в интервале от ${objSettings.min} до ${objSettings.max}. У тебя есть ${objSettings.attemps} попыток отгадать его. Го?`);
  // Цикл ответ-проверка
  for (let index = 0; index < objSettings.attemps; index++) {
    const answer = prompt("Давай свой вариант", "");
    answers.push(answer);
    if (answer > number) {
      alert(
        `Давай чуть ниже. Осталось попыток ${
          objSettings.attemps - index - 1
        }. Твои варианты: ${answers.join()}`
      );
    } else if (answer < number) {
      alert(
        `Давай чуть выше. Осталось попыток ${
          objSettings.attemps - index - 1
        }. Твои варианты: ${answers.join()}`
      );
    } else {
      // победа
      alert("YOU WIN!");
      return;
    }
  }

  // Проигрыш
  alert("GAME OVER");
}

game(settings, randomNumber, userName);
