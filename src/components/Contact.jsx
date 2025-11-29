import { useState } from "react";

export default function Contact() {

  const scriptURL = "https://script.google.com/macros/s/AKfycbxjByN0Ar5JphRFv4NGZTZGdx6FnFId2W6DQh7ZN43UkQFiIR8uwXp8I_PsUBNcWT70/exec";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 mt-20 mb-10 px-6 py-20 text-center"
    >

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight 
    bg-gradient-to-br from-[#ff7b00] via-[#ffb347] to-[#ffd28a]
    bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-gray-300/80">
        Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
      </p>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="mx-auto mt-10 w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-800/80 p-6 shadow-[0_0_35px_#ff7b00]/60 backdrop-blur sm:p-8"
      >
        <div className="space-y-6">
          {success && (
            <div
              role="alert"
              className="flex items-center justify-between rounded-md bg-gradient-to-br from-[#ff7b00] via-[#ffb347] to-[#ffd28a] px-4 py-2 text-white"
            >
              <span>
                <strong>Terimakasih!</strong> Pesanmu sudah terkirim 😊
              </span>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Tutup notifikasi"
              >
                ✕
              </button>
            </div>
          )}

          {/* Nama */}
          <div className="text-left">
            <label
              htmlFor="nama"
              className="block text-sm font-semibold text-gray-200"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukan Nama"
              required
              className="mt-2 block w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-3 text-gray-100 placeholder:text-gray-500 focus:border-[#ff7b00] focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukan email"
              required
              className="mt-2 block w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-3 text-gray-100 placeholder:text-gray-500 focus:border-[#ff7b00] focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            />
          </div>

          {/* Pesan */}
          <div className="text-left">
            <label
              htmlFor="pesan"
              className="block text-sm font-semibold text-gray-200"
            >
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={6}
              placeholder="Kasih pesan dong.."
              className="mt-2 block w-full resize-y rounded-md border border-zinc-600 bg-zinc-900 px-3 py-3 text-gray-100 placeholder:text-gray-500 focus:border-[#ff7b00] focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            />
          </div>

          {/* Tombol submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg 
             bg-gradient-to-br from-[#ff7b00] via-[#ffb347] to-[#ffd28a]
             px-6 py-3 font-semibold text-black 
             shadow-[0_0_20px_#ff7b00] transition 
             hover:opacity-90 disabled:opacity-70 sm:w-auto"
            >
              {loading && (
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}