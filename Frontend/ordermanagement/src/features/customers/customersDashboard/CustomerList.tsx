import React, { useState } from 'react'
import { Address, Customer } from '../../../graphql/generated/schema'
import OmGrid from '../../../components/elements/OmGrid'

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

    return (
        <div style={{height: 600, width: "100%"}}>
            <OmGrid
                rowData={customers}
                columnDefs={columnDefs}
            />
        </div>
    )
}

export default CustomerList