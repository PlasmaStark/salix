import Image from "next/image";
import games from "../../contents/games/games.json";

export default function GamingPage() {
  return (
    <main className="container mx-auto px-2 py-2">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Games</h1>
        <p className="text-gray-400 italic">
          Games played by L & A.
        </p>
      </section>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
          >
            <div className="relative w-full md:w-64 aspect-video md:aspect-square shrink-0">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-1 flex-col justify-center gap-6">
              <div className="flex items-center gap-4">
                <span className="w-4 font-bold text-accent">L</span>
                <div className="flex-1 h-8 bg-gray-800 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-accent transition-all duration-1000"
                    style={{ width: `${game.scoreL * 10}%` }}
                  ></div>
                  <span className="absolute inset-y-0 right-3 flex items-center font-bold text-white text-sm">
                    {game.scoreL}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-4 font-bold text-accent6">A</span>
                <div className="flex-1 h-8 bg-gray-800 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-accent6 transition-all duration-1000"
                    style={{ width: `${game.scoreA * 10}%` }}
                  ></div>
                  <span className="absolute inset-y-0 right-3 flex items-center font-bold text-white text-sm">
                    {game.scoreA}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}