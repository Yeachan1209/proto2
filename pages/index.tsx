import Link from "next/link";
import { Box, Input, Button, Text, HStack, Grid, Flex } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import router from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };
  const handleSubmit = () => {
    if (!email || !password) {
      setError("아이디와 비밀번호를 입력해주세요.");
    } else if (!validateEmail(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
    } else if (!validatePassword(password)) {
      setError(
        "비밀번호는 최소 8자 이상이며, 대소문자와 숫자가 모두 포함되어야 합니다."
      );
    } else {
      router.push("/HomePage");
    }
  };

  return (
    <div style={{width:"100%",height:"100%"}}>
    <Flex
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      
      // justifyItems="center"
      // marginLeft={{ base: 0, md: "auto" }}
      // marginRight={{ base:0, md:"auto"}}
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
  <Box fontSize="small" fontWeight="bold" width="200px" textAlign="center">
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
            placeholder="이메일"
            marginBottom={2}
            w="366px"
            bg="#E5E5E5"
            borderRadius="lg"
            _focus={{ outline: "none", boxShadow: "outline" }}
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            marginBottom={2}
            w="366px"
            bg="#E5E5E5"
            borderRadius="lg"
            _focus={{ outline: "none", boxShadow: "outline" }}
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <Text color="red">{error}</Text>}
          <Button
            colorScheme="teal"
            marginBottom={2}
            w="366px"
            onClick={handleSubmit}
          >
            로그인
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
          <Link href="/signup">
            <Button variant="link" width="500px" colorScheme="teal">
              <Text>새로 오셨나요? 회원가입</Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
    </div>
  );
};

export default Login;
