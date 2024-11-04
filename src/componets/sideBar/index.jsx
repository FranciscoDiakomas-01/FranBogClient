import './index.css'
import { FaSearch  , FaHome , FaUser , FaInfo , FaPaperPlane} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function SideBar({close}) {

    const navigations = [
      {
        path: "/",
        name: "Incial",
        icon: <FaHome />,
      },
      {
        path: "/post",
        name: "Postagens",
        icon: <FaPaperPlane />,
      },
      {
        path: "/about",
        name: "Acerca",
        icon: <FaUser />,
      }
    ];
    return (
      <nav id="sideBar">
        <form>
          <input placeholder="Pesquise pelo nome" />
          <button><FaSearch/></button>
        </form>
        {navigations.map((nav) => (
          <Link
            key={nav.name}
            to={nav.path}
            onClick={() => {
              close();
            }}
          >
            {nav.icon}
            <p>{nav.name}</p>
          </Link>
        ))}
      </nav>
    );
}