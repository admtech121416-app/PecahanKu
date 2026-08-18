const fs = require('fs');

const exploreLessons = {
  'Perkalian Pecahan': {
    id: 'Explore_Perkalian Pecahan',
    title: 'Perkalian Pecahan (Soal Cerita)',
    emoji: '✖️',
    intro: 'Dalam kehidupan sehari-hari, perkalian pecahan sering digunakan saat kita mengambil sebagian dari benda yang sudah tidak utuh. Misalnya, menghitung bahan masakan, luas kebun, atau potongan kue.',
    examples: [
      {
        id: 'ep1',
        question: 'Ibu memiliki 3/4 loyang kue brownies. Saat paman datang, paman memakan 1/3 dari kue yang ada. Berapa bagian kue yang dimakan paman dari keseluruhan loyang?',
        answer: '1/4 bagian',
        explanation: 'Kalikan bagian yang dimakan paman dengan sisa kue ibu: 1/3 × 3/4 = 3/12. Disederhanakan dengan membagi pembilang dan penyebut dengan 3, hasilnya adalah 1/4 loyang.'
      },
      {
        id: 'ep2',
        question: 'Sebuah taman berbentuk persegi panjang memiliki panjang 4/5 dekameter dan lebar 2/3 dekameter. Berapakah luas taman tersebut?',
        answer: '8/15 dekameter persegi',
        explanation: 'Luas persegi panjang = panjang × lebar = 4/5 × 2/3. Kalikan pembilang (4×2 = 8) dan penyebut (5×3 = 15). Hasilnya 8/15 dekameter persegi.'
      },
      {
        id: 'ep3',
        question: 'Pak Ali memiliki lahan pertanian. 2/5 dari lahan tersebut ditanami sayuran. Dari area sayuran itu, 3/4 bagiannya ditanami bayam. Berapa bagian lahan yang ditanami bayam?',
        answer: '3/10 bagian',
        explanation: 'Kalikan 3/4 dengan 2/5. 3/4 × 2/5 = 6/20. Sederhanakan dengan membagi 2 menjadi 3/10 bagian.'
      },
      {
        id: 'ep4',
        question: 'Setiap hari botol minum Siti terisi air sebanyak 3/8 liter. Jika Siti minum botol penuh selama 5 hari berturut-turut, berapa liter total air yang diminum Siti?',
        answer: '15/8 atau 1 7/8 liter',
        explanation: '5 hari × 3/8 liter = 5/1 × 3/8 = 15/8 liter. Dijadikan pecahan campuran menjadi 1 7/8 liter.'
      },
      {
        id: 'ep5',
        question: 'Resep roti membutuhkan 2 1/2 sendok makan ragi. Jika Ibu ingin membuat setengah (1/2) dari resep aslinya, berapa ragi yang dibutuhkan?',
        answer: '1 1/4 sendok makan',
        explanation: 'Ubah 2 1/2 menjadi 5/2. Kemudian kalikan dengan 1/2: 5/2 × 1/2 = 5/4. Jadikan pecahan campuran menjadi 1 1/4 sendok makan.'
      }
    ]
  },
  'Pembagian Pecahan': {
    id: 'Explore_Pembagian Pecahan',
    title: 'Pembagian Pecahan (Soal Cerita)',
    emoji: '➗',
    intro: 'Pembagian pecahan sangat berguna untuk membagi benda ke dalam ukuran yang lebih kecil secara merata, misalnya memotong pita panjang menjadi potongan-potongan pendek.',
    examples: [
      {
        id: 'eb1',
        question: 'Siti memiliki pita sepanjang 4/5 meter. Pita tersebut akan dipotong-potong menjadi beberapa bagian yang masing-masing panjangnya 1/10 meter. Berapa potong pita yang diperoleh?',
        answer: '8 potong',
        explanation: 'Bagi 4/5 dengan 1/10. Artinya 4/5 ÷ 1/10 = 4/5 × 10/1 = 40/5 = 8 potong.'
      },
      {
        id: 'eb2',
        question: 'Ada 3 1/2 kg gula pasir yang akan dibungkus ke dalam kantong plastik kecil. Setiap kantong berisi 1/4 kg gula. Berapa banyak kantong yang dibutuhkan?',
        answer: '14 kantong',
        explanation: 'Ubah 3 1/2 menjadi pecahan biasa 7/2. Lalu hitung 7/2 ÷ 1/4 = 7/2 × 4/1 = 28/2 = 14 kantong.'
      },
      {
        id: 'eb3',
        question: 'Seorang petani memiliki 6 hektar sawah. Ia akan membagi sawah tersebut kepada anak-anaknya, masing-masing mendapat 1 1/2 hektar. Berapa orang anak petani tersebut?',
        answer: '4 orang',
        explanation: 'Ubah 1 1/2 menjadi 3/2. Lalu hitung 6 ÷ 3/2 = 6/1 × 2/3 = 12/3 = 4 orang anak.'
      },
      {
        id: 'eb4',
        question: 'Ibu memiliki 2/3 liter sirup kental. Sirup itu akan dituang merata ke dalam gelas berukuran 1/6 liter. Berapa gelas yang dibutuhkan?',
        answer: '4 gelas',
        explanation: 'Bagi 2/3 dengan 1/6. Yaitu 2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4 gelas.'
      },
      {
        id: 'eb5',
        question: 'Sebuah kaleng cat berisi 4/5 bagian penuh. Cat tersebut digunakan untuk mengecat tembok yang luasnya 8 meter persegi secara merata. Berapa bagian cat untuk tiap meter perseginya?',
        answer: '1/10 bagian',
        explanation: 'Bagi bagian cat dengan luas. 4/5 ÷ 8 = 4/5 ÷ 8/1 = 4/5 × 1/8 = 4/40 = 1/10 bagian cat per meter persegi.'
      }
    ]
  },
  'Pecahan ke Desimal': {
    id: 'Explore_Pecahan ke Desimal',
    title: 'Pecahan ke Desimal (Soal Cerita)',
    emoji: '🔄',
    intro: 'Angka pecahan seringkali perlu diubah menjadi desimal agar lebih mudah digunakan pada alat ukur digital, seperti timbangan, kalkulator, atau gelas takar.',
    examples: [
      {
        id: 'epd1',
        question: 'Ibu menimbang terigu dan jarum timbangan menunjukkan angka 3/4 kg. Jika ibu menggunakan timbangan digital, angka berapakah yang akan muncul?',
        answer: '0,75 kg',
        explanation: 'Ubah pecahan 3/4 agar penyebutnya jadi 100 dengan mengalikan pembilang dan penyebut dengan 25. Menjadi 75/100 = 0,75.'
      },
      {
        id: 'epd2',
        question: 'Siswa kelas 6 diminta berlari mengelilingi lapangan sejauh 1 2/5 kilometer. Bagaimana penulisan jarak tersebut jika dicatat menggunakan bilangan desimal?',
        answer: '1,4 kilometer',
        explanation: 'Pecahan campuran 1 2/5 bisa dilihat sebagai 1 + 2/5. Ubah 2/5 menjadi persepuluh: dikali 2 menjadi 4/10 atau 0,4. Jadi, 1 + 0,4 = 1,4.'
      },
      {
        id: 'epd3',
        question: 'Sebuah gelas resep menuliskan air sebanyak 7/8 liter. Ayah bingung karena gelas ukurnya hanya menggunakan desimal. Angka desimal berapa yang setara dengan 7/8?',
        answer: '0,875',
        explanation: 'Untuk penyebut 8, kalikan dengan 125 agar menjadi 1000. 7 × 125 = 875. Maka 875/1000 = 0,875.'
      },
      {
        id: 'epd4',
        question: 'Lama perjalanan dari rumah ke sekolah adalah 3/20 jam. Jika ditulis dalam format desimal, berapakah angkanya?',
        answer: '0,15 jam',
        explanation: 'Ubah 3/20 agar berpenyebut 100. Kalikan atas dan bawah dengan 5. Menjadi 15/100 = 0,15.'
      },
      {
        id: 'epd5',
        question: 'Udin berhasil menjawab 19 benar dari total 20 soal. Berapa nilai yang didapat Udin dalam bentuk desimal (dari rentang 0 sampai 1)?',
        answer: '0,95',
        explanation: 'Pecahannya adalah 19/20. Kalikan 5 agar per 100. (19×5)/(20×5) = 95/100 = 0,95.'
      }
    ]
  },
  'Desimal ke Pecahan': {
    id: 'Explore_Desimal ke Pecahan',
    title: 'Desimal ke Pecahan (Soal Cerita)',
    emoji: '🔄',
    intro: 'Terkadang takaran desimal terasa kaku. Mengubahnya menjadi pecahan biasa bisa mempermudah kita membayangkan potongan atau bagian bendanya secara visual.',
    examples: [
      {
        id: 'edp1',
        question: 'Harga sebungkus permen menunjukkan diskon sebesar 0,65 dari harga aslinya. Tulislah diskon tersebut dalam bentuk pecahan yang paling sederhana!',
        answer: '13/20',
        explanation: '0,65 berarti 65/100. Kita sederhanakan dengan membagi 5 pada pembilang dan penyebut: 65 ÷ 5 = 13, 100 ÷ 5 = 20. Hasilnya 13/20.'
      },
      {
        id: 'edp2',
        question: 'Mesin fotokopi mengalami penyusutan tinta sebanyak 0,8 bagian. Berapa pecahan biasa dari nilai tersebut?',
        answer: '4/5',
        explanation: '0,8 berarti satu angka di belakang koma, yaitu 8/10. Disederhanakan dibagi 2 menjadi 4/5.'
      },
      {
        id: 'edp3',
        question: 'Dalam suatu kompetisi sains, poin tambahan yang diberikan adalah 2,25 poin. Ubah ke dalam bentuk pecahan campuran!',
        answer: '2 1/4',
        explanation: '2,25 berarti 2 satuan utuh dan 0,25. 0,25 adalah 25/100 yang bisa disederhanakan dibagi 25 menjadi 1/4. Jadi 2 1/4.'
      },
      {
        id: 'edp4',
        question: 'Sepotong pipa besi dipotong menjadi 0,125 bagiannya saja untuk dijadikan engsel. Berapa pecahannya?',
        answer: '1/8',
        explanation: '0,125 adalah 125/1000. Jika disederhanakan dengan membagi atas bawah menggunakan 125, hasilnya persis 1/8.'
      },
      {
        id: 'edp5',
        question: 'Ibu menggunakan santan 0,35 liter. Berapa pecahan sederhana liter santan yang digunakan?',
        answer: '7/20',
        explanation: '0,35 = 35/100. Dibagi 5 pada pembilang dan penyebut hasilnya 7/20.'
      }
    ]
  },
  'Membandingkan Desimal': {
    id: 'Explore_Membandingkan Desimal',
    title: 'Bandingkan Desimal (Soal Cerita)',
    emoji: '⚖️',
    intro: 'Membandingkan desimal penting di dunia nyata untuk mencari yang paling murah, paling panjang, paling berat, atau yang memiliki volume terbanyak.',
    examples: [
      {
        id: 'emb1',
        question: 'Di pasar raya, Cabai A beratnya 0,5 kg dan Cabai B beratnya 0,45 kg. Cabai manakah yang lebih berat?',
        answer: 'Cabai A',
        explanation: 'Samakan digit desimal. Cabai A = 0,50 kg, Cabai B = 0,45 kg. Karena 50 > 45, maka Cabai A lebih berat.'
      },
      {
        id: 'emb2',
        question: 'Rekor lari Siti adalah 12,3 detik. Rekor lari Lani adalah 12,25 detik. Waktu siapa yang lebih cepat (lebih kecil)?',
        answer: 'Lani',
        explanation: '12,3 disamakan menjadi 12,30. Lani memiliki 12,25. Waktu terkecil berarti 12,25, jadi Lani lebih cepat.'
      },
      {
        id: 'emb3',
        question: 'Tali merah panjangnya 2,8 meter, tali biru panjangnya 2,75 meter. Tali mana yang paling panjang?',
        answer: 'Tali merah',
        explanation: 'Tali merah 2,80 m, Tali biru 2,75 m. 2,80 lebih besar dari 2,75.'
      },
      {
        id: 'emb4',
        question: 'Pak RT membeli cat A seharga 15,50 ribu per liter, dan cat B seharga 15,5 ribu per liter. Mana yang lebih mahal?',
        answer: 'Keduanya sama mahal',
        explanation: '15,50 dan 15,5 memiliki nilai yang sama. Angka nol di akhir desimal tidak mengubah nilainya.'
      },
      {
        id: 'emb5',
        question: 'Berat ayam pertama adalah 1,08 kg dan ayam kedua 1,1 kg. Ayam mana yang lebih ringan?',
        answer: 'Ayam pertama',
        explanation: 'Ayam pertama 1,08 kg. Ayam kedua 1,10 kg. 08 lebih kecil dari 10, maka ayam pertama lebih ringan.'
      }
    ]
  },
  'Mengurutkan Desimal': {
    id: 'Explore_Mengurutkan Desimal',
    title: 'Urutkan Desimal (Soal Cerita)',
    emoji: '🔢',
    intro: 'Mengurutkan desimal biasanya digunakan saat membuat klasemen kejuaraan, mengurutkan barang dari yang paling murah, atau merapikan data-data ukuran fisik.',
    examples: [
      {
        id: 'eud1',
        question: 'Hasil tangkapan ikan nelayan adalah: Tongkol 2,5 kg, Tuna 2,05 kg, Kakap 2,15 kg. Urutkan tangkapan ikan dari yang paling ringan!',
        answer: 'Tuna (2,05) ; Kakap (2,15) ; Tongkol (2,5)',
        explanation: 'Samakan desimal: 2,50 ; 2,05 ; 2,15. Dari yang teringan (terkecil): 2,05 < 2,15 < 2,50.'
      },
      {
        id: 'eud2',
        question: 'Nilai ujian 3 siswa adalah: Anton 85,5; Budi 85,25; Caca 85,8. Siapa peraih juara 1, 2, dan 3 (dari yang terbesar)?',
        answer: 'Caca, Anton, Budi',
        explanation: 'Samakan desimal: 85,50 ; 85,25 ; 85,80. Terbesar adalah 85,80 (Caca), lalu 85,50 (Anton), terakhir 85,25 (Budi).'
      },
      {
        id: 'eud3',
        question: 'Suhu di kota A = 27,6°C, kota B = 27,08°C, kota C = 27,15°C. Urutkan kota dari yang paling dingin!',
        answer: 'Kota B, Kota C, Kota A',
        explanation: 'Samakan menjadi 27,60 ; 27,08 ; 27,15. Dingin berarti suhu paling rendah (kecil): 27,08 < 27,15 < 27,60.'
      },
      {
        id: 'eud4',
        question: 'Ketebalan buku: Buku Biru 1,4 cm, Buku Merah 1,45 cm, Buku Hijau 1,05 cm. Urutkan dari buku yang paling tebal!',
        answer: 'Buku Merah, Buku Biru, Buku Hijau',
        explanation: 'Desimal: 1,40 ; 1,45 ; 1,05. Tebal ke tipis: 1,45 > 1,40 > 1,05.'
      },
      {
        id: 'eud5',
        question: 'Harga barang di toko: Sabun Rp3,5 ribu, Sikat Rp3,05 ribu, Odol Rp3,25 ribu. Urutkan dari yang paling murah!',
        answer: 'Sikat, Odol, Sabun',
        explanation: 'Ubah menjadi: 3,50 ; 3,05 ; 3,25. Murah ke mahal: 3,05 < 3,25 < 3,50.'
      }
    ]
  }
};

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');
const exportString = 'export const lessons: Record<string, LessonData> = {\n';
const injectionIndex = content.indexOf(exportString) + exportString.length;

let newEntries = '';
for (const [key, value] of Object.entries(exploreLessons)) {
  newEntries += `  '${key}': ${JSON.stringify(value, null, 2)},\n`;
}

const newContent = content.slice(0, injectionIndex) + newEntries + content.slice(injectionIndex);
fs.writeFileSync('src/data/lessons.ts', newContent);
console.log('Lessons updated.');

