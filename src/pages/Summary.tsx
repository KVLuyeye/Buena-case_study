import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/cards/Card";
import { PageLayout } from "../layouts/defaultPage";
import { useProgressStore } from "../stores/progressStore";
import { useFormStore } from "../stores/formStore";
import { useSalaryStore } from "../stores/salaryStore";
import Button from "@mui/joy/Button";

export const Summary = () => {
  const [salarySelected, setSalarySelected] = useState(false);
  const navigate = useNavigate();
  const setProgress = useProgressStore((state) => state.setProgress);
  const personalInfo = useFormStore((state) => state.form);
  const salary = useSalaryStore((state) => state.salary);

  const handleBack = () => {
    navigate("/salary");
    setProgress(66.6);
  };

  const handleSubmit = () => {
    setProgress(100);
    navigate("/success");
  };

  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <h2 className="text-center">Zusammenfassung Ihrer Informationen</h2>
        </Card.Header>

        <Card.Body>
          <div className="flex flex-col gap-6 px-4 py-4 md:px-6">
            <hr />
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-xl">Persönliche Angaben</h3>
              <span className="text-gray-600">
                Vorname
                <p className="ml-36 text-black text-right md:text-center">
                  {personalInfo.firstName}
                </p>
              </span>
              <span className="text-gray-600">
                Nachname
                <p className="ml-16 md:ml-36 text-black text-right md:text-center">
                  {personalInfo.lastName}
                </p>
              </span>
              <span className="text-gray-600">
                Telefonnummer
                <p className="ml-16 md:ml-36 text-black text-right md:text-center">
                  {personalInfo.phoneNumber}
                </p>
              </span>
              <span className="text-gray-600">
                Email Adresse
                <p className="ml-16 md:ml-36 text-black text-right md:text-center">
                  {personalInfo.email}{" "}
                </p>
              </span>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-xl">Gehalt</h3>
              <p className="ml-16 md:ml-36 text-black text-right md:text-center">
                {salary}
              </p>
            </div>
          </div>
        </Card.Body>

        <Card.Actions>
          <Button
            onClick={handleSubmit}
            style={{
              gridColumnStart: 3,
              backgroundColor: "black",
              color: "white",
              border: "white",
            }}
            variant="outlined"
            className="hover:opacity-80"
            disabled={salarySelected}
          >
            {" "}
            Fertigstellen
          </Button>
          <Button
            onClick={handleBack}
            style={{
              gridRowStart: 1,
              backgroundColor: "black",
              color: "white",
              border: "white",
            }}
            variant="outlined"
            className="hover:opacity-80"
          >
            Zurück
          </Button>
        </Card.Actions>
      </Card>
    </PageLayout>
  );
};
