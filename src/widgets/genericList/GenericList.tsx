import "./GenericList.scss";
// import "bootstrap/dist/css/bootstrap.css";

export interface TableProps {
  columns: string[];
  values: string[][];
}

export const GenericList: React.FC<TableProps> = ({ columns, values }) => {
  return (
    <table className="modern-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value, columnIndex) => (
              <td key={columnIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
