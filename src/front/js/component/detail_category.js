import React, { useContext, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Card } from "./cards";
import { DetailCard } from "./detail-card";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailCategory = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
//console.log("gywegduwdy: "+params.id)
  
const filterData = categoria_id => {
 
  setFilteredData(apiData.filter(item => item.categoria_id === params.id));
  console.log("filered: " + filteredData)
};
return (
  <>
    {store.products !== null &&
      store.products.length > 1 &&
      store.products.map((products, index) => {
  return (
    <div>
      <h1 className="mt-5 pt-5" style={{ textAlign: "center" }}>
        {" "}
        CATEGORIAS
      </h1>
      <div className="container justify-content-center ">
      {filterData(item => (
                <DetailCard key={item.id} item={item} />))}
    </div>
    </div>
  );
        })}
    </>

    );
  };
  //onClick={() => filterData("categorias")}