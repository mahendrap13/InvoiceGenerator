let modal = document.getElementById("modal-product");
function modal1() {
  modal.classList.add("mahi");
}
let modalw = document.getElementById("modal-product");
function modal2() {
  modal.classList.remove("mahi");
}
document.getElementById("preview").addEventListener("click", () => {
  let bill = document.getElementById("maindata");
  let arrow = document.getElementById("arrow");
  bill.classList.toggle("bill");
  arrow.classList.toggle("bill");
});

function addproduct() {
  var inputMobileName = document.getElementById("inputMobileName");
  var inputDescription = document.getElementById("inputDescription");
  var IMEINo1 = document.getElementById("IMEINo1");
  var quantity = document.getElementById("quantity");
  var price = document.getElementById("price");

  let maindiv2 = document.getElementById("main-data");
  let maindiv = document.createElement("div");
  maindiv.id = "append";
  maindiv.className = "append";
  maindiv2.appendChild(maindiv);
  var lable1 = document.createElement("lable");
  lable1.innerHTML = inputMobileName.value;
  lable1.style.width = "15%";
  lable1.id = "product";
  lable1.className = "no";
  maindiv.appendChild(lable1);
  var lable2 = document.createElement("lable");
  lable2.innerHTML = inputDescription.value + "<br>" + "IMEI:-" + IMEINo1.value;
  lable2.style.width = "45%";
  lable2.id = "product";
  lable2.className = "no";
  maindiv.appendChild(lable2);
  var lable3 = document.createElement("lable");
  lable3.style.width = "10%";
  lable3.innerHTML = quantity.value;
  lable3.id = "product";
  lable3.className = "quantity";
  maindiv.appendChild(lable3);
  var lable4 = document.createElement("lable");
  lable4.style.width = "10%";
  lable4.innerHTML = price.value * quantity.value;
  lable4.id = "product";
  lable4.className = "price";
  maindiv.appendChild(lable4);
  var lable5 = document.createElement("lable");
  lable5.style.width = "10%";
  lable5.innerHTML = (Number(lable4.innerHTML) * 18) / 100;
  lable5.id = "product";
  lable5.className = "tax";
  maindiv.appendChild(lable5);
  var lable6 = document.createElement("lable");
  lable6.style = "width:10%; border-right:1px solid #222";
  lable6.innerHTML = Number(lable5.innerHTML) + Number(lable4.innerHTML);
  lable6.id = "product";
  lable6.className = "total";
  maindiv.appendChild(lable6);

  var lable7 = document.createElement("lable");
  lable7.style =
    "width:10%; border:1px solid #222; border-top:none;border-left:none; display: grid; place-items: center;";
  lable7.innerHTML = "X";
  lable7.id = "delateDiv";
  lable7.setAttribute("onclick", "delateDiv(this)");
  lable7.className = "cross";
  maindiv.appendChild(lable7);

  let quantityt = document.getElementsByClassName("quantity");
  var qty = 0;
  for (var i = 0; i < quantityt.length; i++) {
    qty = qty + Number(quantityt[i].innerHTML);
  }
  let TotalQty = document.getElementById("TotalQty");
  TotalQty.innerHTML = qty;

  let price1 = document.getElementsByClassName("price");
  var prices = 0;
  for (var j = 0; j < price1.length; j++) {
    prices = prices + Number(price1[j].innerHTML);
  }
  let TotalPrice = document.getElementById("TotalPrice");
  TotalPrice.innerHTML = prices;
  let TotalTax = document.getElementById("TotalTax");
  TotalTax.innerHTML = (prices * 18) / 100;
  let TotalAmount = document.getElementById("TotalAmount");
  TotalAmount.innerHTML =
    Number(TotalPrice.innerHTML) + Number(TotalTax.innerHTML);
  let GrandTotal = document.getElementById("GrandTotal");
  GrandTotal.innerHTML =
    Number(TotalPrice.innerHTML) + Number(TotalTax.innerHTML);
  
  var inputs = document.getElementsByClassName("form-control");
  for (var ko = 0; ko < inputs.length; ko++) {
    inputs[ko].value = "";
  }

  modal.classList.remove("mahi");
}

function delateDiv(cut1) {
  cut1.parentNode.remove();
  console.log(cut1);
}

function generateBill() {
  let app = document.getElementsByClassName("append");
  for (var k = 0; k < app.length; k++) {
    var re = app[k].childNodes;
    for (var o = 0; o < re.length - 1; o++) {}
    re[o].remove();
  }
  let nameValue = document.getElementById("nameValue");
  let contactVlaue = document.getElementById("contactValue");
  let emailVlaue = document.getElementById("emailValue");

  let valueName = document.getElementById("valueName");
  let valueNo = document.getElementById("valueNo");
  let valueEmail = document.getElementById("valueEmail");
  valueName.innerHTML = nameValue.value;
  valueNo.innerHTML = contactVlaue.value;
  valueEmail.innerHTML = emailVlaue.value;

  let valueId = document.getElementById("valueId");
  let valueInvoice = document.getElementById("valueInvoice");
  let valueDate = document.getElementById("valueDate");
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let currentDate = `${date}/${month+1}/${year}`;
  valueDate.innerHTML = currentDate;
  let randomNo = Math.floor(Math.random() * 1000000);
  valueInvoice.innerHTML = randomNo;

  function invocegene(lenght_random) {
    var random_value = "";
    let character = "ABCDEFGHIJKLMNOPQRST0123456789";
    for (var l = 0; l < lenght_random; l++) {
      random_value += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    valueId.innerHTML = random_value;
  }
  invocegene(6);

  document.getElementById("main-data1").innerHTML =
    document.getElementById("main-data").innerHTML;

  var delete1 = document.getElementById("delete1");
  delete1.remove();
  var maindata = document.getElementById("maindata");
  maindata.style = "margin:0;width:100% !important";
  var pre = document.getElementById("preview");
  pre.style.display = "none";
  let bill = document.getElementById("maindata");
  bill.style.height = "auto";

  print();
}
function noe(){
  let now = new Date()
  let moth =now.getMonth()
  let yr =now.getFullYear()
  console.log(moth+1)
  console.log(yr)
}
noe()
