document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const idgame = document.getElementById("idgame").value;
  const nominal = document.getElementById("nominal").value;
  const metode = document.getElementById("metode").value;

  const adminWa = "6288224274374"; // Ganti dengan nomor admin tanpa +
  const pesan = `*Order Top Up Game*\n\n` +
                `*Nama:* ${nama}\n` +
                `*ID Game:* ${idgame}\n` +
                `*Nominal:* ${nominal}\n` +
                `*Metode Pembayaran:* ${metode}\n\n` +
                `Silakan proses pesanan ini.`;

  const url = `https://wa.me/${adminWa}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});