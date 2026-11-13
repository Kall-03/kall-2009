
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (menuBtn && mobileMenu && menuIcon) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.className = mobileMenu.classList.contains('hidden')
            ? "fa-solid fa-bars text-lg"
            : "fa-solid fa-xmark text-lg";
    });
}

function toggleMenu() {
    if (mobileMenu && menuIcon) {
        mobileMenu.classList.add('hidden');
        menuIcon.className = "fa-solid fa-bars text-lg";
    }
}

const words = [
    "Finalis Nasional LKS IT Software Solution 2026",
    "Juara I LKS Tingkat Provinsi Sulawesi Barat",
    "Full-Stack & Enterprise Software Developer"
];

let idx = 0;

function typeWriter() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    let textArr = words[idx].split("");

    function run() {
        if (textArr.length > 0) {
            typingText.textContent += textArr.shift();
        } else {
            setTimeout(deleteWriter, 2500);
            return;
        }
        setTimeout(run, 65);
    }

    run();
}

function deleteWriter() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    let textArr = words[idx].split("");

    function runDel() {
        if (textArr.length > 0) {
            textArr.pop();
            typingText.textContent = textArr.join("");
        } else {
            idx = (idx + 1) % words.length;
            setTimeout(typeWriter, 500);
            return;
        }
        setTimeout(runDel, 35);
    }

    runDel();
}

function filterProjects(category) {
    const items = document.querySelectorAll('.project-item');

    items.forEach(item => {
        item.style.display =
            category === 'all' || item.classList.contains(category)
                ? 'flex'
                : 'none';
    });
}

function showToast(title, message) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMsg = document.getElementById('toast-msg');

    if (!toast || !toastTitle || !toastMsg) return;

    toastTitle.innerText = title;
    toastMsg.innerText = message;

    toast.classList.remove('translate-y-32', 'opacity-0');

    setTimeout(() => {
        toast.classList.add('translate-y-32', 'opacity-0');
    }, 4000);
}

const certs = {
    'sertif3': {
        org: "PEMERINTAH PROVINSI SULAWESI BARAT",
        title: "Juara I LKS Provinsi Sulbar 2026",
        sub: "Teknologi Informasi Piranti Lunak untuk Bisnis",
        desc: "Diberikan kepada MOH. HAIKAL (UPTD SMKN Labuang) atas prestasi sebagai Juara I (Pertama) Lomba Kompetensi Siswa (LKS) Pendidikan Menengah (DIKMEN) Tingkat Provinsi Sulawesi Barat Tahun 2026.",
        img: "picture/juara1.jpg"
    },
    'sertif2': {
        org: "KEMENTERIAN PENDIDIKAN DASAR DAN MENENGAH",
        title: "Finalis Nasional LKS Dikmen 2026",
        sub: "IT Software Solution for Business (Nomor: 21337/PPN/SMK/2026)",
        desc: "Diberikan kepada Moh. Haikal (UPTD SMKN Labuang, Sulawesi Barat) atas prestasinya sebagai Finalis Nasional bidang IT Software Solution for Business pada LKS Dikmen Tingkat Nasional Tahun 2026.",
        img: "picture/sertificate.jpg"
    },
    'sertif1': {
        org: "ASEAN FOUNDATION & GOOGLE.ORG",
        title: "AI Ready ASEAN Hour of Code Training",
        sub: "Certificate of Completion",
        desc: "Diberikan kepada MOH. HAIKAL untuk keberhasilan menyelesaikan pembelajaran dalam AI Ready ASEAN Hour of Code Training yang didukung oleh ASEAN Foundation dan Google.org.",
        img: "picture/asean.jpg"
    }
};

function openModal(id) {
    const c = certs[id];
    if (!c) return;

    document.getElementById('cert-org').innerText = c.org;
    document.getElementById('cert-title').innerText = c.title;
    document.getElementById('cert-sub').innerText = c.sub;
    document.getElementById('cert-desc').innerText = c.desc;
    document.getElementById('cert-img').src = c.img;

    const modal = document.getElementById('cert-modal');
    const box = document.getElementById('modal-box');

    if (!modal || !box) return;

    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.remove('opacity-0');
        box.classList.remove('scale-95');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('cert-modal');
    const box = document.getElementById('modal-box');

    if (!modal || !box) return;

    modal.classList.add('opacity-0');
    box.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);

    document.body.style.overflow = 'auto';
}

const playlist = [
    {
        title: "Secret Love Song",
        artist: "Little Mix ft. Jason Derulo",
        url: "https://open.spotify.com/embed/track/6KHL1En9v6iNWjcs44mcmU",
        kata : "A love kept in silence, yet felt in every heartbeat."
    
    }
    ,
    {
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        url: "https://open.spotify.com/embed/track/6mQLN3zRtAp6ovjusyYKrV",
    kata : "Some stars are written in destiny, waiting for two hearts to find each other."
    },
    {
        title: "Love Story",
        artist: "Taylor Swift",
        url: "https://open.spotify.com/embed/track/1D4PL9B8gOg78jiHg3FvBb",
        kata : "Every love has a story, and you're my favorite chapter."
    }
];

let currIndex = 0;

function selectSong(index) {
    if (index < 0 || index >= playlist.length) return;

    currIndex = index;
    const song = playlist[index];

    const player = document.getElementById("spotify-player");
    const title = document.getElementById("current-song-title");
    const artist = document.getElementById("current-song-artist");
    const kata = document.getElementById("song-quote");
    const status = document.getElementById("status-text");
    const albumArt = document.getElementById("album-art");

    if (player) player.src = song.url;
    if (title) title.innerText = song.title;
    if (artist) artist.innerText = song.artist;
    if (kata) kata.innerText = song.kata;
    if (status) status.innerText = "Sedang Dipilih";
    if (albumArt) albumArt.classList.remove("playing");

    for (let i = 0; i < playlist.length; i++) {
        const btn = document.getElementById(`song-btn-${i}`);

        if (btn) {
            btn.classList.remove("active-song");
            if (i === index) btn.classList.add("active-song");
        }
    }
}

function nextSong() {
    selectSong((currIndex + 1) % playlist.length);
}

function prevSong() {
    selectSong((currIndex - 1 + playlist.length) % playlist.length);
}

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(
    'header nav a[href^="#"], #mobile-menu a[href^="#"]'
);

function updateActiveNavbar() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-nav", "active-mobile");

        if (link.getAttribute("href") === "#" + currentSection) {
            if (link.closest("nav")) {
                link.classList.add("active-nav");
            } else {
                link.classList.add("active-mobile");
            }
        }
    });
}

window.addEventListener("scroll", updateActiveNavbar);

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.classList.remove("active-nav", "active-mobile");
        });

        if (this.closest("nav")) {
            this.classList.add("active-nav");
        } else {
            this.classList.add("active-mobile");
        }
    });
});

window.addEventListener("load", function() {
    setTimeout(() => {
        const skeleton = document.getElementById("skeleton-loader");
        if (skeleton) skeleton.classList.add("hide");
    }, 1500);

    updateActiveNavbar();
});

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const name = document.getElementById('form-name')?.value.trim() || "";

            if (!name) {
                showToast("Peringatan!", "Nama harus diisi terlebih dahulu.");
                return;
            }

            if (typeof emailjs === "undefined") {
                showToast("Gagal!", "EmailJS belum dimuat. Periksa library EmailJS di HTML.");
                return;
            }

            const submitButton = contactForm.querySelector('[type="submit"]');

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.dataset.originalText = submitButton.innerText;
                submitButton.innerText = "Mengirim...";
            }

            showToast(
                "Mengirim Pesan!",
                `Mohon tunggu ${name}, pesan sedang dikirim ke email.`
            );

            try {
                await emailjs.sendForm(
                    "service_tkfje5c",
                    "template_lxhkxze",
                    contactForm,
                    {
                        publicKey: "YOBnL783ezMpJktZa"
                    }
                );

                showToast(
                    "Pesan Berhasil!",
                    `Terima kasih ${name}, pesan kamu berhasil dikirim ke email!`
                );

                contactForm.reset();

            } catch (error) {
                console.error("EmailJS Error:", error);

                showToast(
                    "Pengiriman Gagal!",
                    "Pesan belum berhasil dikirim. Periksa Console untuk melihat penyebabnya."
                );

            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerText = submitButton.dataset.originalText || "Kirim Pesan Sekarang";
                }
            }
        });
    }
});
