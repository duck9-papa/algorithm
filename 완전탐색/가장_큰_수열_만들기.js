// n개의 정수로 이루어진 임의의 수열이 주어진다. 우리는 이 중 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합을 구하려고 한다. 단, 수는 한 개 이상 선택해야 한다.

// 예를 들어서 10, -4, 3, 1, 5, 6, -35, 12, 21, -1 이라는 수열이 주어졌다고 하자. 여기서 정답은 12+21인 33이 정답이 된다.

// 입력
// 첫째 줄에 정수 n(1 ≤ n ≤ 100,000)이 주어지고 둘째 줄에는 n개의 정수로 이루어진 수열이 주어진다. 수는 -1,000보다 크거나 같고, 1,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 답을 출력한다.

const Answer = (list) => {
  let max;
  let sum = 0;
  const prefix = [];

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    prefix.push(sum);
  }
  // 1개부터 전체 길이까지
  for (let group = 1; group <= list.length; group++) {
    prefix.forEach((num, index) => {
      const value = num - (prefix[index - group] || 0);

      if (max === undefined || value > max) {
        max = value;
      }
    });
  }
  console.log(max);
};

Answer([10, -4, 3, 1, 5, 6, -35, 12, 21, -1]);

Answer([2, 1, -4, 3, 4, -4, 6, 5, -5, 1]);
Answer([-1, -2, -3, -4, -5]);
