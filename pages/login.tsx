import React, { FC } from "react";

import Footer from "@/components/layout/Footer";
import HeaderTemplate from "@/components/shared/HeaderTemplate";
import Login from "@/components/login/Login";

const login = () => {
  return (
  <div>
    <HeaderTemplate 
        background='/images/photo-1509822929063-6b6cfc9b42f2.avif' 
        header='ورود'
        />
        <Login />
  </div>
  )
};

export default login;

login.getLayout = function PageLayout(page:FC) {
  return(
      <>
          {page}
          <Footer />
      </>
  )
}