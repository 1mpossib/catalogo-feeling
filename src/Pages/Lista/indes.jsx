import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import Loader from "../../Components/Loader";

import { Flex } from "antd";
import { ENUM_IMAGE_TITLE } from "../../Utils/enum";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { divButton } from "./lista.styles";

export default function Lista() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({ produtos: [{ fotos: [] }] });
  const [Loading, setLoading] = useState(true);

  const handleClick = () => {
    navigate("/categorias");
  };

  const handleFetch = async (id) => {
    try {
      const response = await axios.get(
        `https://feeling.marcelobento.com.br/api/categorias/${id}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch(id);
  }, [id]);

  return (
    <Flex
      vertical
      justify="flex-start"
      // gap="10px"
      align="center"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "412px",
      }}
    >
      <Header />
      <div style={{ top: "0" }}>
        <Title img={ENUM_IMAGE_TITLE[id.toUpperCase()]} />
      </div>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          {data.produtos.length ? (
            <div>
              {data.produtos.map((item) => (
                <div
                  key={`produtos-${item.id}`}
                  style={{ marginBottom: "40px" }}
                >
                  <Card item={item} data={data} />
                </div>
              ))}
            </div>
          ) : (
            <div>Nenhum Item Encontrado</div>
          )}

          <div style={{ marginBottom: "40px", marginLeft: "7px" }}>
            <div style={divButton}>
              <Button
                type="primary"
                block
                title="Outras Categorias"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      )}
    </Flex>
  );
}
