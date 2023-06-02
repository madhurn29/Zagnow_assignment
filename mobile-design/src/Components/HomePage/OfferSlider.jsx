import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import OfferCard from "./OfferCard";

function OfferSlider() {
  return (
    <Box mt={"15px"} p={"19px 25px"}>
      <Flex
        gap={"15px"}
        overflowY={"scroll"}
        overflowX={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Flex>
    </Box>
  );
}

export default OfferSlider;

{
  /*

<Box border={"1px solid black"} position={"relative"} display={"flex"}>
      <Box
        border={"1px solid black"}
        borderRadius={"15px"}
        position={"relative"}
        // w={"70%"}
        


      >
        <Box position={"absolute"} >
          <Image src="bag_banner.png"  />
        </Box>
        <Box position={"relative"} top={"15px"} left={"15px"}>
          <Text fontSize={"25px"} fontWeight={700}>
            50% Off
          </Text>
          <Text fontSize={"16px"} fontWeight={400}>
            On Everything today
          </Text>
          <Text fontSize={"11px"} color={"#666666"} fontWeight={600}>
            On Everything today
          </Text>
          <Button size={"xs"} color={"#fff"} bg={"#000000"}>
            Get Now
          </Button>
        </Box>
      </Box>
    </Box>
    */
}
