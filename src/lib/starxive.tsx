export const tagColors: Record<string, string> = {
    foundations: "#ef4444", // Rosso
    pkp: "#3b82f6", // Blu
    identification: "#a855f7", // Viola
    codes: "#10b981", // Verde 
    signatures: "#f59e0b", // Arancione ambrato
    isogenies: "#eab308", // Giallo
    lep: "#38bdf8", // Azzurro
};



export const getGradientBackground = (tags: string[]): string => {
  const colors = tags.map((tag) => tagColors[tag] || "#4a5568"); // Default grigio
  if (colors.length === 1) return colors[0];
  const step = 100 / colors.length;
  const gradient = colors
    .map((color, i) => `${color} ${i * step}% ${(i + 1) * step}%`)
    .join(", ");

  return `linear-gradient(90deg, ${gradient})`;
};
