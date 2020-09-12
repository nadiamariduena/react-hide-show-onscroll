import React from "react";
import BeautyImg from "../img/LV-Volt_exhibition_metalmagazine-4.jpg";

const Content = () => {
  const manyPost = {
    paragraphs:
      "I love art and everything related to it above all else, and I admit that my inclination is to favour it before any other occupation of the mind. But it is not here what art is to me, but rather how it relates to the human spirit as a whole ...",
    link:
      "https://thetrueaesthete.art/blog/2017/12/22/quick-thoughts-friedrich-schiller-on-the-aesthetic-education-of-man",
    link2: "https://youtu.be/GFoT6UUNLZc",
  };

  const posts = Array(5).fill(manyPost);

  return (
    <React.Fragment>
      <section id="top">
        <h5>Books</h5>
        <h2>
          Quick Thoughts: Friedrich Schiller - On the Aesthetic Education of Man
        </h2>

        <img className="image-box" src={BeautyImg} alt="imagen " />

        <h1>Friedrich Schiller</h1>

        <div className="someText">
          {/*  */}

          {posts.map((item, i) => {
            return (
              <div key={i} style={{ margin: 50 }}>
                <p>{item.paragraphs}</p>
                <a href={item.link}>Discover Light</a>
                <br />
                <a href={item.link2}>Listen</a>
              </div>
            );
          })}

          {/*  */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Content;
