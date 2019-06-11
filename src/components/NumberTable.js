import React from 'react';
import ReactTable from 'react-table';

import { formatDataForNumberTable } from '../utils';

const NumbersTable = ({ numbersList }) => {
    const tableData = formatDataForNumberTable(numbersList);
    const columns = [
    {
      Header: 'Numbers',
      accessor: 'number'
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
      />
    );
};

export default NumbersTable;