import { useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Image } from "primereact/image";
import logo from "./assets/pics/buena_logo.png";
import { Footer } from "./components/Footer";
import { useProgressStore } from "./stores/progressStore";

function App() {
  const [progress] = useProgressStore((state) => [state.progress]);
  const setProgress = useProgressStore((state) => state.setProgress);

  const valueTemplate = (value: number) => {
    return <></>;
  };

  return (
    <main className=" flex flex-col gap-12 justify-between h-screen">
      <header>
        <ProgressBar
          color="black"
          value={progress}
          className="h-2"
          displayValueTemplate={valueTemplate}
          showValue
        />
        <div className="p-10">
          <Image src={logo} alt="logo" width="80" className="" />
        </div>
      </header>

      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}

export default App;
