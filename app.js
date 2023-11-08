/*
1-bakiye görüntüleme
2-para çekme
3-para yatırma
4-çıkış


ATM uygulaması
*/
let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye görüntüleme" + yeniSatir
    + "2-Para çekme" + yeniSatir
    + "3-Para yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "Lütfen bir değer giriniz";

let deger = prompt(metin);
switch (deger) {
    case "1":
        alert("Bakiyeninz: " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
        if (cekilecekTutar < bakiye) {
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiyeniz: " + bakiye);
        } else {
            alert("Bakiyenizden fazal para çekemezsiniz! " + yeniSatir
                + "Bakiyeniz: " + bakiye + " " + "Çekmek İstediğiniz Tutar: " + cekilecekTutar);
        }
        break;

    case "3":
        let yatırılacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz:"));
        bakiye = bakiye + yatırılacakTutar;
        alert("Güncel Bakiyeniz: " + bakiye);
        break;
    case "4":
        alert("Sistemden Çıkış yapıldı");
        break;
    default:
        alert("Lütfen 1 ile 4 arasında değer giriniz");
        break;

}
