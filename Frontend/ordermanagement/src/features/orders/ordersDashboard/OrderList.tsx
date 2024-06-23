import React, { useMemo, useState } from "react";
import { Customer, Order } from "../../../graphql/generated/schema";
import { AgGridReact } from "ag-grid-react";

interface OrderListProps {
  orders: Order[];
}

const OrderList = ({ orders }: OrderListProps) => {
  const [columnDefs] = useState([
    {
      field: "id",
      width: 70,
      suppressSizeToFit: true,
    },
    {
      field: "customerId",
    },
    {
      field: "customer",
      cellRenderer: function (params: any) {
        const customer = params.value as Customer;
        return customer.firstName + " " + customer.lastName;
      },
    },
    {
      field: "description",
    },
    {
      field: "status",
    },
    {
      field: "orderDate",
    },
    {
      field: "isDelivery",
    },
    {
      field: "totalAmount",
    },
    {
      field: "depositAmount",
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div style={{ height: 600, width: "100%" }}>
      <AgGridReact
        rowData={orders}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default OrderList;
