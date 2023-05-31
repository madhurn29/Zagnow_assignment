import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
function Arrow_Cart() {
  const naviagte = useNavigate();
  return (
    <Box
      border={"1px solid re"}
      w={"100%"}
      top={20}
      position={"absolute"}
      display={"flex"}
      justifyContent={"space-between"}
      p={"0 6%"}
    >
      <Box
        width={"35px"}
        height={"35px"}
        bg={"black"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => {
          naviagte("/");
        }}
      >
        <Image src="arrow.png" />
      </Box>
      <Box
        width={"35px"}
        height={"35px"}
        bg={"#fff"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="cartIcon2.png" />
      </Box>
    </Box>
  );
}

export default Arrow_Cart;
