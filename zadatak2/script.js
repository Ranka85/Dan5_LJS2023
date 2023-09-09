/*<!-- Kreirati mini aplikaciju kojom pri učitavanju stranice korisnik 
    unosi broj karaktera (default, koji je varijabilan) koje želi da unese
    . Aplikacija generiše onoliko kvadratića koliko je korisnik defisao pri odabiru broja karaktera.
     Nakon toga korisnik ima mogućnost da u svaki kvadratić unese karakter (klikne na kvadratić), 
     doda novi prazni kvadratić (klikne npr. na + button), obriše postojeći (klikne npr. na X button iznad kvadratića),
      ili izmijeni vrijednost u postojećem kvadratiću. Pri unosi/izmjeni karaktera treba odraditi validaciju, 
      tj. provjeriti da li je korisnik unio alfabetski karakter (A-Z, a-zadatak2 i space) jer su jedino to dozvoljeni karakteru i razmak (space).
      Ako unijeti karakter nije iz dozvoljenog skupa, od korisnika tražiti da ponovo unese karakter.
       Pri svakoj akciji korisnika program treba da provjeri da li je t
       renutni niz karaktera (String) palindrom i da javi poruku korisniku 
       (ne preporučujem alert da ne bi korisnik bio obavezan svaki put da pritisne OK ili Cancel već poruku možete ispisivati ispod kvadratića)
        “Unijeta riječ je/nije palindrom”.
 -->*/

 /*Kreirati mini aplikaciju kojom pri učitavanju stranice korisnik 
 unosi broj karaktera (default, koji je varijabilan) koje želi da unese*/

//console log number from Input-Number" after click on submit;
let inputNumber = document.getElementById("input-number")

function inputNumberButtonClick(event) {
    console.log(inputNumber.value)
}
inputNumber.addEventListener("click", inputNumberButtonClick)