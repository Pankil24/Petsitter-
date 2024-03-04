export const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const staticNav = () => {
  const handleScroll = () => {
    const header = document.getElementById("myHeader");
    const arrow = document.getElementById("arrow");

    const sticky = header && header.offsetTop;
    if (header !== null) {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed-header");
        arrow.classList.add("open");
      } else {
        header.classList.remove("fixed-header");
        arrow.classList.remove("open");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const checkPageAccess = () => {
  if (localStorage.getItem("userType") === "admin") {
    return true;
  } else {
    return false;
  }
};
