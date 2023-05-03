import { ChakraProvider, extendTheme, useMediaQuery } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

const theme = extendTheme({
  breakpoints: {
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLargerThanMd, setIsLargerThanMd] = useState(false);
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setColorMode(prefersDark ? "dark" : "light");
  }, [prefersDark]);

  useEffect(() => {
    setIsLargerThanMd(window.innerWidth >= parseInt(theme.breakpoints.md));

    const handleResize = () => {
      setIsLargerThanMd(window.innerWidth >= parseInt(theme.breakpoints.md));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.md]);

  const chakraTheme = extendTheme({
    colors: {
      brand: {
        500: "#000000",
        300: "#FFFFFF",
      },
    },
    config: {
      initialColorMode: colorMode,
    },
    fonts: {
      heading: "Noto Sans KR, sans-serif",
      body: "Noto Sans KR, sans-serif",
    },
  });

  return (
    <>
      {" "}
      {isClient && (
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
