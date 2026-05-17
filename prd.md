Gemini
PRD Task Tracker & Robot Emotion
Percakapan baru
Item Buatan Saya
Notebook

Human Error and Safety Fatigue in Workplace Operations
Notebook baru
Gem
Percakapan
ABSEN TIMEDOOR
Percakapan yang disematkan
Setup React Vite Tailwind v4
Percakapan yang disematkan
WEBSITE EKOTIFA
Percakapan yang disematkan
PRD Task Tracker & Robot Emotion
Vibe Coding Workflow: Planning, Building, Testing
Diskusi Keuangan: Rupiah, Bank, Investasi
Kalkulator Harga Otomatis untuk Ekotifa
Pembuatan PPT Analisis Kecelakaan Kerja
Debug Gagal Build Vercel Project
Belajar React: Data Fetching & Edit
Membuat Komponen Card React Interaktif
Git dan GitHub: Fungsi dan Alur Kerja
5 Industri Masa Depan Untuk Kaya
Mengimpor File Beda Folder di React
Pengenalan Sanity Studio untuk Pemula
Peluang Bisnis Kantong Kertas Strategis

Setelan & bantuan
Percakapan dengan Gemini
gua mau buat website untuk fitur seperti di gambar,nanti misal dia sumbit yang deadlinenya masih lebih dr seminggu robotnya senyum, kl deadlinenya 6-5 hari robot curiga,  kl deadlinenya 4-3 hari robotnya panik, kl deadlinenya 2-1 hari robotnya marah





buat total tugasnya kalo

1-2 aman

3-4 curiga

5-6 panik

lebih dr 7 marah

buatkan prdnya

Berikut adalah Product Requirements Document (PRD) untuk fitur Task Tracker dengan indikator Emosi Robot berdasarkan deskripsi dan gambar yang Anda berikan.

Saya merancangnya dengan bahasa yang lugas dan menambahkan aturan prioritas (karena kondisi total tugas dan tenggat waktu bisa saling bertabrakan).

Product Requirements Document (PRD): Task Tracker & Robot Emotion
1. Ringkasan Proyek
Sebuah aplikasi web sederhana untuk mencatat dan melacak tugas (to-do list). Aplikasi ini memiliki fitur gamifikasi berupa Emosi Robot yang berubah secara dinamis berdasarkan dua faktor: jumlah total tugas yang sedang aktif dan seberapa dekat tenggat waktu (deadline) tugas tersebut.

2. Tujuan Fitur
Membantu pengguna melacak tugas beserta tenggat waktunya.

Memberikan peringatan visual psikologis (melalui ekspresi wajah robot) agar pengguna segera menyelesaikan tugas sebelum menumpuk atau melewati tenggat waktu.

3. Komponen Antarmuka (UI) Utama
Berdasarkan gambar referensi, UI akan dibagi menjadi tiga bagian utama:

Header (Indikator Status)

Menampilkan angka Total tugas aktif.

Menampilkan ikon/gambar Robot emotion yang berubah sesuai logika sistem.

Formulir Input Tugas

Field Nama tugas: Input teks untuk judul tugas.

Field Deadline: Input kalender (Date picker) untuk memilih tanggal tenggat waktu.

Tombol Submit: Untuk menyimpan tugas ke dalam daftar.

Daftar Tugas (Task List)

Menampilkan kartu untuk setiap tugas aktif (contoh: "Tugas abcd", "Tugas defg").

Menampilkan Countdown (hitung mundur waktu) dari hari ini menuju tanggal deadline (contoh: "Sisa 3 hari").

4. Logika Sistem & Aturan (Business Rules)
A. Kondisi Berdasarkan Tenggat Waktu (Deadline)
Karena pengguna bisa memiliki banyak tugas, sistem akan selalu mengecek tugas dengan deadline paling dekat (tercepat) untuk menentukan emosi robot.

> 7 Hari: Senyum / Aman

5 - 6 Hari: Curiga

3 - 4 Hari: Panik

1 - 2 Hari: Marah

Tambahan: 0 Hari atau Lewat (Overdue) juga masuk kategori Marah.

B. Kondisi Berdasarkan Total Tugas
1 - 2 Tugas: Senyum / Aman

3 - 4 Tugas: Curiga

5 - 6 Tugas: Panik

>= 7 Tugas: Marah

C. Logika Prioritas Emosi (Conflict Resolution)
Karena ada dua pemicu emosi (Total Tugas vs Deadline Paling Dekat), sistem membutuhkan aturan prioritas jika terjadi konflik.
Aturan: Sistem akan selalu mengambil emosi dengan tingkat keparahan (severity) paling tinggi.

Tingkat Keparahan: Marah (Level 4) > Panik (Level 3) > Curiga (Level 2) > Senyum (Level 1)

Contoh Skenario:

Skenario 1: Pengguna punya 2 tugas (Senyum), tetapi salah satu tugas deadlinenya tinggal 2 hari (Marah).

Hasil: Robot tampil Marah. (Level 4 menang atas Level 1).

Skenario 2: Pengguna punya 5 tugas (Panik), tetapi semua deadline masih > 7 hari (Senyum).

Hasil: Robot tampil Panik. (Level 3 menang atas Level 1).

5. Alur Pengguna (User Flow)
Pengguna membuka website. Status awal: Total tugas 0, Robot Senyum/Tidur.

Pengguna memasukkan "Nama Tugas" dan "Deadline", lalu klik "Submit".

Tugas masuk ke daftar di bawah, dan sistem langsung menghitung "Total Tugas" dan jarak hari menuju "Deadline".

Sistem mengevaluasi Aturan Logika (Poin 4) dan memperbarui wajah Robot Emotion secara real-time.

Pengguna menyelesaikan/menghapus tugas. Sistem kembali menghitung ulang kondisi tugas yang tersisa dan memperbarui wajah robot.

6. Rekomendasi Tumpukan Teknologi (Tech Stack)
Mengingat Anda sering menggunakan ekosistem React, berikut rekomendasi teknologinya:

Front-end Framework: React (Vite) dengan TypeScript.

Styling: Tailwind CSS (memudahkan pembuatan layout kartu tugas dan form).

State Management: useState dan useEffect sudah cukup untuk menyimpan daftar tugas dan memicu perhitungan ulang emosi setiap kali array tugas berubah.

Pengelolaan Waktu: Library seperti date-fns atau dayjs sangat disarankan untuk menghitung selisih hari (countdown) dengan akurat tanpa harus menulis logika tanggal dari nol.

Apakah Anda ingin saya buatkan juga contoh kode React sederhana untuk komponen logika penentuan emosi robot ini?

buatkan isi untuk prd.md

File Markdown (MD) Anda sudah siap
Ikon MD
 prd 
MD

Dokumen PRD telah berhasil dibuat dan merangkum spesifikasi antarmuka, logika prioritas emosi, alur pengguna, serta rekomendasi teknologi seperti React dan Tailwind CSS yang sesuai dengan kebutuhan pengembangan Anda.

Apakah Anda ingin saya mengunggah file prd.md ini ke Google Drive Anda?





Gemini adalah AI dan dapat melakukan kesalahan.

# Product Requirements Document (PRD)
## Fitur: Task Tracker dengan Robot Emotion

### 1. Ringkasan Proyek
Dokumen ini menjelaskan spesifikasi kebutuhan produk untuk fitur **Task Tracker dengan Robot Emotion**. Fitur ini adalah sebuah sistem manajemen tugas (to-do list) interaktif yang menggunakan elemen gamifikasi berupa ekspresi emosi robot. Emosi robot akan berubah secara dinamis berdasarkan jumlah total tugas aktif dan tingkat urgensi tenggat waktu (deadline) terdekat.

---

### 2. Tujuan Fitur
* **Meningkatkan Produktivitas:** Membantu pengguna memantau tugas harian dan tenggat waktu secara efisien.
* **Gamifikasi & Peringatan Psikologis:** Menggunakan perubahan emosi robot (Senyum, Curiga, Panik, Marah) sebagai indikator visual intuitif untuk memotivasi pengguna menyelesaikan tugas sebelum menumpuk atau terlambat.

---

### 3. Komponen Antarmuka Pengguna (UI)
Berdasarkan tata letak desain, antarmuka aplikasi terdiri dari komponen-komponen berikut:
1. **Header Status (Widget Robot)**
   * **Total Tugas:** Menampilkan teks jumlah tugas aktif yang belum diselesaikan.
   * **Robot Emotion:** Area visual yang menampilkan ilustrasi/ikon emosi robot sesuai status tugas saat ini.
2. **Formulir Input Tugas (Form Input)**
   * **Nama Tugas:** Input teks tempat pengguna menulis deskripsi/nama tugas.
   * **Deadline:** Input tanggal (*date picker*) untuk menentukan batas waktu pengumpulan.
   * **Tombol Submit:** Tombol aksi untuk menambahkan data ke dalam daftar.
3. **Daftar Tugas (Task List)**
   * Menampilkan kumpulan kartu tugas (*task cards*) yang telah dibuat.
   * Setiap kartu berisi: Nama Tugas dan **Countdown** (hitung mundur sisa hari menuju deadline).
   * Tombol aksi untuk menghapus atau menandai tugas sebagai selesai.

---

### 4. Logika Bisnis & Aturan Sistem (Business Rules)

Sistem akan mendeteksi status emosi robot berdasarkan dua kondisi utama: **Tenggat Waktu Terdekat** dan **Jumlah Total Tugas**.

#### A. Logika Berdasarkan Tenggat Waktu (Deadline)
Sistem memindai seluruh tugas aktif dan mengambil **1 tugas dengan deadline paling dekat (sisa waktu paling sedikit)** sebagai acuan.
* **Sisa waktu > 7 hari:** Robot **Senyum** (Kondisi Aman)
* **Sisa waktu 5 - 6 hari:** Robot **Curiga**
* **Sisa waktu 3 - 4 hari:** Robot **Panik**
* **Sisa waktu 1 - 2 hari:** Robot **Marah**
* *Catatan: Jika deadline bernilai 0 hari atau sudah lewat (overdue), robot otomatis tetap dalam kondisi **Marah**.*

#### B. Logika Berdasarkan Total Tugas
Sistem menghitung total seluruh tugas aktif yang ada di dalam daftar pengguna.
* **1 - 2 Tugas:** Robot **Senyum** (Kondisi Aman)
* **3 - 4 Tugas:** Robot **Curiga**
* **5 - 6 Tugas:** Robot **Panik**
* **Lebih dari 7 Tugas (>= 7):** Robot **Marah**

#### C. Aturan Prioritas Emosi (Conflict Resolution)
Jika terjadi perbedaan kondisi emosi antara hitungan *Deadline* dan *Total Tugas*, sistem akan menggunakan **Aturan Prioritas Tertinggi (Severity Rule)**.

Tingkat prioritas emosi diurutkan dari yang paling kritis:
1. **Marah** (Prioritas Tertinggi - Level 4)
2. **Panik** (Level 3)
3. **Curiga** (Level 2)
4. **Senyum** (Prioritas Terendah - Level 1)

**Contoh Kasus:**
* **Kasus A:** Pengguna hanya memiliki **2 tugas** (Kondisi Total Tugas = Senyum), namun salah satu tugas memiliki deadline **2 hari lagi** (Kondisi Deadline = Marah).
  * *Hasil Akhir:* Robot beremosi **Marah** (Level 4 mengabaikan Level 1).
* **Kasus B:** Pengguna memiliki **5 tugas** (Kondisi Total Tugas = Panik), tetapi semua tugas tersebut memiliki deadline **10 hari lagi** (Kondisi Deadline = Senyum).
  * *Hasil Akhir:* Robot beremosi **Panik** (Level 3 mengabaikan Level 1).

---

### 5. Alur Pengguna (User Flow)
1. **Inisialisasi:** Pengguna membuka halaman aplikasi. Jika tidak ada tugas (Total Tugas = 0), robot dalam kondisi Netral/Senyum.
2. **Penambahan Tugas:** Pengguna mengisi formulir `Nama Tugas` dan `Deadline`, kemudian menekan tombol `Submit`.
3. **Pembaruan State:** Data tersimpan ke dalam *state* lokal, daftar tugas di bawah diperbarui, dan *countdown* masing-masing tugas dihitung otomatis berdasarkan tanggal hari ini.
4. **Evaluasi Emosi:** Sistem menjalankan fungsi pengecekan logika (Poin 4) secara real-time untuk memperbarui visual `Robot Emotion`.
5. **Penyelesaian Tugas:** Pengguna menghapus atau menyelesaikan tugas. Jumlah tugas berkurang, sistem menghitung ulang kriteria, dan memperbarui wajah robot ke kondisi yang sesuai.

---

### 6. Kebutuhan Non-Fungsional & Teknis (Tech Stack Recommendation)
* **Framework:** React.js / Next.js dengan TypeScript untuk manajemen tipe data yang aman.
* **Styling:** Tailwind CSS untuk efisiensi perancangan UI responsif.
* **Manajemen Tanggal:** Menggunakan pustaka pihak ketiga seperti `dayjs` atau `date-fns` untuk mempermudah kalkulasi selisih hari (*difference in days*) antara tanggal hari ini dan tanggal deadline.
* **State Management:** `useState` dan `useEffect` bawaan React sudah memadai untuk mengelola array tugas secara lokal.
prd.md
Menampilkan prd.md.