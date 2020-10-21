import Convertor from './Convertor';

export default class Mapper {
  private obj: Obj;

  constructor(obj: Obj) {
    if (typeof obj !== 'object') {
      this.obj = {};
    } else {
      this.obj = obj;
    }
  }

  toCamelcase = (currentVal = this.obj): Obj => {
    const obj: Obj = {};
    Object.entries(currentVal).forEach(([key, value]) => {
      const convertor = new Convertor(key);

      if (typeof value === 'object') {
        obj[convertor.toCamelcase()] = this.toCamelcase(value);
      } else {
        obj[convertor.toCamelcase()] = value;
      }
    });

    return obj;
  };

  toSnakecase = (currentVal = this.obj): Obj => {
    const obj: Obj = {};
    Object.entries(currentVal).forEach(([key, value]) => {
      const convertor = new Convertor(key);

      if (typeof value === 'object') {
        obj[convertor.toSnakecase()] = this.toSnakecase(value);
      } else {
        obj[convertor.toSnakecase()] = value;
      }
    });

    return obj;
  };
}
