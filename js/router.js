const route = (event) => {
  event = event || window.event;
  event.preventDefault(); // Prevent default behavior (full page reload)

  // Push the new state to the history API and change the URL
  window.history.pushState({}, "", event.target.href);

  // Handle the new location (load the appropriate content)
  handleLocation();
};

const routes = {
  404: "./notfound.html",
  "/quiz1": "./index.html",
  "/quiz1/profile": "./profile.html",
  "/quiz1/hometown": "./hometown.html",
  "/quiz1/food": "./food.html",
  "/quiz1/tourist": "./tourist.html",
};

// Function to load the correct content based on the current path
const handleLocation = async () => {
  const path = window.location.pathname; // Get the current URL path
  const route = routes[path] || routes[404]; // Look up the route, or use 404 if not found
  const html = await fetch(route).then((data) => data.text()); // Fetch the HTML for that route
  document.getElementById("main-page").innerHTML = html; // Update the page content
};

// Listen for history state changes (when user clicks back/forward buttons)
window.onpopstate = handleLocation;

// Expose the route function globally so it can be used in the HTML
window.route = route;

// Load the correct content when the page first loads
handleLocation();
