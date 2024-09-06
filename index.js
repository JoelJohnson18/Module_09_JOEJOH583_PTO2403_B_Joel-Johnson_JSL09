/* Update time every second */
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  /* Format time */
  const timeString = now.toLocaleTimeString();
  timeElement.textContent = timeString;
}

/* Update crypto section with data */
function updateCrypto() {
  const cryptoElement = document.getElementById("crypto-top");
  const cryptoData = {
    symbol: "BTC",
    price: "$45,000",
  };
  cryptoElement.innerHTML = `<p>${cryptoData.symbol}: ${cryptoData.price}</p>`;
}

/* Update weather section with data */
function updateWeather() {
  const weatherElement = document.getElementById("weather");
  const cityElement = document.createElement("p");
  cityElement.className = "weather-city";
  cityElement.textContent = "New York";

  const tempElement = document.createElement("p");
  tempElement.className = "weather-temp";
  tempElement.textContent = "22°C";

  const imgElement = document.createElement("img");
  imgElement.src = "https://via.placeholder.com/70";
  imgElement.alt = "Weather icon";

  weatherElement.appendChild(cityElement);
  weatherElement.appendChild(imgElement);
  weatherElement.appendChild(tempElement);
}

/* Set author info */
function setAuthor() {
  const authorElement = document.getElementById("author");
  authorElement.textContent = "Dashboard by Your Name";
}

/* Initialize dashboard */
function initDashboard() {
  updateTime();
  updateCrypto();
  updateWeather();
  setAuthor();

  setInterval(updateTime, 1000);
}

/* Run when page loads */
window.onload = initDashboard;
