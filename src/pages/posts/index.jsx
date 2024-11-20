import "./index.css";
import { FaSearch , FaCalendar , FaCircle , FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
export default function Posts() {

  
  const [posts, setPosts] = useState([]);
  const [category, setcategory] = useState([])
  const [reload, setReload] = useState(false)
  const [categoryId , setCategoryId] = useState()
  useEffect(() => {
    //
    async function getLatestPosts() {
      const API = await fetch("http://localhost:8080/posts?limit=12&page=1");
      const response = await API.json();
      setPosts(response?.data);

      const API2 = await fetch("http://localhost:8080/category?limit=0&page=0");
      const response2 = await API2.json();
      setcategory(response2?.data);
    }
    getLatestPosts();
  }, [reload]);

  async function getPostsByCategory(id) {
    const API = await fetch("http://localhost:8080/postscategory/" + id);
    const response = await API.json()
    console.log(response?.data)
    return response?.data
  }
    const navigate = useNavigate()
  return (
    <section id="posts">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!categoryId) {
            return;
          }
          if (categoryId == "all") {
            setReload((prev) => !prev);
            return;
          }
          const response = await getPostsByCategory(categoryId);
          setPosts(response);
        }}
      >
        <button type="submit">
          <FaSearch />
        </button>
        <select
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
        >
          <option value="all">Todas Categorias</option>
          {Array.isArray(category) &&
            category.map((c) => (
              <option value={c.id} key={c.id}>
                {c.title}
              </option>
            ))}
        </select>
      </form>
      <article>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <figure
              key={post.postid}
              id="post"
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

                <i>
                  <FaCircle style={{ color: "tomato" }} />
                  {post.categorytitle}
                </i>
              </figcaption>
              <button
                onClick={() => {
                  localStorage.setItem("postid", post.postid);
                  navigate("/postdetails");
                }}
              >
                <p>Ler Mais</p>
                <FaArrowRight />
              </button>
            </figure>
          ))}
      </article>
    </section>
  );
}
