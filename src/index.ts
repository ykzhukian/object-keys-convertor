import Mapper from './Mapper';

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
