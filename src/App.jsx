import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 808;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className="page">
      {width < breakpoint ? <MobileView /> : <DesktopView />}
    </section>
  );
}

export default App;
