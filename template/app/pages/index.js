import { craft, mount, render } from "knott";
import { cssReset, centerAll, buttonLarge } from "../style";
import { mainMenu } from "../menu";

const homePage = () =>
  craft("body", {
    props: {
      id: "root",
      class: `${cssReset} ${centerAll} vHeight:100vh vWidth:100%`,
    },
    expand: [
      craft("main-container", { // use semantic naming
        props: {
          class: `display:block ${centerAll} flexDirection:column`,
        },
        expand: [
          craft("img", {
            props: {
              class: "h:250 w:auto imageFit:contain imagePosition:center",
              src: "https://raw.githubusercontent.com/knott-dev/knott-js/main/banner.png",
              alt: "Knott JS",
              loading: "lazy",
            },
          }),
          craft("section-container", { // use semantic naming
            props: {
              class: `${centerAll} flexDirection:column`,
            },
            html: `
              <div class="pt:40 pb:10 textSize:40 fontWeight:light">
                Welcome to <strong>Knott.js</strong>
              </div>
              <div class="p:0 textSize:30 fontWeight:100">
                Web Component, Virtual CSS, and Virtual DOM.
              </div>
            `,
          }),
          craft("intro-container", { // use semantic naming
            expand: [
              craft("a", {
                props: {
                  class: "display:block pt:20 textSize:20 textColor:black",
                  href: "https://knottjs.netlify.app/#styling",
                  target: "_blank",
                },
                text: "Learn how to use Style! No CSS, No Payload.",
              }),
            ],
          }),
          craft("last-container", { // use semantic naming
            expand: [
              craft("a", {
                props: {
                  id: "docBtn",
                  class: buttonLarge,
                  href: "https://knottjs.netlify.app",
                  target: "_blank",
                  title: "Visit the official website",
                },
                text: "Read the Documentation",
                hover: [["docBtn"]]
              }),
              mainMenu(),
            ],
          }),
        ],
      }),
    ],
  });

export { homePage };
