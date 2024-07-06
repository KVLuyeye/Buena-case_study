import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("primereact/progressbar", () => ({
  ProgressBar: () => <div>ProgressBar Mock</div>,
}));
jest.mock("react-router-dom", () => ({
  RouterProvider: () => <div>RouterProvider Mock</div>,
}));
jest.mock("../stores/progressStore", () => ({
  useProgressStore: jest.fn().mockImplementation(() => [{ progress: 50 }]),
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("ProgressBar Mock")).toBeInTheDocument();
    expect(screen.getByText("RouterProvider Mock")).toBeInTheDocument();
  });
});
