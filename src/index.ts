import Mapper from './Mapper';
import Convertor from './Convertor';

export const toCamelcase = (obj: Obj): Obj => {
  if (typeof obj !== 'object') return obj;
  const mapper = new Mapper(obj);
  return mapper.toCamelcase();
};

export const toSnakecase = (obj: Obj): Obj => {
  if (typeof obj !== 'object') return obj;
  const mapper = new Mapper(obj);
  return mapper.toSnakecase();
};

export const toCamelcaseStr = (obj: string): string => {
  if (typeof obj !== 'string') return obj;
  const c = new Convertor(obj);
  return c.toCamelcase();
};

export const toSnakecaseStr = (obj: string): string => {
  if (typeof obj !== 'string') return obj;
  const c = new Convertor(obj);
  return c.toSnakecase();
};
