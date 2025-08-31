const cssUrlMappings = {
  "https://www.sosh.fr/styles/main.css": "https://www.orange.fr/styles/main.css", // a remplacer par les urls réelles
  "https://www.sosh.fr/styles/secondary.css": "https://www.orange.fr/styles/secondary.css", // a remplacer par les urls réelles
};

function redirectCss(requestDetails) {
  const originalUrl = requestDetails.url;
  if (cssUrlMappings[originalUrl]) {
    return { redirectUrl: cssUrlMappings[originalUrl] };
  }
  return { cancel: false };
}

browser.webRequest.onBeforeRequest.addListener(
  redirectCss,
  { urls: Object.keys(cssUrlMappings), types: ["stylesheet"] },
  ["blocking"]
);
