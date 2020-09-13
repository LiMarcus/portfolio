let shinchouMenuLinks = document.querySelectorAll(".shinchou");
shinchouMenuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    if (i < 2) {
      span.className = "highlight";
    }
    span.style.transitionDelay = `${i / 10}s`;
    link.append(span);
  });
});
