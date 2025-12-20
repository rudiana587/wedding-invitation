export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Rudiana',
            child: 'Putra ke 1',
            father: 'Ade Rukmana',
            mother: 'Lilis Juliana',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Sarah Zahra Nurbani',
            child: 'Putri ke 1',
            father: 'Alm. Emil Puja Kusuma',
            mother: 'Yani Siti Hanifah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Januari',
            date: '13',
            day: 'Selasa',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Januari',
            date: '13',
            day: 'Selasa',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl. Ciledug No.268B, Ngamplangsari, Kec. Cilawu, Kabupaten Garut, Jawa Barat 44181'
    },

    link: {
        calendar: 'https://calendar.app.google/unSHBR41zG5U4UPM7',
        map: 'https://maps.app.goo.gl/Qk87dGsYEsYfxAWH7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Sarah Zahra Nurbani',
            icon: './src/assets/images/bri.png',
            rekening: '177-002-144-2360'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxLygq7YvSeCOcLYWCWpOmWEAQUDXaceXYyP4SXiSuVoNyIn_Q0OfjBnYAnoSuk3rCg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
