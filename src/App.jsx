import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="text-3xl text-red-500 underline">App</div>;
};

export default App;
