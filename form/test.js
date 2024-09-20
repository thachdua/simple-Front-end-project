const hiddenDropdownClass = "hidden-dropdown";

function show_dropdown() {
    let dropdown = this.nextElementSibling;
    dropdown.classList.add('.show-hidden-dropdown')
}

function hide_dropdown() {
    let dropdown = this.nextElementSibling;
    dropdown.classList.remove('.show-hidden-dropdown')
}