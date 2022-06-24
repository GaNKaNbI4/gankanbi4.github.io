window.onload = () => {
 const init = function () {
  const breakpoints = [
   { value: 0, step: 12.5, stepsSoFar: 0 },
   { value: 200, step: 50, stepsSoFar: 16 },
   { value: 1000, step: 50, stepsSoFar: 32 },
   { value: 2000, step: 500, stepsSoFar: 52 },
   { value: 10000, step: 1000, stepsSoFar: 68 },
   { value: 30000, step: 5000, stepsSoFar: 88 },
   { value: 100000, step: 10000, stepsSoFar: 102 },
   { value: 300000, step: 50000, stepsSoFar: 122 },
   { value: 1000000, stepsSoFar: 136, step: 1 }
  ];
  const pricing = [
   [200, 4, 0.2],
   [500, 10, 0.01],
   [1000, 15, 0.01],
   [2000, 20, 0.005],
   [7000, 50, 0.005],
   [10000, 65, 0.0025],
   [16000, 80, 0.0022],
   [25000, 100, 0.006],
   [30000, 130, 0.002],
   [65000, 200, 0.002],
   [100000, 270, 0.0015],
   [200000, 420, 0.0015],
   [300000, 570, 0.0006],
   [600000, 750, 0.0006],
   [700000, 810, 0.0006],
   [800000, 870, 0.0006],
   [900000, 930, 0.0006],
   [1000000, 990, 0.001]
  ];
  const planBgs = document.querySelectorAll(".StepRangeSlider__trackHeadItem");
  const media = window.matchMedia("(max-width: 1024px)");
  const minValue = 200;
  const maxStep = breakpoints[breakpoints.length - 1].stepsSoFar;
  const slider = document.getElementById("stepRangeSliderWrap");
  const handle = document.getElementById("rangeSliderHandle");
  const tooltip = document.getElementById("rangeSliderTooltip");
  const plans = document.querySelectorAll(".plan-content .right .content");
  let plansBreakPoints;
  let valueBlock;
  let emailsBlock;
  let isHorizontal;
  let value = 200;
  let step = 18;
  let pressed = false;




  const checkRangeSliderVersion = () => {
   if (media.matches) {
    valueBlock = document.querySelectorAll(".display-price-mob");
    emailsBlock = document.querySelectorAll(".emails-count");
    isHorizontal = false;
   } else {
    valueBlock = document.querySelectorAll(".display-price");
    emailsBlock = document.querySelectorAll(".emails-count");
    isHorizontal = true;
   }
   plansBreakPoints = [
    planBgs[1].getBoundingClientRect()[isHorizontal ? "left" : "top"],
    planBgs[2].getBoundingClientRect()[isHorizontal ? "left" : "top"]
   ];
  };

  window.addEventListener('scroll', () => {
    plansBreakPoints = [
      planBgs[1].getBoundingClientRect()[isHorizontal ? "left" : "top"],
      planBgs[2].getBoundingClientRect()[isHorizontal ? "left" : "top"]
    ];
  })
  checkRangeSliderVersion();
  media.addListener(checkRangeSliderVersion);

  const getPriceForEmailsCount = emails => {
   for (let i = pricing.length - 1; i >= 0; i--) {
    if (emails === pricing[i][0]) {
     return pricing[i][1];
    }
    if (emails > pricing[i][0]) {
     return (emails - pricing[i][0]) * pricing[i + 1][2] + pricing[i][1];
    }
   }
   return null;
  };

  const getValueForStep = step => {
   const nearest = breakpoints.reduce((prev, curr) =>
    curr.stepsSoFar < step && curr.stepsSoFar > prev.stepsSoFar
     ? curr
     : prev
   );
   const additionalValue = (step - nearest.stepsSoFar) * nearest.step;
   return nearest.value + additionalValue;
  };

  const handleChange = () => {
   const offset = (step / maxStep) * 100;
   handle.style[isHorizontal ? "left" : "top"] = offset + "%";
   tooltip.textContent = Math.floor(value);
   valueBlock.forEach(e => {
    e.textContent = getPriceForEmailsCount(value) + "$";
   });
   emailsBlock.forEach(e => {
    e.textContent = Math.floor(value);
   });
  };

  // document.addEventListener('click', (e) => {
  //   console.log(e.clientY);
  // });
  const handleMove = e => {
   const client = isHorizontal ? e.clientX : e.clientY;
   const sliderRect = slider.getBoundingClientRect();
   let startPosition = isHorizontal ? sliderRect.left : sliderRect.top;
   let endPosition = isHorizontal ? sliderRect.right : sliderRect.bottom;
   console.log(plansBreakPoints);
   console.log(client);
  //  console.log(startPosition + " " + endPosition);
   if (client <= plansBreakPoints[0]) {
    plans.forEach(e => {
     e.style.display = "none";
    });

    plans[0].style.display = "block";
   } else if (
    client >= plansBreakPoints[0] &&
    client <= plansBreakPoints[1]
   ) {
    plans.forEach(e => {
     e.style.display = "none";
    });

    plans[1].style.display = "block";
   } else if (client >= plansBreakPoints[1]) {
    plans.forEach(e => {
     e.style.display = "none";
    });

    plans[2].style.display = "block";
   }
   if (!client) return;

   let position;
   if (client < startPosition) {
    position = 0;
   } else if (client > endPosition) {
    position = endPosition - startPosition;
   } else {
    position = client - startPosition;
   }
   const currentStep = Math.round(
    (position / (isHorizontal ? sliderRect.width : sliderRect.height)) *
    maxStep
   );
   const currentStepValue = getValueForStep(currentStep);

   if (
    currentStepValue >= minValue &&
    (currentStepValue !== value || currentStep !== step)
   ) {
    value = currentStepValue;
    step = currentStep;
    handleChange();
   }
  };

  const handleTouchMove = e => {
   if (pressed) {
    handleMouseMove(e.touches[0]);
   }
  };

  const handleMouseUp = e => {
   if (pressed) {
    pressed = false;
   }
  };

  const handleMouseMove = e => {
   if (pressed) {
    handleMove(e);
   }
  };

  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleMouseUp);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  slider.addEventListener("mousedown", function (e) {
   e.preventDefault();
   pressed = true;
   handleMove(e);
  });
  slider.addEventListener("touchmove", e => {
   e.preventDefault();
   pressed = true;
   handleMove(e.touches[0]);
  });
  handle.addEventListener("mousedown", function (e) {
   e.preventDefault();
   pressed = true;
   handleMove(e);
  });
  handle.addEventListener("ontouchstart", function (e) {
   e.preventDefault();
   pressed = true;
   handleMove(e.touches[0]);
  });
 };

 init();
};

const body = document.querySelector("body");

let sliderActive = {
  left: document.querySelector(".active .left"),
  right: document.querySelector(".active .right"),
  counts: document.querySelectorAll(".active .count div"),
  slids: document.querySelectorAll(".active .slid")
};

const tabs = document.querySelectorAll(".tab");
const sliderBodyAll = document.querySelectorAll(".tabs-body .content");

tabs.forEach((e, i) => {
  e.onclick = () => {
    tabs.forEach(el => {
      el.classList.remove("active");
    });

    e.classList.add("active");

    sliderBodyAll.forEach(el => {
      el.classList.remove("active");
    });

    sliderBodyAll[i].classList.add("active");

    sliderActive = {
      left: document.querySelector(".active .left"),
      right: document.querySelector(".active .right"),
      counts: document.querySelectorAll(".active .count div"),
      slids: document.querySelectorAll(".active .slid")
    };

    sliderActive.left.onclick = leftClick;
    sliderActive.right.onclick = rightClick;
    countsClick();
  };
});

function countsClick() {
  sliderActive.counts.forEach((e, i) => {
    e.onclick = () => {
      sliderActive.slids.forEach(e => {
        e.classList.remove("active");
      });

      sliderActive.slids[i].classList.add("active");

      sliderActive.counts.forEach(el => {
        el.classList.remove("active");
      });

      sliderActive.counts[i].classList.add("active");
    };
  });
}

countsClick();

function leftClick() {
  let id;
  sliderActive.slids.forEach((e, i) => {
    if (e.classList[2] == "active") {
      id = i;
    }
  });

  if (id == 0) {
    sliderActive.slids[sliderActive.slids.length - 1].classList.add("active");
    sliderActive.slids[0].classList.remove("active");

    sliderActive.counts[sliderActive.counts.length - 1].classList.add("active");
    sliderActive.counts[0].classList.remove("active");
  } else {
    sliderActive.slids[id].classList.remove("active");
    sliderActive.slids[id - 1].classList.add("active");

    sliderActive.counts[id].classList.remove("active");
    sliderActive.counts[id - 1].classList.add("active");
  }
}

function rightClick() {
  let id;
  sliderActive.slids.forEach((e, i) => {
    if (e.classList[2] == "active") {
      id = i;
    }
  });

  if (id == sliderActive.slids.length - 1) {
    sliderActive.slids[0].classList.add("active");
    sliderActive.slids[sliderActive.slids.length - 1].classList.remove(
      "active"
    );

    sliderActive.counts[0].classList.add("active");
    sliderActive.counts[sliderActive.counts.length - 1].classList.remove(
      "active"
    );
  } else {
    sliderActive.slids[id].classList.remove("active");
    sliderActive.slids[id + 1].classList.add("active");

    sliderActive.counts[id].classList.remove("active");
    sliderActive.counts[id + 1].classList.add("active");
  }
}

sliderActive.left.onclick = leftClick;
sliderActive.right.onclick = rightClick;
