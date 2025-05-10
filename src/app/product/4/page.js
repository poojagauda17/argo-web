"use client";

import React from "react";
import HeaderSection from "../../components/HeaderSection";
import FooterSection from "../../components/FooterSection";
import Product4Section from "../../components/Product4";
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
      <Product4Section />
      <FooterSection />
    </div>
  );
};

export default HeroSection;
