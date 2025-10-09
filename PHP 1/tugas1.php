<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Nilai Ujian</title>
</head>
<body>
    <h2>Form Penilaian Ujian</h2>

    <!-- Form Input -->
    <form method="POST" action="">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nilai Ujian:</label><br>
        <input type="nilai" name="nilai" required><br><br>

        <input type="submit" name="submit" value="Kirim">
    </form>

    <hr>

    <?php


    // Form processing
    if (isset($_POST['submit'])) {
        $nama  = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];
        
        echo "<h3>Hasil Penilaian</h3>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai Ujian: $nilai <br>";

        // Struktur kendali if-else
        if ($nilai > 70) {
            echo "<strong>Status: Lulus </strong>";
        } else {
            echo "<strong>Status: Remidi</strong>";
        }
    }
    ?>
</body>
</html>
