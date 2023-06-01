const routes = [
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage1";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page1";
    },
  },
];

module.exports = routes;
