import Mapper from './Mapper';

export const toCamelcase = (obj: Obj): Obj => {
  const mapper = new Mapper(obj);
  return mapper.toCamelcase();
};

export const toSnakecase = (obj: Obj): Obj => {
  const mapper = new Mapper(obj);
  return mapper.toSnakecase();
};
