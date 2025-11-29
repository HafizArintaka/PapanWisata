import TeamCard from "../components/TeamCard"
import { teamMembers } from "../data/team"

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-28 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Anggota Kelompok</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-300/80">
          Tim hebat ingkang nyambut damel wonten wingkinging layar destinasi wisata menika.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map(m => <TeamCard key={m.id} member={m} />)}
      </div>
    </section>
  )
}