import "./Hero.css";
import heroBg from "../assets/hero-bg.png";
import VermaVector from "../assets/verma-vector.svg";
// export default function Hero() {
//   return (
//     <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
//       <div className="hero-text">
//         <p className="intro">Hey there, it’s me</p>

//         <h1 className="name">AARYAN VERMA</h1>

//         <p className="role">Web Designer & Developer</p>

//         <p className="subheading">
//           I’m a web designer and developer who focuses on creating intuitive,
//           user-centered digital experiences. I translate complex ideas into
//           clean, functional interfaces and bring them to life with modern web
//           technologies, ensuring every product looks great and works seamlessly.
//         </p>
//       </div>
//     </section>
//   );
// }

import "./Hero.css";
// import heroBg from "../assets/hero-bg.png";
import ALines from "../assets/a-vector.svg";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-text">
        <p className="intro">Hey there, it’s me</p>

        <div className="name">
          <span className="a-wrapper">
            <span className="a-letter">A</span>
            <img src={ALines} alt="" className="a-svg" />
          </span>
          <span>ARYAN</span>
          <span className="space" />
          <span className="verma-wrapper">
            <span className="verma-text">VERMA</span>
            <img src={VermaVector} alt="" className="verma-svg" />
          </span>
        </div>

        <p className="role">Web Designer & Developer</p>

        <p className="subheading">
          I’m a web designer and developer who focuses on creating intuitive,
          user-centered digital experiences. I translate complex ideas into
          clean, functional interfaces and bring them to life with modern web
          technologies, ensuring every product looks great and works seamlessly.
        </p>
      </div>
    </section>
  );
}
