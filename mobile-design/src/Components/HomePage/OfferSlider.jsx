import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function OfferSlider() {
  return (
    <Box border={"1px solid blac"} overflow={"hidden"} mt={"15px"} p={"12px"}>
      <Box display={"flex"}>
        <Box
          border={"1px solid re"}
          borderRadius={"15px"}
          w={"560px"}
          h={"160px"}
          padding={"10px"}
          backgroundImage={"bag_banner.png"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          //   backgroundPosition={"center"}
        >
          <Text fontSize={"25px"} fontWeight={700} mt={"5px"}>
            50% Off
          </Text>
          <Text fontSize={"16px"} fontWeight={400} mt={"5px"}>
            On Everything today
          </Text>
          <Text fontSize={"11px"} color={"#666666"} fontWeight={600} mt={"5px"}>
            On Everything today
          </Text>
          <Button size={"xs"} color={"#fff"} bg={"#000000"} mt={"15px"}>
            Get Now
          </Button>
        </Box>
      </Box>
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
