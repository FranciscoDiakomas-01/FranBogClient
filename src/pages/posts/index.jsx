import "./index.css";
import { FaSearch , FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cover from "../../assets/Free Photo _ Top view of unrecognizable hacker performing cyberattack at night.jpg";
import cover1 from "../../assets/MelRibeiro - Overview.gif";
import cover2 from "../../assets/Tecnologia, Digital, Computador Imagens de fundo gratuitas, Fundo Diodo Emissor De Luz Diodo Dispositivo Luz Background Foto PNG e vetores de fundo.jpg";
export default function Posts() {

    const navigate = useNavigate()
     const posts = [
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
  return (
    <section id="posts">
      <form>
        <input placeholder="Pesquise pelo título do post" />
        <button>
          <FaSearch />
        </button>
        <select>
          <option>Categoria</option>
          <option>1</option>
          <option>2</option>
        </select>
      </form>
      <article>
        {posts.map((post) => (
          <figure key={post.id} id="post">
            <img src={post.cover} />
            <strong>{post.title}</strong>
            <figcaption>
              <p>{post.description}</p>
              <div>
                <i><FaCalendar/>{post.data}</i>
                <i>By Francisco Diakomas</i>
              </div>
            </figcaption>
            <button onClick={() => {
              navigate("/postdetails");
            }}>Mais Detalhes</button>
          </figure>
        ))}
      </article>
      <button>Ver Mais</button>
    </section>
  );
}
