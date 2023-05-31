import { Box } from "@chakra-ui/react";
import React from "react";

function MenuButton() {
  return (
    <Box
      borderRadius={"50%"}
      w={"35px"}
      height={"35px"}
      border={"1px solid re"}
      // ml={"2%"}
      bg={"#000000"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* Circular div which has 3 div and inside this div there is div which is aligned right center and left */}
      <Box
        border={"1px solid re"}
        ml={"2%"}
        w={"70%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"2px"}
        pt={"30%"}
      >
        {/* this is the conatiner id of three div which is having div  */}
        <Box display={"flex"} justifyContent={"end"}>
          <Box
            border={"1px solid re"}
            bg={"#fff"}
            w={"50%"}
            h={"3px"}
            borderRadius={"4px"}
          >
            {/* this is the line which is having white bakground color and right aligned */}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            border={"1px solid re"}
            bg={"#fff"}
            w={"100%"}
            h={"3px"}
            borderRadius={"4px"}
          >
            {/* this is the line which is having white bakground color and center aligned */}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"start"}>
          <Box
            border={"1px solid re"}
            bg={"#fff"}
            w={"50%"}
            h={"3px"}
            borderRadius={"4px"}
          >
            {/* this is the lines which is having white bakground color and left align */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MenuButton;
