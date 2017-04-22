var MenuItem = (function () {
    // A straightforward constructor. 
    function MenuItem(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    MenuItem.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    MenuItem.prototype.getName = function () {
        return 'sss';
    };
    return MenuItem;
}());
// Create a new instance of the Menu class.
var sundayMenu = new MenuItem(["pancakes", "waffles", "orange juice"], 1);
var i;
i = sundayMenu.getName();
// Call the list method.
sundayMenu.list();
// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.
// Receives one argument of type T,
// Returns an array of type T.
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
//# sourceMappingURL=test.js.map