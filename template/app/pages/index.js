import { craft, mount, render } from "knott";
import { cssReset, centerAll, buttonLarge } from "../style";
import { mainMenu } from "../menu";

const homePage = () =>
  craft("body", {
    props: {
      id: "root",
      class: `${cssReset} position-relative ${centerAll} xHeight-100vh xWidth-100%`,
    },
    expand: [
      craft("main-container", { // use semantic naming
        props: {
          class: `display-block ${centerAll} flexDirection-column`,
        },
        expand: [
          craft("img", {
            props: {
              class: "height-280 width-auto objectFit-contain objectPosition-center",
              src: "https://raw.githubusercontent.com/knott-dev/knott-js/main/banner.png",
              alt: "Knott JS",
              loading: "lazy",
            },
          }),
          craft("section-container", { // use semantic naming
            props: {
              class: `${centerAll} flexDirection-column`,
            },
            html: `
              <div class="paddingTop-40 paddingBottom-10 fontSize-40 fontWeight-80">
                Welcome to <strong>Knott.js</strong>
              </div>
              <div class="padding-0 fontSize-30 fontWeight-100">
                Web Component, Styling, and Virtual DOM.
              </div>
            `,
          }),
          craft("intro-container", { // use semantic naming
            expand: [
              craft("a", {
                props: {
                  class: "display-block paddingTop-20 fontSize-20 textColor-black",
                  href: "https://knottjs.netlify.app/#styling",
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
