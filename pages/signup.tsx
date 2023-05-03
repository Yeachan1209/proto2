import Link from "next/link";
import { Box, Flex, Input, Button, Text, HStack, Grid } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <Grid
  height="100vh"
  alignItems="center"
  justifyContent="center"
  templateColumns={{ base: "1fr", md: "repeat(2, 1fr minmax(0, 1150px))" }}
  maxWidth="1150px"
  justifyItems="center"
  marginLeft={{ base: 0, md: "auto" }}
  marginRight={{ base:0, md:"150"}}
>
      <Box
  display="flex"
  flexDirection="column"
  alignItems="center"
  padding={8}
  textAlign={{ base: "center", md: "left" }}
  width={{ base: "100%", md: "auto" }}
>
  <Box as={FiHome} size={160} marginBottom={2} color="#38B2AC" />
  <Box fontSize="small" fontWeight="bold" textAlign="center" width="200px">
    동네이야기부터 중고거래까지
    <br />
    가까운 이웃과 함께해요
  </Box>
</Box>

<Box borderRadius="md" maxWidth="1150px" margin="auto">
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    marginTop={{ base: -350, md: 0 }}
  >
          <Input
            placeholder="이름"
            marginBottom={2}
            w="366px"
            bg="#E5E5E5"
            borderRadius="lg"
            _focus={{ outline: "none", boxShadow: "outline" }}
          />
          <Input
            placeholder="이메일"
            marginBottom={2}
            w="366px"
            bg="#E5E5E5"
            borderRadius="lg"
            _focus={{ outline: "none", boxShadow: "outline" }}
          />
          <Input
            placeholder="비밀번호"
            marginBottom={2}
            w="366px"
            bg="#E5E5E5"
            borderRadius="lg"
            _focus={{ outline: "none", boxShadow: "outline" }}
          />
          <Button colorScheme="teal" marginBottom={2} w="366px">
            회원가입
          </Button>
          <Box height="1px" bg="#E5E5E5" my={1.5} />
          <Link href="/HomePage">
            <Button
              marginBottom={2}
              w="366px"
              bg="#E5E5E5"
              borderRadius="lg"
              color="black"
              _hover={{ bg: "#D4D4D4" }}
            >
              <HStack spacing={2}>
                <Box as={FaGoogle} size="24px" />
                <Text>Continue with Google</Text>
              </HStack>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link" width="500px" colorScheme="teal">
              <Text>이미 계정이 있나요?</Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Signup;
