import { craft, mount, render, sw } from "knott";

import "weavvcss";

import { buttonA } from "./components/buttons";
import { modalA } from "./components/modals";

const rootNode = craft("body", {
  props: {
    id: "root",
    class: "relative height-screen width-full font-default flex flex-center",
  },
  expand: [
    // components
    buttonA,
    modalA,
  ],
});

mount("root", render(rootNode));

sw();
