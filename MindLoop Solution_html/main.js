const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#dot", {
  duration: 3,
  repeat: 999,
  repeatDelay: 0.2,
  yoyo: false,
  ease: "power1.expo",
  motionPath: {
    path: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});
