import Convertor from '../src/Convertor';

describe('Convertor', () => {
  const item1 = new Convertor('anake-bnake-cnake');
  const item2 = new Convertor('snake_/,.snake-_-___-snake');
  const item3 = new Convertor('snake _-_-_ snake ');
  const item4 = new Convertor('snake-_ Snake ');
  const item5 = new Convertor('Snake Snake 123');
  const item6 = new Convertor('snake snake-123');
  const item7 = new Convertor('b2b-c2c b2cC2b_');
  const item8 = new Convertor('23-b2b c2c b2c c2b123 322');

  test('Convertor.toCamelCase', () => {
    expect(item1.toCamelcase()).toBe('anakeBnakeCnake');
    expect(item2.toCamelcase()).toBe('snakeSnakeSnake');
    expect(item3.toCamelcase()).toBe('snakeSnake');
    expect(item4.toCamelcase()).toBe('snakeSnake');
    expect(item5.toCamelcase()).toBe('snakeSnake123');
    expect(item6.toCamelcase()).toBe('snakeSnake123');
    expect(item7.toCamelcase()).toBe('b2bC2cB2cC2b');
    expect(item8.toCamelcase()).toBe('23B2bC2cB2cC2b123322');
  });

  test('Convertor.toSnakecase', () => {
    expect(item1.toSnakecase()).toBe('anake_bnake_cnake');
    expect(item2.toSnakecase()).toBe('snake_snake_snake');
    expect(item3.toSnakecase()).toBe('snake_snake');
    expect(item4.toSnakecase()).toBe('snake_snake');
    expect(item5.toSnakecase()).toBe('snake_snake_123');
    expect(item6.toSnakecase()).toBe('snake_snake_123');
    expect(item7.toSnakecase()).toBe('b2b_c2c_b2c_c2b');
    expect(item8.toSnakecase()).toBe('23_b2b_c2c_b2c_c2b123_322');
  });
});
