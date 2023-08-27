import { Dropdown, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "License",
    location: "Nepal",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      placement="bottom-left"
      borderWeight={"extrabold"}
      isDisabled={false}
    >
      <Dropdown.Trigger css={{ cursor: "pointer" }}>
        <Box>
          <Flex align={"center"} css={{ gap: "$7" }}>
            <img src="/logo.png" width="50px" height="50px" />
            <Box>
              <Text
                h3
                size={"$xl"}
                weight={"medium"}
                css={{
                  m: 0,
                  color: "#003A9D",
                  lineHeight: "$lg",
                  mb: "-$5",
                }}
              >
                {company.name}
              </Text>
              <Text
                span
                weight={"medium"}
                size={"$xs"}
                css={{ color: "$#C40001" }}
              >
                {company.location}
              </Text>
            </Box>
            <BottomIcon />
          </Flex>
        </Box>
      </Dropdown.Trigger>
      <Dropdown.Menu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Facebook",
              location: "Pepsicola, Kathmandu",
              logo: <AcmeIcon />,
            });
          }
          if (e === "2") {
            setCompany({
              name: "Instagram",
              location: "Swoyambhu, Kathmandu",
              logo: <AcmeLogo />,
            });
          }
          if (e === "3") {
            setCompany({
              name: "Twitter",
              location: "Sirak ko Ghar, Kathmandu",
              logo: <AcmeIcon />,
            });
          }
          if (e === "4") {
            setCompany({
              name: "Acme Co.",
              location: "Palo Alto, CA",
              logo: <AcmeIcon />,
            });
          }
        }}
        aria-label="Avatar Actions"
        css={{
          $$dropdownMenuWidth: "340px",
          $$dropdownItemHeight: "60px",
          "& .nextui-dropdown-item": {
            py: "$2",
            // dropdown item left icon
            svg: {
              color: "#C40001",
              mr: "$4",
            },
            // dropdown item title
            "& .nextui-dropdown-item-content": {
              w: "100%",
              fontWeight: "$semibold",
            },
          },
        }}
      >
        <Dropdown.Section title="Companies">
          <Dropdown.Item
            key="1"
            icon={<AcmeIcon />}
            description="Gothatar, Kathmandu"
          >
            Facebook
          </Dropdown.Item>
          <Dropdown.Item key="2" icon={<AcmeLogo />} description="Swoyambhu, Kathmandu">
            Instagram
          </Dropdown.Item>
          <Dropdown.Item key="3" icon={<AcmeIcon />} description="Nepal">
            Twitter
          </Dropdown.Item>
          <Dropdown.Item
            key="4"
            icon={<AcmeIcon />}
            description="Sirak ko Ghar"
          >
            Acme Co.
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
};
