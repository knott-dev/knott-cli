import { craft, mount, render } from "knott";
import { cssReset, centerAll, buttonLarge } from "../style";
import { mainMenu } from "../menu";

const pageOne = () =>
  craft("body", {
    props: {
      id: "root",
      class: `${cssReset} ${centerAll} vHeight:100vh vWidth:100%`,
    },
    expand: [
      craft("main-container", { // use semantic naming
        props: {
          class: `display:block p:40 ${centerAll} flexDirection:column`,
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
                Page <strong>One</strong>
              </div>
              <div class="p:0 textSize:30 fontWeight:100">
                You are playing with the <strong>Routing</strong> Feature!
              </div>
            `,
          }),
          craft("link-container", { // use semantic naming
            expand: [
              craft("a", {
                props: {
                  class: "display:block pt:20 textSize:20 textColor:black",
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

export { pageOne };
