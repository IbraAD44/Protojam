import { NavLink } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const articles = [
    { image: "https://picsum.photos/200/300", altText: "Article 1", link: "#" },
    { image: "https://picsum.photos/200/301", altText: "Article 2", link: "#" },
    { image: "https://picsum.photos/200/302", altText: "Article 3", link: "#" },
    { image: "https://picsum.photos/200/303", altText: "Article 4", link: "#" },
    { image: "https://picsum.photos/200/304", altText: "Article 5", link: "#" },
    { image: "https://picsum.photos/200/305", altText: "Article 6", link: "#" },
  ];

  return (
    <main>
      <section id="recent-articles">
        {articles.map((article) => (
          <div className="clickable-card" key={article.altText}>
            <NavLink to={article.link}>
              <img src={article.image} alt={article.altText} />
            </NavLink>
            <a href="/" className="like-dons">
              Dons
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomePage;
