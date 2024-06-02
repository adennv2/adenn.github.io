// Fungsi untuk menambahkan tugas baru ke dalam daftar
function addText() {
    var inputBox = document.getElementById("input-box");
    var inputValue = inputBox.value.trim(); // Menghilangkan spasi kosong di awal dan akhir

    if (inputValue === "") {
        alert("Please enter a task."); // Munculkan peringatan jika input kosong
        return;
    }

    var listContainer = document.getElementById("list-container");
    var newListItem = document.createElement("li");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", "deleteTask(this)");

    // Tambahkan tanggal
    var inputDate = document.getElementById("input-date").value;
    var dateSpan = document.createElement("span");
    dateSpan.textContent = " | Date: " + inputDate;

    // // Tambahkan level
    // var inputLevel = document.getElementById("input-level").value;
    // var levelSpan = document.createElement("span");
    // levelSpan.textContent = " | Level: " + inputLevel;

    // newListItem.textContent = inputValue;
    // newListItem.appendChild(deleteButton);
    // newListItem.appendChild(dateSpan);
    // newListItem.appendChild(levelSpan);

    // listContainer.appendChild(newListItem);

    // Reset input box
    inputBox.value = "";
    document.getElementById("input-date").value = ""; // Reset input tanggal
}

// Fungsi untuk menghapus tugas dari daftar
function deleteTask(button) {
    var listItem = button.parentNode;
    var listContainer = listItem.parentNode;
    listContainer.removeChild(listItem);
}

let level = 0; // Initialize level

function addText() {
    const inputBox = document.getElementById('input-box');
    const inputDate = document.getElementById('input-date');
    const inputLevel = document.getElementById('input-level');
    const listContainer = document.getElementById('list-container');

    const text = inputBox.value;
    const date = inputDate.value;
    const levelValue = inputLevel.value;

    if (text === '' || date === '' || levelValue === '') {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `${text} (Due: ${date}, Level: ${levelValue}) <button onclick="deleteTask(this)">Delete</button>`;

    listContainer.appendChild(li);

    // Increase the level by 5 points
    level += 5;
    document.getElementById('level').textContent = level;

    // Clear the input fields
    inputBox.value = '';
    inputDate.value = '';
    inputLevel.value = 'low';
}

function deleteTask(element) {
    const li = element.parentElement;
    li.remove();
}
