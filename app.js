// // Dropdown menyuni ochib-yopish uchun
// document.getElementById("kitoblarButton").addEventListener("click", function(event) {
//     event.preventDefault(); // Sahifa yangilanishini oldini olish
//     var dropdown = document.getElementById("kitoblarDropdown");
//     dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
// });

// // Tugmachadan tashqarida bosilganda dropdownni yopish uchun
// window.addEventListener("click", function(event) {
//     var dropdown = document.getElementById("kitoblarDropdown");
//     if (!event.target.closest("#kitoblarButton") && !event.target.closest("#kitoblarDropdown")) {
//         dropdown.style.display = "none";
//     }
// });

function openTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

