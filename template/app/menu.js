import { craft, mount, render } from "knott";

import { centerAll, marginWide, menuButton } from "./style";

const menu = [
  { id: 1, path: "#/", title: "Home" },
  { id: 2, path: "#/page-one", title: "Page One" },
  { id: 3, path: "#/page-two", title: "Page Two" }
];

const mainMenu = () =>
  craft("div", {
    props: {
      class: `display-block ${centerAll}`,
    },
    expand: [
      craft("a", {
        props: {
          id: "menuHome",
          class: `${marginWide} ${menuButton}`,
          href: "#/",
        },
        text: "Home",
        hover: [["menuHome"]],
      }),
      craft("a", {
        props: {
          id: "menuPO",
          class: `${marginWide} ${menuButton}`,
          href: "#/page-one",
        },
        text: "Page One",
        hover: [["menuPO"]],
      }),
      craft("a", {
        props: {
          id: "menuPT",
          class: `${marginWide} ${menuButton}`,
          href: "#/page-two",
        },
        text: "Page Two",
        hover: [["menuPT"]],
      }),
    ],
  });

export { mainMenu };
