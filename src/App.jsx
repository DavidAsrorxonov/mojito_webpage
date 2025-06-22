import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <div className="text-6xl text-red-500 underline">App</div>
    </div>
  );
};

export default App;
