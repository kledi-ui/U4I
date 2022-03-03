import { IColumn, ITable } from "../../helpers";
import BodyCell from "./cells/body";
import HeadCell from "./cells/head";
import Style from "./style";

const SmartTable = ({ data, columns }: ITable) => {
  return (
      <Style>
        <thead>
          <tr>
            {columns.map((column:IColumn,index:number) => (
              <HeadCell column={column} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record: any,index:number) => (
            <tr key={index}>
              {columns.map((column:IColumn,index:number) => (
                <BodyCell record={record} column={column} key={index}/>
              ))}
            </tr>
          ))}
        </tbody>
      </Style>
  );
};

export default SmartTable;
