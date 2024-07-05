import { Card } from "../components/cards/Card";
import { PageLayout } from "../layouts/defaultPage";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/joy/Radio";
import { useProgressStore } from "../stores/progressStore";

export const Salary = () => {
  const navigate = useNavigate();
  const setProgress = useProgressStore((state) => state.setProgress);
  const handleNavigate = () => {
    navigate("/summary");
    setProgress(66.6);
  };
  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <h2>Salary</h2>
        </Card.Header>

        <Card.Body>
          <div className="flex flex-col gap-6">
            <p>What is your monthly salary?</p>
            <Radio label="0-1000.-" />
            <Radio label="1000-2000.-" />
            <Radio label="2000-3000.-" />
            <Radio label="3000-4000.-" />
            <Radio label="More than 4000.-" />
          </div>
        </Card.Body>

        <Card.Actions>
          <PrimaryBtn onClick={handleNavigate} value="Next" />
        </Card.Actions>
      </Card>
    </PageLayout>
  );
};
