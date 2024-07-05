import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "../components/inputs/InputText";
import { Card } from "../components/cards/Card";
import "primereact/resources/primereact.min.css"; //co

export const PersonalInfo = () => {
  const [value, setValue] = useState<string>("");
  return (
    <section className="mx-4 px-4 flex justify-center">
      <Card title="Personal Information">Content</Card>
    </section>
  );
};
