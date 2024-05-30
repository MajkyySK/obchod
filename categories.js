const catbut = document.querySelector(".catbut");

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

let categories = document.querySelector("#categories");
catbut.onclick = close;
function close(){
    if(categories.style.display === "none" ||categories.style.display ==="none"){
        showSection('categories');
    }
    else{
        categories.style.display = "none";
    }
}