function Telefon(marka, cena, kolor){
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}

Telefon.prototype.printIInfo = function(){
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
var samsung = new Telefon("Samsung", 800, "czarny");
var iPhone = new Telefon("Apple", 2250, "biały");
var onePlus = new Telefon("OnePlus", 500, "srebrny");

samsung.printIInfo();
iPhone.printIInfo();
onePlus.printIInfo();