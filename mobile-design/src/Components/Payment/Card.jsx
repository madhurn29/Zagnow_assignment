import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Card = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box maxWidth="400px" mx="auto" p="4">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Card Number</FormLabel>
          <Input type="text" placeholder="Card Number" />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Name on Card</FormLabel>
          <Input type="text" placeholder="Name on Card" />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Expiration Date</FormLabel>
          <Input type="text" placeholder="MM/YY" />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>CVC</FormLabel>
          <Input type="text" placeholder="CVC" />
        </FormControl>

        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Card;
