export default function Header() {
  return (
    <header className="py-6 px-4 shadow-md flex justify-between items-center">
      <img src="/logo.png" alt="SearchPV Logo" className="h-10" />
      <nav className="space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}
