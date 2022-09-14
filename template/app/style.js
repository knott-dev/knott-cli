// style components (https://knottjs.netlify.app/#styling)

const fontDefault = "font-roboto,ubuntu,arial,helvetica,sans,serif";

const cssReset = `margin-0 padding-0 listStyle-none ${fontDefault} textColor-rgba(0,0,0,0,1) bgColor-rgba(0,0,0,0)`;

const centerAll = "display-flex justifyContent-center alignItems-center";

const buttonLarge = "display-block marginTop-30 paddingLeft-40 paddingRight-40 paddingTop-10 paddingBottom-10 textDecoration-none fontSize-20 fontWeight-600 borderRadius-8 borderWidth-4 borderStyle-solid borderColor-rgba(55,205,198,1) textColor-black bgColor-rgba(0,0,0,0) cursor-pointer";

const marginWide = "marginLeft-10 marginRight-10 marginTop-20 marginBottom-20";

const menuButton = "textDecoration-none appearance-none textColor-black";

export {
  cssReset,
  fontDefault,
  centerAll,
  buttonLarge,
  marginWide,
  menuButton,
};
