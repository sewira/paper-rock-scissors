const computerPlay = () => {
  let botRandom = Math.ceil(Math.random() * 3);
  if (botRandom == 1) {
    return "batu";
  } else if (botRandom == 2) {
    return "gunting";
  } else if (botRandom == 3) {
    return "kertas";
  }
};

const playRound = (player, computer) => {
  if (player === computer) {
    return "Its a tie";
  } else if (player === "batu") {
    if (computer === "kertas") {
      return "computer menang";
    } else {
      return `anda menang`;
    }
  } else if (player === "kertas") {
    if (computer === "gunting") {
      return `computer menang`;
    } else {
      return `anda menang`;
    }
  } else if (player === "gunting") {
    if (computer === "batu") {
      return "computer menang";
    } else {
      return `anda menang`;
    }
  }
};

const computer = computerPlay();
console.log(computer);
console.log(playRound("kertas", computer));
// console.log(computerPlay());
