function Phone(brand, price, color, diagonal) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.diagonal = diagonal;
}
Phone.prototype.printInfo = function() {
    console.log("The prone brand is " + this.brand + ", color is " + this.color + ", the price is " +this.price + " and the diagonal is " + this.diagonal + ".");
}
var SamsungGalaxyS6 = new Phone("Samsung", 10000, "black", 5.5);
var iPhone6s = new Phone("Apple", 2250, "silver", 5.5);
var OnePlusOne = new Phone("OnePlus", 1150, "white", 5.5);

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();