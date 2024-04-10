import "./ButtonLetras.css";
import { clickLetras } from "../../utils";

const template = `
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>ñ</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
`;

const listeners = () => {
  const btnLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btnLetras.length; i++) {
    btnLetras[i].addEventListener("click", clickLetras);
  }
};

export const PrintButtonLetras = () => {
  document.getElementById("letras").innerHTML = template;
  listeners();
};
