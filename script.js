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






/* --------------      PHOTOS         -------------*/




var dataVisible = false; // Verilerin görünürlüğünü takip eden değişken

function FillPhotoTable(data) {
    var tableBody = document.getElementById("photoTable").getElementsByTagName('tbody')[0];

    // Temizleme işlemi: Var olan satırları temizle
    tableBody.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        var albumIdCell = document.createElement("td");
        albumIdCell.textContent = data[i].albumId;
        row.appendChild(albumIdCell);

        var idCell = document.createElement("td");
        idCell.textContent = data[i].id;
        row.appendChild(idCell);

        var titleCell = document.createElement("td");
        titleCell.textContent = data[i].title;
        row.appendChild(titleCell);





        var urlCell = document.createElement("td");
        var image = document.createElement("img");
        image.src = data[i].url;
        image.width = "50";
        image.height = "50";
        image.alt = "Image";
        image.style.cursor = "pointer";
        urlCell.appendChild(image);

        
    
        // Add a click event listener to open the image in a new page
        (function (index) {
            row.addEventListener("click", function () {
                window.open(data[index].url, "_blank");
            });
        })(i);;

        row.appendChild(urlCell);





        var thumbnailCell = document.createElement("td");
        var thumbnailImage = document.createElement("img");
        thumbnailImage.src = data[i].thumbnailUrl;
        thumbnailImage.alt = "Thumbnail";
        thumbnailCell.appendChild(thumbnailImage);
        row.appendChild(thumbnailCell);

        tableBody.appendChild(row);
    }

    // Tablo başlığını göster
    document.getElementById("photoTable").getElementsByTagName('thead')[0].style.display = "table-header-group";

    // Verilerin görünürlüğünü güncelle
    dataVisible = true;
}

function HidePhotoTable() {
    var tableBody = document.getElementById("photoTable").getElementsByTagName('tbody')[0];

    // Verileri gizle
    tableBody.innerHTML = "";
    document.getElementById("photoTable").getElementsByTagName('thead')[0].style.display = "none";

    // Verilerin görünürlüğünü güncelle
    dataVisible = false;
}



function PhotoClick() {
    if (dataVisible) {
        // Veriler görünüyorsa, gizle
        HidePhotoTable();
    } else {
        // Veriler görünmüyorsa, çek ve göster
        $.get("https://jsonplaceholder.typicode.com/photos", FillPhotoTable, "json");
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




function addTodo() {
    var userId = document.getElementById("userId").value;
    var title = document.getElementById("title").value;
    var completed = document.getElementById("completed").checked;

    // Yeni todo nesnesi oluştur
    var newTodo = {
        userId: userId,
        title: title,
        completed: completed
    };

    // Post işlemi için jQuery kullanarak API'ye gönder
    $.ajax({
        type: "POST",
        url: "https://jsonplaceholder.typicode.com/todos",
        data: JSON.stringify(newTodo),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            // Post işlemi başarılı olduğunda, tabloyu güncelle
            FillTable(response);

            // Eklenen todo'nun bilgilerini ekranda göster
            showAddedTodo(response);
        },
        error: function(error) {
            console.error("Post işlemi başarısız: ", error);
        }
    });
}

function showAddedTodo(todo) {
    var addedTodoDiv = document.getElementById("addedTodo");

    // Var olan içeriği temizle
    addedTodoDiv.innerHTML = "";

    // Yeni eklenen todo'nun bilgilerini ekrana yaz
    var infoParagraph = document.createElement("p");
    infoParagraph.textContent = "Yeni Eklenen Todo Bilgileri:";
    addedTodoDiv.appendChild(infoParagraph);

    var userIdParagraph = document.createElement("p");
    userIdParagraph.textContent = "User ID: " + todo.userId;
    addedTodoDiv.appendChild(userIdParagraph);

    var titleParagraph = document.createElement("p");
    titleParagraph.textContent = "Title: " + todo.title;
    addedTodoDiv.appendChild(titleParagraph);

    var completedParagraph = document.createElement("p");
    completedParagraph.textContent = "Completed: " + todo.completed;
    addedTodoDiv.appendChild(completedParagraph);

    // ID'yi göster
    var idParagraph = document.createElement("p");
    idParagraph.textContent = "ID: " + todo.id;
    addedTodoDiv.appendChild(idParagraph);
}




