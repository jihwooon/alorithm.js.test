describe('세수중 최소값', () => {
  const run = (a, b, c) => {
    let answer;

    if (a < b) {
      answer = a;
    } else {
      answer = b;
    }
    if (c < answer) {
      answer = c;
    }

    return answer;
  };

  it('세 수 중 가장 작은 값을 출력하라', () => {
    expect(run(6, 5, 1)).toBe(1);
  });
});

