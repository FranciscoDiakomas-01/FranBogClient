import "./App.css";
import { FaBars } from "react-icons/fa6";
import {FaFacebook , FaGithub , FaInstagram , FaWhatsapp} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./componets/sideBar";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
export function App() {


  function ToggleSideBar() {
    document.getElementById("sideBar").classList.toggle("open");
  }
  const navigate = useNavigate()
   const navigations = [
     {
       path: "/",
       name: "Incial",
     },
     {
       path: "/post",
       name: "Postagens",
     },
     {
       path: "/about",
       name: "Acerca",
     },
     
   ];
  const networking = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      paht: "https://www.facebook.com/profile.php?id=61560288840032",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      paht: "https://github.com/FranciscoDiakomas-01",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      paht: "https://www.instagram.com/fran.ciscodiakomas/",
    },
    {
      name: "Portifólio",
      icon: <FaInstagram />,
      paht: "https://facebook.com",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      paht: "https://www.linkedin.com/in/francisco-diakomas-b7480831a/",
    },
  ];
  return (
    <main id="app">
      <ToastContainer />
      <header>
        <nav>
          <Link to={"/"}>FranBlog</Link>
          <ol>
            <FaBars
              onClick={() => {
                ToggleSideBar();
              }}
            />
            <button
              onClick={(e) => {
                if (e.target.textContent == "Entrar") {
                  navigate("/login");
                } else {
                  localStorage.clear();
                  location.reload();
                }
              }}
            >
              {localStorage.getItem("token") == undefined ? "Entrar" : "Sair"}
            </button>
          </ol>
        </nav>
      </header>
      <SideBar close={ToggleSideBar} />
      <Outlet />
      <footer>
        <div>
          <strong>FranBlog</strong>
          <p>Bem vindo ao meu blog , um lugar onde as novidades das últimas horas nunca faltam para agradar o seu dia!</p>
        </div>

        <div>
          <strong>Links Rápidos</strong>
          {navigations.map((nav) => (
            <Link key={nav.name} to={nav.path}>
              <span>{nav.name}</span>
            </Link>
          ))}
        </div>

        <div>
          <strong>Redes</strong>
          <aside>
            {networking.map((net) => (
              <a key={net.name} href={net.paht}>
                {net.icon}
                <span>{net.name}</span>
              </a>
            ))}
          </aside>
        </div>
      </footer>
    </main>
  );
}
