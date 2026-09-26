import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
  className?: string;
}

export default function Breadcrumbs({ items, onNavigate, className = "" }: BreadcrumbsProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path?: string) => {
    if (!path) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-slate-400 py-3 px-4 rounded-lg bg-slate-900/60 border border-slate-800/80 w-fit max-w-full overflow-x-auto ${className}`}
    >
      <ol className="flex items-center space-x-2 whitespace-nowrap">
        {/* Root Link */}
        <li className="flex items-center">
          <a
            href="/"
            onClick={(e) => handleClick(e, "/")}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
            title="Kembali ke Beranda"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Beranda</span>
          </a>
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          // Sanitasi teks agar bersih dari karakter terlarang em-dash / en-dash
          const cleanLabel = item.label.replace(/[\u2014\u2013]/g, ":").trim();

          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" aria-hidden="true" />
              {isLast || !item.path ? (
                <span
                  className="text-slate-200 font-medium truncate max-w-[240px] md:max-w-md"
                  aria-current={isLast ? "page" : undefined}
                >
                  {cleanLabel}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                  className="text-slate-400 hover:text-white transition-colors truncate max-w-[200px] focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                >
                  {cleanLabel}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
