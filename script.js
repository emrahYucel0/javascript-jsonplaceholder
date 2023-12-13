var dataVisible = false; // Verilerin görünürlüğünü takip eden değişken

function FillTable(data) {
    var tableBody = document.getElementById("todoTable").getElementsByTagName('tbody')[0];

    // Temizleme işlemi: Var olan satırları temizle
    tableBody.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        var userIdCell = document.createElement("td");
        userIdCell.textContent = data[i].userId;
        row.appendChild(userIdCell);

        var idCell = document.createElement("td");
        idCell.textContent = data[i].id;
        row.appendChild(idCell);

        var titleCell = document.createElement("td");
        titleCell.textContent = data[i].title;
        row.appendChild(titleCell);

        var completedCell = document.createElement("td");
        completedCell.textContent = data[i].completed;
        row.appendChild(completedCell);

        tableBody.appendChild(row);
    }

    // Tablo başlığını göster
    document.getElementById("todoTable").getElementsByTagName('thead')[0].style.display = "table-header-group";

    // Verilerin görünürlüğünü güncelle
    dataVisible = true;
}


function HideTodoTable() {
    var tableBody = document.querySelectorAll("tbody")[0];

    // Verileri gizle
    tableBody.innerHTML = "";
    document.querySelectorAll("thead")[0].style.display = "none";

    // Verilerin görünürlüğünü güncelle
    dataVisible = false;
}



function TodoClick() {
    if (dataVisible) {
        // Veriler görünüyorsa, gizle
        HideTodoTable();
    } else {
        // Veriler görünmüyorsa, çek ve göster
        $.get("https://jsonplaceholder.typicode.com/todos", FillTable, "json");
    }
}

function renkDegistir(renk) {
    // Sayfanın arkaplan rengini değiştir
    document.body.style.backgroundColor = renk;
}







/*---------------------------    POST      -----------------------*/



function FillPostTable(data) {
    var tableBody = document.getElementById("postTable").getElementsByTagName('tbody')[0];

    // Temizleme işlemi: Var olan satırları temizle
    tableBody.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        var userIdCell = document.createElement("td");
        userIdCell.textContent = data[i].userId;
        row.appendChild(userIdCell);

        var idCell = document.createElement("td");
        idCell.textContent = data[i].id;
        row.appendChild(idCell);

        var titleCell = document.createElement("td");
        titleCell.textContent = data[i].title;
        row.appendChild(titleCell);

        var bodyCell = document.createElement("td");
        bodyCell.textContent = data[i].body;
        row.appendChild(bodyCell);

        tableBody.appendChild(row);
    }

    // Tablo başlığını göster
    document.getElementById("postTable").getElementsByTagName('thead')[0].style.display = "table-header-group";

    // Verilerin görünürlüğünü güncelle
    dataVisible = true;
}

function HidePostTable() {
    var tableBody = document.getElementById("postTable").getElementsByTagName('tbody')[0];

    // Verileri gizle
    tableBody.innerHTML = "";
    document.getElementById("postTable").getElementsByTagName('thead')[0].style.display = "none";

    // Verilerin görünürlüğünü güncelle
    dataVisible = false;
}



function PostClick() {
    if (dataVisible) {
        // Veriler görünüyorsa, gizle
        HidePostTable();
    } else {
        // Veriler görünmüyorsa, çek ve göster
        $.get("https://jsonplaceholder.typicode.com/posts", FillPostTable, "json");
    }
}



/* --------------      COMMENT         -------------*/




var dataVisible = false; // Verilerin görünürlüğünü takip eden değişken

function FillCommentTable(data) {
    var tableBody = document.getElementById("commentTable").getElementsByTagName('tbody')[0];

    // Temizleme işlemi: Var olan satırları temizle
    tableBody.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        var postIdCell = document.createElement("td");
        postIdCell.textContent = data[i].postId;
        row.appendChild(postIdCell);

        var idCell = document.createElement("td");
        idCell.textContent = data[i].id;
        row.appendChild(idCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = data[i].name;
        row.appendChild(nameCell);

         var emailCell = document.createElement("td");
        emailCell.textContent = data[i].email;
        row.appendChild(emailCell);

        var bodyCell = document.createElement("td");
        bodyCell.textContent = data[i].body;
        row.appendChild(bodyCell);

        tableBody.appendChild(row);
    }

    // Tablo başlığını göster
    document.getElementById("commentTable").getElementsByTagName('thead')[0].style.display = "table-header-group";

    // Verilerin görünürlüğünü güncelle
    dataVisible = true;
}

function HideCommentTable() {
    var tableBody = document.getElementById("commentTable").getElementsByTagName('tbody')[0];

    // Verileri gizle
    tableBody.innerHTML = "";
    document.getElementById("commentTable").getElementsByTagName('thead')[0].style.display = "none";

    // Verilerin görünürlüğünü güncelle
    dataVisible = false;
}



function CommentClick() {
    if (dataVisible) {
        // Veriler görünüyorsa, gizle
        HideCommentTable();
    } else {
        // Veriler görünmüyorsa, çek ve göster
        $.get("https://jsonplaceholder.typicode.com/comments", FillCommentTable, "json");
    }
}



/* --------------      ALBUM         -------------*/




var dataVisible = false; // Verilerin görünürlüğünü takip eden değişken

function FillAlbumTable(data) {
    var tableBody = document.getElementById("albumTable").getElementsByTagName('tbody')[0];

    // Temizleme işlemi: Var olan satırları temizle
    tableBody.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        var userIdCell = document.createElement("td");
        userIdCell.textContent = data[i].userId;
        row.appendChild(userIdCell);

        var idCell = document.createElement("td");
        idCell.textContent = data[i].id;
        row.appendChild(idCell);

        var titleCell = document.createElement("td");
        titleCell.textContent = data[i].title;
        row.appendChild(titleCell);

        tableBody.appendChild(row);
    }

    // Tablo başlığını göster
    document.getElementById("albumTable").getElementsByTagName('thead')[0].style.display = "table-header-group";

    // Verilerin görünürlüğünü güncelle
    dataVisible = true;
}

function HideAlbumTable() {
    var tableBody = document.getElementById("albumTable").getElementsByTagName('tbody')[0];

    // Verileri gizle
    tableBody.innerHTML = "";
    document.getElementById("albumTable").getElementsByTagName('thead')[0].style.display = "none";

    // Verilerin görünürlüğünü güncelle
    dataVisible = false;
}



function AlbumClick() {
    if (dataVisible) {
        // Veriler görünüyorsa, gizle
        HideAlbumTable();
    } else {
        // Veriler görünmüyorsa, çek ve göster
        $.get("https://jsonplaceholder.typicode.com/albums", FillAlbumTable, "json");
    }
}











var stilEklendi = false;

document.querySelector(".buttons").onclick = function() {
    // Stil eklemek istediğiniz elementi seçin
    var pageBody = document.body;

    // Eğer stil eklenmişse, kaldır; eklenmemişse, ekle
    if (stilEklendi) {
        pageBody.classList.remove("addedStil");
    } else {
        pageBody.classList.add("addedStil");
    }

    // Durumu tersine çevir
    stilEklendi = !stilEklendi;
};





