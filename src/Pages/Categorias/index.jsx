import { useState, useEffect } from "react";
import { Drawer, Flex } from "antd";
import { useNavigate } from "react-router";
import { CloseOutlined } from "@ant-design/icons";
import Seletor from "../../Components/Seletor";
import Navegue from "../../assets/Categorias/Navegue.png";
import { ENUM_LABEL, ENUM_IMAGE_TITLE } from "../../Utils/enum";
import axios from "axios";

function Categorias() {
  const [open, setOpen] = useState(true);
  const [placement, setPlacement] = useState("left");
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);

  const onClose = () => {
    navigate("/");
  };

  const handleClick = (rota) => {
    navigate(`/lista/${rota}`);
  };

  const url = "https://feeling.marcelobento.com.br/api/categorias";

  const handleCategoria = async () => {
    try {
      const response = await axios.get(url);
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCategoria();
  }, []);

  return (
    <div>
      <Drawer
        style={{ background: "#fffacc" }}
        title={
          <img src={Navegue} style={{ width: "365px", height: "139px" }} />
        }
        placement={placement}
        width={412}
        onClose={onClose}
        open={open}
        maskClosable={false}
        closable={false}
        extra={
          <>
            <CloseOutlined
              onClick={onClose}
              style={{
                fontSize: "25px",
                position: "absolute",
                top: "10px",
                right: "15px",
              }}
            />
          </>
        }
      >
        <Flex gap="large" vertical align="start">
          {menu.map((menu) => (
            <Seletor
              key={menu.id}
              title={menu.nome}
              onClick={() => handleClick(menu.slug)}
            />
          ))}
        </Flex>
      </Drawer>
    </div>
  );
}

export default Categorias;
