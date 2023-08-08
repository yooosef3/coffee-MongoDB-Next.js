import React, { FC } from "react";

import Footer from "@/components/layout/Footer";
import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Orders from "../components/orders/Orders";
import { getSession } from "next-auth/react";

const OrdersScreen = () => {
  return (
    <>
      <HeaderTemplate
        background="/images/3066027-business_buy_card_commercial_credit_customer_e-commerce_ecommerce_electronic_internet_market_marketing_money_online_online-sales_pay_payment_purchase_purchasing_retail_sale_sell_selling_selling-o.jpg"
        history
      />
      <Orders />
    </>
  );
};

export default OrdersScreen;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        data: session.user,
      },
    };
  }
