import LOGO from "../../assets/Home/LOGO.png";
import catalogoBody from "../../assets/Home/catalogoBody.png";
import vinte from "../../assets/Home/vinte.png";
import vinteCinco from "../../assets/Home/vinteCinco.png";
import Button from "../../Components/Button";
import { useNavigate } from "react-router";
import {
  container,
  rectangle,
  logoStyle,
  catalogo,
  year,
  btnFooter,
  btnAcessar,
} from "./home.styles";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/categorias");
  };

  return (
    <div style={container}>
      <div style={rectangle}>
        <img style={logoStyle} src={LOGO} />
      </div>
      <div style={catalogo}>
        <img src={catalogoBody} />
      </div>
      <div style={year}>
        <img src={vinte} />
        <img src={vinteCinco} />
      </div>
      <div style={btnFooter}>
        <div style={btnAcessar}>
          <Button type="secondary" title="Acessar" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;
