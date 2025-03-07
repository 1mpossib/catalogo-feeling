import { Card as CardAntd, Tag, Typography, Row } from "antd";
import { Carousel } from "antd";

export default function Card({ data, item }) {
  const { Text, Title } = Typography;
  const { slug } = data;
  const { id, fotos, nome, valor } = item;

  return (
    <CardAntd
      style={{
        width: "345px",
        minHeight: "215px",
        borderRadius: "20px",
        border: "2px solid #0927d833",
        padding: "0",
      }}
    >
      <Row justify="center">
        {fotos.length ? (
          <Carousel
            arrows={true}
            infinite={false}
            style={{
              width: "323px",
              height: "310px",
              borderRadius: "15px",
            }}
          >
            {fotos.map((foto) => (
              <div key={foto.id}>
                <img
                  src={`https://feeling.marcelobento.com.br/storage/${foto.imagem}`}
                  alt="Img"
                  style={{
                    width: "323px",
                    height: "310px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div></div>
        )}
      </Row>

      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Tag style={{ borderRadius: "100px", backgroundColor: "#0927D8" }}>
          <Text strong style={{ fontSize: "10px", color: "#CCF7FF" }}>
            {slug}
          </Text>
        </Tag>
        <div>
          <Text style={{ fontSize: "10px" }}>ID</Text>{" "}
          <Text strong style={{ fontSize: "10px" }}>
            {id}
          </Text>
        </div>
      </Row>

      <Row justify="start" style={{ marginTop: "10px" }}>
        <Title level={4}>{nome}</Title>
      </Row>

      <Row
        justify="end"
        style={{
          marginTop: "10px",
          borderTop: "1px solid #0927D8",
          borderBottom: "1px solid #0927D8",
          padding: "1px",
        }}
      >
        <Text strong style={{ fontSize: "22.3px", color: "#0927D8" }}>
          {valor}
        </Text>
        <Text
          style={{
            fontSize: "14px",
            color: "#0927D8",
            alignContent: "flex-end",
          }}
        >
          /un
        </Text>
      </Row>
    </CardAntd>
  );
}
