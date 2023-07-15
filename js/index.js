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
function Xemxe(value) {
  document.getElementById(value).style.display = "block";
  document.getElementById(value).style.border = "none";
  if (value == "xegpx") {
    document.getElementById("xekawasaki").style.display = "none";
    document.getElementById("xeyamaha").style.display = "none";
    document.getElementById("xesym").style.display = "none";
  } else if (value == "xekawasaki") {
    document.getElementById("xegpx").style.display = "none";
    document.getElementById("xeyamaha").style.display = "none";
    document.getElementById("xesym").style.display = "none";
  } else if (value == "xeyamaha") {
    document.getElementById("xegpx").style.display = "none";
    document.getElementById("xekawasaki").style.display = "none";
    document.getElementById("xesym").style.display = "none";
  } else if (value == "xesym") {
    document.getElementById("xegpx").style.display = "none";
    document.getElementById("xeyamaha").style.display = "none";
    document.getElementById("xekawasaki").style.display = "none";
  } else {
    document.getElementById(value).style.display = "none";
  }
}
//show
function Show() {
  let height = window.scrollY;
  if (height > 250) {
    try {
      document.getElementById("showkawasaki").id = "show_xe";
    } catch (error) {}
  }
  if (height > 550) {
    try {
      document.getElementById("showgpx").setAttribute("id", "show_xe");
    } catch (error) {}
  }
  if (height > 1250) {
    try {
      document.getElementById("showyamaha").setAttribute("id", "show_xe");
    } catch (error) {}
  }
  if (height > 1500) {
    try {
      document.getElementById("showsym").setAttribute("id", "show_xe");
    } catch (error) {}
  }
}
