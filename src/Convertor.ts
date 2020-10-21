export default class Convertor {
  private str: string;

  constructor(str: string) {
    this.str = str
      .replace(/[-_]+/g, ' ')
      .replace(/[A-Z]+/g, (s) => ` ${s.toLowerCase()}`)
      .replace(/^\s|\s+$|[^\w\s]/g, '')
      .toLowerCase();
  }

  toCamelcase = (): string => this.str
    .replace(
      /\s+(.)(\w?)/g,
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(/\s/g, '')
    .replace(/\w/, (s) => s.toLowerCase());

  toSnakecase = (): string => this.str
    .replace(
      /\s+/g,
      () => '_',
    );

  value = (): string => this.str;
}
