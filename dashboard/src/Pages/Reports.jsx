import React from "react";
import Sidebar from "../Components/Sidebar";
import { Text, Box, Button, Image } from "@chakra-ui/react";

function Reports() {
  return (
    <Sidebar>
      <Box border={"1px solid red"}>
        <Box>
          <Text>Orders</Text>
        </Box>
        <Box gap={"5px"}>
          <Button bg="#1B59F8" color="#fff" gap={"8px"}>
            {" "}
            <Image src="add_order_icon.png" /> Add Order
          </Button>
        </Box>
      </Box>
    </Sidebar>
  );
}

export default Reports;
