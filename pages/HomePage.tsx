import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, IconButton } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import Header from "../component/PCcomponent/Header";
import Sidebar from "../component/PCcomponent/Sidebar";
import NavigationBar from "../component/PCcomponent/NavigationBar";
import Writing from "../component/PCcomponent/writingheader";
import { BrowserRouter } from "react-router-dom";
import MobileHeader from "../component/mobilecomponent/mobileheader";
import Footer from "../component/mobilecomponent/mobilefooter";
import Layout from "../component/index";

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  const username = "Yea Chan";
  const content =
    "안녕하세요. 반갑습니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다.";

  const [likes1, setLikes1] = useState(10);
  const [liked1, setLiked1] = useState(false);

  const [likes2, setLikes2] = useState(10);
  const [liked2, setLiked2] = useState(false);

  const [likes3, setLikes3] = useState(10);
  const [liked3, setLiked3] = useState(false);

  const handleLike1 = () => {
    if (liked1) {
      setLikes1(likes1 - 1);
    } else {
      setLikes1(likes1 + 1);
    }
    setLiked1(!liked1);
  };

  const handleLike2 = () => {
    if (liked2) {
      setLikes2(likes2 - 1);
    } else {
      setLikes2(likes2 + 1);
    }
    setLiked2(!liked2);
  };

  const handleLike3 = () => {
    if (liked3) {
      setLikes3(likes3 - 1);
    } else {
      setLikes3(likes3 + 1);
    }
    setLiked3(!liked3);
  };

  return (
    <Box>
      {isMobile ? (
        <Box>
          <MobileHeader />
          <Footer />
        </Box>
      ) : (
        <Box maxWidth="1150px" mx="auto">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            padding="1rem"
            position="sticky"
            top="0"
            left="0"
            right="0"
            width="100%"
            zIndex="999"
          >
            <Header />
          </Flex>
          <Grid>
            <Box display="flex">
              <Grid as="aside" w="250px">
                <Sidebar />
              </Grid>
              <Box flex="1" pl="4" position="relative" display="flex">
                <Grid as="nav" mt="4">
                  <NavigationBar />
                </Grid>
                <Grid as="section">
                  <Box position="absolute" top="50px" mt="4" ml="-3">
                    <Writing username={username} content={content} />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      mt="-10"
                    >
                      <IconButton
                        aria-label="like"
                        icon={<AiOutlineHeart />}
                        mr="2"
                        variant="ghost"
                        onClick={handleLike1}
                        color={liked1 ? "red.500" : "gray.300"}
                      />
                      <Box fontSize="sm" mr="4">
                        {likes1}
                      </Box>
                      <IconButton
                        aria-label="comment"
                        icon={<AiOutlineMessage />}
                        variant="ghost"
                      />
                      <Box fontSize="sm" mr="4">
                        3
                      </Box>
                    </Box>
                  </Box>
                  <Box position="absolute" mt="580" ml="-3">
                    <Writing username={username} content={content} />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      mt="-10"
                    >
                      <IconButton
                        aria-label="like"
                        icon={<AiOutlineHeart />}
                        mr="2"
                        variant="ghost"
                        onClick={handleLike2}
                        color={liked2 ? "red.500" : "gray.300"}
                      />
                      <Box fontSize="sm" mr="4">
                        {likes2}
                      </Box>
                      <IconButton
                        aria-label="comment"
                        icon={<AiOutlineMessage />}
                        variant="ghost"
                      />
                      <Box fontSize="sm" mr="4">
                        3
                      </Box>
                    </Box>
                  </Box>
                  <Box position="absolute" mt="1100" ml="-3">
                    <Writing username={username} content={content} />
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      mt="-10"
                    >
                      <IconButton
                        aria-label="like"
                        icon={<AiOutlineHeart />}
                        mr="2"
                        variant="ghost"
                        onClick={handleLike3}
                        color={liked3 ? "red.500" : "gray.300"}
                      />
                      <Box fontSize="sm" mr="4">
                        {likes3}
                      </Box>
                      <IconButton
                        aria-label="comment"
                        icon={<AiOutlineMessage />}
                        variant="ghost"
                      />
                      <Box fontSize="sm" mr="4">
                        3
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}
