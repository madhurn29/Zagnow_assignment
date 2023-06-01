import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
const menus = [
  { icon: "report_icon.png", title: "Reports" },
  { icon: "report_icon.png", title: "Workspaces" },
  { icon: "setting_icon.png", title: "Settings" },
];
function Sidebar({ children }) {
  return (
    <Box
      border={"1px solid red"}
      display={"flex"}
      justifyContent={"space-between"}
      borderRadius={"15px"}
      //   mt={"4px"}
    >
      <Box
        border={"1px solid #EFF0F6"}
        width={"18%"}
        height={"100vh"}
        borderRadius={"12px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Box
          border={"1px solid blac"}
          display={"flex"}
          justifyContent={"center"}
          mt={"10px"}
        >
          <Image src="zag_logo.png" ml={"-25px"} />
        </Box>
        <Box
          border={"1px solid re"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={"15%"}
        >
          {menus.map((item) => {
            return (
              <Box
                display={"flex"}
                width={"80%"}
                border={"1px solid re"}
                gap={"20px"}
                p={"10px"}
                alignItems={"center"}
                mb={"15px"}
              >
                <Box>
                  <Image src={item.icon} width={"100%"} />
                </Box>
                <Text>{item.title}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box border={"1px solid black"} width={"81%"}>
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar;
