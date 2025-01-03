function solution(land) {
  const oilLocations = {};

  const points = {};

  // 붙어있는걸 정의해

  const oils = {};

  for (let i = 1; i <= land[0].length; i++) {
    points[i] = 0;
  }

  for (let y = 0; y < land.length; y++) {
    for (let x = 0; x < land[0].length; x++) {
      let block = land[y][x];
      if (block) {
        oilLocations[`${x + 1}x${y + 1}`] = true;
      }
    }
  }

  const Cycle = (x, y, oilNum) => {
    console.log(x, y, oilNum);
    const isOil = oilLocations[`${x}x${y}`];
    if (isOil) {
      if (!oils[oilNum]) {
        oils[oilNum] = 0;
      }
      oils[oilNum] += 1;
      oilLocations[`${x}x${y}`] = false;
      Cycle(Number(x) + 1, y, oilNum);
      Cycle(x, Number(y) + 1, oilNum);
    }
  };

  let oilNum = 1;

  Object.keys(oilLocations).forEach(i => {
    if (oilLocations[i]) {
      if (!oils[i]) {
        oils[oilNum] = 0;
      }

      oils[oilNum] += 1;
      const [x, y] = i.split("x");
      oilLocations[i] = false;

      try {
        Cycle(Number(x) + 1, y, oilNum);
        Cycle(x, Number(y) + 1, oilNum);
      } finally {
        oilNum += 1;
      }
    }
  });
  // Cycle(x+1,y)
  // Cycle(x,y+1) 각각 실행

  return oils;
}
