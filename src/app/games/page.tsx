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
    <main className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-foreground">
          Games
        </h1>
        <p className="text-sm text-gray-400 mt-2 italic">
          Played and scored by L & A.
        </p>
      </header>
      <section>
        <div
          className="block"
          style={{
            perspective: "320px",
            overflow: "hidden",
            marginBottom: "6rem",
          }}
        >
          <div
            className="w-4/5 sm:w-3/5 mx-auto"
            style={{
              transformOrigin: "50% 100%",
              transform: "rotateX(25deg)",
              color: "#ffe81f",
              fontFamily: "Georgia, serif",
              textAlign: "justify",
              lineHeight: 1.9,
              fontSize: "16px",
            }}
          >
            <p className="text-6xl text-center">Games</p>
            <p style={{ marginTop: "1rem" }}>
              A NEW TASK IS AT HAND! L and A found their brain cells dangerously
              underemployed and made a fateful decision: score games with the
              same pettiness usually reserved for peer reviews.
            </p>
            <p style={{ marginTop: "1rem" }}>
              They started with Elden Ring and liked it. Soon they scored more
              and more. But a new game was at the horizon...
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase tracking-widest">
            List
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-500 to-transparent" />
        </div>
      </section>

      <section>
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
                    <span className="text-[10px] font-black uppercase mb-2">
                      L-Rank
                    </span>
                    <span className="flex items-center justify-center w-16 h-16 bg-accent text-white text-2xl font-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
                      {game.scoreL}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                    <span className="text-[10px] font-black uppercase mb-2">
                      A-Rank
                    </span>
                    <span className="flex items-center justify-center w-16 h-16 bg-accent6 text-white text-2xl font-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
                      {game.scoreA}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ── LEADERBOARD ── */}
      <section className="mt-20 mb-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-black uppercase tracking-widest">
            Leaderboard
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-500 to-transparent" />
        </div>

        <div className="flex flex-col gap-2">
          {rankedGames.map((game, i) => {
            const medal =
              i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
            const isTop3 = i < 3;

            return (
              <div
                key={game.title}
                className={`
            flex items-center gap-2 rounded-xl px-3 py-3 min-w-0
            ${
              isTop3
                ? "bg-gray-800 border border-gray-600"
                : "bg-gray-900 border border-gray-800"
            }
          `}
              >
                {/* Posizione */}
                <div className="w-10 flex-shrink-0 text-center">
                  {medal ? (
                    <span className="text-xl">{medal}</span>
                  ) : (
                    <span className="text-gray-500 font-black"># {i + 1}</span>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Titolo */}
                <span
                  className={`flex-1 font-bold truncate overflow-hidden min-w-0 text-sm md:text-base ${isTop3 ? "text-white" : "text-gray-300"}`}
                >
                  {game.title}
                </span>

                {/* Voti */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="hidden sm:flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase text-gray-500">
                      L
                    </span>
                    <span className="text-sm font-black text-accent">
                      {game.scoreL}
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase text-gray-500">
                      A
                    </span>
                    <span className="text-sm font-black text-accent6">
                      {game.scoreA}
                    </span>
                  </div>

                  {/* Media */}
                  <div
                    className={`
                w-11 h-9 flex items-center justify-center rounded-lg font-black text-base
                shadow-[3px_3px_0px_0px_rgba(0,0,0,0.4)] transform -rotate-2 flex-shrink-0
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
