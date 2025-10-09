<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1 PHP</title>
<body>
    <h1>Form Penilaian Ujian</h1>

    <!-- Form -->
    <form method="post">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="number" name="nilai" required><br><br>

        <input type="submit" name="submit" value="Kirim">
    </form>

    <hr>

    <?php
    // Proses form
    if (isset($_POST['submit'])) {
        $nama  = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        echo "<h2>Hasil Penilaian</h2>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $nilai <br>";

        // Struktur kendali if-else
        if ($nilai > 70) {
            echo "Status: Lulus";
        } else {
            echo "Status: Remedial";
        }
    }
    ?>
</body>
</html>