import Image from "next/image";
import games from "../../contents/games/games.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Games",
    description: "Games played by L & A.",
};

export default function GamingPage() {
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
            {/* Area Contenuto Split */}
            <div className="flex flex-1">
              {/* Sinistra: Immagine Gioco */}
              <div className="relative w-2/3 aspect-[3/4] overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Destra: I due quadrati col voto (stile rivista) */}
              <div className="w-1/3 flex flex-col">
                {/* Voto L */}
                <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                  <span className="text-[10px] font-black uppercase mb-2">
                    L-Rank
                  </span>
                  <span className="flex items-center justify-center w-16 h-16 bg-accent text-white text-2xl font-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-3">
                    {game.scoreL}
                  </span>
                </div>

                {/* Voto A */}
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
    </main>
  );
}
