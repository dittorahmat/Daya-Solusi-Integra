# ai-semantic-abstract Specification

## Purpose
Mengoptimalkan struktur konten ringkasan eksekutif (Key Takeaways) pada setiap artikel agar dapat diurai dan dikutip langsung secara definitif oleh mesin pencari bertenaga AI (Google Gemini / SGE, Bing Copilot, dan Perplexity) dengan menggunakan standar semantik microdata.

## Requirements

### Requirement 1: Semantic Microdata Tagging
- Blok ringkasan eksekutif pada artikel harus dibungkus dengan atribut semantik `itemprop="abstract"` atau `itemprop="description"` di dalam container berlingkup artikel (`itemscope itemtype="https://schema.org/BlogPosting"` atau `itemscope itemtype="https://schema.org/Article"`).
- Elemen ringkasan harus memiliki label atau heading yang tegas (misalnya "Ringkasan Eksekutif & Jawaban Definitif") untuk mempertegas konteks kepada crawler pencari.

### Requirement 2: Static Snapshot Mirroring
- Script prerender statis `scripts/generate-static-routes.ts` harus menyertakan atribut semantik yang sama pada snapshot HTML statis agar bot perayap web yang tidak mengeksekusi JavaScript penuh dapat langsung menemukan dan membaca microdata tersebut.
