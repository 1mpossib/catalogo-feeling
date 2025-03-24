import { Button as ButtonAntd, Flex, Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import LOGOH from "../../assets/Header/LOGOH.png";
import { useNavigate } from "react-router";
import { headerFlex } from "./header.styles";
import { useState } from "react";

export default function Header({ onSearch }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    navigate("/categorias");
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleSearch = (e) => {
    onSearch(e.target.value);
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
      <Flex justify="center">
        <div>
          <ButtonAntd
            type="text"
            icon={
              <SearchOutlined style={{ fontSize: "24px", color: "#ccff00" }} />
            }
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <Input
              onChange={(e) => handleSearch(e)}
              placeholder="Buscar..."
              style={{
                position: "absolute",
                left: "140px",
                width: "200px",
                transition: "0.3s ease-in-out",
              }}
            />
          )}
          <MenuOutlined
            onClick={onClose}
            style={{ fontSize: "24px", color: "#ccff00" }}
          />
        </div>
      </Flex>
    </Flex>
  );
}
