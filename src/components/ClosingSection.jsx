import React from "react";

export default function ClosingSection({
  title = "Terima Kasih Telah Mengunjungi",
  subtitle = "Semoga informasi ini membantu. Jika ingin berkolaborasi atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami.",
  buttonText = "Hubungi Kami",
  buttonHref = "#about",
  onClick,
}) {
  return (
    <section
      id="closing"
      className="scroll-mt-28 bg-zinc-900 mt-20 mb-25 py-20 px-6 rounded-4xl shadow-[0_0_35px_#ff7b00]/60 backdrop-blur sm:mx-20"
      aria-labelledby="closing-title"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="closing-title"
          className="text-3xl sm:text-4xl tracking-tight text-white mb-10"
        >
          ꧋ꦩ​ꦠꦸꦂ​ꦤꦸ​ꦮꦸꦤ꧀ꦱꦩ꧀ꦥꦸꦤ꧀ꦫ​ꦮꦸꦃ​ꦭꦤ꧀ꦩ​ꦲꦺꦴꦱ꧀ꦱꦶ​ꦠꦸꦱ꧀ꦥꦸ​ꦤꦶ​ꦏ​꧉
        </h2>

        <p className="mx-auto max-w-2xl text-gray-300/90 md:text-2xl mt-15">
          ꧋ꦩꦸ​ꦒꦶ​ꦲꦶꦤ꧀ꦥ꦳ꦺꦴꦂ​ꦩ​ꦱꦶ​ꦲꦶꦁ​ꦏꦁ​ꦏ​ꦥꦿ​ꦠꦼ​ꦭ​ꦏꦼꦤ꧀ꦱ​ꦒꦼꦢ꧀ꦢ​ꦢꦺꦴꦱ꧀ꦥꦼ​ꦥ​ꦢꦁ​ꦭꦤ꧀ꦥ​ꦤꦸꦤ꧀ꦠꦸꦤ꧀ꦏꦁ​ꦒꦺ​ꦥꦚ꧀ꦗꦼ​ꦤꦼ​ꦔꦤ꧀ꦮꦺꦴꦤ꧀ꦠꦼꦤ꧀ꦲꦶꦁ​ꦪꦺꦴ​ꦒꦾ​ꦏꦂ​ꦠ​꧉

        </p>

        <div className="mt-16 flex justify-center">
          <a
            href={buttonHref}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff7b00] to-[#ffb347] px-6 py-3 text-md font-semibold text-black shadow-lg transition-transform hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-[#ff7b00]/30"
          >
            ꧋ꦗꦺꦴꦒ꧀ꦗ​ꦔꦼꦤ꧀ꦠꦺꦴ​ꦱꦶ​ꦫ​ꦮꦸꦃ​ꦥꦚ꧀ꦗꦼ​ꦤꦼ​ꦔꦤ꧀꧉
          </a>
        </div>
      </div>
    </section>
  )
}