import { craft } from "knott";
import { closeButton } from "./buttons";

const modalA = craft(
  "div", {
    props: {
      id: "modalA",
      class: "absolute height-full width-full bg-tint-onyx-5 curve-border-lg shadow-lg flex flex-center text-xl-4 text-tint-lava-4",
    },
    text: "This is a Modal!",
    expand: [
      closeButton,
    ],
  },
);

export { modalA };
