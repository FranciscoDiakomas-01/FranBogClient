import './index.css'
import { FaArrowRight , FaCalendar , FaCircle} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
export default function Main() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    
    //
    async function getLatestPosts() {
      const API = await fetch("http://localhost:8080/posts?limit=6&page=1");
      const response = await API.json()
      setPosts(response?.data)
    }
    getLatestPosts()
  },[])

  const navigate = useNavigate()
  return (
    <>
      <section id="inicial">
        <h1>Bem Vindo ao FranBlog</h1>
        <button
          onClick={() => {
            window.scrollTo({
              behavior: "smooth",
              left: 0,
              top: 500,
            });
          }}
        >
          <p>Começar</p>
          <FaArrowRight />
        </button>
      </section>
      <article id="lastPost">
        <span>
          <p>Últimos Posts</p>
          <button
            onClick={() => {
              navigate("/post");
            }}
          >
            <p>Ver Todos</p>
            <FaArrowRight />
          </button>
        </span>
        <aside>
          {Array.isArray(posts) &&
            posts.map((post) => (
              <figure
                key={post.postid}
                onClick={() => {
                  localStorage.setItem("postid", post.postid);
                  navigate("/postdetails");
                }}
              >
                <img src={post.cover} />
                <strong>{post.title}</strong>
                <figcaption>
                  <p>{post.description?.slice(0, 100)} ...</p>
                  <div>
                    <i>
                      <FaCalendar />
                      {post.created_at}
                    </i>
                  </div>
                  <div>
                    <i>
                      <FaCircle style={{ color: "tomato" }} />
                      {post.categorytitle}
                    </i>
                  </div>
                </figcaption>
                <button
                  onClick={() => {
                    localStorage.setItem("postid", post.postid);
                    navigate("/postdetails");
                  }}
                >
                  Mais Detalhes
                </button>
              </figure>
            ))}
        </aside>
      </article>
    </>
  );
}