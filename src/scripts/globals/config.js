const CONFIG = {
  KEY: "12345",
  BASE_URL: "https://restaurant-api.dicoding.dev",
  BASE_IMAGE_URL: (size) =>
    `https://dicoding-restaurant-api.el.r.appspot.com/images/${size}/`,
  DEFAULT_LANGUAGE: "en-us",
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: "koresto-database",
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: "resto",
  WEB_SOCKET_SERVER: "wss://movies-feed.dicoding.dev", // TODO
};

export default CONFIG;
