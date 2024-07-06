import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center gap-10">
      <h1 className="text-center text-2xl">Willkommen bei Buena !</h1>
      <h3 className="text-center text-md">
        Hausverwaltung, wie sie sein sollte.
      </h3>
      <div className="text-center text-2xl max-w-[700px] px-2">
        Buena übernimmt die Betreuung Ihrer Einheiten, Mieter und all der
        Aufgaben, die ein Eigentümer zu erledigen hat. Mehr Zeit für Sie.
      </div>

      <div className="px-8 flex justify-center">
        <PrimaryBtn
          onClick={() => navigate("/personal-info")}
          value="Loslegen"
        />
      </div>
    </section>
  );
};
