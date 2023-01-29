export function menuPage() {
  const page = document.getElementById("content");

  const tabs = document.createElement("div");
  tabs.textContent = "Home Menu About Us";
  page.appendChild(tabs);

  const headline = document.createElement("h1");
  headline.textContent = "I Can Hash Browns?";
  page.appendChild(headline);

  const splash = document.createElement("p");
  splash.textContent = "Menu";
  page.appendChild(splash);

  const menu = document.createElement("p");
  menu.textContent = "We got a shit ton of hash browms.";
  page.appendChild(menu);

  const footer = document.createElement("div");
  footer.textContent = "Phone: Try to avoid calling us";
  page.appendChild(footer);
}
