var pname = [
    "kucing"
];
var pprice = [
    900
];
var imgproduct = [

];
var pfreshness = [
    "Second Hand"
];
var adddesc = [
    "ini cat"
];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Product Name</th><th>Product Price</th><th>Image Product</th><th>Product Refreshness</th><th>Additional Description</th></tr>";
    for (let i = 0; i < pname.length; i++) {
        // var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        // var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + pname[i] + "</td><td>" + pprice[i] + "</td><td>" + imgproduct[i] + "</td><td>" + pfreshness[i] + "</td><td>" + adddesc[i] + "</tr>";
    }
}

function tambah() {
    var productName = document.getElementById("productname");
    var productPrice = document.getElementById("productprice");
    var imageProduct = document.getElementById("imageproduct");
    var productFreshness = document.querySelector(
        'input[name="productCondition"]'
    );
    var additionalDescription = document.getElementById(
        "add-desc"
    );

    pname.push(productName.value);
    pprice.push(productPrice.value);
    imgproduct.push(imageProduct.value);
    pfreshness.push(productFreshness.value);
    adddesc.push(additionalDescription.value);
    tampil();
    input.value = "";
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();