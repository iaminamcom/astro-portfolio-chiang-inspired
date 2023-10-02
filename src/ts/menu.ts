function activeLinkWithScroll(
  navLinks: NodeListOf<HTMLAnchorElement>,
  sections: NodeListOf<HTMLElement>
) {
  const observer = new IntersectionObserver(setActiveLink, {
    rootMargin: "-40% 0px -50% 0px",
    root: null,
  });
  sections.forEach(section => observer.observe(section));
  function setActiveLink(entries: IntersectionObserverEntry[]) {
    const interSecting = entries.filter(e => e.isIntersecting).map(e => e.target.id)[0];
    navLinks.forEach(link => {
      const curr = link.href.includes(interSecting) ? "add" : "remove";

      link?.querySelector("span")?.classList[curr]("w-16");
    });
  }
}

const navLinks = document.querySelectorAll("nav a") as NodeListOf<HTMLAnchorElement>;
const sections = document.querySelectorAll("main > section") as NodeListOf<HTMLElement>;

activeLinkWithScroll(navLinks, sections);
