export const getLanguage = () => {
  let lang = "en";
  const queryString = window.location.search;
  if (queryString.slice(10, 12) == "fr") {
    lang = "fr";
  }
  return lang;
};
