import axios from 'axios'
import mockData from './mockData'

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState("", "", newUrl);
  } else {
    newUrl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newUrl);
  }
};

export const extractNames = (characters) => {
  var extractNames = characters.map((character) => character.name);
  var names = [...new Set(extractNames)];
  return names;
};

export const getCharacters = async () => {
  NProgress.start();

    if (window.AbortController.ocation.href.startsWith("http://localhost")) {
      NProgress.done();
      return mockData;
    }

    if (!navigator.onLine) {
      const events=localStorage.getItem("lastCharacter");
      NProgress.done();
      return characters ? JSON.parse(characters).characters : [];
    }

    
}