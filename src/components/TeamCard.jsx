export default function TeamCard({ member }) {
  const { name, role, avatar, bio, email, phone, socials = [] } = member

  return (
    <article className="group rounded-2xl border border-white/10 bg-zinc-800/60 p-6 backdrop-blur shadow-[0_8px_28px_rgba(0,0,0,.35)] transition hover:border-[#ff7b00]/50 hover:shadow-[0_10px_38px_rgba(255,123,0,.25)]">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/15">
          <img
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 rounded-full ring-0 transition group-hover:ring-2 group-hover:ring-[#ff7b00]/60" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm font-semibold text-[#ff7b00]">{role}</p>
        </div>
      </div>

      {bio && <p className="mt-4 text-sm text-gray-300/80">{bio}</p>}

      <div className="mt-4 space-y-1 text-sm">
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.45l.69 2.3a2 2 0 01-.46 1.99l-1.12 1.12a16 16 0 007.07 7.07l1.12-1.12a2 2 0 011.99-.46l2.3.69A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1A17 17 0 013 6V5z" />
            </svg>
            {phone}
          </a>
        )}
      </div>

      {socials.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-200 hover:border-[#ff7b00]/60 hover:text-[#ff7b00]"
            >
              <span className="inline-block h-5 w-5 rounded bg-white/10 text-center text-[11px] leading-5">
                {s.platform.slice(0,1).toUpperCase()}
              </span>
              {s.platform}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}