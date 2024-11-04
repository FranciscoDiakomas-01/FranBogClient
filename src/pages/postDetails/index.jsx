import './index.css'
import cover from '../../assets/MelRibeiro - Overview.gif'
import { FaCalendar, FaPaperPlane } from 'react-icons/fa';
export default function PostDetails() {
    
    const post = {
      title: "Meu Dia na JIAcorp",
      description: `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta tempora alias dolore hic voluptatem vero dolorum quo ea minus maxime aspernatur fugit, inventore cumque repellat tempore odio officia veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo numquam similique harum exercitationem unde incidunt placeat quam, ad minus facilis commodi itaque autem inventore nihil adipisci perspiciatis ex. Necessitatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eos voluptate sint distinctio libero autem quo. Veritatis eos at inventore dignissimos voluptatum eveniet voluptas magni, ipsum fuga nemo explicabo dolor!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum labore, commodi at suscipit ipsum voluptatibus. Iste accusantium quidem, eligendi aspernatur porro, fuga temporibus sed quo cupiditate id, mollitia eius non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis enim aperiam iure dolorum numquam, odit sit laboriosam, similique in sequi sint eligendi, doloribus tenetur! Illum magni totam impedit neque placeat.`,
      totalcomment: 12,
      date: "03/11/2024",
    };

    const comment = [
      {
        userId: 1,
        userName: "Fernando",
        userProfile: cover,
        userEmail: "fernando@gmail.com",
        comment: `orem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta tempora alias dolore hic voluptatem vero dolorum quo ea minus maxime aspernatur fugit, inventore cumque repellat tempore odio officia veritatis!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo qui, quaerat perferendis doloremque, alias laboriosam praesentium saepe natus deserunt voluptatem obcaecati omnis quis pariatur sequi i`,
      },
      {
        userId: 2,
        userName: "Fernando",
        userProfile: cover,
        userEmail: "fernando@gmail.com",
        comment: `orem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta tempora alias dolore hic voluptatem vero dolorum quo ea minus maxime aspernatur fugit, inventore cumque repellat tempore odio officia veritatis!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo qui, quaerat perferendis doloremque, alias laboriosam praesentium saepe natus deserunt voluptatem obcaecati omnis quis pariatur sequi i`,
      },
    ];
    return (
      <section id="postDetails">
        <figure>
          <h1>{post.title}</h1>
          <img src={cover} alt={cover} />
          <figcaption>
            <span>
              <div>
                <FaCalendar />
                <i>{post.date}</i>
              </div>
              <i>By Francisco Diakomas</i>
            </span>
            <p>{post.description}</p>
          </figcaption>
            </figure>
            <hr/>
            <strong>Comentários</strong>
        <article>
          {comment.map((c) => (
            <aside key={c.userId} id="commet">
              <span>
                <img src={c.userProfile} />
                  <i>{c.userName}</i>
                  <i>{c.userEmail}</i>
              </span>
              <div>{c.comment}</div>
            </aside>
          ))}
                <form>
                    <input placeholder='Oque estás a Pensar' />
                    <button>
                        <FaPaperPlane/>
                    </button>
                </form>
        </article>
      </section>
    );
}