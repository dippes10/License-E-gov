import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import Select from "react-select";
import { Flex } from "../styles/flex";
import { Box } from "../styles/box";
import {
  districtOptions,
  bloodGroupOptions,
  provinceOptions,
  nearbyPlacesOptions,
  genderOptions,
  relationOptions,
} from "../../data/constants";

export const Citizenship = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

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
            paddingBottom: "60px",
            px: "$12",
            mt: "$8",
            "@xsMax": { px: "$10" },
            gap: "$12",
          }}
          direction={"column"}
        >
          <Text
            h2
            css={{
              textAlign: "center",
              "@sm": {
                textAlign: "inherit",
              },
            }}
          >
            Fill up your citizenship details
          </Text>
          <Text
            h3
            css={{
              textAlign: "center",
              "@sm": {
                textAlign: "inherit",
              },
            }}
          >
            Personal Details
          </Text>

          <Flex
            direction={"column"}
            css={{
              backgroundColor: "rgb(241 245 249 / 1);",
              borderRadius: "10px",
              padding: "20px",
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "nowrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="First Name"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="First Name"
              />
              <Input
                label="Middle Name"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Middle Name"
              />
              <Input
                label="Last Name"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Last Name"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Email"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Email"
              />
              <Input
                label="Phone Number"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Phone Number"
              />
              <Input
                label="Date of Birth"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Date of Birth"
                type="date"
              />
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="relation">Select Gender</label>
                <Select
                  name="gender"
                  placeholder="Select Gender"
                  options={genderOptions}
                />
              </Flex>
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "nowrap",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="bloodGroup">Select Blood Group</label>
                <Select
                  name="bloodGroup"
                  placeholder="Select Blood Group"
                  options={bloodGroupOptions}
                />
              </Flex>
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="nearbyPlaces">Nearby Places</label>
                <Select
                  name="nearbyPlaces"
                  placeholder="Nearby Places"
                  options={nearbyPlacesOptions}
                />
              </Flex>
            </Flex>
          </Flex>
          <Text
            h3
            css={{
              textAlign: "center",
              "@sm": {
                textAlign: "inherit",
              },
            }}
          >
            Guardian Details
          </Text>
          <Flex
            direction={"column"}
            css={{
              backgroundColor: "rgb(241 245 249 / 1);",
              borderRadius: "10px",
              padding: "20px",
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Guardian's Name"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Guardian's Name"
              />
              <Input
                label="Phone Number"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Phone Number"
              />
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="relation">Select Relation</label>
                <Select
                  name="relation"
                  placeholder="Select Relation"
                  options={relationOptions}
                />
              </Flex>
            </Flex>
          </Flex>
          <Text
            h3
            css={{
              textAlign: "center",
              "@sm": {
                textAlign: "inherit",
              },
            }}
          >
            Permanent Address
          </Text>
          <Flex
            direction={"column"}
            css={{
              backgroundColor: "rgb(241 245 249 / 1);",
              borderRadius: "10px",
              padding: "20px",
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex css={{ gap: "$10", flexWrap: "nowrap", width: "100%" }}>
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="province">Select Province</label>
                <Select
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      width: "100%",
                    }),
                  }}
                  name="province"
                  placeholder="Select Province"
                  options={provinceOptions}
                />
              </Flex>
              <Flex
                css={{
                  gap: "$5",
                  flexWrap: "wrap",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="district">Select District</label>
                <Select
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      width: "100%",
                    }),
                  }}
                  name="district"
                  placeholder="Select District"
                  options={districtOptions}
                />
              </Flex>
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Municipality"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Municiplaity"
              />
              <Input
                label="Ward No."
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Ward Number"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="City"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="City"
              />
              <Input
                label="Tole"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Tole"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Department"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Department"
              />
              <Input
                label="Company"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Company"
              />
            </Flex>
          </Flex>
          <Flex
            css={{
              gap: "$8",
              pt: "$5",
              height: "fit-content",
            }}
            justify={"center"}
          >
            <Button flat size="lg" onClick={closeHandler}>
              Go Back
            </Button>
            <Button shadow size="lg" onClick={closeHandler}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
