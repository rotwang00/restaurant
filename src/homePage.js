export function homePage() {
  const page = document.getElementById("content");

  const tabs = document.createElement("div");
  tabs.textContent = "Home Menu About Us";
  page.appendChild(tabs);

  const headline = document.createElement("h1");
  headline.textContent = "I Can Hash Browns?";
  page.appendChild(headline);

  const splash = document.createElement("p");
  splash.textContent =
    "Our family-owned restaurant caters to those who agree with us that hash browns are the perfect food.";
  page.appendChild(splash);

  const footer = document.createElement("div");
  footer.textContent = "Phone: Try to avoid calling us";
  page.appendChild(footer);
}
