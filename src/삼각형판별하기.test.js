describe('삼각형 판별하기', () => {
  const run = (a, b, c) => {
    let answer = 'YES';
    let max;
    const sum = a + b + c;

    if (a > b) {
      max = a;
    } else {
      max = b;
    }

    if (c > max) {
      max = c;
    }

    if ((sum - max) <= max) {
      answer = 'NO';
    }

    return answer;
  };

  describe('길이가 다른 A,B,C 막대 길이가 주어지면', () => {
    it('삼각형을 만들 수 있으면 "YES"를 출력하라', () => {
      expect(run(6, 7, 11)).toBe('YES');
    });
    it('삼각형을 만들 수 없으면 "NO"를 출력하라', () => {
      expect(run(13, 33, 17)).toBe('NO');
    });
  });
});

