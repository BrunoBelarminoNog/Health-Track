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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 26,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: "#f06543",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 500,
      random: true,
      anim: {
        enable: true,
        speed: 400,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#f06543",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 24,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

let USER = getUsers()[0];

const headerDashboard = document.querySelector("#header-dashboard");
const mainDashboard = document.querySelector("#main-dashboard");
let tl;

headerDashboard.addEventListener("mouseenter", () => {
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

let widthFormFirstSession = 0;

window.addEventListener("resize", () => {
  resizeForm();
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

const waterCard = document.getElementById("water");
const waterCardAnimation = document.getElementById("water-add-animation");
const waterCardData = document.querySelector("#water .water__data__span");

LottieInteractivity.create({
  player: waterCardAnimation,
  mode: "cursor",
  actions: [
    {
      type: "click",
      forceFlag: false,
    },
  ],
});

waterCard.addEventListener("click", () => {
  waterCardAnimation.classList.add("water__animation--play");
  waterCardAnimation.play();
  setTimeout(() => {
    waterCardAnimation.classList.remove("water__animation--play");
  }, 700);

  let currentValue = Number(waterCardData.innerHTML);
  waterCardData.innerHTML = currentValue + 1;
});

function calculateIMC(height, weight) {
  let imc = (weight / ((height / 100) * (height / 100))).toFixed(2);
  let result = "";

  if (imc < 18.5) {
    result = "abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    result = "peso normal";
  } else if (imc >= 25 && imc < 30) {
    result = "sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    result = "obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    result = "obesidade grau II";
  } else if (imc >= 40) {
    result = "obesidade grau III";
  }

  return { imc, result };
}

const bodyCardWeight = document.querySelector(
  "#body .body__card__weight .weight__data"
);
const bodyCardHeight = document.querySelector(
  "#body .body__card__height .height__data"
);

const bodyCardIMCData = document.querySelector(
  "#body .body__card__imc .imc__data"
);
const bodyCardIMCClassification = document.querySelector(
  "#body .body__card__imc .imc__classification"
);

function updateInfosUser() {
  USER = getUsers()[0];

  bodyCardWeight.innerHTML = USER.weight;
  bodyCardHeight.innerHTML = USER.height;

  bodyCardIMCData.innerHTML = calculateIMC(USER.height, USER.weight).imc;
  bodyCardIMCClassification.innerHTML = calculateIMC(
    USER.height,
    USER.weight
  ).result;
}

updateInfosUser();

// FORMULÁRIO FIRST SESSION

const userName = document.getElementById("first-session-user-name");
userName.innerHTML = USER.name;

let weight;
let height;
let sedentary;
let objectives = [];

const firstStep = document.getElementById("first-session-first-step");
const secondStep = document.getElementById("first-session-second-step");

const formFirstSession = document.querySelector("#first-session .form_profile");
const formItemFirstSession = document.querySelector(
  "#first-session .form_profile___item"
);
const carroselElement = document.querySelector(
  "#first-session .carrosel__form"
);
const closeIcon = document.querySelector("#first-session .close_icon");
const btnNextControl = document.querySelector("#first-session .control__next");
const btnPreviousControl = document.querySelector(
  "#first-session .control__previous"
);
const btnNextStep = document.querySelector("#btn-next-step");

let currentItem = 0;

async function saveFormData() {
  await updateUser({
    ...USER,
    weight,
    height,
    sedentary,
    objectives,
  });
}

btnNextStep.addEventListener("click", async () => {
  await saveFormData();
  updateInfosUser();
  document.getElementById("first-session").classList.add("hidden");
});

function nextQuestion() {
  const widthItem = formItemFirstSession.getBoundingClientRect().width;
  const widthForm = formFirstSession.getBoundingClientRect().width;
  const numberItems = widthForm / widthItem + 1;
  let move = 0;

  if (currentItem < numberItems - 2) {
    move = widthItem * (currentItem + 1) * -1;
  } else if (currentItem < numberItems - 1) {
    firstStep.classList.add("hidden");
    secondStep.classList.remove("hidden");
    move = widthItem * (numberItems - 2) * -1;
  }

  formFirstSession.setAttribute(
    "style",
    `transform: translate(${move}px, -50%)`
  );

  if (currentItem === numberItems - 1) {
    currentItem = 0;
  } else {
    currentItem++;
  }

  if (currentItem === numberItems - 1) {
    btnNextControl.classList.add("hidden");
    btnNextStep.classList.remove("hidden");
    return;
  }
}

function previousQuestion() {
  const widthItem = formItemFirstSession.getBoundingClientRect().width;
  const numberItems = 3;
  let move = widthItem * (numberItems - 1) * -1;

  if (currentItem === 0) return;

  if (currentItem <= numberItems - 1 && currentItem !== 0) {
    move = widthItem * (currentItem - 1) * -1;
  } else if (currentItem === 0) {
    move = 0;
  } else if (currentItem === numberItems) {
    firstStep.classList.remove("hidden");
    secondStep.classList.add("hidden");

    move = formItemFirstSession.clientWidth * 2 * -1;
  }

  formFirstSession.setAttribute(
    "style",
    `transform: translate(${move}px, -50%)`
  );

  if (currentItem === 0) {
    currentItem = numberItems - 1;
  } else {
    currentItem--;
  }

  if (currentItem < numberItems) {
    btnNextControl.classList.remove("hidden");
    btnNextStep.classList.add("hidden");
    return;
  }
}

function resizeForm() {
  const widthItem = formItemFirstSession.getBoundingClientRect().width;

  let move = widthItem * currentItem * -1;

  formFirstSession.setAttribute(
    "style",
    `transform: translate(${move}px, -50%)`
  );
}

btnNextControl.addEventListener("click", nextQuestion);
btnPreviousControl.addEventListener("click", previousQuestion);

closeIcon.addEventListener("click", () => {
  document
    .querySelector("#first-session")
    .setAttribute("style", "display: none");
});

function verifyIsCompleted() {
  let isCompleted = false;
  if (height > 0 && weight > 0 && sedentary > 0 && objectives.length > 0) {
    isCompleted = true;
  }

  if (isCompleted) {
    btnNextStep.removeAttribute("disabled");
  }
}

const heightAdd = document.querySelector("#item-height .counter__add");
const heightRemove = document.querySelector("#item-height .counter__remove");
const heightValue = document.querySelector("#item-height #height");

const weightAdd = document.querySelector("#item-weight .counter__add");
const weightRemove = document.querySelector("#item-weight .counter__remove");
const weightValue = document.querySelector("#item-weight #weight");

function addValue(value) {
  return `${Number(value) + 1}`;
}

function removeValue(value) {
  let newValue = Number(value);

  if (value > 0) {
    newValue = `${value - 1}`;
  }

  return newValue;
}

heightAdd.addEventListener("click", () => {
  const value = addValue(heightValue.value);
  heightValue.value = value;
  height = value;
  verifyIsCompleted();
});

heightRemove.addEventListener("click", () => {
  const value = removeValue(heightValue.value);
  heightValue.value = value;
  height = value;
  verifyIsCompleted();
});

heightValue.addEventListener("change", (e) => {
  height = e.target.value;
  verifyIsCompleted();
});

weightAdd.addEventListener("click", () => {
  const value = addValue(weightValue.value);
  weightValue.value = value;
  weight = value;
  verifyIsCompleted();
});

weightRemove.addEventListener("click", () => {
  const value = removeValue(weightValue.value);
  weightValue.value = value;
  weight = value;
  verifyIsCompleted();
});

weightValue.addEventListener("change", (e) => {
  weight = e.target.value;
  verifyIsCompleted();
});

const optionsSedentary = document.querySelectorAll(
  "#item-sedentar .option__sedentar"
);

optionsSedentary.forEach((option, index) => {
  option.addEventListener("click", () => {
    let currentOption = index;
    optionsSedentary.forEach((op, i) => {
      if (i <= currentOption) {
        op.classList.add("option__sedentar--selected");
        sedentary = index + 1;
      } else {
        op.classList.remove("option__sedentar--selected");
      }
    });

    verifyIsCompleted();
  });
});

const cardHealth = document.querySelector("#health.objective__card");
const cardMind = document.querySelector("#mind.objective__card");
const cardAerobic = document.querySelector("#aerobic.objective__card");
const cardMusculation = document.querySelector("#musculation.objective__card");

function selectedCard(card, key) {
  card.classList.toggle("objective__card--selected");

  const index = objectives.indexOf(key);

  if (index === -1) {
    objectives.push(key);
  } else {
    objectives.splice(index, 1);
  }
  verifyIsCompleted();
}

cardHealth.addEventListener("click", () => selectedCard(cardHealth, "health"));
cardMind.addEventListener("click", () => selectedCard(cardMind, "mind"));
cardAerobic.addEventListener("click", () =>
  selectedCard(cardAerobic, "aerobic")
);
cardMusculation.addEventListener("click", () =>
  selectedCard(cardMusculation, "musculation")
);
