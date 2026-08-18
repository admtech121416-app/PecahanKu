export interface LessonExample {
  options?: string[];
  id: string;
  question: string;
  answer: string;
  explanation: string;
}

export interface LessonData {
  id: string;
  title: string;
  emoji: string;
  intro: string;
  examples: LessonExample[];
}

export const lessons: Record<string, LessonData> = {
  'Perkalian Pecahan': {
  "id": "Explore_Perkalian Pecahan",
  "title": "Perkalian Pecahan (Soal Cerita)",
  "emoji": "✖️",
  "intro": "Dalam kehidupan sehari-hari, perkalian pecahan sering digunakan saat kita mengambil sebagian dari benda yang sudah tidak utuh. Misalnya, menghitung bahan masakan, luas kebun, atau potongan kue.",
  "examples": [
    {
      "id": "ep1",
      "question": "Ibu memiliki 3/4 loyang kue brownies. Saat paman datang, paman memakan 1/3 dari kue yang ada. Berapa bagian kue yang dimakan paman dari keseluruhan loyang?",
      "answer": "1/4 bagian",
        "options": ["1/4 bagian","1/2 bagian","3/4 bagian","0/4 bagian"],
        "explanation": "Kalikan bagian yang dimakan paman dengan sisa kue ibu: 1/3 × 3/4 = 3/12. Disederhanakan dengan membagi pembilang dan penyebut dengan 3, hasilnya adalah 1/4 loyang."
    },
    {
      "id": "ep2",
      "question": "Sebuah taman berbentuk persegi panjang memiliki panjang 4/5 dekameter dan lebar 2/3 dekameter. Berapakah luas taman tersebut?",
      "answer": "8/15 dekameter persegi",
        "options": ["8/15 dekameter persegi","12/15 dekameter persegi","8/16 dekameter persegi","6/15 dekameter persegi"],
        "explanation": "Luas persegi panjang = panjang × lebar = 4/5 × 2/3. Kalikan pembilang (4×2 = 8) dan penyebut (5×3 = 15). Hasilnya 8/15 dekameter persegi."
    },
    {
      "id": "ep3",
      "question": "Pak Ali memiliki lahan pertanian. 2/5 dari lahan tersebut ditanami sayuran. Dari area sayuran itu, 3/4 bagiannya ditanami bayam. Berapa bagian lahan yang ditanami bayam?",
      "answer": "3/10 bagian",
        "options": ["3/10 bagian","4/10 bagian","3/11 bagian","3/13 bagian"],
        "explanation": "Kalikan 3/4 dengan 2/5. 3/4 × 2/5 = 6/20. Sederhanakan dengan membagi 2 menjadi 3/10 bagian."
    },
    {
      "id": "ep4",
      "question": "Setiap hari botol minum Siti terisi air sebanyak 3/8 liter. Jika Siti minum botol penuh selama 5 hari berturut-turut, berapa liter total air yang diminum Siti?",
      "answer": "15/8 atau 1 7/8 liter",
        "options": ["15/8 atau 3 7/8 liter","15/8 atau 2 7/8 liter","15/8 atau 1 7/8 liter","15/11 atau 1 7/8 liter"],
        "explanation": "5 hari × 3/8 liter = 5/1 × 3/8 = 15/8 liter. Dijadikan pecahan campuran menjadi 1 7/8 liter."
    },
    {
      "id": "ep5",
      "question": "Resep roti membutuhkan 2 1/2 sendok makan ragi. Jika Ibu ingin membuat setengah (1/2) dari resep aslinya, berapa ragi yang dibutuhkan?",
      "answer": "1 1/4 sendok makan",
        "options": ["1 1/2 sendok makan","2 1/4 sendok makan","1 1/6 sendok makan","1 1/4 sendok makan"],
        "explanation": "Ubah 2 1/2 menjadi 5/2. Kemudian kalikan dengan 1/2: 5/2 × 1/2 = 5/4. Jadikan pecahan campuran menjadi 1 1/4 sendok makan."
    }
  ]
},
  'Pembagian Pecahan': {
  "id": "Explore_Pembagian Pecahan",
  "title": "Pembagian Pecahan (Soal Cerita)",
  "emoji": "➗",
  "intro": "Pembagian pecahan sangat berguna untuk membagi benda ke dalam ukuran yang lebih kecil secara merata, misalnya memotong pita panjang menjadi potongan-potongan pendek.",
  "examples": [
    {
      "id": "eb1",
      "question": "Siti memiliki pita sepanjang 4/5 meter. Pita tersebut akan dipotong-potong menjadi beberapa bagian yang masing-masing panjangnya 1/10 meter. Berapa potong pita yang diperoleh?",
      "answer": "8 potong",
        "options": ["8 potong","6 potong","12 potong","7 potong"],
        "explanation": "Bagi 4/5 dengan 1/10. Artinya 4/5 ÷ 1/10 = 4/5 × 10/1 = 40/5 = 8 potong."
    },
    {
      "id": "eb2",
      "question": "Ada 3 1/2 kg gula pasir yang akan dibungkus ke dalam kantong plastik kecil. Setiap kantong berisi 1/4 kg gula. Berapa banyak kantong yang dibutuhkan?",
      "answer": "14 kantong",
        "options": ["18 kantong","11 kantong","16 kantong","14 kantong"],
        "explanation": "Ubah 3 1/2 menjadi pecahan biasa 7/2. Lalu hitung 7/2 ÷ 1/4 = 7/2 × 4/1 = 28/2 = 14 kantong."
    },
    {
      "id": "eb3",
      "question": "Seorang petani memiliki 6 hektar sawah. Ia akan membagi sawah tersebut kepada anak-anaknya, masing-masing mendapat 1 1/2 hektar. Berapa orang anak petani tersebut?",
      "answer": "4 orang",
        "options": ["3 orang","4 orang","7 orang","8 orang"],
        "explanation": "Ubah 1 1/2 menjadi 3/2. Lalu hitung 6 ÷ 3/2 = 6/1 × 2/3 = 12/3 = 4 orang anak."
    },
    {
      "id": "eb4",
      "question": "Ibu memiliki 2/3 liter sirup kental. Sirup itu akan dituang merata ke dalam gelas berukuran 1/6 liter. Berapa gelas yang dibutuhkan?",
      "answer": "4 gelas",
        "options": ["2 gelas","7 gelas","5 gelas","4 gelas"],
        "explanation": "Bagi 2/3 dengan 1/6. Yaitu 2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4 gelas."
    },
    {
      "id": "eb5",
      "question": "Sebuah kaleng cat berisi 4/5 bagian penuh. Cat tersebut digunakan untuk mengecat tembok yang luasnya 8 meter persegi secara merata. Berapa bagian cat untuk tiap meter perseginya?",
      "answer": "1/10 bagian",
        "options": ["3/10 bagian","1/7 bagian","1/10 bagian","1/8 bagian"],
        "explanation": "Bagi bagian cat dengan luas. 4/5 ÷ 8 = 4/5 ÷ 8/1 = 4/5 × 1/8 = 4/40 = 1/10 bagian cat per meter persegi."
    }
  ]
},
  'Pecahan ke Desimal': {
  "id": "Explore_Pecahan ke Desimal",
  "title": "Pecahan ke Desimal (Soal Cerita)",
  "emoji": "🔄",
  "intro": "Angka pecahan seringkali perlu diubah menjadi desimal agar lebih mudah digunakan pada alat ukur digital, seperti timbangan, kalkulator, atau gelas takar.",
  "examples": [
    {
      "id": "epd1",
      "question": "Ibu menimbang terigu dan jarum timbangan menunjukkan angka 3/4 kg. Jika ibu menggunakan timbangan digital, angka berapakah yang akan muncul?",
      "answer": "0,75 kg",
        "options": ["0,72 kg","0,79 kg","4,75 kg","0,75 kg"],
        "explanation": "Ubah pecahan 3/4 agar penyebutnya jadi 100 dengan mengalikan pembilang dan penyebut dengan 25. Menjadi 75/100 = 0,75."
    },
    {
      "id": "epd2",
      "question": "Siswa kelas 6 diminta berlari mengelilingi lapangan sejauh 1 2/5 kilometer. Bagaimana penulisan jarak tersebut jika dicatat menggunakan bilangan desimal?",
      "answer": "1,4 kilometer",
        "options": ["0,4 kilometer","2,4 kilometer","1,4 kilometer","1,8 kilometer"],
        "explanation": "Pecahan campuran 1 2/5 bisa dilihat sebagai 1 + 2/5. Ubah 2/5 menjadi persepuluh: dikali 2 menjadi 4/10 atau 0,4. Jadi, 1 + 0,4 = 1,4."
    },
    {
      "id": "epd3",
      "question": "Sebuah gelas resep menuliskan air sebanyak 7/8 liter. Ayah bingung karena gelas ukurnya hanya menggunakan desimal. Angka desimal berapa yang setara dengan 7/8?",
      "answer": "0,875",
        "options": ["0,875","0,874","0,876","4,875"],
        "explanation": "Untuk penyebut 8, kalikan dengan 125 agar menjadi 1000. 7 × 125 = 875. Maka 875/1000 = 0,875."
    },
    {
      "id": "epd4",
      "question": "Lama perjalanan dari rumah ke sekolah adalah 3/20 jam. Jika ditulis dalam format desimal, berapakah angkanya?",
      "answer": "0,15 jam",
        "options": ["0,15 jam","1,15 jam","2,15 jam","0,19 jam"],
        "explanation": "Ubah 3/20 agar berpenyebut 100. Kalikan atas dan bawah dengan 5. Menjadi 15/100 = 0,15."
    },
    {
      "id": "epd5",
      "question": "Udin berhasil menjawab 19 benar dari total 20 soal. Berapa nilai yang didapat Udin dalam bentuk desimal (dari rentang 0 sampai 1)?",
      "answer": "0,95",
        "options": ["0,93","3,95","1,95","0,95"],
        "explanation": "Pecahannya adalah 19/20. Kalikan 5 agar per 100. (19×5)/(20×5) = 95/100 = 0,95."
    }
  ]
},
  'Desimal ke Pecahan': {
  "id": "Explore_Desimal ke Pecahan",
  "title": "Desimal ke Pecahan (Soal Cerita)",
  "emoji": "🔄",
  "intro": "Terkadang takaran desimal terasa kaku. Mengubahnya menjadi pecahan biasa bisa mempermudah kita membayangkan potongan atau bagian bendanya secara visual.",
  "examples": [
    {
      "id": "edp1",
      "question": "Harga sebungkus permen menunjukkan diskon sebesar 0,65 dari harga aslinya. Tulislah diskon tersebut dalam bentuk pecahan yang paling sederhana!",
      "answer": "13/20",
        "options": ["13/21","13/23","13/17","13/20"],
        "explanation": "0,65 berarti 65/100. Kita sederhanakan dengan membagi 5 pada pembilang dan penyebut: 65 ÷ 5 = 13, 100 ÷ 5 = 20. Hasilnya 13/20."
    },
    {
      "id": "edp2",
      "question": "Mesin fotokopi mengalami penyusutan tinta sebanyak 0,8 bagian. Berapa pecahan biasa dari nilai tersebut?",
      "answer": "4/5",
        "options": ["4/5","1/5","4/8","4/9"],
        "explanation": "0,8 berarti satu angka di belakang koma, yaitu 8/10. Disederhanakan dibagi 2 menjadi 4/5."
    },
    {
      "id": "edp3",
      "question": "Dalam suatu kompetisi sains, poin tambahan yang diberikan adalah 2,25 poin. Ubah ke dalam bentuk pecahan campuran!",
      "answer": "2 1/4",
        "options": ["2 3/4","1 1/4","2 1/4","2 5/4"],
        "explanation": "2,25 berarti 2 satuan utuh dan 0,25. 0,25 adalah 25/100 yang bisa disederhanakan dibagi 25 menjadi 1/4. Jadi 2 1/4."
    },
    {
      "id": "edp4",
      "question": "Sepotong pipa besi dipotong menjadi 0,125 bagiannya saja untuk dijadikan engsel. Berapa pecahannya?",
      "answer": "1/8",
        "options": ["3/8","1/7","1/10","1/8"],
        "explanation": "0,125 adalah 125/1000. Jika disederhanakan dengan membagi atas bawah menggunakan 125, hasilnya persis 1/8."
    },
    {
      "id": "edp5",
      "question": "Ibu menggunakan santan 0,35 liter. Berapa pecahan sederhana liter santan yang digunakan?",
      "answer": "7/20",
        "options": ["9/20","6/20","7/20","8/20"],
        "explanation": "0,35 = 35/100. Dibagi 5 pada pembilang dan penyebut hasilnya 7/20."
    }
  ]
},
  'Membandingkan Desimal': {
  "id": "Explore_Membandingkan Desimal",
  "title": "Bandingkan Desimal (Soal Cerita)",
  "emoji": "⚖️",
  "intro": "Membandingkan desimal penting di dunia nyata untuk mencari yang paling murah, paling panjang, paling berat, atau yang memiliki volume terbanyak.",
  "examples": [
    {
      "id": "emb1",
      "question": "Di pasar raya, Cabai A beratnya 0,5 kg dan Cabai B beratnya 0,45 kg. Cabai manakah yang lebih berat?",
      "answer": "Cabai A",
        "options": ["Lani","Cabai B","Sama saja","Cabai A"],
        "explanation": "Samakan digit desimal. Cabai A = 0,50 kg, Cabai B = 0,45 kg. Karena 50 > 45, maka Cabai A lebih berat."
    },
    {
      "id": "emb2",
      "question": "Rekor lari Siti adalah 12,3 detik. Rekor lari Lani adalah 12,25 detik. Waktu siapa yang lebih cepat (lebih kecil)?",
      "answer": "Lani",
        "options": ["Anton","Budi","Siti","Lani"],
        "explanation": "12,3 disamakan menjadi 12,30. Lani memiliki 12,25. Waktu terkecil berarti 12,25, jadi Lani lebih cepat."
    },
    {
      "id": "emb3",
      "question": "Tali merah panjangnya 2,8 meter, tali biru panjangnya 2,75 meter. Tali mana yang paling panjang?",
      "answer": "Tali merah",
        "options": ["Caca","Sama saja","Budi","Tali merah"],
        "explanation": "Tali merah 2,80 m, Tali biru 2,75 m. 2,80 lebih besar dari 2,75."
    },
    {
      "id": "emb4",
      "question": "Pak RT membeli cat A seharga 15,50 ribu per liter, dan cat B seharga 15,5 ribu per liter. Mana yang lebih mahal?",
      "answer": "Keduanya sama mahal",
        "options": ["Keduanya sama mahal","Tali Merah","Keduanya salah","Budi"],
        "explanation": "15,50 dan 15,5 memiliki nilai yang sama. Angka nol di akhir desimal tidak mengubah nilainya."
    },
    {
      "id": "emb5",
      "question": "Berat ayam pertama adalah 1,08 kg dan ayam kedua 1,1 kg. Ayam mana yang lebih ringan?",
      "answer": "Ayam pertama",
        "options": ["Tali Merah","Siti","Ayam pertama","Keduanya salah"],
        "explanation": "Ayam pertama 1,08 kg. Ayam kedua 1,10 kg. 08 lebih kecil dari 10, maka ayam pertama lebih ringan."
    }
  ]
},
  'Mengurutkan Desimal': {
  "id": "Explore_Mengurutkan Desimal",
  "title": "Urutkan Desimal (Soal Cerita)",
  "emoji": "🔢",
  "intro": "Mengurutkan desimal biasanya digunakan saat membuat klasemen kejuaraan, mengurutkan barang dari yang paling murah, atau merapikan data-data ukuran fisik.",
  "examples": [
    {
      "id": "eud1",
      "question": "Hasil tangkapan ikan nelayan adalah: Tongkol 2,5 kg, Tuna 2,05 kg, Kakap 2,15 kg. Urutkan tangkapan ikan dari yang paling ringan!",
      "answer": "Tuna (2,05) ; Kakap (2,15) ; Tongkol (2,5)",
        "options": ["Tuna (2,05) ; Kakap (2,14) ; Tongkol (2,5)","Tuna (4,05) ; Kakap (2,15) ; Tongkol (2,5)","Tuna (2,05) ; Kakap (2,15) ; Tongkol (2,5)","Tuna (5,05) ; Kakap (2,15) ; Tongkol (2,5)"],
        "explanation": "Samakan desimal: 2,50 ; 2,05 ; 2,15. Dari yang teringan (terkecil): 2,05 < 2,15 < 2,50."
    },
    {
      "id": "eud2",
      "question": "Nilai ujian 3 siswa adalah: Anton 85,5; Budi 85,25; Caca 85,8. Siapa peraih juara 1, 2, dan 3 (dari yang terbesar)?",
      "answer": "Caca, Anton, Budi",
        "options": ["Cabai B","Tali Merah","Budi","Caca, Anton, Budi"],
        "explanation": "Samakan desimal: 85,50 ; 85,25 ; 85,80. Terbesar adalah 85,80 (Caca), lalu 85,50 (Anton), terakhir 85,25 (Budi)."
    },
    {
      "id": "eud3",
      "question": "Suhu di kota A = 27,6°C, kota B = 27,08°C, kota C = 27,15°C. Urutkan kota dari yang paling dingin!",
      "answer": "Kota B, Kota C, Kota A",
        "options": ["Ayam pertama","Kota B, Kota C, Kota A","Ayam kedua","Budi"],
        "explanation": "Samakan menjadi 27,60 ; 27,08 ; 27,15. Dingin berarti suhu paling rendah (kecil): 27,08 < 27,15 < 27,60."
    },
    {
      "id": "eud4",
      "question": "Ketebalan buku: Buku Biru 1,4 cm, Buku Merah 1,45 cm, Buku Hijau 1,05 cm. Urutkan dari buku yang paling tebal!",
      "answer": "Buku Merah, Buku Biru, Buku Hijau",
        "options": ["Keduanya salah","Cabai A","Caca","Buku Merah, Buku Biru, Buku Hijau"],
        "explanation": "Desimal: 1,40 ; 1,45 ; 1,05. Tebal ke tipis: 1,45 > 1,40 > 1,05."
    },
    {
      "id": "eud5",
      "question": "Harga barang di toko: Sabun Rp3,5 ribu, Sikat Rp3,05 ribu, Odol Rp3,25 ribu. Urutkan dari yang paling murah!",
      "answer": "Sikat, Odol, Sabun",
        "options": ["Sikat, Odol, Sabun","Tali Merah","Budi","Ayam pertama"],
        "explanation": "Ubah menjadi: 3,50 ; 3,05 ; 3,25. Murah ke mahal: 3,05 < 3,25 < 3,50."
    }
  ]
},
  'Perkalian': {
    id: 'Perkalian',
    title: 'Perkalian Pecahan',
    emoji: '✖️',
    intro: 'Perkalian pecahan ibarat mengambil "sebagian dari sebagian yang lain". Aturannya sangat mudah: **Kalikan pembilang dengan pembilang, lalu kalikan penyebut dengan penyebut.** Jangan lupa sederhanakan hasilnya ya!',
    examples: [
      {
        id: 'p1',
        question: 'Hitunglah 1/2 × 3/4 = ...',
        answer: '3/8',
        options: ["3/8","2/8","1/8","3/9"],
        explanation: 'Kalikan pembilang: 1 × 3 = 3.\nKalikan penyebut: 2 × 4 = 8.\nHasilnya 3/8.'
      },
      {
        id: 'p2',
        question: 'Berapakah 2/3 × 3/5 ?',
        answer: '2/5',
        options: ["6/5","2/5","2/9","2/6"],
        explanation: 'Kalikan pembilang: 2 × 3 = 6.\nKalikan penyebut: 3 × 5 = 15.\nHasilnya 6/15. Sederhanakan dengan membagi 3 menjadi 2/5.'
      },
      {
        id: 'p3',
        question: 'Ibu punya 3/4 loyang kue. Adik memakan 1/3 bagian dari kue ibu. Berapa bagian kue yang dimakan adik?',
        answer: '1/4 bagian',
        options: ["1/4 bagian","3/4 bagian","1/1 bagian","2/4 bagian"],
        explanation: 'Gunakan perkalian: 1/3 dari 3/4 = 1/3 × 3/4.\n1 × 3 = 3\n3 × 4 = 12.\nHasilnya 3/12. Sederhanakan (dibagi 3) menjadi 1/4 bagian.'
      },
      {
        id: 'p4',
        question: 'Hitunglah 4/5 × 5/8 = ...',
        answer: '1/2',
        options: ["1/4","2/2","1/2","1/6"],
        explanation: 'Kalikan: 4 × 5 = 20. Lalu 5 × 8 = 40. Hasilnya 20/40. Jika disederhanakan, bagi 20 atas dan bawah, menjadi 1/2.'
      },
      {
        id: 'p5',
        question: 'Sebuah taman 2/5 bagiannya ditanami bunga. Dari bagian bunga tersebut, 3/4-nya adalah bunga mawar. Berapa bagian taman yang ditanami mawar?',
        answer: '3/10',
        options: ["3/10","5/10","3/11","2/10"],
        explanation: 'Kalikan: 3/4 × 2/5 = 6/20. Sederhanakan dengan membagi 2 menjadi 3/10.'
      }
    ]
  },
  'Pembagian': {
    id: 'Pembagian',
    title: 'Pembagian Pecahan',
    emoji: '➗',
    intro: 'Membagi dengan suatu pecahan sama dengan **mengalikan dengan kebalikan pecahan tersebut**. Jadi, ubah tanda bagi (÷) menjadi kali (×), lalu balik posisi pembilang dan penyebut pada pecahan kedua!',
    examples: [
      {
        id: 'b1',
        question: 'Hitunglah 1/2 ÷ 1/4 = ...',
        answer: '2',
        options: ["1","0","3","2"],
        explanation: 'Ubah menjadi perkalian dan balik pecahan kedua: 1/2 × 4/1.\n(1 × 4) / (2 × 1) = 4/2 = 2.'
      },
      {
        id: 'b2',
        question: 'Berapakah 3/4 ÷ 2/5 ?',
        answer: '15/8 atau 1 7/8',
        options: ["14/8 atau 1 7/8","15/8 atau 1 7/8","15/8 atau 1 9/8","15/9 atau 1 7/8"],
        explanation: 'Balik 2/5 menjadi 5/2, lalu kalikan.\n3/4 × 5/2 = 15/8. Dalam pecahan campuran menjadi 1 7/8.'
      },
      {
        id: 'b3',
        question: 'Ada 2 1/2 liter jus. Akan dituang ke dalam gelas berkapasitas 1/4 liter. Berapa gelas yang terisi penuh?',
        answer: '10 gelas',
        options: ["9 gelas","8 gelas","10 gelas","11 gelas"],
        explanation: 'Ubah 2 1/2 menjadi 5/2.\nLalu bagi: 5/2 ÷ 1/4.\n= 5/2 × 4/1 = 20/2 = 10 gelas.'
      },
      {
        id: 'b4',
        question: 'Hitunglah 5/6 ÷ 1/3 = ...',
        answer: '5/2 atau 2 1/2',
        options: ["5/2 atau 2 1/2","5/2 atau 2 3/2","6/2 atau 2 1/2","5/0 atau 2 1/2"],
        explanation: 'Balik 1/3 menjadi 3/1.\n5/6 × 3/1 = 15/6. Sederhanakan (bagi 3) menjadi 5/2.'
      },
      {
        id: 'b5',
        question: 'Sebuah pita panjangnya 4/5 meter akan dipotong-potong menjadi bagian yang panjangnya 1/10 meter. Berapa potong pita yang dihasilkan?',
        answer: '8 potong',
        options: ["8 potong","9 potong","11 potong","6 potong"],
        explanation: 'Bagi 4/5 dengan 1/10.\n= 4/5 × 10/1\n= 40/5 = 8 potong.'
      }
    ]
  },
  'Desimal': {
    id: 'Desimal',
    title: 'Pecahan ke Desimal',
    emoji: '🔄',
    intro: 'Pecahan sebenarnya adalah operasi pembagian (pembilang dibagi penyebut). Untuk mengubahnya menjadi desimal, kamu bisa **membaginya langsung** atau **mengubah penyebutnya menjadi 10, 100, atau 1000**.',
    examples: [
      {
        id: 'd1',
        question: 'Ubah 1/2 menjadi desimal!',
        answer: '0,5',
        options: ["0,4","2,5","1,5","0,5"],
        explanation: 'Kalikan pembilang dan penyebut dengan 5 agar penyebutnya jadi 10.\n1/2 = 5/10. Karena per sepuluh (satu angka di belakang koma), hasilnya 0,5.'
      },
      {
        id: 'd2',
        question: 'Berapa bentuk desimal dari 3/4?',
        answer: '0,75',
        options: ["0,75","1,75","3,75","0,76"],
        explanation: 'Kalikan pembilang dan penyebut dengan 25 agar penyebutnya 100.\n3/4 = 75/100. Dua angka di belakang koma, jadi 0,75.'
      },
      {
        id: 'd3',
        question: 'Ubah 2/5 menjadi desimal!',
        answer: '0,4',
        options: ["0,4","0,8","0,2","1,4"],
        explanation: 'Ubah penyebut ke 10 dengan mengalikan 2.\n2/5 = 4/10 = 0,4.'
      },
      {
        id: 'd4',
        question: 'Berapa desimal dari 1/8?',
        answer: '0,125',
        options: ["2,125","0,123","0,125","1,125"],
        explanation: '1/8 jika penyebut diubah ke 1000, kalikan 125.\n1/8 = 125/1000 = 0,125.'
      },
      {
        id: 'd5',
        question: 'Ubah 7/20 menjadi desimal!',
        answer: '0,35',
        options: ["0,37","0,35","3,35","4,35"],
        explanation: 'Ubah penyebut ke 100 dengan mengalikan 5.\n7/20 = 35/100 = 0,35.'
      }
    ]
  },
  'Bandingkan': {
    id: 'Bandingkan',
    title: 'Membandingkan Desimal',
    emoji: '⚖️',
    intro: 'Untuk membandingkan desimal, lihat nilai tempatnya dari kiri ke kanan. Samakan dulu banyak angka di belakang koma dengan menambahkan angka nol (0) agar tidak tertipu!',
    examples: [
      {
        id: 'c1',
        question: 'Mana yang lebih besar, 0,5 atau 0,45?',
        answer: '0,5',
        options: ["0,5","0,7","2,5","0,3"],
        explanation: 'Samakan angka di belakang koma: 0,5 menjadi 0,50.\nBandingkan 0,50 dan 0,45.\n50 perseratus > 45 perseratus, jadi 0,5 lebih besar.'
      },
      {
        id: 'c2',
        question: 'Bandingkan 0,8 dan 0,75!',
        answer: '0,8 > 0,75',
        options: ["3,8 > 0,75","0,9 > 0,75","0,8 > 0,76","0,8 > 0,75"],
        explanation: 'Ubah 0,8 menjadi 0,80.\nKarena 80 lebih besar dari 75, maka 0,80 > 0,75.'
      },
      {
        id: 'c3',
        question: 'Mana yang paling kecil: 0,12 ; 0,2 ; 0,08 ?',
        answer: '0,08',
        options: ["3,08","0,7","0,12","0,08"],
        explanation: 'Ubah semua jadi 2 angka di belakang koma: 0,12 ; 0,20 ; 0,08.\nYang paling kecil adalah 0,08.'
      },
      {
        id: 'c4',
        question: 'Pilih tanda yang tepat (<, >, =) untuk 0,65 ... 0,650',
        answer: '=',
        options: ["Jawaban tidak ada","Siti","=","Budi"],
        explanation: 'Menambah angka nol di akhir desimal tidak mengubah nilainya. 0,65 = 65/100, 0,650 = 650/1000 (sama dengan 65/100). Jadi hasilnya =.'
      },
      {
        id: 'c5',
        question: 'Beni punya tali 1,4 meter. Edo punya tali 1,25 meter. Tali siapa yang lebih panjang?',
        answer: 'Tali Beni',
        options: ["Tali Beni","Anton","Jawaban tidak ada","Keduanya salah"],
        explanation: 'Beni = 1,40 meter. Edo = 1,25 meter.\n1,40 > 1,25, jadi tali Beni lebih panjang.'
      }
    ]
  },
  'Pecahan': {
    id: 'Pecahan',
    title: 'Pecahan Dasar',
    emoji: '🍕',
    intro: 'Pecahan adalah bagian dari keseluruhan. Pembilang (yang di atas) menunjukkan bagian yang kita miliki, sedangkan penyebut (yang di bawah) menunjukkan total potongan yang sama besar.',
    examples: [
      {
        id: 'f1',
        question: 'Pizza dipotong 8. Kamu makan 3 potong. Berapa bagian yang kamu makan?',
        answer: '3/8',
        options: ["7/8","3/8","3/9","0/8"],
        explanation: '3 potong dari total 8 potong ditulis sebagai pecahan 3/8.'
      },
      {
        id: 'f2',
        question: 'Sederhanakan pecahan 12/16!',
        answer: '3/4',
        options: ["3/4","3/7","3/8","3/3"],
        explanation: 'Bagi pembilang dan penyebut dengan bilangan yang sama (FPB). Keduanya bisa dibagi 4.\n12 ÷ 4 = 3\n16 ÷ 4 = 4. Hasilnya 3/4.'
      },
      {
        id: 'f3',
        question: 'Berapakah 2/5 + 1/5?',
        answer: '3/5',
        options: ["3/5","3/7","3/3","3/8"],
        explanation: 'Karena penyebutnya sudah sama (5), cukup jumlahkan pembilangnya: 2 + 1 = 3. Penyebutnya tetap 5.'
      },
      {
        id: 'f4',
        question: 'Berapakah 1/2 + 1/4?',
        answer: '3/4',
        options: ["3/5","0/4","3/7","3/4"],
        explanation: 'Samakan penyebutnya jadi 4. 1/2 = 2/4.\n2/4 + 1/4 = 3/4.'
      },
      {
        id: 'f5',
        question: 'Ubah 7/3 menjadi pecahan campuran!',
        answer: '2 1/3',
        options: ["2 1/1","2 5/3","2 3/3","2 1/3"],
        explanation: '7 dibagi 3 dapat 2, bersisa 1. Jadi ditulis 2 1/3.'
      }
    ]
  },
  'Urutkan': {
    id: 'Urutkan',
    title: 'Mengurutkan Desimal',
    emoji: '🔢',
    intro: 'Saat mengurutkan bilangan desimal, trik paling ampuh adalah menyamakan jumlah angka di belakang koma terlebih dahulu. Setelah itu, urutkan seperti mengurutkan bilangan bulat!',
    examples: [
      {
        id: 'u1',
        question: 'Urutkan dari yang terkecil: 0,3 ; 0,15 ; 0,25',
        answer: '0,15 ; 0,25 ; 0,3',
        options: ["3,15 ; 0,25 ; 0,3","0,19 ; 0,25 ; 0,3","1,15 ; 0,25 ; 0,3","0,15 ; 0,25 ; 0,3"],
        explanation: 'Samakan angka di belakang koma: 0,30 ; 0,15 ; 0,25.\nUrutan dari yang terkecil adalah 15, 25, lalu 30. Jadi: 0,15 < 0,25 < 0,3.'
      },
      {
        id: 'u2',
        question: 'Urutkan dari yang terbesar: 0,8 ; 0,75 ; 0,9 ; 0,85',
        answer: '0,9 ; 0,85 ; 0,8 ; 0,75',
        options: ["1,9 ; 0,85 ; 0,8 ; 0,75","0,9 ; 0,95 ; 0,8 ; 0,75","0,9 ; 0,85 ; 0,8 ; 0,75","0,9 ; 0,83 ; 0,8 ; 0,75"],
        explanation: 'Ubah jadi 2 angka di belakang koma: 0,80 ; 0,75 ; 0,90 ; 0,85.\nTerbesar: 90 > 85 > 80 > 75. Jadi: 0,9 > 0,85 > 0,8 > 0,75.'
      },
      {
        id: 'u3',
        question: 'Siapa yang tercepat larinya? A (10,5 detik), B (10,45 detik), atau C (10,6 detik)?',
        answer: 'B (10,45 detik)',
        options: ["B (10,45 detik)","B (12,45 detik)","B (10,47 detik)","B (14,45 detik)"],
        explanation: 'Ubah jadi: 10,50 ; 10,45 ; 10,60.\nWaktu tercepat berarti angka terkecil. 10,45 adalah yang paling kecil.'
      },
      {
        id: 'u4',
        question: 'Urutkan potongan kue dari yang paling berat: 0,5 kg ; 0,45 kg ; 0,55 kg',
        answer: '0,55 kg ; 0,5 kg ; 0,45 kg',
        options: ["3,55 kg ; 0,5 kg ; 0,45 kg","4,55 kg ; 0,5 kg ; 0,45 kg","0,75 kg ; 0,5 kg ; 0,45 kg","0,55 kg ; 0,5 kg ; 0,45 kg"],
        explanation: '0,50 ; 0,45 ; 0,55. Urutan terberat: 0,55 > 0,50 > 0,45.'
      },
      {
        id: 'u5',
        question: 'Urutkan dari yang terkecil: 0,05 ; 0,5 ; 0,15',
        answer: '0,05 ; 0,15 ; 0,5',
        options: ["0,05 ; 0,17 ; 0,5","0,05 ; 0,16 ; 0,5","0,06 ; 0,15 ; 0,5","0,05 ; 0,15 ; 0,5"],
        explanation: '0,05 ; 0,50 ; 0,15.\nKecil ke besar: 0,05 < 0,15 < 0,50.'
      }
    ]
  }
};
