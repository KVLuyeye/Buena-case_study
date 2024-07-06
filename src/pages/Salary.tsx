import { useState, useEffect } from "react";
import { Card } from "../components/cards/Card";
import { PageLayout } from "../layouts/defaultPage";
import { useNavigate } from "react-router-dom";
import { useProgressStore } from "../stores/progressStore";
import { useSalaryStore } from "../stores/salaryStore";
import Radio from "@mui/joy/Radio";
import Button from "@mui/joy/Button";

export const Salary = () => {
  const [salarySelected, setSalarySelected] = useState(false);
  const navigate = useNavigate();
  const setProgress = useProgressStore((state) => state.setProgress);
  const setSelectedSalary = useSalaryStore((state) => state.setSalary);
  const selectedSalary = useSalaryStore((state) => state.salary);

  //FUNCTIONS
  const handleNext = () => {
    navigate("/summary");
    setProgress(66.6);
  };

  const handleBack = () => {
    navigate("/personal-info");
    setProgress(33.3);
  };

  const handleSalaryChange = (event: any) => {
    setSelectedSalary(event.target.value);
  };

  //LIFECYCLE
  useEffect(() => {
    setSalarySelected(selectedSalary !== "");
  }, [selectedSalary]);

  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <h2>Gehalt</h2>
        </Card.Header>
        <hr />
        <Card.Body>
          <div className="flex flex-col gap-6">
            <p>Wie hoch ist Ihr monatliches Gehalt?</p>
            <Radio
              value={"0 - 1000.-"}
              label="0-1000.-"
              onChange={handleSalaryChange}
              checked={selectedSalary === "0 - 1000.-"}
            />
            <Radio
              value={"1000 - 2000.-"}
              label="1000-2000.-"
              onChange={handleSalaryChange}
              checked={selectedSalary === "1000 - 2000.-"}
            />
            <Radio
              value={"2000 - 3000.-"}
              label="2000-3000.-"
              onChange={handleSalaryChange}
              checked={selectedSalary === "2000 - 3000.-"}
            />
            <Radio
              value={"3000 - 4000.-"}
              label="3000-4000.-"
              onChange={handleSalaryChange}
              checked={selectedSalary === "3000 - 4000.-"}
            />
            <Radio
              value={"Mehr als 4000.-"}
              label="Mehr als 4000.-"
              onChange={handleSalaryChange}
              checked={selectedSalary === "Mehr als 4000.-"}
            />
          </div>
        </Card.Body>

        <Card.Actions>
          {" "}
          <Button
            onClick={handleNext}
            style={{
              gridColumnStart: 3,
              backgroundColor: "black",
              color: "white",
              border: "white",
            }}
            variant="outlined"
            className="hover:opacity-80"
            disabled={!salarySelected}
          >
            {" "}
            Weiter
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
