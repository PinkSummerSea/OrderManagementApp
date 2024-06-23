import React from "react";
import {
  Order,
  useGetOrdersQuery,
} from "../../../graphql/generated/schema";
import { Grid, Typography } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import OrderList from "./OrderList";
import OmLoading from "../../../components/elements/OmLoading";
import OmAlert from "../../../components/elements/OmAlert";

const OrdersDashboard = () => {
  const { data: ordersData, loading, error } = useGetOrdersQuery();
  if (loading) {
    return <OmLoading />;
  }
  if (error || !ordersData) {
    return <OmAlert message="error happened"/>;
  }

  const orders = ordersData.orders as Order[];

  return (
    <Grid className="ag-theme-alpine" container spacing={2}>
      <Grid item xs={12}>
        <Typography
          component={"div"}
          variant="h5"
          display={"block"}
          gutterBottom
          align="center"
        >
          Order List
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <OrderList orders={orders} />
      </Grid>
    </Grid>
  );
};

export default OrdersDashboard;
