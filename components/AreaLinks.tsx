const areas = [
  { slug: "zona-romantica", name: "Zona Romántica", image: "/zona.jpg" },
  { slug: "marina-vallarta", name: "Marina Vallarta", image: "/marina.jpg" },
];

export default function AreaLinks() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Explore Areas</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {areas.map(area => (
          <a
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="block rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={area.image} alt={area.name} className="w-full h-48 object-cover" />
            <div className="p-4 font-semibold text-center">{area.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
