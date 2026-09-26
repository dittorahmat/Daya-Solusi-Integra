## Purpose

Menyediakan infrastruktur internal linking yang komprehensif, multi-tier, dan kaya konteks untuk memaksimalkan otoritas SEO, keterindeksan, dan konversi pengunjung ke halaman BPM Workflow Editor.

## ADDED Requirements

### Requirement: Global Navigation Access to BPM Workflow Editor
The system SHALL provide direct and clear navigation to `/platform/bpm-workflow-editor` via a desktop dropdown menu and mobile navigation drawer under the platform section.

#### Scenario: User navigates via desktop header dropdown
- **WHEN** user hovers or clicks the "Platform GRC Integra" navigation element in the desktop header
- **THEN** the system reveals dropdown links for both the core platform overview and the "BPM Workflow Editor", navigating correctly to `/platform/bpm-workflow-editor` when selected.

#### Scenario: User navigates via mobile drawer
- **WHEN** user opens the mobile navigation drawer
- **THEN** the system displays the "BPM Workflow Editor" as an accessible sub-link under the platform section.

### Requirement: Architectural Callout Banner on Service Silo
The system SHALL display an architectural, non-cluttered callout card in the ICOFR BUMN service page (`/layanan/icofr-bumn`) promoting the BPM Workflow Editor's ability to migrate existing SOP documents.

#### Scenario: Visitor views ICOFR process documentation section
- **WHEN** user scrolls to the business process mapping section of the ICOFR BUMN page
- **THEN** a solid navy card highlighting instant SOP migration (PDF/JPG/PNG to interactive diagram) is visible with a direct link to `/platform/bpm-workflow-editor`.

### Requirement: Contextual Anchor Text Integration in Existing Blog Posts
The system SHALL feature varied, keyword-rich internal links pointing to `/platform/bpm-workflow-editor` within authoritative blog articles.

#### Scenario: Reader browses existing GRC blog articles
- **WHEN** user reads articles covering ICOFR features, spreadsheet replacement, or ERP comparison
- **THEN** relevant contextual keywords (such as "kanvas BPM workflow editor native web", "aplikasi pemetaan proses bisnis berbasis BPMN") link directly to `/platform/bpm-workflow-editor`.

### Requirement: Dedicated Supporting Pillar Blog Article
The system SHALL publish a new authoritative, SEO-optimized blog article focused on SOP flowcharting and business process architecture for BUMN according to SK-5 regulations.

#### Scenario: Search engine bot or user accesses the new blog article
- **WHEN** crawler or visitor navigates to `/blog/panduan-pemetaan-proses-bisnis-sop-flowchart-bumn`
- **THEN** the system serves a fully prerendered semantic HTML page complete with table of contents anchors, comparison table, structured schema, and explicit internal links to `/platform/bpm-workflow-editor`.
