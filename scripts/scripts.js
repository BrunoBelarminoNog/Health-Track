// const html = document.querySelector("html");
// const checkbox = document.querySelector("input[name=theme]");

// const changeColors = () => {
//   html.classList.toggle("theme-light");
//   html.classList.toggle("theme-dark");
// };

// checkbox.addEventListener("change", changeColors);

// const formSign = document.getElementById("form--signin");

// formSign.addEventListener("submit", (e) => {
//   e.preventDefault();

//   window.location.href = "/pages/dashboard.html";
// });

// Animações GSAP
// header

const headerDashboard = document.querySelector("#header-dashboard");
const mainDashboard = document.querySelector("#main-dashboard");
let tl;

headerDashboard.addEventListener("mouseenter", () => {
  console.log(window.innerWidth);
  tl = gsap.timeline();

  if (window.innerWidth > 768) {
    tl.to("#header-dashboard", {
      width: 188,
    }).to(
      "#header-dashboard li a span",
      {
        alpha: 1,
        x: 0,
        stagger: {
          amount: 0.3,
        },
      },
      "-=.5"
    );
  }
});

mainDashboard.addEventListener("mouseenter", () => {
  if (window.innerWidth > 768) {
    tl = gsap.timeline();

    tl.to("#header-dashboard", {
      width: 90,
    }).to(
      "#header-dashboard li a span",
      {
        alpha: 0,
        x: -18,
      },
      "-=.5"
    );
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    tl.kill();

    gsap.set("#header-dashboard", {
      width: "100%",
    });
  }

  if (window.innerWidth > 768) {
    tl.kill();

    gsap.set("#header-dashboard", {
      width: "90px",
    });
  }
});

var gridWidth = 124;

Draggable.create("#favorites-carrosel", {
  type: "x",
  edgeResistance: 0.65,
  bounds: ".activities__favorites .favorites__carrosel",
  inertia: true,
  snap: {
    x: function (endValue) {
      return Math.round(endValue / gridWidth) * gridWidth;
    },
  },
});

Draggable.create("#favorites-diet-carrosel", {
  type: "x",
  edgeResistance: 0.65,
  bounds: ".diet__favorites .favorites__carrosel",
  inertia: true,
  snap: {
    x: function (endValue) {
      return Math.round(endValue / gridWidth) * gridWidth;
    },
  },
});

Draggable.create("#favorites-playlists-carrosel", {
  type: "x",
  edgeResistance: 0.65,
  bounds: ".playlists__favorites .favorites__carrosel",
  inertia: true,
  snap: {
    x: function (endValue) {
      return Math.round(endValue / gridWidth) * gridWidth;
    },
  },
});

LottieInteractivity.create({
  player: "#diet__add__button__lottie",
  mode: "cursor",
  actions: [
    {
      type: "hover",
      forceFlag: false,
    },
  ],
});

LottieInteractivity.create({
  player: "#activities__add__button__lottie",
  mode: "cursor",
  actions: [
    {
      state: "hover",
    },
  ],
});
