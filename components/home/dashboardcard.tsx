import { Avatar, Card, Text, Link } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const DashboardCard = ({
  label = "",
  href = "#",
  color = "transparent",
}) => {
  return (
    <Link block href={href}>
      <Card
        css={{
          mw: "375px",
          mh: "475px",
          height: "auto",
          bg: "$accents0",
          borderRadius: "$xl",
          alignContent: "center",
          justifyContent: "center",
          px: "$6",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "1px solid grey",
        }}
      >
        <Card.Body css={{ py: "$10" }}>
          <Flex css={{ gap: "$5" }} justify={"center"}>
            <Text h3 css={{ textAlign: "center" }}>
              {label}
            </Text>
          </Flex>
        </Card.Body>
      </Card>
    </Link>
  );
};
