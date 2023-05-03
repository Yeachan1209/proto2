import {
  Box,
  Flex,
  Button,
  useColorMode,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiBell, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";

const MobileHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = "화성";
  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };
  const [showNotification, setShowNotification] = useState(false);
  const username = "Yea Chan";
  const textColor = colorMode === "light" ? "black" : "white";
  return (
    <Flex
      justify="space-between"
      align="center"
      py="4"
      px="6"
      borderBottom="1px solid gray.100"
    >
      <Button
        variant="ghost"
        ml="4"
        bg="teal.500"
        color="white"
        borderRadius="full"
        px="3"
        alignItems="center"
      >
        {location}
        <Box as={FiChevronDown} ml="2" />
      </Button>
      <Button
        variant="ghost"
        size="md"
        onClick={toggleColorMode}
        aria-label="다크 모드 전환"
        _focus={{ outline: "none" }}
        _active={{ outline: "none" }}
      >
        {colorMode === "light" ? <FiMoon /> : <FiSun />}
      </Button>
      <Box
        as={FiBell}
        size={40}
        cursor="pointer"
        ml={{ base: "4", md: "6" }}
        p="2"
        onClick={handleNotificationClick}
      />
      {showNotification && (
        <Box
          position="absolute"
          top="65px"
          right="80px"
          borderColor="gray.300"
          borderRadius="md"
          boxShadow="sm"
          zIndex="1"
          p="2"
          display="flex"
          alignItems="center"
        >
          <Avatar
            name={username}
            src="https://bit.ly/dan-abramov"
            size="sm"
            mr="2"
          />
          <Text fontWeight="bold" mb="0">
            {username}
          </Text>
          <Text ml="2" color={textColor}>
            님이 새 글을 작성하셨습니다.
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default MobileHeader;
