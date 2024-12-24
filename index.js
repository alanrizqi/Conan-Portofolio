// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let closeIcon = document.querySelector('#close-icon'); // Pastikan Anda memiliki elemen dengan ID ini
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Ambil posisi scroll saat ini

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100; // Offset untuk penyesuaian
        let height = sec.offsetHeight; // Tinggi section
        let id = sec.getAttribute('id'); // Ambil ID section

        if (top >= offset && top <= offset + height) {
            // Active navbar navLink
            navLinks.forEach(link => {
                link.classList.remove('active'); // Hapus kelas aktif dari semua tautan
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Tambahkan kelas aktif ke taut
            });
            sec.classList.add('show-animate'); // Tambahkan animasi pada section yang aktif
        } else {
            sec.classList.remove('show-animate'); // Hapus animasi dari section yang tidak aktif
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Tambahkan kelas sticky jika scroll lebih dari 100

    
    // Menyembunyikan menu dan navbar jika scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer'); // Perbaiki penulisan di sini
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}