const form = document.querySelector("#wishlistForm");
const input = document.querySelector("#wishlistItem");
const ul = document.querySelector("#wishlist");

const addButton = document.querySelector("#addItem");
addButton.addEventListener("click", addItem);

const naughty = document.querySelector("#naughty");
naughty.addEventListener("click", () => {
    alert("Only coal for you!");
    naughty.checked = false;
})

function addItem(event) {
    event.preventDefault();
    const li = document.createElement("li");
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Wish please");
        return;
    }

    li.textContent = itemText;
    ul.appendChild(li);
}
