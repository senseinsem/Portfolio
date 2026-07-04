// ================================================================
// ===== FYP DEFAULT DATA (SHARED UNTUK SEMUA PELAWAT WEBSITE) =====
// ================================================================
//
// PENTING: Website ni static (tiada database), jadi data yang anda
// save melalui Admin Panel HANYA tersimpan dalam browser anda sendiri.
// Untuk orang lain (email/browser/device lain) boleh nampak update
// FYP anda, ikut langkah ni:
//
// 1. Buka website, pergi tab FYP > Admin, login, lengkapkan semua
//    Project Settings & Journey Entries seperti biasa.
// 2. Klik butang "Export Data (Copy JSON)" dalam Admin Panel.
// 3. Buka fail fyp-data.js ni dalam GitHub repo anda (edit terus
//    di GitHub, atau download, edit, upload semula).
// 4. Replace SEMUA isi dalam FYP_DEFAULT_DATA = { ... } di bawah
//    dengan JSON yang anda copy tadi.
// 5. Commit & push. Lepas GitHub Pages selesai update (~1 minit),
//    semua orang akan nampak data terbaru, dari browser/email mana pun.
//
// ================================================================

const FYP_DEFAULT_DATA = {
    project: {
        title: 'My Final Year Project',
        description: 'Click to view my FYP journey and progress updates.',
        year: '2025 - 2026',
        thumbnail: '',
        progress: 0
    },
    entries: []
};