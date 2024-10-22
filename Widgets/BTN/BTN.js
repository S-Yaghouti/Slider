// =============================================================== >> Module <<
export function BTN(
  ID,
  HaveText,
  Text,
  HaveIcon,
  Icon,
  HaveListener,
  Listener
) {
  //
  // ---------------------------------------------- >> Widget <<
  const BTN = document.createElement("div");
  BTN.classList.add("BTN");
  BTN.id = ID;
  // ---------------------------------------------- >> Widget <<
  //
  // -------------------------------------------- >> Listener <<
  if (HaveListener) {
    BTN.addEventListener("click", () => {
      Listener();
    });
  }
  // -------------------------------------------- >> Listener <<
  //
  // ------------------------------------------------ >> Icon <<
  const BTNICON = document.createElement("iconify-icon");
  BTNICON.classList.add("BTNICON");
  //
  // --------------------------------- > Icon Value <
  BTNICON.setAttribute("icon", Icon);
  // --------------------------------- > Icon Value <
  //
  // ----------------------------------------- > AP <
  if (HaveIcon) {
    BTN.appendChild(BTNICON);
  }
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Icon <<
  //
  // ------------------------------------------------ >> Text <<
  const BTNTEXT = document.createElement("span");
  BTNTEXT.classList.add("BTNTEXT");
  //
  // -------------------------------- > TextContent <
  BTNTEXT.textContent = Text;
  // -------------------------------- > TextContent <
  //
  // ----------------------------------------- > AP <
  if (HaveText) {
    BTN.appendChild(BTNTEXT);
  }
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Text <<
  //
  // ---------------------------------------------- >> Return <<
  return {
    widget: BTN,
    Icon: BTNICON,
    Text: BTNTEXT,
  };
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
