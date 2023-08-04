import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tong.jpg"
          alt="An image showing Tong"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tong</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
