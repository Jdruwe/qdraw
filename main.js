var can2 = new handwriting.Canvas(document.getElementById("can2"), 10);
can2.setCallBack(function(data, err) {
  if (err) {
    throw err;
  } else {
    let list = data.reduce(function(a, b) {
      return a + `<li>${b}</li>`;
    });
    html = `<ol>${list}</ol>`;
    document.getElementById("result2").innerHTML = html;
  }
});
can2.set_Undo_Redo(true, true);

var penSize2 = document.getElementById("penSize2");
penSize2.addEventListener("mousemove", function() {
  document.getElementById("lineWidth2").innerHTML = penSize2.value;
});
penSize2.addEventListener("change", function() {
  can2.setLineWidth(penSize2.value);
});
