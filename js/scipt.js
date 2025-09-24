// Tampilkan waktu saat ini
document.getElementById("currentTime").textContent = new Date().toString();

// Tangani submit form
document.getElementById("formMessage").addEventListener("submit", function(e){
  e.preventDefault();
  
  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tglLahir").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTgl").textContent = tgl;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outPesan").textContent = pesan;
});
