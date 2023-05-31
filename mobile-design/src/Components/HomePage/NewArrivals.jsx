import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { greyColor, products } from "../../Utils";
import ProductCard from "./ProductCard";

function NewArrivals() {
  return (
    <Box mt={"20px"} border={"1px solid re"} p={"12px"}>
      {/* New Arrivals Heading */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        // p={"5px 15px"}
        alignItems={"center"}
      >
        <Text fontSize={"18px"} fontWeight={700}>
          New Arrivals
        </Text>
        <Text
          fontSize={"11px"}
          fontWeight={600}
          cursor={"pointer"}
          color={greyColor}
        >
          View All
        </Text>
      </Box>
      {/* Display Cards here */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(2,1fr)"}
        gap={"18px"}
        mt={"5px"}
        mb={"90px"}
      >
        {products?.map((item, index) => {
          return <ProductCard key={index} {...item} />;
        })}
      </Box>
    </Box>
  );
}

export default NewArrivals;
