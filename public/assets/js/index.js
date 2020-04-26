document.addEventListener('DOMContentLoaded', function() {

    // contact me button-dropdown
    var elemsDd = document.querySelectorAll('.dropdown-trigger');
    var instancesDd = M.Dropdown.init(elemsDd);

    // projects & skills section enable dropdown
    var elemsProj = document.querySelectorAll('.collapsible');
    var instancesProj = M.Collapsible.init(elemsProj);
  });

// dark mode switch
const toggleSwitch = document.querySelector('.switch label input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// saving to localstorage future preferences 
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// checking user preferences for dark / light theme 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}