import ReactDOM from "react-dom/client";
//import F1 from './first';
//import Sumn from './sumOfTwo';
// import Details from './details';
// import All from './allThree';
// import Print from './arrayList';
// import Cond from './conditionalComp';
import Review from "./assignment";
const rootElement = document.getElementById('root');
// create root for entire DOM --> root reference
const rootRef = ReactDOM.createRoot(rootElement);

//let a=5;
//let b=2;
//let ans=Sumn(a,b);
//rootRef.render(ans)
// rootRef.render(<Sumn/>)
rootRef.render(<Review/>)