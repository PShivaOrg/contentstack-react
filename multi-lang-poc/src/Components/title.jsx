import React, { useEffect, useState } from "react";
import { getHomepage } from "../contentstack/homepage";

const Title = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getHomepage("en-eu")
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.error("Contentstack error:", error);
      });
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default Title;