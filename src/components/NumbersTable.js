import React from 'react';
import ReactTable from 'react-table';

import { formatDataForNumberTable } from '../utils';

const sortMethod = (a, b) => Number(a) - Number(b);

const NumbersTable = ({ numbersList }) => {
    const tableData = formatDataForNumberTable(numbersList);
    const columns = [
    {
      Header: 'NUMBERS',
      accessor: 'number',
      sortMethod
    }];

    return (
      <ReactTable
        data={tableData}
        columns={columns}
        minRows={1}
        sortable={true}
        defaultSorted={[
            {
              id: "number",
              desc: true
            }
          ]}
        className="-striped -highlight"
      />
    );
};

export default NumbersTable;