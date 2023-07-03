function A() {
  document.getElementById("xeadmin1").style.display = "none";
  var b = document.getElementById("xeadmin2");
  b.style.display = "block";
}
function B() {
  document.getElementById("xeadmin1").style.display = "block";
  var b = document.getElementById("xeadmin2");
  b.style.display = "none";
}
function C() {
  alert(
    "Lưu ý: ở đây không nói sâu về mặt lịch sử, hãy tận hưởng kiểu dáng trên những chiếc xe cổ điển!"
  );
}
function submit() {
  var ten = document.getElementById("ten").value;
  var sdt = document.getElementById("sdt").value;
  var email = document.getElementById("email").value;
  var file = document.getElementById("customFile").value;
  var nutsubmit = document.getElementById("submit");

  if (ten && sdt && email) {
    nutsubmit.value = "Hoàn thành";
    nutsubmit.addEventListener("click", () => {
      alert("Thông tin của bạn đã được lưu!");
    });
    nutsubmit.style.backgroundColor = "red";
    let nguoi = localStorage.getItem("nguoi")
      ? JSON.parse(localStorage.getItem("nguoi"))
      : [];
    nguoi = {
      ten: ten,
      sdt: sdt,
      email: email,
      file: file,
    };
    localStorage.setItem("nguoi", JSON.stringify(nguoi));
    this.Truyxuat();
  } else {
    alert("Hãy để lại thông tin để chúng tôi liên hệ!");
  }
}
function Truyxuat() {
  let nguoi = localStorage.getItem("nguoi")
    ? JSON.parse(localStorage.getItem("nguoi"))
    : [];
  let ttin = ` Cảm ơn ${nguoi.ten} đã xem web, Chúng tôi sẽ sớm lên hệ với bạn qua sdt ${nguoi.sdt} hoặc email ${nguoi.email}`;
  if (nguoi.ten != null) {
    alert(ttin);
  }

  localStorage.setItem("nguoi", JSON.stringify(nguoi));
}
