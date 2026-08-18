import { FeedPost } from '../types';

export const feedData: FeedPost[] = [
  {
    id: 'post1',
    author: {
      name: 'Piko si Burung Hantu',
      avatar: '🦉',
      role: 'Sistem'
    },
    timeAgo: 'Baru saja',
    content: 'Selamat datang di PecahanKu! 🚀\n\nHari ini kita akan belajar banyak hal seru tentang Pecahan dan Desimal. Jangan lupa cek menu **Jelajah** untuk melihat materi ya!',
    likes: 12,
    comments: 0
  },
  {
    id: 'post2',
    author: {
      name: 'Budi Santoso',
      avatar: '👦',
      role: 'Siswa Kelas 6'
    },
    timeAgo: '2 jam yang lalu',
    content: 'Ternyata 1/2 itu sama dengan 0.5 ya! Wah, pantesan aja kalau beli setengah kilo telur, di timbangan tulisannya 0.5 kg. Matematika itu ada di mana-mana! 😲',
    likes: 45,
    comments: 3
  },
  {
    id: 'post3',
    author: {
      name: 'Piko si Burung Hantu',
      avatar: '🦉',
      role: 'Sistem'
    },
    timeAgo: '5 jam yang lalu',
    content: 'Ayo coba asah otakmu! 🧠\n\nBerapakah hasil dari 2/3 dikali 3/4? Jawab di kolom komentar ya!',
    likes: 88,
    comments: 12,
    action: {
      type: 'kuis',
      label: 'Jawab Kuis',
      correctAnswer: '1/2'
    }
  },
  {
    id: 'post4',
    author: {
      name: 'Piko si Jenius',
      avatar: '🦉',
      role: 'Sistem'
    },
    timeAgo: '1 hari yang lalu',
    content: 'Pernahkah kamu bingung membedakan 0,5 dan 0,05? \n\nBayangkan 0,5 itu seperti 5 keping uang puluhan (50), sedangkan 0,05 itu cuma 5 keping satuan (5). Jangan sampai tertukar ya! 🌟',
    likes: 112,
    comments: 14
  },
  {
    id: 'post5',
    author: {
      name: 'Siti Matematika',
      avatar: '👧',
      role: 'Siswa Berprestasi'
    },
    timeAgo: '1 hari yang lalu',
    content: 'Teman-teman, aku baru sadar kalau 3/4 itu sama dengan 75%! Pantesan kalau baterai HP tinggal 3/4, angkanya 75%. Keren ya matematika! 📱✨',
    likes: 89,
    comments: 5
  }
];
