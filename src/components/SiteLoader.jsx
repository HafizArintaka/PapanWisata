import { useEffect, useState } from "react";
import place2 from '../assets/cards/kiskendo.jpg';
import place5 from '../assets/cards/sermo.jpg';

/**
 * SiteLoader
 *
 * Props:
 * - minDuration (ms) : waktu minimal menampilkan loader (default 900)
 * - once (bool)       : kalau true, tampil hanya sekali (set localStorage) (default true)
 * - storageKey (str)  : key untuk localStorage (default 'site_seen_loader_v1')
 *
 * Behavior:
 * - Jika once===true dan localStorage[storageKey] === '1' => loader tidak muncul.
 * - Jika muncul, setelah minDuration selesai, loader hilang dan (jika once) menyimpan flag.
 */
export default function SiteLoader({
  minDuration = 1000,
  once = true,
  storageKey = "site_seen_loader_v1",
}) {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (once && localStorage.getItem(storageKey) === "0") {
        // sudah pernah lihat sebelumnya -> jangan tampilkan
        setVisible(false);
        return;
      }
    } catch (e) {
      // ignore storage errors (e.g., private mode)
    }

    // Delay mounting to allow App to hydrate first
    setVisible(true);
    setShow(true);

    const start = Date.now();
    // minimal tampilannya akan menunggu minDuration, tapi mungkin kita juga
    // bisa wait sampai page ready (untuk sekarang hanya minDuration)
    const timer = setTimeout(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        // fade out
        setShow(false);
        // after animation, remove and persist flag
        setTimeout(() => {
          setVisible(false);
          try {
            if (once) localStorage.setItem(storageKey, "1");
          } catch (e) {}
        }, 400); // match CSS transition duration
      }, remaining);
    }, 0);

    return () => clearTimeout(timer);
  }, [minDuration, once, storageKey]);

  // Jika user prefers reduced motion, jangan tampilkan animasi panjang
  // (we still follow once flag)
  if (!visible) return null;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-400 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-lg text-center px-6">
        <div className="inline-flex items-center justify-center mb-6">
          {/* Logo circle */}
          <img src="/public/favicon.ico" alt="Logo" className="h-16 w-16 rounded-full shadow-lg" />
          <img src={place2} alt="Logo" className="h-16 w-16 rounded-full shadow-lg" />
            <img src={place5} alt="Logo" className="h-16 w-16 rounded-full shadow-lg" />

          {/* Plus sign */}
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#ff7b00] to-[#ffb347] flex items-center justify-center shadow-lg">
            <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-white mb-2">Memuat Konten</h2>
        <p className="text-sm text-gray-300 mb-6">
          Nyuwun tengga sekedhap — kita nyiapaken pengalaman paling sae kagem sampeyan panjenengan.
        </p>

        {/* Simple animated dots spinner */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-400 animate-bounce-200" />
          <span className="h-3 w-3 rounded-full bg-orange-400 animate-bounce-400" />
          <span className="h-3 w-3 rounded-full bg-orange-400 animate-bounce-600" />
        </div>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .animate-bounce-200,
            .animate-bounce-400,
            .animate-bounce-600 {
              animation: none !important;
              transform: scale(0.9);
              opacity: 0.9;
            }
          }
          .animate-bounce-200 { animation: bounce-loader 0.9s infinite 0s; }
          .animate-bounce-400 { animation: bounce-loader 0.9s infinite 0.15s; }
          .animate-bounce-600 { animation: bounce-loader 0.9s infinite 0.3s; }
          @keyframes bounce-loader {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
            40% { transform: translateY(-8px); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}