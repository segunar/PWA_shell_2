console.log('fnc')


//======================================================================
//=== SHOW / HIDE TOP NAV MENU ===
//======================================================================
function topMenuTogle() {
    if ($("#productListContainer").hasClass("slideOut")) {
        showSideNavMenu();
    }
    else {
        hideSideNavMenu();
    }
}
//----------------------------------
function showSideNavMenu() {
    $("#productListContainer").removeClass("slideOut");
    $("#productListContainer").addClass("slideIn");
}
//----------------------------------
function hideSideNavMenu() {
    $("#productListContainer").removeClass("slideIn");
    $("#productListContainer").addClass("slideOut");
}

