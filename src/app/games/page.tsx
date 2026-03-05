import Image from "next/image";
import games from "../../contents/games/games.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Games",
    description: "Games played by L & A.",
};

export default function GamingPage() {
  const rankedGames = [...games]
    .map((game) => ({
      ...game,
      avg: (Number(game.scoreL) + Number(game.scoreA)) / 2,
    }))
    .sort((a, b) => b.avg - a.avg);

  return (
    <main className="container mx-auto px-2 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Games</h1>
        <p className="text-gray-400 italic">Games played by L & A.</p>
      </section>

      {/* Griglia: 2 colonne mobile, 3 colonne desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-800 rounded-xl overflow-hidden"
          >
            <div className="flex flex-1">
              <div className="relative w-2/3 aspect-[3/4] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/3 flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                  <span className="text-[10px] font-black uppercase mb-2">L-Rank</span>
                  <span className="flex items-center justify-center w-16 h-16 bg-accent text-white text-2xl font-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
                    {game.scoreL}
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                  <span className="text-[10px] font-black uppercase mb-2">A-Rank</span>
                  <span className="flex items-center justify-center w-16 h-16 bg-accent6 text-white text-2xl font-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
                    {game.scoreA}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LEADERBOARD ── */}
      <section className="mt-20 mb-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase tracking-widest">Leaderboard</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-500 to-transparent" />
        </div>

        <div className="flex flex-col gap-2">
          {rankedGames.map((game, i) => {
            const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
            const isTop3 = i < 3;

            return (
              <div
                key={game.title}
                className={`
                  flex items-center gap-4 rounded-xl px-4 py-3 transition-all
                  ${isTop3
                    ? "bg-gray-800 border border-gray-600"
                    : "bg-gray-900 border border-gray-800"
                  }
                `}
              >
                {/* Posizione */}
                <div className="w-10 flex-shrink-0 text-center">
                  {medal ? (
                    <span className="text-2xl">{medal}</span>
                  ) : (
                    <span className="text-gray-500 font-black text-lg">#{i + 1}</span>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Titolo */}
                <span className={`flex-1 font-bold truncate ${isTop3 ? "text-white" : "text-gray-300"}`}>
                  {game.title}
                </span>

                {/* Voti L e A */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase text-gray-500">L</span>
                    <span className="text-sm font-black text-accent">{game.scoreL}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase text-gray-500">A</span>
                    <span className="text-sm font-black text-accent6">{game.scoreA}</span>
                  </div>

                  {/* Media */}
                  <div
                    className={`
                      w-12 h-10 flex items-center justify-center rounded-lg font-black text-lg
                      shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] transform -rotate-2
                      ${isTop3 ? "bg-white text-gray-900" : "bg-gray-700 text-white"}
                    `}
                  >
                    {game.avg % 1 === 0 ? game.avg : game.avg.toFixed(1)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}