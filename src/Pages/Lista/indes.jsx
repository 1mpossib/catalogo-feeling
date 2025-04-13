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
  const [dataFiltred, setDataFiltred] = useState([]);

  const handleClick = () => {
    navigate("/categorias");
  };

  const handleFetch = async (id) => {
    try {
      const response = await axios.get(
        `http://api.feelingambientes.com.br/api/categorias/${id}`
      );
      setData(response.data);
      setDataFiltred(response.data.produtos);
      console.log(response.data.produtos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch(id);
  }, [id]);

  const handleSearch = (e) => {
    if (!e) {
      setDataFiltred(data.produtos);
      return;
    }

    const result = data.produtos.filter((item) =>
      item.nome.toLowerCase().includes(e.toLowerCase())
    );
    setDataFiltred(result);
  };

  return (
    <Flex
      vertical
      justify="flex-start"
      align="center"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "412px",
      }}
    >
      <Header onSearch={handleSearch} />
      <div style={{ marginTop: "-10px" }}>
        <Title img={ENUM_IMAGE_TITLE[id.toUpperCase()]} />
      </div>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          {dataFiltred.length ? (
            <div>
              {dataFiltred.map((item) => (
                <div
                  key={`produtos-${item.id}`}
                  style={{ marginBottom: "95px", marginTop: "-55px" }}
                >
                  <Card item={item} data={data} />
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "70px",
              }}
            >
              Nenhum Item Encontrado
            </div>
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
