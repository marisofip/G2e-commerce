import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Card } from "../component/cards";
import { DetailCard } from "../component/detail-card";
import { Context } from "../store/appContext";

export const Shop = () => {
  return (
    <>
      <div className="Container-fluid">
        <h1 className="mt-5 pt-5" style={{ textAlign: "center" }}>
          CATEGORIAS
        </h1>
        <div className="row justify-content-center mt-5  mb-5">
          <Card />
        </div>
        <hr/>
        <h1 className="mt-5 pt-5" style={{ textAlign: "center" }}>
          PRODUCTOS
        </h1>
        <div className="row justify-content-evenly">
          <DetailCard />
        </div>
      </div>
    </>
  );
};
