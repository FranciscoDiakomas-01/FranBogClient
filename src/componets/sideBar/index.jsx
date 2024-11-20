import './index.css'
import {  FaHome , FaInfo , FaPaperPlane} from 'react-icons/fa';
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
        name: "Propretário",
        icon: <FaInfo />,
      },
    ];
    return (
      <nav id="sideBar">
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