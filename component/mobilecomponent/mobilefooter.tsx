import { FaHome, FaSearch, FaMap, FaEnvelope, FaUser } from "react-icons/fa";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      py="4"
      px="6"
      borderTop="1px solid gray.100"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <IconButton aria-label="홈" variant="ghost" icon={<FaHome />} size="lg" />
      <IconButton
        aria-label="검색"
        variant="ghost"
        icon={<FaSearch />}
        size="lg"
      />
      <IconButton
        aria-label="지도"
        variant="ghost"
        icon={<FaMap />}
        size="lg"
      />
      <IconButton
        aria-label="메시지"
        variant="ghost"
        icon={<FaEnvelope />}
        size="lg"
      />
      <Box>
        <IconButton
          aria-label="프로필"
          variant="ghost"
          icon={<FaUser />}
          size="lg"
        />
      </Box>
    </Flex>
  );
};

export default Footer;
