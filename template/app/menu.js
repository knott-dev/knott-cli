import { craft, mount, render } from "knott";
import { centerAll, marginWide, menuButton } from "./style";

const mainMenu = () =>
  craft("div", {
    props: {
      id: "menuBtn",
      class: `display:block ${centerAll}`,
    },
    expand: [
      craft("a", {
        props: {
          id: "menuHome",
          class: `${marginWide} ${menuButton}`,
          href: "#/",
        },
        text: "Home",
      }),
      craft("a", {
        props: {
          id: "menuPO",
          class: `${marginWide} ${menuButton}`,
          href: "#/page-one",
        },
        text: "Page One",
      }),
      craft("a", {
        props: {
          id: "menuPT",
          class: `${marginWide} ${menuButton}`,
          href: "#/page-two",
        },
        text: "Page Two",
      }),
    ],
  });

export { mainMenu };
