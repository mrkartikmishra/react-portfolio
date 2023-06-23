import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Profile from "../../assets/home4.png";
import "./home.css";

const Home = () => {
  const [role, setRole] = useState("");

  function typewriterEffect(words) {
    let currentWordIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const word = words[currentWordIndex];
      if (word) {
        if (isDeleting) {
          currentWord = word.substring(0, currentWord.length - 1);
        } else {
          currentWord = word.substring(0, currentWord.length + 1);
        }
      }
      setRole(currentWord);
      typingSpeed = isDeleting ? 50 : 100;
      if (!isDeleting && currentWord === word) {
        typingSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && currentWord === "") {
        currentWordIndex++;
        isDeleting = false;
        typingSpeed = 500;
        if (currentWordIndex === words.length) {
          currentWordIndex = 0;
        }
      }
      setTimeout(type, typingSpeed);
    }
    setTimeout(type, typingSpeed);
  }

  useEffect(() => {
    typewriterEffect([
      "Front End Developer",
      "Back End Developer",
      "Blockchain Developer",
      "Full Stack Developer",
    ]);
  }, []);

  return (
    <section className="home grid">
      <img src={Profile} alt="profile image" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="name">Hi!</span>
            <br />
            <span className="name">I'm Kartik Mishra.</span>
            <br />
            {role ? <span className="role">{role}</span> : <br />}
          </h1>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed
            error ducimus, rerum magnam deleniti facilis. Velit ipsa, voluptatem
            hic est modi quos
          </p>

          <Link to={"/about"} className="button">
            More About me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
