import React from "react";
import { Box } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import AvatarSection from "./AvatarSection";
function TopSection() {
  return (
    <Box
      border={"1px solid blac"}
      mt={"10px"}
      p={"4px 12px"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <MenuButton />
      <AvatarSection />
    </Box>
  );
}

export default TopSection;
