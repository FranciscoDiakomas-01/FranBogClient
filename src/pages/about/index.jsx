import './index.css'
import jia from '../../assets/jia.jpg'
import { FaFacebook  , FaInstagram , FaWhatsapp , FaGithub , FaLinkedin , FaTelegram} from 'react-icons/fa';
export default function About() {

    const network = [
      {
        name: "Facebook",
        path: "https://facebook.com",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        path: "https://facebook.com",
        icon: <FaInstagram />,
      },
      {
        name: "Whatsapp",
        path: "https://facebook.com",
        icon: <FaWhatsapp />,
      },
      {
        name: "Github",
        path: "https://facebook.com",
        icon: <FaGithub />,
      },
      {
        name: "Linkedin",
        path: "https://facebook.com",
        icon: <FaLinkedin />,
      },
      {
        name: "Telegram",
        path: "https://facebook.com",
        icon: <FaTelegram />,
      },
    ];
    return (
      <section id="about">
        <article>
          <img src={jia} alt={jia} />
          <strong>Francisco Lombo Diakomas</strong>
          <i>Desenvolvedor de Software</i>
          <ol>
            {network.map((net) => (
              <a key={net.name}>
                {net.icon}
                <span>{net.name}</span>
              </a>
            ))}
          </ol>
        </article>
        <div>
          <button>Baixar Cv</button>
          <button>Portiólio</button>
        </div>
      </section>
    );
}