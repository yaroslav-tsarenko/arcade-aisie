import NavBar from "../components/NavBar";
import ProductInfo from "../components/ProductInfo";
import FrameComponent6 from "../components/FrameComponent6";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <main className="nav-bar-parent">
        <NavBar />
        <ProductInfo />
        <FrameComponent6 />
      </main>
      <FooterDesktop logo="/logo@2x.png" />
    </div>
  );
};

export default ProductDescriptionPage;
