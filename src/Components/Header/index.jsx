import { Button as ButtonAntd, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LOGOH from "../../assets/Header/LOGOH.png";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/categorias");
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        width: "100%",
        height: "50px",
        padding: "9px 15px",
        backgroundColor: "#00173f",
        // zIndex: "1000",
        // position: "fixed",
      }}
    >
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
        <div
          style={{
            color: "#ccff00",
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "-0.40px",
          }}
        >
          Contato
        </div>
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
