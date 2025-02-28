import "../styles/styles-components/Feedbacks.sass";
import { Star } from "lucide-react"

const feedbacks = [
  {

    name: "Ana Souza",
    feedback: "Ótimo serviço! Atendimento rápido e eficiente.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Carlos Oliveira",
    feedback: "Muito satisfeito com o suporte técnico!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Fernanda Lima",
    feedback: "Superou minhas expectativas! Recomendo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "João Pedro",
    feedback: "Equipe muito atenciosa e prestativa.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Mariana Santos",
    feedback: "O produto é incrível! Vale cada centavo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "Rafael Costa",
    feedback: "Simplesmente sensacional! Adorei.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
];

export default function Feedbacks(){
    return(
      <section className="container-feedbacks">
        <h1>Algumas declarações</h1>
      <div className="feedback-container">
      {feedbacks.map((item, index) => (
        <div className="feedback-card" key={index}>
          <div className="container-image">
            <img src={item.image} alt={item.name} className="profile-pic" />
          </div>


          <div className="feedback">
          <h3>{item.name}</h3>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className={i < item.rating ? "filled" : "unfilled"}
              />
            ))}
          </div>
          <p>{item.feedback}</p>
          </div>
          
         
        </div>
      ))}
    </div>
    </section>
    )
}