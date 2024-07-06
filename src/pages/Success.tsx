import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export const Success: React.FC = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);
  return (
    <section className="w-full flex flex-col items-center gap-6 px-6">
      <h1 className="text-center text-3xl">
        Vielen Dank für Ihre Registrierung !
      </h1>
      <div className="text-center">
        Willkommen bei Buena – Ihrem neuen Partner für effizientes
        Immobilienmanagement.
      </div>

      <div className="px-12 md:my-10 max-w-[750px] py-6 flex flex-col gap-4 border-solid border-[1px] border-black rounded-lg bg-[#1e1e1e] text-white">
        <h3 className="text-xl">Was nun ?</h3>
        <ol className="flex flex-col gap-4">
          <li>
            1. Anmeldung abschließen: <br />
            <p className="ml-4">
              Sie erhalten in Kürze eine
              <a className="ml-2 text-blue-600" href="#">
                Bestätigungs-E-Mail
              </a>
              . Bitte klicken Sie auf den Bestätigungslink , um Ihre Anmeldung
              abzuschließen.
            </p>
          </li>
          <li>
            2. Erste Schritte: <br />
            <p className="ml-4">
              Nach der Anmeldung können Sie sich in Ihrem persönlichen Bereich
              einloggen und Ihre ersten Schritte mit Buena unternehmen.
            </p>
          </li>
          <li>
            3. Fragen ? <br />
            <p className="ml-4">
              Bei Fragen oder Problemen wenden Sie sich bitte an unseren
              <a className="ml-2 text-blue-600" href="#">
                Support.
              </a>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};
