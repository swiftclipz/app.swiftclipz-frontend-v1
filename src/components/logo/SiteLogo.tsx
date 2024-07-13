import { Link } from "react-router-dom";
import images from "../../constants/images";

const SiteLogo = () => {
  return (
    <Link to="/" className="inline-block">
      <img
        src={images.siteLogo.src}
        alt={images.siteLogo.alt}
      />
    </Link>
  );
};

export default SiteLogo;
