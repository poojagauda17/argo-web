"use client";

import React from "react";
import HeaderSection from "../../components/HeaderSection";
import FooterSection from "../../components/FooterSection";
import Product3Section from "../../components/Product3";
import {
  getAllProductList, addSuperStockerForm
} from "../../utils/employee";
import { useState, useEffect } from "react";


const HeroSection = () => {
      const [productList, setProductList] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
                    const products = await getAllProductList();
            
    
    
            setProductList(products?.payload || []);
    
          } catch (error) {
            console.error("API fetch error:", error);
          }
        };
    
        fetchData();
      }, []);
  
  return (
    <div>
      <HeaderSection productList={productList} onSupplierSubmit={addSuperStockerForm}/>
      <Product3Section />
      <FooterSection />
    </div>
  );
};

export default HeroSection;
