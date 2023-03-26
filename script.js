// Deklarasi Variabel
var inputNama = document.getElementById('nama')
var inputHarga = document.getElementById('harga')
var inputJumlah = document.getElementById('jumlah')
var inputTotal = document.getElementById('total')


// Function ketika di tekan button hitung
function handleSubmit(event) {
    // Output dari hasil inputan dalam form
    document.getElementById('text-nama').innerText = "Nama Barang : " + inputNama.value
    document.getElementById('text-harga').innerText = "Harga Barang : " + inputHarga.value
    document.getElementById('text-jumlah').innerText = "Jumlah Beli : " + inputJumlah.value
    document.getElementById('text-total').innerHTML  = "Total Bayar : Rp " + inputHarga.value * inputJumlah.value
    const tampil = document.getElementById('hasil')
    const display = tampil.style.display
    if (display == 'block') {
        tampil.style.display = 'block'
    } else {
        tampil.style.display = 'block'
    }
    event.preventDefault()
    afterSubmit();
}

// function setelah hitung, data dalam form akan hilang
function afterSubmit() {
    inputNama.value = ""
    inputHarga.value = ""
    inputJumlah.value = ""
}