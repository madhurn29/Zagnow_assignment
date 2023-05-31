import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import MenuButton from "./MenuButton";
import { FiSearch } from "react-icons/fi";
function SearchSection() {
  return (
    <Box
      border={"1px solid re"}
      display={"flex"}
      gap={"5px"}
      mt={"15px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"0px 12px"}
    >
      <InputGroup border={"1px solid re"} bg={"#F3F4F5"} borderRadius={"30px"} w={"85%"}>
        <InputLeftElement pointerEvents="none">
            {/* search icon imported from react-icons */}
          <FiSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          type="text"
          borderRadius={"30px"}
          placeholder="Search..."
          border={"none"}
        />
      </InputGroup>
      {/* temporary button */}
      <MenuButton />
    </Box>
  );
}

export default SearchSection;
