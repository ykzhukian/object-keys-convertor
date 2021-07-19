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
    if (typeof currentVal !== 'object') {
      return currentVal;
    }
    const obj: Obj = {};
    Object.entries(currentVal).forEach(([key, value]) => {
      const convertor = new Convertor(key);

      if (Array.isArray(value)) {
        obj[convertor.toCamelcase()] = value.map((item) => this.toCamelcase(item));
      } else if (typeof value === 'object' && value !== null) {
        obj[convertor.toCamelcase()] = this.toCamelcase(value);
      } else {
        obj[convertor.toCamelcase()] = value;
      }
    });

    return obj;
  };

  toSnakecase = (currentVal = this.obj): Obj => {
    if (typeof currentVal !== 'object') {
      return currentVal;
    }
    const obj: Obj = {};
    Object.entries(currentVal).forEach(([key, value]) => {
      const convertor = new Convertor(key);

      if (Array.isArray(value)) {
        obj[convertor.toSnakecase()] = value.map((item) => this.toSnakecase(item));
      } else if (typeof value === 'object' && value !== null) {
        obj[convertor.toSnakecase()] = this.toSnakecase(value);
      } else {
        obj[convertor.toSnakecase()] = value;
      }
    });

    return obj;
  };
}
