import React from "react";
import Header from "../../components/Header/Header";
import Photoblock from "../../components/PhotoBlock/Photoblock";
import SignUp from "../../components/SignUp/SignUp";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <main>
        <Photoblock />
        <div>
          <SignUp />
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
