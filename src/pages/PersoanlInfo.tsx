import React, { useState, useEffect } from "react";
import { Card } from "../components/cards/Card";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import { PageLayout } from "../layouts/defaultPage";
import { useProgressStore } from "../stores/progressStore";
import { useFormStore } from "../stores/formStore";
import Button from "@mui/joy/Button";

export const PersonalInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState("+49");
  const [formFilled, setFormFilled] = useState(false);
  const setProgress = useProgressStore((state) => state.setProgress);
  const navigate = useNavigate();
  const personalInfo = useFormStore((state) => state.form);
  const setForm = useFormStore((state) => state.setForm);

  //FUNCITONS
  const handleNavigate = () => {
    navigate("/salary");
    setProgress(33.3);
  };

  const handlePhoneNumberChange = (event: any) => {
    const { value } = event.target;
    const cleanNumber = value.replace(/[^0-9]+/g, ""); // Remove non-numeric characters

    setPhoneNumber(
      `+49${cleanNumber.startsWith("49") ? cleanNumber.slice(2) : cleanNumber}`
    );
    setForm({ ...personalInfo, phoneNumber: phoneNumber });
  };

  const checkFormFilled = () => {
    const { firstName, lastName, email, phoneNumber } = personalInfo;
    if (firstName && lastName && email && phoneNumber) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };

  //LIFECYCLE
  useEffect(() => {
    // Ensure the input starts with +49 when the component mounts
    if (!phoneNumber.startsWith("+49")) {
      setPhoneNumber(`+49${phoneNumber}`);
    }
  }, [phoneNumber]);

  useEffect(() => {
    checkFormFilled();
  }, [personalInfo]); // Add other dependencies if needed

  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <h2>Persönliche Angaben</h2>
        </Card.Header>
        <hr />
        <Card.Body>
          <div className="flex flex-col gap-y-4 px-12 py-6">
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-10">
              <Input
                size="lg"
                className="col-span-1"
                type="text"
                value={personalInfo.firstName}
                onChange={(e) =>
                  setForm({ ...personalInfo, firstName: e.target.value })
                }
                placeholder="Vorname"
                variant="soft"
              />
              <Input
                size="lg"
                className="col-start-3"
                type="text"
                value={personalInfo.lastName}
                onChange={(e) =>
                  setForm({ ...personalInfo, lastName: e.target.value })
                }
                placeholder="Nachname"
                variant="soft"
              />
            </div>
            <Input
              size="lg"
              className="col-span-3"
              type="email"
              value={personalInfo.email}
              onChange={(e) =>
                setForm({ ...personalInfo, email: e.target.value })
              }
              placeholder="Email Addresse"
              variant="soft"
            />
            <Input
              size="lg"
              className="col-span-3"
              type="text"
              placeholder="Telefonnummer"
              variant="soft"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </Card.Body>

        <Card.Actions>
          <Button
            onClick={handleNavigate}
            style={{
              gridColumnStart: 3,
              backgroundColor: "black",
              color: "white",
              border: "white",
            }}
            variant="outlined"
            className="hover:opacity-80"
            disabled={!formFilled}
          >
            Weiter
          </Button>
        </Card.Actions>
      </Card>
    </PageLayout>
  );
};
