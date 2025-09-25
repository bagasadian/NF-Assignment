// controller.js
import users from "./data.js";

const index = () => {
  console.log("=== Daftar Users ===");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan!");
};

const destroy = (indexUser) => {
  if (indexUser >= 0 && indexUser < users.length) {
    users.splice(indexUser, 1);
    console.log("Data berhasil dihapus!");
  } else {
    console.log("Index tidak ditemukan!");
  }
};

export { index, store, destroy };
