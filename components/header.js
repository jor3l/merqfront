import styles from "../styles/header.module.scss";
export default function Header() {
  return (
    <header class={styles.header}>
      <span class="center"></span>
      <a href="" class={styles.logo}>
        Domicilios Test
      </a>
      <input class={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label class={styles.menu_icon} for="menu-btn">
        <span class={styles.navicon}></span>
      </label>
      <ul class={styles.menu}>
        <li>
          <a href="#">Hola Juan!</a>
        </li>
      </ul>
    </header>
  );
}
