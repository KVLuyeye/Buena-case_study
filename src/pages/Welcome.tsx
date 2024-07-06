import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-2xl">Willkommen bei Buena</h1>
      <div className="px-8 flex justify-center">
        <PrimaryBtn
          onClick={() => navigate("/personal-info")}
          value="Loslegen"
        />
      </div>
    </>
  );
};
