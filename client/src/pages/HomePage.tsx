import { useEffect, useState } from "react";

const HomePage = () => {
  const [, setAnimal] = useState(null);

  useEffect(() => {
    fetch("https://www.freetestapi.com/api/v1/animals")
      .then((res) => res.json())
      .then((data) => setAnimal(data));
  }, []);

  return (
    <div>
      <h1>HOMe</h1>
    </div>
  );
};

export default HomePage;
