const posts = [
  { title: "Navigating Currency Exchange", excerpt: "What buyers from abroad should know..." },
  { title: "Why Puerto Vallarta?", excerpt: "Discover what makes this paradise ideal for real estate..." },
];

export default function BlogTeasers() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Latest Insights</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
