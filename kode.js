//Merubah Suatu Css Di Html
document.querySelector("#konfirmasi").onclick = function(){
 const h1 = document.querySelector("#Ubah1");
 const warna = document.createElement("b");
 h1.innerText="";
 warna.innerText ="Text Berubah";
 h1.append(warna);
 h1.style.color = "rgb(37, 108, 138)";
 h1.style.transition =  "1s ease";
}

//Getter And setter : Cara Lebih baik dalam dapat/membuat data dari suatu object
/*
class user{
    constructor (pertama,kedua){
        this.pertama = pertama;
        this.kedua = kedua;
    }
    set pertama(value){
        this.namaDepan = value.toUpperCase();
    }
    set kedua(value){
        this.namaBelakang = value.toUpperCase();
    }
    get namaLengkap(){
        return this.namaDepan +" "+ this.namaBelakang;
    }
};

let user1= new user("Abd","Walid");
let user2= new user("Ahmand","Reznova");
let user3= new user("Makulu","Rajal");

paraUser = [user1.namaLengkap,user2.namaLengkap,user3.namaLengkap];

for (let i = 0 ; i < paraUser.length ; i++){
    let br = "<br>";
    document.querySelector("#textMuncul").innerText += paraUser[i];
    document.querySelector("#textMuncul").innerHTML += br;
}
*/

//piramida tangga dari loop
/* function piramidaInput(){
 let baris = window.prompt("Masukan Berapa Baris : ");
 let symbol = window.prompt("Masukan Simbol : ?");
 for (let i = 0; i <= baris; i++){

     for(let j = 0; j <= i; j++){
        document.querySelector("#simbol").innerHTML += symbol;
     }
    let br = "<br>";
    document.querySelector("#textMuncul").innerHTML += br;
 }
}

piramidaInput()
*/

//"Loop for" DI Array
/*
let makanan = ["Nasi","Telur","Ikan Goreng"];
for (let i = 0; i < makanan.length; i++ ){
console.log(makanan[i]);
};

*\


/*
//Array : Variable dgn dua atau lebih nilai atau isi didalamny
 var mobil = ["Toyota","Merchendez","ferrari"];
 console.log(mobil[0]);
 console.log(mobil[1]);
 //jika mw masukin nomor data yg tdk ad di mobil hasilny tdk diketahui[unidentified]
 console.log(mobil[3]);
*/

//Object : Variable yg Menampung Macam isi dan propeti sperti manusia dgn umur atau nama didalamnya,serta bisa melakukan sesuatu :)
/*
var human = {
    nama : "walid",
    umur :69,

    kerjaan : function()
    {
        console.log("Kodang koding");
    },

    makan: function(){
        console.log("Si Walid Makan Nasi");
    }
};

//Yg keluar (output)
console.log(human.nama);
human['umur'];

console.log(human.umur);

//tambah () Karena ad function didalam data kerjaan
human.kerjaan();
human.makan();
*/

//Fungsi(Function) tempat utk menapung perintah bedakan tempat utk menampung nilai (variable)
/*
function Panggil(nomor){
    return nomor + 12;
};
var hasil = Panggil(32);
console.log(hasil);

*/



/* String ke Number(nomor),atau String ke Booelan Atau Sebaliknya
var umur;
umur= window.prompt("masukan umurmu! :");
umur = Number(umur);
umur += 1;
console.log(typeof umur)
console.log("umurmu adalah",umur);

var varKu;
varKu = Boolean("true");
console.log(typeof varKu);
console.log(varKu);
*/

/*proses data yg dimasukin di html
document.getElementById("kirim").onclick = function(){
 var myNama = document.getElementById("myNama").value;
 console.log("Halo",myNama);
};
*/


/*
// User Input (termudah!)
var nama = window.prompt("Siapa Namamu?");
console.log("Halo",nama);
*/

//alert("Menyukai Pizza!")


/* Penjumlahan
var teman = 10;
//teman = teman + 1;
//teman = teman - 1;
//teman = teman * 2;
//teman = teman / 2;
//teman = teman ** 2;
//var sisaTeman = teman % 3
//teman +=1;
//teman -=1;
//teman *=2;
//teman /=2;
//teman **=1;
//teman %=3;

// Penjumlahan yg punya dua operasi pake "()" utk membuat penjumlahan tdk di hitung langsung :)
var teman;
teman = (10 + 2) / 2;
console.log(teman);

console.log(teman);
//console.log(sisaTeman);

*/

/* Pelajaran Variable
var umur = 23;
var namaDepan = "Abd";
var namaBelakang ="Walid";
var namaLengkap = namaDepan +" "+ namaBelakang;
var online = true;
var apapun = null;
const pi = 3.411;
umur + 1;



console.log("umur",umur);
console.log("nama kamu adalah",namaLengkap);
console.log("apakah kamu onlen?",online)
console.log(apapun);
*/
