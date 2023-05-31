import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { greyColor } from "../../Utils";

function ProductCard({ title, desc, image, price }) {
  return (
    <Box textAlign={"center"} border={"1px solid re"}>
      {/* <Box> */}
        <Image src={image} borderRadius={"15px"} w={"100%"} />
      {/* </Box> */}
      <Text mt={"8px"} fontSize={"14"} fontWeight={600}>
        {title}
      </Text>
      <Text fontSize={"11"} color={greyColor} fontWeight={400}>
        {desc}
      </Text>
      <Text fontSize={"14"} fontWeight={600}>
        {price}
      </Text>
    </Box>
  );
}

export default ProductCard;
