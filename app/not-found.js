import React from "react";
import Layout from "../Components/Layout"; 
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Layout>
      <Typography variant="h3" sx={{mt:4}}>
        Bunaqa sahifa mavjud emas!
      </Typography>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7br5LJKdw3r2QTA_mJ8Jl32_jSnT6lYJX1A&s" alt="page" 
      style={{marginTop:40, height:320, }} />
    </Layout>
  );
}