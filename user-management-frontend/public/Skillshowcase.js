function toggleDropdown(id) {
    // Get the dropdown element by ID
    const dropdown = document.getElementById(id);

    // Toggle the display style between 'block' and 'none'
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
