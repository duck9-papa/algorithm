// 개똥벌레 한 마리가 장애물(석순과 종유석)로 가득찬 동굴에 들어갔다. 동굴의 길이는 N미터이고, 높이는 H미터이다. (N은 짝수) 첫 번째 장애물은 항상 석순이고, 그 다음에는 종유석과 석순이 번갈아가면서 등장한다.

// 아래 그림은 길이가 14미터이고 높이가 5미터인 동굴이다. (예제 그림)

// 이 개똥벌레는 장애물을 피하지 않는다. 자신이 지나갈 구간을 정한 다음 일직선으로 지나가면서 만나는 모든 장애물을 파괴한다.

// 위의 그림에서 4번째 구간으로 개똥벌레가 날아간다면 파괴해야하는 장애물의 수는 총 여덟개이다. (4번째 구간은 길이가 3인 석순과 길이가 4인 석순의 중간지점을 말한다)

// 하지만, 첫 번째 구간이나 다섯 번째 구간으로 날아간다면 개똥벌레는 장애물 일곱개만 파괴하면 된다.

// 동굴의 크기와 높이, 모든 장애물의 크기가 주어진다. 이때, 개똥벌레가 파괴해야하는 장애물의 최솟값과 그러한 구간이 총 몇 개 있는지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 H가 주어진다. N은 항상 짝수이다. (2 ≤ N ≤ 200,000, 2 ≤ H ≤ 500,000)

// 다음 N개 줄에는 장애물의 크기가 순서대로 주어진다. 장애물의 크기는 H보다 작은 양수이다.

// 출력
// 첫째 줄에 개똥벌레가 파괴해야 하는 장애물의 최솟값과 그러한 구간의 수를 공백으로 구분하여 출력한다.

// 장애물을 순회하면서 위치에 대한 누적합

const Answer = (width, height, list) => {
  // 높이 object
  let heights = {};
  for (let i = 1; i <= height; i++) {
    heights[i] = 0;
  }

  list.forEach((stone, index) => {
    const num = index + 1;
    // 짝수일때, 종유석(위에서 아래로)
    // 높이도 위에서부터 1
    if (!(num % 2)) {
      // 짝수일 때 sotne보다 작거나 같은 높이들 +1
      for (let crashHeight = 1; crashHeight <= stone; crashHeight++) {
        heights[crashHeight] += 1;
      }
    } else {
      // stone보다 큰
      // height=5 종유석이 1일때 1 2 3 4 까지 안전
      //   아래에서 부터 올라가는
      for (let crashHeight = 0; crashHeight < stone; crashHeight++) {
        heights[height - crashHeight] += 1;
      }
    }
  });

  //   최솟값 도출
  const minValue = Math.min(
    ...Object.entries(heights).map(([height, breakNum]) => breakNum)
  );
  //   최솟값으로 부딪히는 경우의 수 도출
  console.log(
    minValue,
    Object.entries(heights).filter(
      ([height, breakNum]) => breakNum === minValue
    ).length
  );
};

Answer(14, 5, [1, 3, 4, 2, 2, 4, 3, 4, 3, 3, 3, 2, 3, 3]);

Answer(6, 7, [1, 5, 3, 3, 5, 1]);
