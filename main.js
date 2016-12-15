//  var can1 = new handwriting.Canvas(document.getElementById("can"), 3);
//  can1.setCallBack(function (data, err) {
//      if (err) throw err;
//      else document.getElementById("result1").innerHTML = data;
//  });
//  can1.set_Undo_Redo(true, true);
var can2 = new handwriting.Canvas(document.getElementById("can2"), 10);
can2.setCallBack(function (data, err) {
    if (err) throw err;
    else document.getElementById("result2").innerHTML = data;
});
can2.set_Undo_Redo(false, false);
//  var penSize = document.getElementById("penSize");
//  penSize.addEventListener("mousemove", function () {
//      document.getElementById("lineWidth").innerHTML = penSize.value;
//  });
//  penSize.addEventListener("change", function () { can1.setLineWidth(penSize.value); });
var penSize2 = document.getElementById("penSize2");
penSize2.addEventListener("mousemove", function () {
    document.getElementById("lineWidth2").innerHTML = penSize2.value;
});
penSize2.addEventListener("change", function () { can2.setLineWidth(penSize2.value); });