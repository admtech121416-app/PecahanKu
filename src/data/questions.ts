import { Question } from '../types';

export const questions: Question[] = [
  {
    "id": "pp1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Pemanasan",
    "stimulus": "Hitunglah 1/2 × 3/5.",
    "question": "Berapakah hasilnya?",
    "options": [
      "3/10",
      "4/7",
      "3/5",
      "1/10"
    ],
    "correctAnswer": "3/10",
    "hint1": "Kalikan pembilang dengan pembilang (atas).",
    "hint2": "Kalikan penyebut dengan penyebut (bawah).",
    "hint3": "1×3 = 3, 2×5 = 10.",
    "explanation": {
      "proses": "1/2 × 3/5 = (1×3)/(2×5) = 3/10",
      "kesimpulan": "Hasilnya adalah 3/10."
    }
  },
  {
    "id": "pp2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Perkalian Pecahan",
    "level": "Tantangan",
    "stimulus": "Ibu memiliki 3/4 kg gula. Kakak menggunakan 1/3 bagian dari gula tersebut untuk membuat kue.",
    "question": "Berapa kg gula yang digunakan kakak?",
    "options": [
      "1/4",
      "4/7",
      "2/3",
      "1/12"
    ],
    "correctAnswer": "1/4",
    "hint1": "Gunakan perkalian untuk mencari \"bagian dari\".",
    "hint2": "Kalikan 1/3 dengan 3/4.",
    "hint3": "1/3 × 3/4 = 3/12. Sederhanakan.",
    "explanation": {
      "proses": "1/3 × 3/4 = 3/12 = 1/4.",
      "kesimpulan": "Gula yang digunakan adalah 1/4 kg."
    },
    "misconceptionFeedback": {
      "4/7": "Jangan menjumlahkan pembilang dan penyebut."
    }
  },
  {
    "id": "pp3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Pemanasan",
    "stimulus": "Berapa hasil dari 2/3 × 4/5?",
    "question": "Pilih jawaban yang benar:",
    "options": [
      "8/15",
      "6/8",
      "2/15",
      "8/8"
    ],
    "correctAnswer": "8/15",
    "hint1": "Pembilang: 2 × 4.",
    "hint2": "Penyebut: 3 × 5.",
    "hint3": "Gabungkan keduanya.",
    "explanation": {
      "proses": "(2×4) / (3×5) = 8/15",
      "kesimpulan": "Hasil perkalian adalah 8/15."
    }
  },
  {
    "id": "pp4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Perkalian Pecahan",
    "level": "Ahli",
    "stimulus": "Pak RT memiliki taman berukuran 5/6 meter persegi. 2/5 bagiannya ditanami mawar.",
    "question": "Berapa meter persegi yang ditanami mawar?",
    "options": [
      "1/3",
      "1/4",
      "7/11",
      "10/30"
    ],
    "correctAnswer": "1/3",
    "hint1": "Kalikan 5/6 dengan 2/5.",
    "hint2": "Hasilnya adalah 10/30.",
    "hint3": "Sederhanakan 10/30.",
    "explanation": {
      "proses": "5/6 × 2/5 = 10/30. Disederhanakan dibagi 10 menjadi 1/3.",
      "kesimpulan": "Luas taman mawar adalah 1/3 meter persegi."
    }
  },
  {
    "id": "pp5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Tantangan",
    "stimulus": "Hitung perkalian berikut dan sederhanakan: 4/7 × 7/8.",
    "question": "Berapa hasilnya?",
    "options": [
      "1/2",
      "28/56",
      "11/15",
      "2/4"
    ],
    "correctAnswer": "1/2",
    "hint1": "4/7 × 7/8 = 28/56.",
    "hint2": "Bagi 28 dan 56 dengan 28.",
    "hint3": "Atau coret angka 7 di atas dan bawah.",
    "explanation": {
      "proses": "4/7 × 7/8 = 28/56 = 1/2.",
      "kesimpulan": "Bentuk paling sederhananya adalah 1/2."
    },
    "misconceptionFeedback": {
      "28/56": "Benar, tapi belum bentuk yang paling sederhana."
    }
  },
  {
    "id": "pp6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Perkalian Pecahan",
    "level": "Pemanasan",
    "stimulus": "Sebuah resep membutuhkan 1/2 botol susu. Jika kamu ingin membuat 3 kali lipat resep tersebut.",
    "question": "Berapa botol susu yang dibutuhkan?",
    "options": [
      "1 1/2",
      "3/6",
      "2/3",
      "3"
    ],
    "correctAnswer": "1 1/2",
    "hint1": "Kalikan 1/2 dengan 3 (atau 3/1).",
    "hint2": "Hasilnya 3/2.",
    "hint3": "Jadikan pecahan campuran.",
    "explanation": {
      "proses": "1/2 × 3 = 3/2 = 1 1/2.",
      "kesimpulan": "Dibutuhkan 1 1/2 botol susu."
    }
  },
  {
    "id": "pp7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Ahli",
    "stimulus": "A × 2/3 = 1/2.",
    "question": "Berapakah pecahan A?",
    "options": [
      "3/4",
      "4/3",
      "2/6",
      "1/3"
    ],
    "correctAnswer": "3/4",
    "hint1": "Berapa dikali 2 hasilnya? Berapa dikali 3 hasilnya? Sulit jika langsung. Gunakan kebalikan.",
    "hint2": "A = 1/2 ÷ 2/3.",
    "hint3": "A = 1/2 × 3/2 = 3/4.",
    "explanation": {
      "proses": "Pindah ruas menjadi pembagian: A = 1/2 ÷ 2/3 = 1/2 × 3/2 = 3/4.",
      "kesimpulan": "Nilai A adalah 3/4."
    }
  },
  {
    "id": "pp8",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Perkalian Pecahan",
    "level": "Tantangan",
    "stimulus": "Diskon 1/4 harga diberikan untuk sepatu Rp200.000.",
    "question": "Berapa besar potongannya?",
    "options": [
      "Rp50.000",
      "Rp150.000",
      "Rp25.000",
      "Rp100.000"
    ],
    "correctAnswer": "Rp50.000",
    "hint1": "Hitung 1/4 dari 200.000.",
    "hint2": "1/4 × 200.000.",
    "hint3": "Sama dengan 200.000 dibagi 4.",
    "explanation": {
      "proses": "1/4 × 200.000 = 50.000.",
      "kesimpulan": "Potongannya adalah Rp50.000."
    }
  },
  {
    "id": "pp9",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Pemanasan",
    "stimulus": "3/5 × 0 (Nol) = ...",
    "question": "Berapa hasilnya?",
    "options": [
      "0",
      "3/5",
      "5/3",
      "Tak terhingga"
    ],
    "correctAnswer": "0",
    "hint1": "Angka berapapun jika dikali nol hasilnya apa?",
    "hint2": "Ya, nol.",
    "hint3": "Pecahan dikali nol tetap nol.",
    "explanation": {
      "proses": "Sifat perkalian dengan 0.",
      "kesimpulan": "Semua bilangan dikalikan 0 hasilnya 0."
    }
  },
  {
    "id": "pp10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Perkalian Pecahan",
    "level": "Ahli",
    "stimulus": "2 1/2 × 1 1/3 = ...",
    "question": "Berapa hasil akhirnya?",
    "options": [
      "3 1/3",
      "2 1/6",
      "10/3",
      "3"
    ],
    "correctAnswer": "3 1/3",
    "hint1": "Ubah keduanya menjadi pecahan biasa.",
    "hint2": "5/2 × 4/3.",
    "hint3": "20/6 disederhanakan jadi 10/3, lalu jadikan campuran.",
    "explanation": {
      "proses": "5/2 × 4/3 = 20/6 = 10/3 = 3 1/3.",
      "kesimpulan": "Hasilnya 3 1/3."
    },
    "misconceptionFeedback": {
      "10/3": "Benar, tapi pilih jawaban campuran yang paling tepat (3 1/3)."
    }
  },
  {
    "id": "bp1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Pemanasan",
    "stimulus": "Hitunglah: 1/2 ÷ 1/4.",
    "question": "Berapa hasilnya?",
    "options": [
      "2",
      "1/8",
      "4/2",
      "1/2"
    ],
    "correctAnswer": "2",
    "hint1": "Ubah pembagian menjadi perkalian.",
    "hint2": "Balik pecahan yang di belakang: 1/4 menjadi 4/1.",
    "hint3": "1/2 × 4/1 = 4/2 = 2.",
    "explanation": {
      "proses": "1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2.",
      "kesimpulan": "Hasilnya 2."
    }
  },
  {
    "id": "bp2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pembagian Pecahan",
    "level": "Tantangan",
    "stimulus": "Ada 3/4 liter susu yang akan dituang ke dalam gelas berukuran 1/8 liter.",
    "question": "Berapa gelas yang bisa diisi penuh?",
    "options": [
      "6",
      "3/32",
      "8",
      "4"
    ],
    "correctAnswer": "6",
    "hint1": "Bagi jumlah susu dengan ukuran gelas.",
    "hint2": "3/4 ÷ 1/8.",
    "hint3": "3/4 × 8/1 = 24/4 = 6.",
    "explanation": {
      "proses": "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6.",
      "kesimpulan": "Bisa mengisi 6 gelas."
    },
    "misconceptionFeedback": {
      "3/32": "Jangan dikali langsung, ini operasi pembagian. Kamu harus membalik pecahan kedua."
    }
  },
  {
    "id": "bp3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Ahli",
    "stimulus": "Berapa hasil dari 5/6 ÷ 2/3 ?",
    "question": "Pilih pecahan paling sederhana!",
    "options": [
      "5/4",
      "10/18",
      "1 1/4",
      "3/5"
    ],
    "correctAnswer": "1 1/4",
    "hint1": "5/6 ÷ 2/3 = 5/6 × 3/2.",
    "hint2": "15/12 disederhanakan (bagi 3).",
    "hint3": "Menjadi 5/4, jadikan campuran.",
    "explanation": {
      "proses": "5/6 × 3/2 = 15/12 = 5/4 = 1 1/4.",
      "kesimpulan": "Bentuk paling sederhana adalah 1 1/4."
    },
    "misconceptionFeedback": {
      "5/4": "Jadikan pecahan campuran karena nilai pembilang lebih besar."
    }
  },
  {
    "id": "bp4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pembagian Pecahan",
    "level": "Pemanasan",
    "stimulus": "Kamu punya 2 buah kue utuh. Setiap kue dipotong setengah (1/2).",
    "question": "Berapa total potongan kue yang kamu miliki?",
    "options": [
      "4",
      "1",
      "2",
      "8"
    ],
    "correctAnswer": "4",
    "hint1": "2 dibagi 1/2.",
    "hint2": "Sama artinya dengan 2 × 2.",
    "hint3": "Setiap 1 kue jadi 2 potong. 2 kue = 4 potong.",
    "explanation": {
      "proses": "2 ÷ 1/2 = 2 × 2/1 = 4.",
      "kesimpulan": "Totalnya ada 4 potong."
    }
  },
  {
    "id": "bp5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Tantangan",
    "stimulus": "2/5 ÷ 4 = ...",
    "question": "Berapakah hasilnya?",
    "options": [
      "1/10",
      "8/5",
      "1/5",
      "2/20"
    ],
    "correctAnswer": "1/10",
    "hint1": "Angka 4 sama dengan 4/1.",
    "hint2": "Maka, 2/5 ÷ 4/1.",
    "hint3": "Jadinya 2/5 × 1/4 = 2/20. Sederhanakan.",
    "explanation": {
      "proses": "2/5 ÷ 4/1 = 2/5 × 1/4 = 2/20 = 1/10.",
      "kesimpulan": "Hasilnya 1/10."
    }
  },
  {
    "id": "bp6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pembagian Pecahan",
    "level": "Ahli",
    "stimulus": "Pita sepanjang 1 1/2 meter akan dibagi rata untuk 3 orang anak.",
    "question": "Berapa meter pita yang didapat setiap anak?",
    "options": [
      "1/2",
      "3/2",
      "1/6",
      "2/3"
    ],
    "correctAnswer": "1/2",
    "hint1": "Ubah 1 1/2 menjadi 3/2.",
    "hint2": "Bagi 3/2 dengan 3 (atau 3/1).",
    "hint3": "3/2 × 1/3 = 3/6 = 1/2.",
    "explanation": {
      "proses": "1 1/2 ÷ 3 = 3/2 × 1/3 = 3/6 = 1/2.",
      "kesimpulan": "Setiap anak mendapat 1/2 meter."
    }
  },
  {
    "id": "bp7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Pemanasan",
    "stimulus": "1/8 ÷ 1/8 = ...",
    "question": "Berapa hasilnya?",
    "options": [
      "1",
      "1/64",
      "8",
      "0"
    ],
    "correctAnswer": "1",
    "hint1": "Bilangan apa pun dibagi dengan dirinya sendiri hasilnya adalah 1.",
    "hint2": "Kecuali nol ya.",
    "hint3": "1/8 × 8/1 = 8/8 = 1.",
    "explanation": {
      "proses": "1/8 × 8/1 = 8/8 = 1.",
      "kesimpulan": "Hasilnya 1."
    }
  },
  {
    "id": "bp8",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Tantangan",
    "stimulus": "3/7 ÷ 5/7 = ...",
    "question": "Hitung hasil akhirnya!",
    "options": [
      "3/5",
      "15/49",
      "5/3",
      "7/5"
    ],
    "correctAnswer": "3/5",
    "hint1": "3/7 × 7/5.",
    "hint2": "Angka 7 di atas dan di bawah bisa saling mencoret.",
    "hint3": "Tinggal angka 3 dan 5.",
    "explanation": {
      "proses": "3/7 × 7/5 = 21/35 = 3/5.",
      "kesimpulan": "Hasilnya 3/5."
    }
  },
  {
    "id": "bp9",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pembagian Pecahan",
    "level": "Ahli",
    "stimulus": "Setiap langkah Udin adalah 2/5 meter. Jika ia berjalan sejauh 8 meter.",
    "question": "Berapa langkah yang diambil Udin?",
    "options": [
      "20",
      "16",
      "32",
      "10"
    ],
    "correctAnswer": "20",
    "hint1": "Bagi total jarak dengan panjang setiap langkah.",
    "hint2": "8 ÷ 2/5.",
    "hint3": "8 × 5/2 = 40/2 = 20.",
    "explanation": {
      "proses": "8 ÷ (2/5) = 8 × 5/2 = 40/2 = 20.",
      "kesimpulan": "Udin mengambil 20 langkah."
    }
  },
  {
    "id": "bp10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pembagian Pecahan",
    "level": "Pemanasan",
    "stimulus": "4/9 ÷ 2/3 = ...",
    "question": "Berapa hasilnya?",
    "options": [
      "2/3",
      "8/27",
      "3/2",
      "4/6"
    ],
    "correctAnswer": "2/3",
    "hint1": "4/9 × 3/2.",
    "hint2": "12 / 18.",
    "hint3": "Sederhanakan dengan dibagi 6.",
    "explanation": {
      "proses": "4/9 × 3/2 = 12/18 = 2/3.",
      "kesimpulan": "Bentuk paling sederhana adalah 2/3."
    },
    "misconceptionFeedback": {
      "8/27": "Kamu sepertinya langsung mengalikan, ingat ini adalah pembagian. Balik dulu pecahan yang kedua."
    }
  },
  {
    "id": "pd1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Pemanasan",
    "stimulus": "Ubah 1/4 menjadi desimal.",
    "question": "Berapakah hasilnya?",
    "options": [
      "0,25",
      "0,4",
      "1,4",
      "0,5"
    ],
    "correctAnswer": "0,25",
    "hint1": "Ubah penyebutnya menjadi 100.",
    "hint2": "Kalikan 4 dengan 25.",
    "hint3": "1×25 / 4×25 = 25/100.",
    "explanation": {
      "proses": "1/4 = 25/100 = 0,25.",
      "kesimpulan": "Hasilnya 0,25."
    }
  },
  {
    "id": "pd2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pecahan ke Desimal",
    "level": "Tantangan",
    "stimulus": "Dalam resep kue, tertulis 3/5 liter susu. Gelas ukur hanya memiliki tanda desimal.",
    "question": "Tanda manakah yang harus dituju?",
    "options": [
      "0,6",
      "0,35",
      "3,5",
      "0,3"
    ],
    "correctAnswer": "0,6",
    "hint1": "Ubah penyebut 5 menjadi 10.",
    "hint2": "Kalikan pembilang dan penyebut dengan 2.",
    "hint3": "3×2 = 6, maka 6/10.",
    "explanation": {
      "proses": "3/5 = 6/10 = 0,6.",
      "kesimpulan": "Tanda yang dituju adalah 0,6."
    }
  },
  {
    "id": "pd3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Ahli",
    "stimulus": "Ubah pecahan 7/8 menjadi desimal.",
    "question": "Berapakah nilainya?",
    "options": [
      "0,875",
      "0,78",
      "0,87",
      "0,75"
    ],
    "correctAnswer": "0,875",
    "hint1": "8 sulit diubah ke 10 atau 100. Ubah ke 1000.",
    "hint2": "Kalikan 8 dengan 125.",
    "hint3": "7 × 125 = 875. Jadi 875/1000.",
    "explanation": {
      "proses": "7/8 = (7×125)/(8×125) = 875/1000 = 0,875.",
      "kesimpulan": "Hasilnya 0,875."
    }
  },
  {
    "id": "pd4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pecahan ke Desimal",
    "level": "Pemanasan",
    "stimulus": "Baterai HP menunjuk sisa daya 1/2.",
    "question": "Berapa angka desimalnya?",
    "options": [
      "0,5",
      "0,2",
      "1,2",
      "0,12"
    ],
    "correctAnswer": "0,5",
    "hint1": "Setengah sama dengan lima persepuluh.",
    "hint2": "1/2 = 5/10.",
    "hint3": "5/10 = 0,5.",
    "explanation": {
      "proses": "1/2 = 5/10 = 0,5.",
      "kesimpulan": "Desimal dari 1/2 adalah 0,5."
    }
  },
  {
    "id": "pd5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Tantangan",
    "stimulus": "Pecahan 9/20 jika didesimalkan menjadi...",
    "question": "Pilih jawaban yang benar!",
    "options": [
      "0,45",
      "0,9",
      "0,045",
      "0,29"
    ],
    "correctAnswer": "0,45",
    "hint1": "Ubah penyebut 20 menjadi 100.",
    "hint2": "Kalikan dengan 5.",
    "hint3": "9 × 5 = 45. Maka 45/100.",
    "explanation": {
      "proses": "9/20 = 45/100 = 0,45.",
      "kesimpulan": "Hasilnya 0,45."
    }
  },
  {
    "id": "pd6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pecahan ke Desimal",
    "level": "Ahli",
    "stimulus": "Tukang kayu memotong kayu sepanjang 1 3/4 meter.",
    "question": "Berapa meter ukurannya dalam desimal?",
    "options": [
      "1,75",
      "1,34",
      "0,75",
      "1,43"
    ],
    "correctAnswer": "1,75",
    "hint1": "Biarkan angka 1, ubah 3/4 nya saja.",
    "hint2": "3/4 = 75/100 = 0,75.",
    "hint3": "1 + 0,75 = 1,75.",
    "explanation": {
      "proses": "1 3/4 = 1 + 3/4 = 1 + 0,75 = 1,75.",
      "kesimpulan": "Ukurannya adalah 1,75 meter."
    }
  },
  {
    "id": "pd7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Pemanasan",
    "stimulus": "Pecahan 3/10.",
    "question": "Bentuk desimalnya adalah...",
    "options": [
      "0,3",
      "0,03",
      "3,10",
      "0,13"
    ],
    "correctAnswer": "0,3",
    "hint1": "Karena persepuluh, hanya ada satu angka di belakang koma.",
    "hint2": "Langsung letakkan angka 3 di belakang koma.",
    "hint3": "0,3.",
    "explanation": {
      "proses": "3/10 artinya 3 dibagi 10 = 0,3.",
      "kesimpulan": "Bentuk desimalnya 0,3."
    }
  },
  {
    "id": "pd8",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Tantangan",
    "stimulus": "Ubah 11/25 menjadi desimal.",
    "question": "Berapakah hasilnya?",
    "options": [
      "0,44",
      "0,11",
      "0,25",
      "1,125"
    ],
    "correctAnswer": "0,44",
    "hint1": "Ubah penyebut 25 ke 100.",
    "hint2": "Kalikan atas dan bawah dengan 4.",
    "hint3": "11 × 4 = 44.",
    "explanation": {
      "proses": "11/25 = 44/100 = 0,44.",
      "kesimpulan": "Hasilnya 0,44."
    }
  },
  {
    "id": "pd9",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Pecahan ke Desimal",
    "level": "Ahli",
    "stimulus": "Pecahan 1/3 (sepertiga) jika didesimalkan.",
    "question": "Berapa hasilnya jika dibulatkan dua angka di belakang koma?",
    "options": [
      "0,33",
      "0,3",
      "0,13",
      "0,34"
    ],
    "correctAnswer": "0,33",
    "hint1": "1 dibagi 3 secara manual = 0,33333...",
    "hint2": "Ambil dua angka saja di belakang koma.",
    "hint3": "Karena angka ketiganya 3, tidak perlu pembulatan ke atas.",
    "explanation": {
      "proses": "1 ÷ 3 = 0,3333... Dibulatkan 2 angka menjadi 0,33.",
      "kesimpulan": "Hasilnya 0,33."
    }
  },
  {
    "id": "pd10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Pecahan ke Desimal",
    "level": "Pemanasan",
    "stimulus": "2/5 = ...",
    "question": "Berapa nilai desimalnya?",
    "options": [
      "0,4",
      "0,2",
      "0,5",
      "2,5"
    ],
    "correctAnswer": "0,4",
    "hint1": "Jadikan penyebutnya 10.",
    "hint2": "Kalikan dengan 2.",
    "hint3": "2×2 / 5×2 = 4/10.",
    "explanation": {
      "proses": "2/5 = 4/10 = 0,4.",
      "kesimpulan": "Hasilnya 0,4."
    }
  },
  {
    "id": "dp1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Pemanasan",
    "stimulus": "Ubah 0,5 menjadi pecahan biasa.",
    "question": "Pilih pecahan yang paling sederhana!",
    "options": [
      "1/2",
      "5/10",
      "1/5",
      "5/100"
    ],
    "correctAnswer": "1/2",
    "hint1": "0,5 = 5/10.",
    "hint2": "Sederhanakan dengan membagi pembilang dan penyebut dengan 5.",
    "hint3": "Hasilnya 1/2.",
    "explanation": {
      "proses": "0,5 = 5/10. Dibagi 5 = 1/2.",
      "kesimpulan": "Pecahan paling sederhananya adalah 1/2."
    },
    "misconceptionFeedback": {
      "5/10": "Belum paling sederhana. Coba bagi atas dan bawah dengan 5."
    }
  },
  {
    "id": "dp2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Desimal ke Pecahan",
    "level": "Tantangan",
    "stimulus": "Suhu ruangan terukur 24,8 derajat.",
    "question": "Tuliskan bagian desimalnya (0,8) dalam bentuk pecahan biasa yang paling sederhana!",
    "options": [
      "4/5",
      "8/10",
      "1/8",
      "2/5"
    ],
    "correctAnswer": "4/5",
    "hint1": "0,8 adalah 8 persepuluh.",
    "hint2": "8/10 disederhanakan dengan membagi 2.",
    "hint3": "8 ÷ 2 = 4, 10 ÷ 2 = 5.",
    "explanation": {
      "proses": "0,8 = 8/10 = 4/5.",
      "kesimpulan": "Pecahannya adalah 4/5."
    }
  },
  {
    "id": "dp3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Ahli",
    "stimulus": "Ubah 0,125 menjadi pecahan biasa.",
    "question": "Berapakah hasilnya?",
    "options": [
      "1/8",
      "125/100",
      "1/4",
      "1/12"
    ],
    "correctAnswer": "1/8",
    "hint1": "Tiga angka di belakang koma berarti per 1000.",
    "hint2": "125/1000.",
    "hint3": "Sederhanakan dengan membagi atas bawah dengan 125.",
    "explanation": {
      "proses": "0,125 = 125/1000. Disederhanakan (bagi 125) = 1/8.",
      "kesimpulan": "Hasilnya 1/8."
    }
  },
  {
    "id": "dp4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Desimal ke Pecahan",
    "level": "Pemanasan",
    "stimulus": "Sisa uang di dompet elektronik ayah adalah 0,75 bagian.",
    "question": "Berapa pecahan yang merepresentasikan sisa uang tersebut?",
    "options": [
      "3/4",
      "75/10",
      "7/5",
      "1/4"
    ],
    "correctAnswer": "3/4",
    "hint1": "0,75 adalah 75/100.",
    "hint2": "Bagi 75 dan 100 dengan 25.",
    "hint3": "Hasilnya 3/4.",
    "explanation": {
      "proses": "0,75 = 75/100. Dibagi 25 = 3/4.",
      "kesimpulan": "Pecahan sederhananya adalah 3/4."
    }
  },
  {
    "id": "dp5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Tantangan",
    "stimulus": "Desimal 0,2 = ...",
    "question": "Ubah ke pecahan biasa termudah!",
    "options": [
      "1/5",
      "2/10",
      "1/2",
      "2/100"
    ],
    "correctAnswer": "1/5",
    "hint1": "0,2 = 2/10.",
    "hint2": "Bagi 2 pada pembilang dan penyebut.",
    "hint3": "Hasilnya 1/5.",
    "explanation": {
      "proses": "0,2 = 2/10 = 1/5.",
      "kesimpulan": "Hasilnya 1/5."
    },
    "misconceptionFeedback": {
      "2/10": "Masih bisa disederhanakan lagi lho."
    }
  },
  {
    "id": "dp6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Desimal ke Pecahan",
    "level": "Ahli",
    "stimulus": "Panjang tongkat adalah 1,6 meter.",
    "question": "Ubah bentuk desimal ini menjadi pecahan campuran yang paling sederhana!",
    "options": [
      "1 3/5",
      "1 6/10",
      "16/10",
      "1 1/6"
    ],
    "correctAnswer": "1 3/5",
    "hint1": "1,6 = 1 dan 0,6.",
    "hint2": "0,6 = 6/10.",
    "hint3": "Sederhanakan 6/10 menjadi 3/5. Jadi 1 3/5.",
    "explanation": {
      "proses": "1,6 = 1 + 6/10 = 1 + 3/5 = 1 3/5.",
      "kesimpulan": "Jawabannya 1 3/5."
    }
  },
  {
    "id": "dp7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Pemanasan",
    "stimulus": "0,05 jika diubah menjadi pecahan...",
    "question": "Pilih jawaban yang benar!",
    "options": [
      "1/20",
      "5/10",
      "1/5",
      "5/100"
    ],
    "correctAnswer": "1/20",
    "hint1": "Ada dua angka di belakang koma, jadi per 100.",
    "hint2": "5/100.",
    "hint3": "Sederhanakan dengan membagi 5.",
    "explanation": {
      "proses": "0,05 = 5/100 = 1/20.",
      "kesimpulan": "Hasilnya 1/20."
    }
  },
  {
    "id": "dp8",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Tantangan",
    "stimulus": "0,65 = ...",
    "question": "Ubah ke pecahan biasa.",
    "options": [
      "13/20",
      "65/100",
      "13/10",
      "6/5"
    ],
    "correctAnswer": "13/20",
    "hint1": "65/100.",
    "hint2": "Keduanya bisa dibagi 5.",
    "hint3": "65 ÷ 5 = 13. 100 ÷ 5 = 20.",
    "explanation": {
      "proses": "0,65 = 65/100. Dibagi 5 = 13/20.",
      "kesimpulan": "Pecahan termudah adalah 13/20."
    }
  },
  {
    "id": "dp9",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Desimal ke Pecahan",
    "level": "Ahli",
    "stimulus": "Uji emisi kendaraan mencatat hasil 0,004 bagian racun.",
    "question": "Ubah 0,004 menjadi pecahan!",
    "options": [
      "1/250",
      "4/1000",
      "1/25",
      "1/400"
    ],
    "correctAnswer": "1/250",
    "hint1": "Tiga angka di belakang koma, berarti 4/1000.",
    "hint2": "Bagi 4 di atas dan bawah.",
    "hint3": "1000 ÷ 4 = 250.",
    "explanation": {
      "proses": "0,004 = 4/1000 = 1/250.",
      "kesimpulan": "Hasilnya 1/250."
    }
  },
  {
    "id": "dp10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Desimal ke Pecahan",
    "level": "Pemanasan",
    "stimulus": "Ubah 0,8 menjadi pecahan.",
    "question": "Pecahan sederhananya adalah?",
    "options": [
      "4/5",
      "8/10",
      "1/8",
      "2/5"
    ],
    "correctAnswer": "4/5",
    "hint1": "8/10.",
    "hint2": "Bagi 2.",
    "hint3": "4/5.",
    "explanation": {
      "proses": "0,8 = 8/10 = 4/5.",
      "kesimpulan": "Hasilnya 4/5."
    }
  },
  {
    "id": "md1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Bandingkan 0,6 dengan 0,55.",
    "question": "Mana yang lebih besar?",
    "options": [
      "0,6",
      "0,55",
      "Keduanya sama",
      "Tidak bisa dibandingkan"
    ],
    "correctAnswer": "0,6",
    "hint1": "Samakan angka di belakang koma.",
    "hint2": "0,6 menjadi 0,60.",
    "hint3": "Bandingkan 60 dengan 55.",
    "explanation": {
      "proses": "0,60 lebih besar dari 0,55.",
      "kesimpulan": "0,6 lebih besar."
    },
    "misconceptionFeedback": {
      "0,55": "Jangan hanya melihat banyak angkanya. 55 memang terlihat panjang, tapi 0,6 adalah 0,60 yang nilainya lebih besar."
    }
  },
  {
    "id": "md2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Membandingkan Desimal",
    "level": "Tantangan",
    "stimulus": "Jarak rumah Edo ke sekolah adalah 1,2 km. Jarak rumah Siti adalah 1,15 km.",
    "question": "Rumah siapa yang lebih jauh dari sekolah?",
    "options": [
      "Edo",
      "Siti",
      "Sama jauh",
      "Tidak tahu"
    ],
    "correctAnswer": "Edo",
    "hint1": "Edo: 1,20 km. Siti: 1,15 km.",
    "hint2": "Siapa yang angkanya lebih besar?",
    "hint3": "1,20 > 1,15.",
    "explanation": {
      "proses": "1,20 km > 1,15 km.",
      "kesimpulan": "Rumah Edo lebih jauh."
    }
  },
  {
    "id": "md3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Ahli",
    "stimulus": "Bandingkan 0,08 dengan 0,1.",
    "question": "Pilih tanda yang tepat!",
    "options": [
      "<",
      ">",
      "=",
      "+"
    ],
    "correctAnswer": "<",
    "hint1": "Samakan angka di belakang koma: 0,1 menjadi 0,10.",
    "hint2": "Bandingkan 0,08 dan 0,10.",
    "hint3": "8 lebih kecil dari 10.",
    "explanation": {
      "proses": "0,08 < 0,10.",
      "kesimpulan": "Tanda yang tepat adalah <."
    }
  },
  {
    "id": "md4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Membandingkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Harga pensil A Rp 1,5 ribu. Harga pensil B Rp 1,50 ribu.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      "Keduanya sama mahal",
      "Pensil A lebih mahal",
      "Pensil B lebih mahal",
      "Pensil A lebih murah"
    ],
    "correctAnswer": "Keduanya sama mahal",
    "hint1": "1,5 dan 1,50 nilainya sama.",
    "hint2": "Nol di belakang tidak mengubah nilai.",
    "hint3": "Keduanya setara.",
    "explanation": {
      "proses": "1,5 = 1,50.",
      "kesimpulan": "Harganya sama."
    }
  },
  {
    "id": "md5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Tantangan",
    "stimulus": "0,75 ... 0,7",
    "question": "Tanda yang tepat adalah?",
    "options": [
      ">",
      "<",
      "=",
      "-"
    ],
    "correctAnswer": ">",
    "hint1": "0,7 diubah jadi 0,70.",
    "hint2": "75 lebih besar dari 70.",
    "hint3": "Maka tandanya >.",
    "explanation": {
      "proses": "0,75 > 0,70.",
      "kesimpulan": "0,75 lebih besar."
    }
  },
  {
    "id": "md6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Membandingkan Desimal",
    "level": "Ahli",
    "stimulus": "Lari 100 meter: Waktu A = 11,4 detik, Waktu B = 11,35 detik.",
    "question": "Siapa yang memenangkan balapan (waktu tersingkat)?",
    "options": [
      "B",
      "A",
      "Seri",
      "Tidak ada"
    ],
    "correctAnswer": "B",
    "hint1": "A = 11,40. B = 11,35.",
    "hint2": "Cari angka yang lebih kecil.",
    "hint3": "35 lebih kecil dari 40.",
    "explanation": {
      "proses": "11,35 < 11,40.",
      "kesimpulan": "Pelari B lebih cepat (waktu lebih kecil)."
    }
  },
  {
    "id": "md7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Pemanasan",
    "stimulus": "0,99 ... 1,0",
    "question": "Mana tanda yang benar?",
    "options": [
      "<",
      ">",
      "=",
      "≠"
    ],
    "correctAnswer": "<",
    "hint1": "Bandingkan angka di depan koma terlebih dahulu.",
    "hint2": "0 lebih kecil dari 1.",
    "hint3": "Pasti 0,99 lebih kecil.",
    "explanation": {
      "proses": "0 di depan koma < 1 di depan koma.",
      "kesimpulan": "0,99 < 1,0."
    }
  },
  {
    "id": "md8",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Tantangan",
    "stimulus": "Bandingkan: 2,05 dengan 2,1",
    "question": "Mana yang lebih kecil?",
    "options": [
      "2,05",
      "2,1",
      "Keduanya sama",
      "Tidak ada jawaban"
    ],
    "correctAnswer": "2,05",
    "hint1": "2,1 = 2,10.",
    "hint2": "05 lebih kecil dari 10.",
    "hint3": "Jadi 2,05 lebih kecil.",
    "explanation": {
      "proses": "2,05 < 2,10.",
      "kesimpulan": "2,05 lebih kecil."
    }
  },
  {
    "id": "md9",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Membandingkan Desimal",
    "level": "Ahli",
    "stimulus": "Daya baterai: Baterai X = 3,02 Volt. Baterai Y = 3,015 Volt.",
    "question": "Baterai mana yang dayanya lebih tinggi?",
    "options": [
      "Baterai X",
      "Baterai Y",
      "Sama saja",
      "Baterai Z"
    ],
    "correctAnswer": "Baterai X",
    "hint1": "Jadikan 3 angka di belakang koma. X = 3,020. Y = 3,015.",
    "hint2": "20 lebih besar dari 15.",
    "hint3": "Baterai X lebih tinggi.",
    "explanation": {
      "proses": "3,020 > 3,015.",
      "kesimpulan": "Baterai X memiliki daya lebih tinggi."
    }
  },
  {
    "id": "md10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Membandingkan Desimal",
    "level": "Pemanasan",
    "stimulus": "0,4 ... 0,44",
    "question": "Tanda perbandingannya adalah...",
    "options": [
      "<",
      ">",
      "=",
      "><"
    ],
    "correctAnswer": "<",
    "hint1": "0,4 adalah 0,40.",
    "hint2": "40 lebih kecil dari 44.",
    "hint3": "<",
    "explanation": {
      "proses": "0,40 < 0,44.",
      "kesimpulan": "0,4 < 0,44."
    }
  },
  {
    "id": "ud1",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Urutkan dari yang terkecil:",
    "question": "Susun bilangan ini:",
    "options": [
      "0,5",
      "0,2",
      "0,8",
      "0,1"
    ],
    "correctAnswer": [
      "0,1",
      "0,2",
      "0,5",
      "0,8"
    ],
    "hint1": "Lihat angka di belakang koma.",
    "hint2": "1, 2, 5, 8.",
    "hint3": "Susun secara urut.",
    "explanation": {
      "proses": "0,1 < 0,2 < 0,5 < 0,8",
      "kesimpulan": "Sangat mudah karena semua satu digit di belakang koma."
    }
  },
  {
    "id": "ud2",
    "type": "ORDERING",
    "category": "PISA",
    "topic": "Mengurutkan Desimal",
    "level": "Tantangan",
    "stimulus": "Waktu tempuh 4 mobil (detik): A(10,5), B(10,25), C(10,8), D(10,45). Urutkan dari yang tercepat (waktu terkecil)!",
    "question": "Susun waktu-waktu ini:",
    "options": [
      "10,5",
      "10,25",
      "10,8",
      "10,45"
    ],
    "correctAnswer": [
      "10,25",
      "10,45",
      "10,5",
      "10,8"
    ],
    "hint1": "Samakan desimal: 10,50 ; 10,25 ; 10,80 ; 10,45.",
    "hint2": "Urutkan dari angka terkecil: 25, 45, 50, 80.",
    "hint3": "Hasilnya B, D, A, C.",
    "explanation": {
      "proses": "10,25 < 10,45 < 10,50 < 10,80.",
      "kesimpulan": "Inilah urutan dari tercepat ke terlambat."
    }
  },
  {
    "id": "ud3",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Ahli",
    "stimulus": "Urutkan bilangan berikut dari yang **terbesar**:",
    "question": "Susun bilangannya (terbesar di paling atas/kiri):",
    "options": [
      "0,9",
      "0,89",
      "0,95",
      "1,0"
    ],
    "correctAnswer": [
      "1,0",
      "0,95",
      "0,9",
      "0,89"
    ],
    "hint1": "1,0 adalah yang paling besar (satu-satunya yang angkanya 1 di depan koma).",
    "hint2": "Samakan sisanya: 0,90 ; 0,89 ; 0,95.",
    "hint3": "95 > 90 > 89.",
    "explanation": {
      "proses": "1,00 > 0,95 > 0,90 > 0,89.",
      "kesimpulan": "Inilah urutan turun (terbesar ke terkecil)."
    }
  },
  {
    "id": "ud4",
    "type": "ORDERING",
    "category": "PISA",
    "topic": "Mengurutkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Suhu tubuh pasien: 36,5°C ; 37,1°C ; 36,8°C. Urutkan dari yang paling panas (tertinggi)!",
    "question": "Susun suhu:",
    "options": [
      "36,5",
      "37,1",
      "36,8"
    ],
    "correctAnswer": [
      "37,1",
      "36,8",
      "36,5"
    ],
    "hint1": "Lihat angka di depan koma dulu. 37 > 36.",
    "hint2": "37,1 paling panas.",
    "hint3": "Bandingkan 36,8 dan 36,5. 8 > 5.",
    "explanation": {
      "proses": "37,1 > 36,8 > 36,5.",
      "kesimpulan": "Itulah urutan dari paling panas."
    }
  },
  {
    "id": "ud5",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Tantangan",
    "stimulus": "Urutkan dari yang terkecil:",
    "question": "Susun angka-angka ini:",
    "options": [
      "0,05",
      "0,5",
      "0,15",
      "0,2"
    ],
    "correctAnswer": [
      "0,05",
      "0,15",
      "0,2",
      "0,5"
    ],
    "hint1": "Jadikan dua angka belakang koma semua: 0,05 ; 0,50 ; 0,15 ; 0,20.",
    "hint2": "Bandingkan: 5, 50, 15, 20.",
    "hint3": "5 < 15 < 20 < 50.",
    "explanation": {
      "proses": "0,05 < 0,15 < 0,20 < 0,50.",
      "kesimpulan": "0,05 < 0,15 < 0,2 < 0,5."
    }
  },
  {
    "id": "ud6",
    "type": "ORDERING",
    "category": "PISA",
    "topic": "Mengurutkan Desimal",
    "level": "Ahli",
    "stimulus": "Hasil panen padi: 1,5 ton ; 1,05 ton ; 1,55 ton. Urutkan dari panen paling banyak!",
    "question": "Susun hasilnya:",
    "options": [
      "1,5",
      "1,05",
      "1,55"
    ],
    "correctAnswer": [
      "1,55",
      "1,5",
      "1,05"
    ],
    "hint1": "Jadikan 2 desimal: 1,50 ; 1,05 ; 1,55.",
    "hint2": "Paling banyak: 55, lalu 50, lalu 05.",
    "hint3": "1,55 > 1,50 > 1,05.",
    "explanation": {
      "proses": "1,55 > 1,50 > 1,05.",
      "kesimpulan": "Itu adalah urutan dari terbesar."
    }
  },
  {
    "id": "ud7",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Urutkan dari yang terkecil:",
    "question": "Susun bilangannya:",
    "options": [
      "0,33",
      "0,3",
      "0,4"
    ],
    "correctAnswer": [
      "0,3",
      "0,33",
      "0,4"
    ],
    "hint1": "0,30 ; 0,33 ; 0,40.",
    "hint2": "30 < 33 < 40.",
    "hint3": "0,3 < 0,33 < 0,4.",
    "explanation": {
      "proses": "0,30 < 0,33 < 0,40.",
      "kesimpulan": "Sudah diurutkan dengan benar."
    }
  },
  {
    "id": "ud8",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Tantangan",
    "stimulus": "Urutkan dari yang terbesar:",
    "question": "Susun ini:",
    "options": [
      "2,12",
      "2,2",
      "2,02"
    ],
    "correctAnswer": [
      "2,2",
      "2,12",
      "2,02"
    ],
    "hint1": "2,20 ; 2,12 ; 2,02.",
    "hint2": "Terbesar 20, lalu 12, lalu 02.",
    "hint3": "2,2 > 2,12 > 2,02.",
    "explanation": {
      "proses": "2,20 > 2,12 > 2,02.",
      "kesimpulan": "Itulah urutan dari terbesar."
    }
  },
  {
    "id": "ud9",
    "type": "ORDERING",
    "category": "PISA",
    "topic": "Mengurutkan Desimal",
    "level": "Ahli",
    "stimulus": "Ketebalan buku: Matematika (2,1 cm), IPA (2,05 cm), IPS (2,15 cm). Urutkan dari yang paling tipis!",
    "question": "Susun angka ketebalannya:",
    "options": [
      "2,1",
      "2,05",
      "2,15"
    ],
    "correctAnswer": [
      "2,05",
      "2,1",
      "2,15"
    ],
    "hint1": "2,10 ; 2,05 ; 2,15.",
    "hint2": "Paling tipis (kecil) adalah 05, lalu 10, lalu 15.",
    "hint3": "2,05 < 2,10 < 2,15.",
    "explanation": {
      "proses": "2,05 < 2,10 < 2,15.",
      "kesimpulan": "Urutan dari yang paling tipis."
    }
  },
  {
    "id": "ud10",
    "type": "ORDERING",
    "category": "TKA",
    "topic": "Mengurutkan Desimal",
    "level": "Pemanasan",
    "stimulus": "Urutkan dari terkecil:",
    "question": "Susun angka-angka ini:",
    "options": [
      "0,01",
      "0,1",
      "1,0",
      "0,11"
    ],
    "correctAnswer": [
      "0,01",
      "0,1",
      "0,11",
      "1,0"
    ],
    "hint1": "1,0 paling besar. 0,10 ; 0,01 ; 0,11.",
    "hint2": "01 < 10 < 11.",
    "hint3": "0,01 < 0,1 < 0,11 < 1,0.",
    "explanation": {
      "proses": "0,01 < 0,10 < 0,11 < 1,00.",
      "kesimpulan": "Diurutkan dari terkecil."
    }
  },
  {
    "id": "c1",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Pemanasan",
    "stimulus": "Hitung campuran ini: 1/2 + 0,25 = ...",
    "question": "Berapa hasilnya dalam desimal?",
    "options": [
      "0,75",
      "0,5",
      "0,30",
      "1,25"
    ],
    "correctAnswer": "0,75",
    "hint1": "Ubah 1/2 menjadi desimal.",
    "hint2": "1/2 = 0,5.",
    "hint3": "0,5 + 0,25 = 0,75.",
    "explanation": {
      "proses": "0,50 + 0,25 = 0,75.",
      "kesimpulan": "Hasilnya 0,75."
    }
  },
  {
    "id": "c2",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Campuran",
    "level": "Tantangan",
    "stimulus": "Ayah mengecat 1/4 bagian dinding. Lalu mengecat lagi seluas 0,5 bagian.",
    "question": "Berapa total bagian yang sudah dicat?",
    "options": [
      "0,75",
      "0,6",
      "1/9",
      "0,9"
    ],
    "correctAnswer": "0,75",
    "hint1": "1/4 = 0,25.",
    "hint2": "0,25 + 0,5 = ...",
    "hint3": "0,25 + 0,50 = 0,75.",
    "explanation": {
      "proses": "1/4 + 0,5 = 0,25 + 0,50 = 0,75.",
      "kesimpulan": "Totalnya 0,75 bagian."
    }
  },
  {
    "id": "c3",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Ahli",
    "stimulus": "Hitung: 0,8 - 2/5 = ...",
    "question": "Berapakah hasilnya?",
    "options": [
      "0,4",
      "0,6",
      "0,2",
      "1,2"
    ],
    "correctAnswer": "0,4",
    "hint1": "Ubah 2/5 ke desimal.",
    "hint2": "2/5 = 4/10 = 0,4.",
    "hint3": "0,8 - 0,4 = 0,4.",
    "explanation": {
      "proses": "2/5 = 0,4. 0,8 - 0,4 = 0,4.",
      "kesimpulan": "Hasilnya 0,4."
    }
  },
  {
    "id": "c4",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Campuran",
    "level": "Pemanasan",
    "stimulus": "Beni punya tali 1,5 meter. Ia memotongnya sepanjang 1/2 meter.",
    "question": "Berapa sisa tali Beni?",
    "options": [
      "1 meter",
      "1,2 meter",
      "2 meter",
      "0,5 meter"
    ],
    "correctAnswer": "1 meter",
    "hint1": "1/2 meter = 0,5 meter.",
    "hint2": "1,5 - 0,5 = ...",
    "hint3": "1,0 atau 1 meter.",
    "explanation": {
      "proses": "1,5 - 0,5 = 1,0.",
      "kesimpulan": "Sisa tali 1 meter."
    }
  },
  {
    "id": "c5",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Tantangan",
    "stimulus": "(1/2 × 0,4) = ...",
    "question": "Hitung hasilnya dalam desimal!",
    "options": [
      "0,2",
      "0,4",
      "0,8",
      "0,1"
    ],
    "correctAnswer": "0,2",
    "hint1": "0,4 sama dengan 4/10.",
    "hint2": "1/2 × 4/10 = 4/20.",
    "hint3": "4/20 = 2/10 = 0,2. Atau separuhnya 0,4 adalah 0,2.",
    "explanation": {
      "proses": "1/2 dari 0,4 adalah 0,2.",
      "kesimpulan": "Hasilnya 0,2."
    }
  },
  {
    "id": "c6",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Campuran",
    "level": "Ahli",
    "stimulus": "Ibu belanja 0,75 kg tepung. Kemudian ia membaginya ke dalam 3 kantong sama berat.",
    "question": "Berapa kg isi tiap kantong?",
    "options": [
      "1/4 kg",
      "0,35 kg",
      "0,5 kg",
      "1/2 kg"
    ],
    "correctAnswer": "1/4 kg",
    "hint1": "0,75 dibagi 3 = 0,25.",
    "hint2": "Berapa bentuk pecahan dari 0,25?",
    "hint3": "25/100 = 1/4.",
    "explanation": {
      "proses": "0,75 ÷ 3 = 0,25. 0,25 = 1/4.",
      "kesimpulan": "Tiap kantong berisi 1/4 kg."
    }
  },
  {
    "id": "c7",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Pemanasan",
    "stimulus": "0,25 + 3/4 = ...",
    "question": "Berapa hasilnya?",
    "options": [
      "1",
      "0,5",
      "1,25",
      "0,75"
    ],
    "correctAnswer": "1",
    "hint1": "3/4 = 0,75.",
    "hint2": "0,25 + 0,75 = 1,00.",
    "hint3": "1.",
    "explanation": {
      "proses": "0,25 + 0,75 = 1.",
      "kesimpulan": "Hasilnya 1 utuh."
    }
  },
  {
    "id": "c8",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Tantangan",
    "stimulus": "Berapa 1/5 dari 0,5?",
    "question": "Pilih hasil yang benar!",
    "options": [
      "0,1",
      "0,25",
      "1,0",
      "0,05"
    ],
    "correctAnswer": "0,1",
    "hint1": "1/5 × 5/10.",
    "hint2": "5/50 = 1/10.",
    "hint3": "1/10 = 0,1.",
    "explanation": {
      "proses": "1/5 × 0,5 = 0,1.",
      "kesimpulan": "Hasilnya 0,1."
    }
  },
  {
    "id": "c9",
    "type": "MULTIPLE_CHOICE",
    "category": "PISA",
    "topic": "Campuran",
    "level": "Ahli",
    "stimulus": "Budi memiliki 1 botol penuh air. Ia minum 0,2 bagian, lalu adiknya meminum 1/4 bagian.",
    "question": "Berapa sisa air di botol?",
    "options": [
      "0,55",
      "0,45",
      "0,8",
      "0,25"
    ],
    "correctAnswer": "0,55",
    "hint1": "1/4 = 0,25.",
    "hint2": "Air yang diminum = 0,2 + 0,25 = 0,45.",
    "hint3": "Sisa air = 1 - 0,45 = 0,55.",
    "explanation": {
      "proses": "Diminum: 0,20 + 0,25 = 0,45. Sisa: 1,00 - 0,45 = 0,55.",
      "kesimpulan": "Sisa air adalah 0,55 bagian."
    }
  },
  {
    "id": "c10",
    "type": "MULTIPLE_CHOICE",
    "category": "TKA",
    "topic": "Campuran",
    "level": "Pemanasan",
    "stimulus": "Ubah 1 1/2 menjadi desimal lalu tambahkan 0,5.",
    "question": "Berapa hasil akhirnya?",
    "options": [
      "2,0",
      "1,5",
      "2,5",
      "1,0"
    ],
    "correctAnswer": "2,0",
    "hint1": "1 1/2 = 1,5.",
    "hint2": "1,5 + 0,5 = 2,0.",
    "hint3": "2,0 sama dengan 2.",
    "explanation": {
      "proses": "1,5 + 0,5 = 2,0.",
      "kesimpulan": "Hasilnya 2,0."
    }
  }
];
