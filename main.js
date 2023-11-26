const contentElem = document.querySelector(".content");
const btnElem = document.querySelector("#btn");
let content = "";

const getDatas = async () => {
  btnElem.style.display = "none";
  const response = await fetch("GTAV-mods.json");
  const data = await response.json();
  const mods = data.result;

  console.log(mods);

  showDatas(mods);
};

const showDatas = (mods) => {
  mods.forEach((element) => {
    if (element.scriptstools) {
      content += `<div class='scriptstools'><h2>Tools</h2><div class="squereTopLeft"></div>
      <div class="squereTopRight"></div>
      <div class="squereDownLeft"></div>
      <div class="squereDownRight"></div>`;
      for (const key in element.scriptstools) {
        content += `<div class="tool">
            <a href="${element.scriptstools[key].url} target="_blank"">${element.scriptstools[key].desc}</a>
          </div>`;
      }
      content += "</div>";
    }

    if (element.cosmetics) {
      content += `<div class="cosmetics"><h2>Cosmetics</h2> <div class="squereTopLeft"></div>
      <div class="squereTopRight"></div>
      <div class="squereDownLeft"></div>
      <div class="squereDownRight"></div>`;

      for (const key in element.cosmetics) {
        content += `<div class="cosmetic">
            <a href="${element.cosmetics[key].url} target="_blank"">${element.cosmetics[key].desc}</a>
          </div>`;
      }
      content += `<h3>Eup</h3>`;
      for (const key in element.cosmetics.eup) {
        content += `<div class="eup">
            <a href="${element.cosmetics.eup[key].url} target="_blank"">${element.cosmetics.eup[key].desc}</a>
          </div>`;
      }
      content += "</div>";
    }
    if (element.lspdfr) {
      content += `<div class='lspdfr'>
        <h2>LSPDFR</h2><div class="squereTopLeft"></div>
        <div class="squereTopRight"></div>
        <div class="squereDownLeft"></div>
        <div class="squereDownRight"></div>
      `;

      content += `<h3>Callouts</h3>`;
      for (const key in element.lspdfr.lspdfrCallouts) {
        content += `<div class="callout">
          <a href="${element.lspdfr.lspdfrCallouts[key].url} target="_blank"">${element.lspdfr.lspdfrCallouts[key].desc}</a>
          </div>
          `;
      }

      content += `<h3>Scripts</h3>`;
      for (const key in element.lspdfr.lspdfrScripts.Bejojo) {
        content += `<div class="script"> 
          <a href="${element.lspdfr.lspdfrScripts.Bejojo[key].url} target="_blank"">${element.lspdfr.lspdfrScripts.Bejojo[key].desc}</a>
        </div>`;
      }
      for (const key in element.lspdfr.lspdfrScripts.lcpdfr) {
        content += `<div class="script">
          <a href="${element.lspdfr.lspdfrScripts.lcpdfr[key].url} target="_blank"">${element.lspdfr.lspdfrScripts.lcpdfr[key].desc}</a>
        </div>`;
      }

      content += `</div>`;
    }
  });

  contentElem.innerHTML = content;
};

btnElem.addEventListener("click", getDatas);
