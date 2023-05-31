import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function ImageSection(image) {
    
  return (
    <Box position={"relative"}>
      <Image position={"absolute"} src="nike_tshirt.png" mt={"-15px"} />
      <Text position={"absolute"}  ></Text>
    </Box>
  );
}

export default ImageSection;
