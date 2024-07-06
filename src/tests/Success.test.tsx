import { render, screen } from "@testing-library/react";
import { Success } from "../pages/Success"; // Adjust the import path accordingly
import confetti from "canvas-confetti";

// Mock canvas-confetti to prevent actual animation during tests
jest.mock("canvas-confetti", () => jest.fn());

describe("Success Component", () => {
  it("renders the success message and triggers confetti animation", () => {
    render(<Success />);

    // Check if the success message is rendered
    expect(
      screen.getByText("Vielen Dank für Ihre Registrierung !")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Willkommen bei Buena – Ihrem neuen Partner für effizientes Immobilienmanagement."
      )
    ).toBeInTheDocument();

    // Check if the confetti animation is triggered
    expect(confetti).toHaveBeenCalledWith({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });

  it("renders the steps correctly", () => {
    render(<Success />);

    // Check if all the steps are rendered
    expect(screen.getByText("Was nun ?")).toBeInTheDocument();
    expect(screen.getByText("1. Anmeldung abschließen:")).toBeInTheDocument();
    expect(screen.getByText("Sie erhalten in Kürze eine")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Bitte klicken Sie auf den Bestätigungslink , um Ihre Anmeldung abzuschließen."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("2. Erste Schritte:")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Nach der Anmeldung können Sie sich in Ihrem persönlichen Bereich einloggen und Ihre ersten Schritte mit Buena unternehmen."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("3. Fragen ?")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Bei Fragen oder Problemen wenden Sie sich bitte an unseren"
      )
    ).toBeInTheDocument();
  });
});
