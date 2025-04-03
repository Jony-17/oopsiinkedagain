import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTop() {
  const scrollToTop = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTop.current.style.display = "block";
      } else {
        scrollToTop.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <button
        className="hidden fixed bottom-5 right-5 text-[16px] border-none outline-none bg-[#616161] text-white cursor-pointer p-4 rounded-[10px]"
        ref={scrollToTop}
        onClick={scrollTopFunction}
        id="scrollToTopBtn"
        title="Go to top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
}

export default ScrollTop;
