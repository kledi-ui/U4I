export interface IColumn {
  key: string;
  label: string;
}
export interface IProduct {
  count: number;
  name: string;
  price: number;
}
export interface ITable {
  data: Array<any>;
  columns: Array<IColumn>;
}

export interface IHeadCell {
  column: IColumn;
  key?: number;
}

export interface IBodyCell {
  column: IColumn;
  key?: number;
  record: any;
}

export interface ICard {
  title: string;
  value: string | number;
  color: string;
}

export interface IButton {
  text: string;
  onClick?:()=>void
}
