import React, { useMemo, useState } from 'react'
import { Address, Customer } from '../../../graphql/generated/schema'
import {AgGridReact} from 'ag-grid-react'

interface CustomerListProps {
    customers: Customer[]
}

const CustomerList = ({customers}: CustomerListProps) => {
    const [columnDefs] = useState([
      {
        field: "id",
        width: 70,
        suppressSizeToFit: true,
      },
      {
        field: "firstName",
      },
      {
        field: "lastName",
      },
      {
        field: "contactNumber",
      },
      {
        field: "email",
      },
      {
        field: "address",
        cellRenderer: function(params: any){
            const address = params.value as Address
            return (
              address.addressLine1 +
              ", " +
              address.addressLine2 +
              ", " +
              address.city +
              ", " +
              address.state +
              ", " +
              address.country
            );
        }
      },
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true
    }), [])

    return (
        <div style={{height: 600, width: "100%"}}>
            <AgGridReact
                rowData={customers}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    )
}

export default CustomerList