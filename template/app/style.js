// style components (https://knottjs.netlify.app/#styling)

const fontDefault = "fontFamily:roboto,ubuntu,arial,helvetica,sans,serif";

const cssReset = `m:0 p:0 listStyle:none appearance:none textDeco:none ${fontDefault} textColor:black bgColor:white`;

const centerAll = "display:flex justifyContent:center alignItems:center";

const buttonLarge = "display:block mt:30 pl:40 pr:40 pt:10 pb:10 textDeco-none textColor:black textSize:20 fontWeight:600 curveRadius:8 curveWidth:4 curveStyle:solid curveColor:rgba(55,205,198,1) cursor:pointer";

const marginWide = "ml:10 mr:10 mt:20 mb:20";

const menuButton = "appearance:none textDeco:underline textColor:black";

export {
  cssReset,
  fontDefault,
  centerAll,
  buttonLarge,
  marginWide,
  menuButton,
};
