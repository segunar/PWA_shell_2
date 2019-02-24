console.log('cnt')
//======================================================================
//=== TOGGLE TOP MENU ===
//======================================================================
$("#productBtn").click(function () {
    topMenuTogle();
});

//======================================================================
//=== CHANGE WIDTH OF SEARCH INPUT BOX ===
//======================================================================
$("#searchInput").focus(function () {
    $("#searchInput").width('300px')
})
$("#searchInput").focusout(function () {
    $("#searchInput").width('80px');
});