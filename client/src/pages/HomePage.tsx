import { NavLink } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const articles = [
    {
      image:
        "https://conservewildcats.org/wp-content/uploads/sites/5/2017/10/Westerlund_Katerina_5.jpg",
      altText: "Article 1",
      link: "#",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ara_macao_qtl1.jpg/1200px-Ara_macao_qtl1.jpg",
      altText: "Article 2",
      link: "#",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.2BM16BCsijy4fA9SVxDq1QAAAA?rs=1&pid=ImgDetMain",
      altText: "Article 3",
      link: "#",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/African_Elephant.jpg",
      altText: "Article 4",
      link: "#",
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/African_Elephant.jpg",
      altText: "Article 5",
      link: "#",
    },

    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/African_Elephant.jpg",
      altText: "Article 6",
      link: "#",
    },
  ];

  return (
    <main>
      <section id="recent-articles">
        {articles.map((article) => (
          <NavLink
            to={article.link}
            key={article.altText}
            className="clickable-card"
          >
            <img src={article.image} alt={article.altText} />
          </NavLink>
        ))}
      </section>
    </main>
  );
}

export default HomePage;
