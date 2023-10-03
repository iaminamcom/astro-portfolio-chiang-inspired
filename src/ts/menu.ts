const navLinks = document.querySelectorAll("nav a") as NodeListOf<HTMLAnchorElement>;

const options = { rootMargin: "-40% 0px -50% 0px", root: null };
const observer = new IntersectionObserver(setActiveLink, options);

document.querySelectorAll("main > section").forEach(section => observer.observe(section));

function setActiveLink(entries: IntersectionObserverEntry[]) {
  const interSecting = entries.filter(e => e.isIntersecting).map(e => e.target.id)[0];

  navLinks.forEach(link => {
    const span = link.querySelector("span");
    if (span) span.style.width = link.href.includes(interSecting) ? "4rem" : "";
  });
}
