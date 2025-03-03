import { useState } from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import SplitText from "./components/SplitText/SplitText";

function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div className="relative h-screen">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <SplitText
          text="Hello I'm Nana!"
          className="text-9xl font-semibold text-center absolute inset-20 flex items-center justify-center z-0 "
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </>
  );
}

export default App;
