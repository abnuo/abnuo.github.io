// <![CDATA[
expr = document.getElementById("expr").textContent
for (var x = 0; x < 256; x++) {
  for (var y = 0; y < 256; y++) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    var r = eval(expr);
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("height", "1");
    rect.setAttribute("width", "1");
    rect.setAttribute("fill", "hsl("+r%361+",100%,50%)");
    document.getElementById("svg").appendChild(rect);
  }
}
// ]]>
