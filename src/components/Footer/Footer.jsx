import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Copyright &copy; 2023-2024. <br />
        Crafted with <span className={styles.emoji}></span> by Amol Shinde.
      </p>
    </section>
  );
}

export default Footer;
