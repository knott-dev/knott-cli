import { craft, mount, render } from "knott";
import { cssReset, centerAll, buttonLarge } from "../style";
import { mainMenu } from "../menu";

const pageTwo = () =>
  craft("body", {
    props: {
      id: "root",
      class: `${cssReset} ${centerAll} xHeight-100vh xWidth-100%`,
    },
    expand: [
      craft("main-container", { // use semantic naming
        props: {
          class: `display-block padding-40 ${centerAll} flexDirection-column`,
        },
        expand: [
          craft("img", {
            props: {
              class: "height-250 width-auto objectFit-contain objectPosition-center",
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
                Page <strong>Two</strong>
              </div>
              <div class="padding-0 fontSize-30 fontWeight-100">
                You are playing with the <strong>Routing</strong> Feature!
              </div>
            `,
          }),
          craft("link-container", { // use semantic naming
            expand: [
              craft("a", {
                props: {
                  class: "display-block paddingTop-20 fontSize-20 textColor-black",
                  href: "https://knottjs.netlify.app/#routing",
                },
                text: "Learn how to use Routing!",
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

export { pageTwo };
