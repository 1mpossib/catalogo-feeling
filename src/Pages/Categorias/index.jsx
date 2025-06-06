import { useState, useEffect } from "react";
import { Drawer, Flex } from "antd";
import { useNavigate } from "react-router";
import { CloseOutlined } from "@ant-design/icons";

import Seletor from "../../Components/Seletor";
import Navegue from "../../assets/Categorias/Navegue.png";
import Loader from "../../Components/Loader";

import { ENUM_LABEL, ENUM_IMAGE_TITLE } from "../../Utils/enum";
import axios from "axios";

function Categorias() {
  const [open, setOpen] = useState(true);
  const [placement, setPlacement] = useState("left");
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const onClose = () => {
    navigate("/");
  };

  const handleClick = (rota, soon) => {
    if (!soon) {
      navigate(`/lista/${rota}`);
    }
  };

  const url = "https://api.feelingambientes.com.br/api/categorias";

  const handleCategoria = async () => {
    try {
      const response = await axios.get(url);
      setMenu(response.data);
      setLoading(false);
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
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Flex gap="large" vertical align="start">
              {menu.map((menu) => (
                <Seletor
                  key={menu.id}
                  title={menu.nome}
                  onClick={() =>
                    handleClick(menu.slug, menu.nome.includes("(Em Breve)"))
                  }
                />
              ))}
            </Flex>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default Categorias;
