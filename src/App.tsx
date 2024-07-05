import { useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import { Image } from "primereact/image";
import logo from "./assets/pics/buena_logo.png";

function App() {
  const [progress, setProgress] = useState(33);

  const valueTemplate = (value: number) => {
    return <></>;
  };

  return (
    <main className=" flex flex-col gap-12 justify-center">
      <ProgressBar
        color="black"
        value={progress}
        className="h-2"
        displayValueTemplate={valueTemplate}
        showValue
      />
      <header className="px-10">
        <Image src={logo} alt="logo" width="80" className="p-mr-2" />
      </header>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
