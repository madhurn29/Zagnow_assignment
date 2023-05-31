import { Box, Text } from "@chakra-ui/react";
import React from "react";

function TitleSection() {
  return (
    <Box border={"1px solid re"} mt={"35px"} pl={"12px"}>
      <Text fontSize={"25px"} fontWeight={700}>
        Welcome,
      </Text>
      <Text fontSize={"20px"} fontWeight={600} color={"#666666"}>
        Our Fashion App
      </Text>
    </Box>
  );
}

export default TitleSection;
