import Header from "../../Components/Header";
import Card from "../../Components/Card";
import { Flex } from "antd";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import { ENUM_IMAGE_TITLE } from "../../Utils/enum";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Lista() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({ produtos: [{ fotos: [] }] });

  const handleClick = () => {
    navigate("/categorias");
  };

  const handleFetch = async (id) => {
    try {
      const response = await axios.get(
        `https://feeling.marcelobento.com.br/api/categorias/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch(id);
    console.log("batata", id);
  }, [id]);

  return (
    <Flex
      vertical
      justify="flex-start"
      gap="40px"
      align="center"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "412px",
      }}
    >
      <Header />
      <Title img={ENUM_IMAGE_TITLE[id.toUpperCase()]} />
      {data.produtos.length ? (
        <div>
          {data.produtos.map((item) => (
            <div key={item.id} style={{ marginBottom: "40px" }}>
              <Card item={item} data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div>Nenhum Item Encontrado</div>
      )}
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            width: "330px",
            height: "47px",
            fontFamily: "Satoshi-Medium",
            fontSize: "20px",
          }}
        >
          <Button
            type="primary"
            block
            title="Outras Categorias"
            onClick={handleClick}
          />
        </div>
      </div>
    </Flex>
  );
}
