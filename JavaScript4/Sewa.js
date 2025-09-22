class Kendaraan {
  constructor(nama, jenis, hargaSewa) {
    this.nama = nama;
    this.jenis = jenis;
    this.hargaSewa = hargaSewa;
  }

  infoKendaraan() {
    return `${this.jenis} - ${this.nama} (Rp${this.hargaSewa}/hari)`;
  }
}

class Mobil extends Kendaraan {
  constructor(nama, hargaSewa, kapasitas) {
    super(nama, "Mobil", hargaSewa);
    this.kapasitas = kapasitas;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} | Kapasitas: ${this.kapasitas} orang`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, hargaSewa, cc) {
    super(nama, "Motor", hargaSewa);
    this.cc = cc;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} | ${this.cc}cc`;
  }
}

class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanSewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanSewa = kendaraan;
  }

  infoPelanggan() {
    return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, ` +
           `Kendaraan: ${this.kendaraanSewa ? this.kendaraanSewa.infoKendaraan() : "Belum menyewa"}`;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanDaftarPelanggan() {
    console.log("=== Daftar Pelanggan yang Sedang Menyewa ===");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
}

let innova = new Mobil("Toyota Innova Reborn", 700000, 9);
let vario = new Motor("Honda Vario", 150000, 150);

let pelanggan1 = new Pelanggan("Bagas", "081234567890");
let pelanggan2 = new Pelanggan("Jeki", "089876543210");

pelanggan1.sewaKendaraan(innova);
pelanggan2.sewaKendaraan(vario);

let sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanDaftarPelanggan();
