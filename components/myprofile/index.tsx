import React, { useState, useEffect } from "react";
import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import Select from "react-select";
import { Flex } from "../styles/flex";
import { Box } from "../styles/box";
import {
  districtOptions,
  bloodGroupOptions,
  provinceOptions,
  nearbyPlacesOptions,
} from "../../data/constants";

export const MyProfile = () => {
  const [form, setForm] = useState({
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    gender: "Male",
    email: "johnsmith@example.com",
    phone: "1234567890",
    bloodGroup: "O+",
    province: "Province 1",
    district: "Kathmandu",
    city: "Kathmandu",
    municipality: "Kathmandu",
    ward: "Ward No.8",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // You can set select options' value to default using useEffect and your set methods for Select
  useEffect(() => {
    // your set methods here
  }, []);

  return (
    <Box css={{ overflow: "hidden", height: "100%" }}>
      <Flex
        css={{
          gap: "$8",
          pt: "$5",
          height: "fit-content",
          flexWrap: "wrap",
          "@lg": {
            flexWrap: "nowrap",
          },
          "@sm": {
            pt: "$10",
          },
        }}
        justify={"center"}
      >
        <Flex
          css={{
            px: "$12",
            mt: "$8",
            "@xsMax": { px: "$10" },
            gap: "$12",
          }}
          direction={"column"}
        >
          <Text h2>Flll up your Personal Details </Text>
          <Flex
            css={{
              gap: "$10",
              flexWrap: "wrap",
              justifyContent: "center",
              "@sm": {
                flexWrap: "nowrap",
              },
            }}
            direction={"row"}
          >
            <Input
              label="First Name"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />

            <Input
              label="Last Name"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Last Name"
              name="lasttName"
              value={form.lastName}
              onChange={handleChange}
            />
          </Flex>

          <Flex
            css={{
              gap: "$10",
              flexWrap: "wrap",
              justifyContent: "center",
              "@sm": {
                flexWrap: "nowrap",
              },
            }}
            direction={"row"}
          >
            <Input
              label="Gender"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
            />
            <Input
              label="Bloog Group"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Blood Group"
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
            />
          </Flex>

          <Flex
            css={{
              gap: "$10",
              flexWrap: "wrap",
              justifyContent: "center",
              "@sm": {
                flexWrap: "nowrap",
              },
            }}
            direction={"row"}
          >
            <Input
              label="Email"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Flex>
          <Flex
            css={{
              gap: "$10",
              flexWrap: "wrap",
              justifyContent: "center",
              "@sm": {
                flexWrap: "nowrap",
              },
            }}
            direction={"row"}
          >
            <Input
              label="Province"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Province"
              name="province"
              value={form.province}
              onChange={handleChange}
            />

            <Input
              label="District"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="District"
              name="district"
              value={form.district}
              onChange={handleChange}
            />
          </Flex>

          <Flex
            css={{
              gap: "$10",
              flexWrap: "wrap",
              justifyContent: "center",
              "@sm": {
                flexWrap: "nowrap",
              },
            }}
            direction={"row"}
          >
            <Input
              label="City"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <Input
              label="Municipality"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Municipality"
              name="municipality"
              value={form.municipality}
              onChange={handleChange}
            />

            <Input
              label="Ward"
              bordered
              clearable
              fullWidth
              size="lg"
              placeholder="Ward"
              name="ward"
              value={form.ward}
              onChange={handleChange}
            />
          </Flex>

          <Button
            auto
            size="lg"
            type="button"
            onClick={() => {
              console.log("Save");
            }}
          >
            Save
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
