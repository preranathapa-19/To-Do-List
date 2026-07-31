const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        li.className =
            "flex justify-between items-center bg-pink-100 px-4 py-2 rounded-lg mt-2 cursor-pointer";

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className =
            "text-red-600 text-xl font-bold cursor-pointer";

        li.appendChild(span);

        inputBox.value = "";

        saveData();
    }
}

