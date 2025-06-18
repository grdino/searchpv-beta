import FeaturedListings from "../components/FeaturedListings";
import AreaLinks from "../components/AreaLinks";
import BlogTeasers from "../components/BlogTeasers";
import IDXPlaceholder from "../components/IDXPlaceholder";

export default function HomePage() {
  return (
    <>
      <FeaturedListings />
      <AreaLinks />
      <IDXPlaceholder />
      <BlogTeasers />
    </>
  );
}
