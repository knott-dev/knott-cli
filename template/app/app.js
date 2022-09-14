import { route, router, pwa } from "knott";

// https://knottjs.netlify.app/#import-component
import { homePage } from "./pages/index";
import { pageOne } from "./pages/page-one";
import { pageTwo } from "./pages/page-two";

// (https://knottjs.netlify.app/#routing)
const pages = [
  { path: "/", title: "Home", template: homePage() },
  { path: "/page-one", title: "Page One", template: pageOne() },
  { path: "/page-two", title: "Page Two", template: pageTwo() }
];

pages.forEach((alias) => {
  route(
    alias.path,
    alias.title,
    alias.template
  );
});

router();

// (https://knottjs.netlify.app/#service-worker)
pwa(true);

