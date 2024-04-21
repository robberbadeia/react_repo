import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    // Horizontal Stack
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
