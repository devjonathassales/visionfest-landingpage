const badges = [
  "Orçamentos e propostas",
  "Agenda e operação",
  "Contratos e clientes",
  "Estoque e locação",
];

export function HeroBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-sm"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
