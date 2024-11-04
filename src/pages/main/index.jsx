import './index.css'
import cover from '../../assets/Free Photo _ Top view of unrecognizable hacker performing cyberattack at night.jpg'
import cover1 from '../../assets/MelRibeiro - Overview.gif'
import cover2 from "../../assets/Tecnologia, Digital, Computador Imagens de fundo gratuitas, Fundo Diodo Emissor De Luz Diodo Dispositivo Luz Background Foto PNG e vetores de fundo.jpg";
import { FaArrowRight , FaCalendar} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Main() {

  const latestPost = [
    {
      cover: cover,
      title: "Minha Caminhada no mundo da Tecnonolia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi deleniti quibusdam nisi, repellendus nam enim architecto culpa voluptatibus voluptate molestiae itaque soluta quidem magni aliquid laboriosam quo, dolor quod?",
      data: "03/11/2024",
      id: crypto.randomUUID(),
    },
    {
      cover: cover1,
      title: "Tudo que precisas saber de data sciene",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi deleniti quibusdam nisi, repellendus nam enim architecto culpa voluptatibus voluptate molestiae itaque soluta quidem magni aliquid laboriosam quo, dolor quod?",
      data: "03/11/2024",
      id: crypto.randomUUID(),
    },
    {
      cover: cover2,
      title: "Minha Caminhada no mundo da Tecnonolia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi deleniti quibusdam nisi, repellendus nam enim architecto culpa voluptatibus voluptate molestiae itaque soluta quidem magni aliquid laboriosam quo, dolor quod?",
      data: "03/11/2024",
      id: crypto.randomUUID(),
    },
  ];
  const navigate = useNavigate()
  return (
    <>
      <section id="inicial">
        <h1>Descubra Tudo Do Mundo Tecnológico</h1>
        <button>
          <p>Começar</p>
          <FaArrowRight />
        </button>
      </section>
      <article id="lastPost">
        <span>
          <p>Últimos Posts</p>
          <button>
            <p>Ver Todos</p>
            <FaArrowRight />
          </button>
        </span>
        <aside>
          {latestPost.map((post) => (
            <figure key={post.id}>
              <img src={post.cover} />
              <strong>{post.title}</strong>
              <figcaption>
                <p>{post.description}</p>
                <div>
                  <i> <FaCalendar/>{post.data}</i>
                  <i>By Francisco Diakomas</i>
                </div>
              </figcaption>
              <button onClick={() => {
                navigate("/postdetails");
              }}>Mais Detalhes</button>
            </figure>
          ))}
        </aside>
      </article>
    </>
  );
}