import { Box, Image } from "@chakra-ui/react";
import React from "react";

function AvatarSection() {
  return (
    <Box
      borderRadius={"50%"}
      w={"35px"}
      height={"35px"}
      border={"1px solid re"}
      // mr={"2%"}
      bg={"#dddddd"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* circular div  which has a png of avatar*/}
      <Image src="avatar.png" />
    </Box>
  );
}

export default AvatarSection;
