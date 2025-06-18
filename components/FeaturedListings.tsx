const mockListings = [
  { id: 1, image: "/house1.jpg", title: "2BR in Zona Romántica", price: "$289,000" },
  { id: 2, image: "/house2.jpg", title: "Beachfront Condo", price: "$410,000" },
];

export default function FeaturedListings() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mockListings.map(listing => (
          <div key={listing.id} className="border rounded-lg overflow-hidden shadow">
            <img src={listing.image} alt={listing.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{listing.title}</h3>
              <p className="text-gray-600">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
