// ============================================================== >> Imports <<
import { BTN } from "./BTN/BTN.js";
// ============================================================== >> Imports <<
//
// ========================================================== >> Definitions <<
//
// V => { Variables }
//
// Cl => { CallBack }
//
// SM => { State Management }
//
// L => { Lsitener }
//
// AC => { Append Child }
//
// RC => { Remove Child }
//
// ========================================================== >> Definitions <<
//
// ================================================================= >> Data <<
const Images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
];
// ================================================================= >> Data <<
//
// =============================================================== >> Module <<
export function Slider() {
  //
  // ----------------------------------------------------- >> V <<
  let currentIndex = 0;
  const totalImages = Images.length;
  // ----------------------------------------------------- >> V <<
  //
  // --------------------------------------------------- >> div <<
  const SliderContainer = document.createElement("div");
  SliderContainer.classList.add("SliderContainer");
  // --------------------------------------------------- >> div <<
  //
  // ------------------------------------------------ >> Slider <<
  const Slider = document.createElement("div");
  Slider.classList.add("Slider");
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(Slider);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Slider <<
  //
  // --------------------------------------------- >> Indicator <<
  const IndicatorContainer = document.createElement("div");
  IndicatorContainer.classList.add("IndicatorContainer");
  //
  // ----------------------- > Indicator Manager <
  function IndicatorManager() {
    const indicators = IndicatorContainer.querySelectorAll(".Indicator");
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });
  }
  // ----------------------- > Indicator Manager <
  //
  // -------------------------------------- > AC <
  SliderContainer.appendChild(IndicatorContainer);
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> Indicator <<
  //
  // ----------------------------------------------- >> Builder <<
  Images.forEach((url, i) => {
    //
    // ------------------------------------- > img <
    const SliderImg = document.createElement("img");
    SliderImg.classList.add("SliderImg");
    //
    // ------------------------------ src >>
    SliderImg.src = url;
    // ------------------------------ src <<
    //
    // ------------------------------- AC >>
    Slider.appendChild(SliderImg);
    // ------------------------------- AC <<
    //
    // ------------------------------------- > img <
    //
    // ------------------------------- > indicator <
    const Indicator = document.createElement("div");
    Indicator.classList.add("Indicator");
    //
    //
    if (i === 0) {
      Indicator.classList.add("active");
    }
    //
    IndicatorContainer.appendChild(Indicator);
    //
    // ------------------------------- > indicator <
    //
  });
  // ----------------------------------------------- >> Builder <<
  //
  // -------------------------------------------------- >> Left <<
  //
  // ------------------------------------------- > CL <
  const SlideToLeft = BTN(
    "LeftBtn",
    false,
    "",
    true,
    "hugeicons:arrow-left-01",
    true,
    LeftListener
  );
  // ------------------------------------------- > CL <
  //
  // -------------------------------------------- > L <
  function LeftListener() {
    //
    const imageWidth = Slider.offsetWidth; // Width of each image (slider container width)
    if (currentIndex === 0) {
      currentIndex = totalImages - 1; // Loop back to last image if at the first image
    } else {
      currentIndex--;
    }
    Slider.scrollLeft = currentIndex * imageWidth; // Scroll to the left by one image width
    IndicatorManager(); // update indicator
    //
  }
  // -------------------------------------------- > L <
  //
  // ------------------------------------------- > AC <
  SliderContainer.appendChild(SlideToLeft.widget);
  // ------------------------------------------- > AC <
  //
  // -------------------------------------------------- >> Left <<
  //
  // ------------------------------------------------- >> Right <<
  //
  // ------------------------------------------- > CL <
  const SlideToRight = BTN(
    "RightBtn",
    false,
    "",
    true,
    "hugeicons:arrow-right-01",
    true,
    RightListener
  );
  // ------------------------------------------- > CL <
  //
  // -------------------------------------------- > L <
  function RightListener() {
    //
    const imageWidth = Slider.offsetWidth; // Width of each image (slider container width)
    if (currentIndex === totalImages - 1) {
      currentIndex = 0; // Loop back to first image if at the last image
    } else {
      currentIndex++;
    }
    Slider.scrollLeft = currentIndex * imageWidth; // Scroll to the right by one image width
    IndicatorManager(); // update indicator
  }
  // -------------------------------------------- > L <
  //
  // ------------------------------------------- > AC <
  SliderContainer.appendChild(SlideToRight.widget);
  // ------------------------------------------- > AC <
  //
  // ------------------------------------------------- >> Right <<
  //
  // ------------------------------------------------ >> Return <<
  return SliderContainer;
  // ------------------------------------------------ >> Return <<
  //
}
// =============================================================== >> Module <<
//
