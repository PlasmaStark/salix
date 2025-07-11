type ChangeLogEntry = {
  date: string;
  message: string;
};

export default function Changelog({ entries }: { entries: { date: string; message: string }[] }) {
  return (
    <section className="bg-background-100 p-4 rounded-lg shadow-inner max-h-64 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Changelog</h2>
      <div className="space-y-3">
        {entries.map(({ date, message }, i) => (
          <div key={i} className="flex items-center gap-1">
            <p className="text-sm text-white min-w-[90px] m-0">{date}</p>
            <p className="text-base text-gray-500 m-0">{message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


