const Anwser = N => {
  const [a, b, c, d, e, f] = N.split(" ").map(Number);

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y === c && d * x + e * y === f) {
        console.log(`${x} ${y}`);
        break;
      }
    }
  }
};

Anwser("1 3 -1 4 1 7");
