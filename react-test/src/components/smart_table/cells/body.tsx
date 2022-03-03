import { IBodyCell } from "../../../helpers";

const BodyCell = ({record,column}:IBodyCell) => {
  return <td>{record[column.key]}</td>;
};

export default BodyCell;
