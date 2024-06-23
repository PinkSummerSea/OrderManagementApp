import React, { useMemo } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface OmGridProps {
  rowData: any,
  columnDefs: any
}

const OmGrid = ({rowData, columnDefs}:OmGridProps) => {
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );
  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
    />
  );
}

export default OmGrid