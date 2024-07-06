import { Image } from "primereact/image";
import logo from "../assets/pics/buena_logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12 ">
      {/* LEFT */}
      <div className="flex flex-col md:flex-row lg:justify-between items-center max-w-6xl mx-auto py-12">
        <div className="footer-left">
          <Image src={logo} alt="logo" width="80" className="p-mr-2" />
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col justify-center md:flex-row md:space-x-16">
          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="text-gray-600">
                Los geht's
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Einloggen
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                So funktioniert's
              </a>
            </li>
          </ul>

          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="text-gray-600">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Über Buena
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center">
            <button className="border rounded-full px-3 py-1 text-sm">
              EN
            </button>
          </div>
          <ul className="text-sm text-gray-600 flex flex-col gap-8">
            <li>
              <a href="#">Datenschutz & Impressum</a>
            </li>
            <li>Buena - Case Study © 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
