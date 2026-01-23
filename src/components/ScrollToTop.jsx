import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This moves the window to the very top (0,0) every time the path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't need to show anything on screen
}