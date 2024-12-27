// N개의 체커가 엄청 큰 보드 위에 있다. i번 체커는 (xi, yi)에 있다. 같은 칸에 여러 체커가 있을 수도 있다.
//  체커를 한 번 움직이는 것은 그 체커를 위, 왼쪽, 오른쪽, 아래 중의 한 방향으로 한 칸 움직이는 것이다.

// 첫째 줄에 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 각 체커의 x좌표와 y좌표가 주어진다. 이 값은 1,000,000보다 작거나 같은 자연수이다.

// 첫째 줄에 수 N개를 출력한다. k번째 수는 적어도 k개의 체커가 같은 칸에 모이도록 체커를 이동해야 하는 최소 횟수이다.

// 특정 지점에서 모일때가 최소 경우의수
// x의 경우의 수 * y의 경우의 수를 각각 비교
// 각각의 좌표
// k개의 체커를 모으는 최소한의 경우의수들의 모음 배열 반환 (1번째, 2번째 ...n번째)
// ex=> ["15 14", "15 16", "14 15", "16 15"] 의 경우에는
// 1개 모으는 경우는 특정 지점 에서 모이는 경우 => 0개
// 2개 모으는 경우는 무조건 2번 움직이는 경우의 수가 최소
// 3개 모으는 경우는 15,15에서 3개를 모으는 경우의 수가 최소

const Answer = N => {
  let distances = [];

  const xValues = {};
  const yValues = {};

  // 지점에 대한 for문

  for (let i = 0; i < N.length; i++) {
    const [targetX, targetY] = N[i].split(" ");
    xValues[targetX] = true;
    yValues[targetY] = true;
  }

  for (let i = 0; i < Object.keys(xValues).length; i++) {
    for (let j = 0; j < Object.keys(yValues).length; j++) {
      const x = Number(Object.keys(xValues)[i]);
      const y = Number(Object.keys(xValues)[j]);
      // 지점마다 values와 거리 등록
      let values = [];
      let totalDistance = 0;

      N.forEach(location => {
        const [locationX, locationY] = location.split(" ").map(Number);
        const value = Math.abs(x - locationX) + Math.abs(y - locationY);
        totalDistance += value;
        values.push(value);
      });

      values = values.sort((a, b) => a - b);

      let resultValue = 0;
      const result = [];
      values.forEach(i => {
        resultValue += i;
        result.push(resultValue);
      });

      distances.push({ totalDistance, result, location: `${x} ${y}` });
    }
  }

  distances = distances.sort((a, b) => a.totalDistance - b.totalDistance);

  const results = distances.map((i, index) => i.result);
  let answerList = [];
  for (let i = 0; i < N.length; i++) {
    answerList.push(Math.min(...results.map(j => j[i])));
  }

  console.log(answerList);
};

Answer(["15 14", "15 16", "14 15", "16 15"]);
Answer(["1 1", "2 1", "4 1", "9 1"]);
