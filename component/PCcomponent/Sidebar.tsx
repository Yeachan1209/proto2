import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FiHome, FiMapPin, FiMessageSquare, FiPlus } from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("홈");

  const handleItemClick = (name) => {
    setActive(name);
  };

  return (
    <Box
      w="250px"
      maxW="1150px"
      position="absolute"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      borderRadius={10}
    >
      <Flex direction="column" p="1">
        <Box mb="2"></Box>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          mb="3"
          onClick={() => handleItemClick("홈")}
        >
          <Icon
            as={FiHome}
            mr="3"
            boxSize={6}
            color={active === "홈" ? "#38B2AC" : "gray.600"}
          />
          <Text fontWeight="bold">홈</Text>
        </Box>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          mb="3"
          onClick={() => handleItemClick("내 근처")}
        >
          <Icon
            as={FiMapPin}
            mr="3"
            boxSize={6}
            color={active === "내 근처" ? "#38B2AC" : "gray.600"}
          />
          <Text fontWeight="bold">내 근처</Text>
        </Box>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          mb="3"
          onClick={() => handleItemClick("채팅")}
        >
          <Icon
            as={FiMessageSquare}
            mr="3"
            boxSize={6}
            color={active === "채팅" ? "#38B2AC" : "gray.600"}
          />
          <Text fontWeight="bold">채팅</Text>
        </Box>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="40px"
          mb="4"
          bg="teal.500"
          color="white"
          borderRadius="20px"
        >
          <Icon as={FiPlus} boxSize={6} />
          <Text ml="2" fontWeight="bold" textAlign="center">
            글쓰기
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
