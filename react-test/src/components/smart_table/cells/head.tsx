import { IHeadCell } from "../../../helpers";

const HeadCell = ({ column }:IHeadCell) => {
  return <th>{column.label}</th>;
};

export default HeadCell;
