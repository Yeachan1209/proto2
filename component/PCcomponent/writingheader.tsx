import { Box, Flex, Text } from "@chakra-ui/react";

function Writingheader({ username }) {
  return (
    <Flex alignItems="center" justify="space-between">
      <Flex alignItems="center">
        <Box
          bg="gray.200"
          borderRadius="full"
          height="50px"
          width="50px"
          mr="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize="lg"
        >
          {username[0]}
        </Box>
        <Flex direction="column">
          <Text fontWeight="bold" fontSize="lg" mb="1">
            {username}
          </Text>
          <Text color="gray.500" fontSize="lg">
            화성 · 1h
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function Writing({ username, content }) {
  return (
    <Box
      width="640px"
      height="500px"
      borderRadius="lg"
      p="4"
      boxShadow="lg"
      overflowWrap="anywhere"
    >
      <Writingheader username={username} />
      <Box mt="4">
        <img src="image.jpg" alt="placeholder" width="400px" />
        <Text mt="4" isTruncated>
          {content}
        </Text>
      </Box>
    </Box>
  );
}
