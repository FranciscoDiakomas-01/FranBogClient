import "./App.css";
import { FaBars } from "react-icons/fa6";
import {FaFacebook , FaGithub , FaInstagram , FaWhatsapp} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./componets/sideBar";
export function App() {
  function ToggleSideBar() {
    document.getElementById("sideBar").classList.toggle("open");
  }

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
      paht: "https://facebook.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      paht: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      paht: "https://facebook.com",
    },
    {
      name: "Portifólio",
      icon: <FaInstagram />,
      paht: "https://facebook.com",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      paht: "https://facebook.com",
    },
  ];
  return (
    <main id="app">
      <header>
        <nav>
          <a href="#inicial">FranBlog</a>
          <ol>
            <FaBars
              onClick={() => {
                ToggleSideBar();
              }}
            />
            <button>
              {localStorage.getItem("token").length > 0 ? "Sair" : "Entrar"}
            </button>
          </ol>
        </nav>
      </header>
      <SideBar close={ToggleSideBar} />
      <Outlet />
      <footer>
        <div>
          <strong>FranBlog</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            distinctio in tempora libero itaque blanditiis nihil, nulla ad
            delectus nostrum obcaecati
          </p>
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
          {networking.map((net) => (
            <a key={net.name} href={net.paht}>
              {net.icon}
              <span>{net.name}</span>
            </a>
          ))}
        </div>
        <form>
          <strong>Subscreve-se ao News Letter</strong>
          <label>Name</label>
          <input type="text" placeholder="seu nome" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <button>Enviar</button>
        </form>
      </footer>
    </main>
  );
}
