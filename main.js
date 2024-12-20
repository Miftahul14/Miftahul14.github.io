var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Seleksi semua elemen dengan kelas 'circle'
const circles = document.querySelectorAll('.circle');

circles.forEach((elem) => {
    // Ambil atribut data
    const dots = parseInt(elem.getAttribute("data-dots"), 10); // Total titik
    const marked = parseInt(elem.getAttribute("data-percent"), 10); // Persentase aktif
    const percent = Math.floor(dots * marked / 100); // Hitung jumlah titik aktif
    const rotate = 360 / dots; // Derajat rotasi setiap titik
    let points = "";

    // Generate titik-titik
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    // Tambahkan titik ke dalam elemen lingkaran
    elem.innerHTML = points;

    // Tambahkan kelas 'marked' ke titik yang aktif
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});



// emailjs.init("Uxp7KZEFYqbr1xzpX");

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     emailjs.sendForm("service_dh2gq3r", "template_p6orivj", this)
//         .then(function() {
//             alert("Pesan berhasil dikirim!");
//         }, function(error) {
//             alert("Gagal mengirim pesan. Coba lagi.");
//             console.error("Error:", error);
//         });
// });


// 



// (function() {
//     // Inisialisasi EmailJS dengan User ID/Public Key
//     emailjs.init("Uxp7KZEFYqbr1xzpX");
// })();

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah reload halaman saat form dikirim

//     // Ambil nilai dari input form
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Kirim data form ke EmailJS
//     emailjs.send("service_dh2gq3r", "template_p6orivj", {
//         from_name: name, // Sesuaikan dengan placeholder di template EmailJS
//         from_email: email,
//         message: message
//     })
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);

//         // Tampilkan pesan sukses
//         Swal.fire({
//             icon: 'success',
//             title: 'Berhasil!',
//             text: 'Pesan berhasil dikirim!',
//             showConfirmButton: false,
//             timer: 1500
//         });

//         // Reset form setelah berhasil
//         document.getElementById('contactForm').reset();
//     }, function(error) {
//         console.log('FAILED...', error);

//         // Tampilkan pesan error
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops!',
//             text: 'Pesan gagal dikirim. Coba lagi nanti.',
//             showConfirmButton: true
//         });
//     });
// });
