import FrameComponent5 from "../components/FrameComponent5";
import CategoriesWrapper from "../components/CategoriesWrapper";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <FrameComponent5 />
      <section className="categories-wrapper-wrapper">
        <CategoriesWrapper />
      </section>
      <FooterDesktop logo="/logo-1@2x.png" />
    </div>
  );
};

export default ProductListingPage;
