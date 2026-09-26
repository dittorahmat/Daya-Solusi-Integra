## Purpose

Menyediakan halaman showcase kapabilitas fitur BPM Workflow Editor dari platform GRC Integra yang berorientasi SEO, menyajikan antarmuka visual native diagramming berstandar BPMN sekelas Visio, kemampuan auto-draw dari file PDF/JPG/PNG, serta fasilitas pendaftaran demo tatap muka (offline Jabodetabek) dan demo online interaktif.

## ADDED Requirements

### Requirement: Accessible Dedicated Landing Page Route
Sistem SHALL menyediakan rute khusus `/platform/bpm-workflow-editor` yang dapat diakses oleh publik dan terintegrasi dengan header navigasi dropdown platform, footer, serta breadcrumbs visual.

#### Scenario: User navigates to BPM Workflow Editor page
- **WHEN** user membuka URL `/platform/bpm-workflow-editor` atau mengeklik menu "BPM Workflow Editor" pada dropdown platform
- **THEN** sistem menampilkan halaman BPM Workflow Editor secara utuh dengan status HTTP 200, breadcrumbs navigasi, dan konten termuat tanpa tata letak bergeser

### Requirement: Visio-Style Web Canvas Feature Presentation
Sistem SHALL menampilkan representasi arsitektur fitur kanvas editor berbasis web yang memetakan elemen BPMN (Swimlane, Event, Activity, Gateway, Connector) dengan look and feel modern layaknya Microsoft Visio.

#### Scenario: Viewing canvas feature capabilities
- **WHEN** user meninjau bagian fitur utama pada halaman
- **THEN** sistem menyajikan penjelasan rinci bahwa user dapat menggambar diagram alur secara fleksibel langsung di browser tanpa perlu instalasi aplikasi desktop atau lisensi tambahan

### Requirement: Document and Image Auto-Draw Showcase
Sistem SHALL menampilkan penjelasan alur kerja konversi cerdas dari dokumen workflow eksisting (format PDF, JPG, PNG) menjadi diagram alur yang siap diedit di kanvas.

#### Scenario: Reviewing auto-draw migration process
- **WHEN** user membaca bagian alur migrasi dokumen SOP
- **THEN** sistem menampilkan tahapan 3 langkah: unggah dokumen SOP lama (PDF/JPG/PNG), parsing dan rekonstruksi elemen alur secara otomatis, serta penyuntingan langsung pada kanvas interaktif

### Requirement: Lead Intake for Offline and Online Product Demo
Sistem SHALL menyediakan formulir atau aksi konversi yang memungkinkan calon klien mengajukan permintaan demonstrasi produk dengan opsi spesifik: Tatap Muka Langsung (khusus wilayah Jabodetabek) atau Sesi Online (nasional).

#### Scenario: Requesting product demo with location preference
- **WHEN** user mengeklik tombol "Jadwalkan Demo" pada halaman BPM Workflow Editor
- **THEN** sistem mengarahkan user ke formulir kontak/demo dengan opsi pilihan sesi Tatap Muka Langsung (Jabodetabek) atau Sesi Daring Interaktif

### Requirement: Technical SEO and Structured Data Optimization
Sistem SHALL menyertakan metadata komprehensif (title, description, canonical, open graph) dan Schema JSON-LD berstandar Google (`SoftwareApplication`, `FAQPage`, `BreadcrumbList`) dengan basis domain resmi `https://dsintegra.co.id/platform/bpm-workflow-editor`.

#### Scenario: Search engine crawler inspects page metadata
- **WHEN** bot mesin pencari atau crawler mengakses halaman `/platform/bpm-workflow-editor`
- **THEN** sistem menyajikan tag meta canonical resmi, Open Graph image, serta script JSON-LD dengan tipe `SoftwareApplication` dan `FAQPage` yang valid tanpa tanda em-dash
