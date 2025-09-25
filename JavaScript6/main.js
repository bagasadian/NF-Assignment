// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
  // Tambahkan dua data baru
  store({ nama: "Kylian Mbappé", umur: 26, alamat: "Perancis", email: "mbappe@realmadrid.com" });
  store({ nama: "Arda Güler", umur: 20, alamat: "Turkiye", email: "guler@realmadrid.com" });

  // Tampilkan semua data
  index();

  // Hapus data ke-6
  destroy(5);

  // Tampilkan lagi setelah dihapus
  index();
};

main();
