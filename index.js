// code your solution here
function superbowlWin(years) {
    const win = years.find(win => win.result === "W");
    if(win) {
        return win.year;
    }
    else {
        return undefined;
    }
}