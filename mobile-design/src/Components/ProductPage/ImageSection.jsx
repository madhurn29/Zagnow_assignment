import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BatteryPercentage from "./BatteryPercentage";
import Time from "./Time";
import Arrow_Cart from "./Arrow_Cart";
import BatteryAndTime from "./BatteryAndTime";
import WishList from "./WishList";

function getBatteryPercentage() {
  return navigator.getBattery().then(function (battery) {
    // Get the battery percentage
    const batteryPercentage = Math.round(battery.level * 100);
    console.log(batteryPercentage);
    return batteryPercentage;
  });
}

function ImageSection(image) {
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const secs = currentTime.getSeconds();
  const [hours, setHours] = useState(hrs);
  const [minutes, setMinutes] = useState(mins);
  const [seocnds, setSeconds] = useState(secs);
  const [battery, setBattery] = useState(100);
  //   const minutes =
  //   const seconds =

  useEffect(
    () => {
      setInterval(() => {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        navigator.getBattery().then(function (battery) {
          // Get the battery percentage
          const batteryPercentage = Math.round(battery.level * 100);
          //   console.log(batteryPercentage);
          setBattery(batteryPercentage);
          return batteryPercentage;
        });

        if (hours > 12) {
          hours -= 12;
        }
        setHours(hours);
        setMinutes(minutes);
      }, 1000);

    //   console.log(battery);
    },
    [ minutes ]
  );
  return (
    <Box w={"100%"} border={"1px solid re"}>
      {/* image-container */}
      <Image
        position={"relative"}
        w={"100%"}
        src="nike_tshirt.png"
        mt={"-15px"}
        // objectFit={"cover"}
      />
      {/* Time and battery is given here */}
      <BatteryAndTime minutes={minutes} hours={hours} battery={battery} />
      {/* <Time hours={hours} minutes={minutes} /> */}

      {/* Arrow and Cart */}
      <Arrow_Cart />
      <WishList/>
    </Box>
  );
}

export default ImageSection;
