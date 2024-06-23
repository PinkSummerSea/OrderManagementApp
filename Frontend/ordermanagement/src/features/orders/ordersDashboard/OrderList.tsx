import React, { useState } from "react";
import { Customer, Order } from "../../../graphql/generated/schema";
import OmGrid from "../../../components/elements/OmGrid";

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

  return (
    <div style={{ height: 600, width: "100%" }}>
      <OmGrid
        rowData={orders}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default OrderList;
