import React, { useState, useEffect } from "react";
import { Card } from "../components/cards/Card";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import { PageLayout } from "../layouts/defaultPage";
import { useProgressStore } from "../stores/progressStore";

export const PersonalInfo = () => {
  const [value, setValue] = useState<string>("");
  const setProgress = useProgressStore((state) => state.setProgress);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/salary");
    setProgress(33.3);
  };

  const [phoneNumber, setPhoneNumber] = useState("+49");

  const handlePhoneNumberChange = (event: any) => {
    const { value } = event.target;
    const cleanNumber = value.replace(/[^0-9]+/g, ""); // Remove non-numeric characters
    setPhoneNumber(
      `+49${cleanNumber.startsWith("49") ? cleanNumber.slice(2) : cleanNumber}`
    );
  };

  useEffect(() => {
    // Ensure the input starts with +49 when the component mounts
    if (!phoneNumber.startsWith("+49")) {
      setPhoneNumber(`+49${phoneNumber}`);
    }
  }, [phoneNumber]);
  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <h2>Personal Information</h2>
        </Card.Header>

        <Card.Body>
          <div className="flex flex-col gap-4 px-12 py-6">
            <div className="flex gap-10">
              <Input
                size="lg"
                className="col-span-1"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="First Name"
                variant="soft"
              />
              <Input
                size="lg"
                className="col-start-3"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Last Name"
                variant="soft"
              />
            </div>
            <Input
              size="lg"
              className="col-span-3"
              type="email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Email Address"
              variant="soft"
            />
            <Input
              size="lg"
              className="col-span-3"
              type="text" // Changed to text to handle non-numeric characters
              placeholder="Phone Number"
              variant="soft"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </Card.Body>

        <Card.Actions>
          <PrimaryBtn onClick={handleNavigate} value="Next" />
        </Card.Actions>
      </Card>
    </PageLayout>
  );
};
