import { useState } from "react";
import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [selectedNavItemIndex, setSelectedNavItemIndex] = useState(0);

  const navItems = [
    { link: "/HomePage", label: "일상" },
    { link: "/HomePage", label: "동네소식" },
    { link: "/HomePage", label: "중고거래" },
    { link: "/HomePage", label: "동네맛집" },
    { link: "/HomePage", label: "알바" },
    { link: "/HomePage", label: "같이해요" },
    { link: "/HomePage", label: "운동" },
  ];

  const handleNavItemClicked = (index) => {
    setSelectedNavItemIndex(index);
  };

  return (
    <Box
      as="nav"
      p="4"
      top="16"
      right="0"
      bottom="0"
      maxW="1150px"
      width="100%"
      left="16px"
    >
      <Box
        as="ul"
        display="flex"
        flexGrow="1"
        flexDirection="row"
        justifyContent="space-between"
        listStyleType="none"
        position="absolute"
        bottom="-5px"
        boxShadow="md"
        borderRadius="lg"
        width="645px"
      >
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            index={index}
            link={navItem.link}
            label={navItem.label}
            isSelected={selectedNavItemIndex === index}
            onNavItemClicked={handleNavItemClicked}
          />
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ index, link, label, isSelected, onNavItemClicked }) => {
  const backgroundColor = isSelected ? "#38B2AC" : "transparent";

  const handleClick = () => {
    onNavItemClicked(index);
  };

  return (
    <Box as="li" mx="4" my="2">
      <Link to={link} style={{ fontWeight: "bold" }} onClick={handleClick}>
        <Text fontSize="sm" bg={backgroundColor} p="2" borderRadius="lg">
          {label}
        </Text>
      </Link>
    </Box>
  );
};

export default NavigationBar;
