import React from "react";
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  ExternalLink, 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Breadcrumbs from "../Breadcrumbs";
import { HUMBUL_KRISTIAWAN } from "../../data/authors";
import { LOADED_BLOG_POSTS } from "../BlogPage";

interface AuthorProfilePageProps {
  onNavigate: (path: string) => void;
}

export default function AuthorProfilePage({ onNavigate }: AuthorProfilePageProps) {
  const author = HUMBUL_KRISTIAWAN;
  const authorPosts = LOADED_BLOG_POSTS;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://dsintegra.co.id/penulis/humbul-kristiawan#profile",
        "name": `Profil Pakar & Penulis: ${author.name}`,
        "url": "https://dsintegra.co.id/penulis/humbul-kristiawan",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://dsintegra.co.id/#author-humbul-kristiawan",
          "name": author.name,
          "honorificSuffix": "SE, Ak., MBA, CA, CIA, CICA, GRCP, CACP",
          "jobTitle": author.role,
          "worksFor": {
            "@type": "Organization",
            "name": "PT Daya Solusi Integra",
            "url": "https://dsintegra.co.id"
          },
          "image": `https://dsintegra.co.id${author.avatar}`,
          "description": author.bioSummary,
          "sameAs": author.sameAs,
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Universitas Padjadjaran"
            },
            {
              "@type": "EducationalOrganization",
              "name": "Institut Teknologi Bandung (SBM ITB)"
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="w-full bg-[#0b0f19] min-h-screen text-slate-100 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Blog & Wawasan", path: "/blog" },
              { label: `Pakar: ${author.name}` }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Card / Bio Header */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-10 mb-12 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative shrink-0">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-blue-600/60 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-900 border border-blue-700 text-[#cca43b] p-1.5 rounded-lg shadow-md">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                    {author.name}
                  </h1>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#cca43b] bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#cca43b]" />
                    Verified GRC &amp; Audit Expert
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-mono font-medium">
                  {author.fullNameWithCredentials.replace(author.name + ", ", "")}
                </div>
                <div className="text-sm text-blue-400 font-medium mt-1">
                  {author.role} : PT Daya Solusi Integra
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {author.headline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={author.sameAs[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-950/80 hover:bg-blue-900 text-blue-300 hover:text-white border border-blue-800/80 transition-colors"
                >
                  <span>LinkedIn Resmi</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
                <a
                  href={author.sameAs[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  <span>Profil Pribadi &amp; Riwayat</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Biography & Credentials Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Main Column: Narrative & Track Record */}
          <div className="md:col-span-8 space-y-8">
            <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#cca43b]" />
                Biografi &amp; Latar Belakang Profesional
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                {author.bioSummary}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Sebagai mantan Equity Partner di Deloitte South East Asia dan Partner di RSM Consulting, Humbul telah mendampingi puluhan BUMN papan atas dalam mengimplementasikan kerangka kerja pengendalian internal pelaporan keuangan (ICOFR), evaluasi kontrol umum teknologi informasi (ITGC), serta harmonisasi regulasi SK-5/DKU.MBU/11/2024 dan standar COSO.
              </p>
            </section>

            <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#cca43b]" />
                Penugasan Strategis &amp; Implementasi BUMN Terpilih
              </h2>
              <ul className="space-y-3">
                {author.trackRecordHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                    <span className="text-[#cca43b] font-mono font-bold text-xs mt-0.5">{`0${idx + 1}.`}</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Column: Credentials, Governance & Education */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Certifications */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#cca43b]" />
                Sertifikasi Profesional
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                {author.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#cca43b] shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Governance Roles */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400" />
                Komite Pengawasan Aktif
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                {author.committees.map((com, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{com}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                Latar Belakang Akademis
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                {author.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Section: Published Thought Leadership & Articles */}
        <section className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Publikasi &amp; Panduan Riset Tata Kelola BUMN
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
                Kajian teknis kepatuhan SK-5, metodologi audit ICOFR, dan studi kasus implementasi yang ditulis oleh {author.name}.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-mono">
              {authorPosts.length} Artikel Terbit
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authorPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate(`/blog/${post.slug}`)}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-blue-600/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-900/60 text-blue-300 font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-500 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="text-blue-400 group-hover:text-blue-300 font-medium inline-flex items-center gap-1">
                    Baca Artikel
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
