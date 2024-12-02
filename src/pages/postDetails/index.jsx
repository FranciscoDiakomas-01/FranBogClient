import "./index.css";
import { FaCalendar, FaPaperPlane , FaCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function PostDetails() {
  const [post, setPost] = useState({});
  const [noCommeent, setNoComment] = useState(false);
  const [postComment, setPostComment] = useState([]);
  const [reload, setReload] = useState(false);
  const [comment, setComment] = useState({
    postId: localStorage.getItem("postid"),
    content: "",
  });
  useEffect(() => {
    async function getpostDetails() {
      const id = localStorage.getItem("postid");
      const API = await fetch("http://localhost:8080/posts/" + id);
      const response = await API.json();
      setPost(response?.data[0]);
      const API2 = await fetch("http://localhost:8080/commentsbyPost/" + id);
      const response2 = await API2.json();
      if (response2?.data != "not found comment or postId doesn´t exists") {
        setPostComment(response2.data);
      } else {
        setNoComment(true);
      }
    }
    getpostDetails();
  }, [reload]);
  async function createComment() {
    if (localStorage.getItem("token") == undefined ||localStorage.getItem("token") == null
    ) {
      toast.error("Inicie Sessão!");
      return false;
    }
    if (comment.content.length > 100) {
      toast.info("Tamanho máximo é 100!");
      return 
    }
    const API = await fetch("http://localhost:8080/comment", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    setComment(prev => ({
      ...prev,
      content: '',
    }))
    const response = await API.json()

    if (response?.data == "created") {
      setTimeout(() => {
        location.reload()
      },1000)
      return true
    } else {
      toast.error("Erro ao Cadastrar!");
      return false
    }
  }
  return (
    <section id="postDetails">
      <figure>
        <h1>{post?.title}</h1>
        <aside>
          <img src={post?.cover} alt={post?.title} />
        </aside>
        <figcaption>
          <span>
            <div>
              <FaCalendar />
              <i>{post?.created_at}</i>
            </div>
            <div>
              <FaCircle style={{ color: "tomato" }} />
              {post.categorytitle}
            </div>
          </span>
          <p>{post?.description}</p>
        </figcaption>
      </figure>
      <hr />
      <article>
        {noCommeent ? (
          <strong>Sem Comentários</strong>
        ) : (
          Array.isArray(postComment) && (
            <>
              <strong>Comentários</strong>
              {postComment.map((c, index) => (
                <>
                  <aside key={index} id="commet">
                    <span>
                      <span>{c.username?.slice(0, 3)}</span>
                      <i>{c.username}</i>
                      <i>{c.useremail}</i>
                    </span>
                    <div>{c.commentcontent}</div>
                  </aside>
                </>
              ))}
            </>
          )
        )}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            document.forms[0].reset();

            if (!comment.postId || comment.content.length < 1) {
              toast.error("Preencha o Campo");
              return;
            } else {
              const response = await createComment();
              if (response) {
                toast.success("Comentário adicionado!");
                setReload((prev) => !prev);
                return;
              } else {
                return;
              }
            }
          }}
        >
          <input
            placeholder="Oque estás a Pensar"
            onChange={(e) => {
              setComment((prev) => ({
                ...prev,
                content: e.target.value,
              }));
            }}
          />
          <button>
            <FaPaperPlane />
          </button>
        </form>
      </article>
    </section>
  );
}
