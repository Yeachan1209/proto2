import { Box, Flex, Input, Button, Text, Avatar } from "@chakra-ui/react";
import { FiHome, FiChevronDown, FiBell, FiUser } from "react-icons/fi";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = "화성";
  const username = "Yea Chan";
  const [showNotification, setShowNotification] = useState(false);
  const textColor = colorMode === "light" ? "black" : "white";

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      maxWidth="1150px"
      margin="0 auto"
      position="sticky"
      top="0"
      left="0"
      right="0"
      width="1150px"
      zIndex="999"
    >
      <Link href={"/"}>
        <Box as={FiHome} size="32px" cursor="pointer" color="#38B2AC" />
      </Link>
      <Button
        variant="ghost"
        ml="4"
        bg="teal.500"
        color="white"
        borderRadius="full"
        px="3"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
      >
        {location}
        <Box as={FiChevronDown} ml="2" />
      </Button>
      <Box flex="1" textAlign="center">
        <Box
          pos="relative"
          display="inline-block"
          maxWidth="600px"
          width="100%"
        >
          <Input
            type="text"
            placeholder="화성 근처에서 검색"
            borderRadius="full"
            py="1.5rem"
            px="3rem"
            fontSize="lg"
            bg="#E5E5E5"
            transition="width 0.3s ease-in-out"
          />

          <Box
            as={FaSearchLocation}
            size="20"
            color="gray.500"
            pos="absolute"
            top="50%"
            left="1rem"
            transform="translateY(-50%)"
          />
        </Box>
      </Box>

      <Flex align="center">
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
        <Avatar
          name={username}
          src="https://bit.ly/dan-abramov"
          size="md"
          cursor="pointer"
          ml={{ base: "4", md: "6" }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
