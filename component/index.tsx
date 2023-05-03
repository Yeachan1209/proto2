import { ReactNode } from "react";
import Header from "./PCcomponent/Header";
import Navigationbar from "./PCcomponent/NavigationBar";
import Sidebar from "./PCcomponent/Sidebar";
import Writing from "./PCcomponent/writingheader";
import { Grid, GridItem } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

const username = "Yea Chan";
const content =
  "안녕하세요. 반갑습니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다. 글 내용입니다.";

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateRows="100px 1fr"
      templateColumns="200px 1fr"
      gap={4}
      height="100vh"
    >
        <Header />
      <GridItem rowSpan={1} colSpan={1}>
        <Navigationbar />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        <Sidebar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Writing username={username} content={content} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
