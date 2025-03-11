import { Button as ButtonAntd, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LOGOH from "../../assets/Header/LOGOH.png";
import { useNavigate } from "react-router";
import { headerFlex, headerDiv } from "./header.styles";

export default function Header() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/categorias");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Flex align="center" justify="space-between" style={headerFlex}>
      <div>
        <ButtonAntd type="text" onClick={handleClick}>
          <img
            src={LOGOH}
            alt="logo"
            style={{ width: "80px", height: "32px" }}
          />
        </ButtonAntd>
      </div>
      <Flex justify="center" gap={20}>
        {/* <div style={headerDiv}>Contato</div> */}
        <div>
          <MenuOutlined
            onClick={onClose}
            style={{ fontSize: "24px", color: "#ccff00" }}
          />
        </div>
      </Flex>
    </Flex>
  );
}
