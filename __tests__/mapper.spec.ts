import Mapper from '../src/Mapper';

describe('Mapper', () => {
  const item1 = new Mapper({
    key_of_map: 1,
    'key_the-map': {
      key_ofmap: 2,
      key_for_map: {
        ' key -_nested': {
          'key deep': {
            'key deeper_': 'end',
            b2b_Category: 'b2b',
          },
        },
      },
    },
  });

  test('Mapper.toCamelCase', () => {
    expect(item1.toCamelcase()).toEqual({
      keyOfMap: 1,
      keyTheMap: {
        keyOfmap: 2,
        keyForMap: {
          keyNested: {
            keyDeep: {
              keyDeeper: 'end',
              b2bCategory: 'b2b',
            },
          },
        },
      },
    });
  });

  test('Mapper.toSnakecase', () => {
    expect(item1.toSnakecase()).toEqual({
      key_of_map: 1,
      key_the_map: {
        key_ofmap: 2,
        key_for_map: {
          key_nested: {
            key_deep: {
              key_deeper: 'end',
              b2b_category: 'b2b',
            },
          },
        },
      },
    });
  });
});
