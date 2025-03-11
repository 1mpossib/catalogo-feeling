import { Card as CardAntd, Tag, Typography, Row } from "antd";
import { Carousel } from "antd";
import { cardStyle, carouselStyle, tagStyle, stripes } from "./card.styles";

export default function Card({ data, item }) {
  const { Text, Title } = Typography;
  const { slug } = data;
  const { id, fotos, nome, valor, codigo } = item;

  return (
    <CardAntd style={cardStyle}>
      <Row justify="center">
        {fotos.length ? (
          <Carousel arrows={true} infinite={false} style={carouselStyle}>
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
        <Tag style={tagStyle}>
          <Text
            style={{
              fontFamily: "Satoshi-Black",
              fontSize: "10px",
              color: "#CCF7FF",
            }}
          >
            {slug}
          </Text>
        </Tag>
        <div>
          <Text style={{ fontSize: "10px", fontFamily: "Satoshi-Regular" }}>
            ID
          </Text>{" "}
          <Text strong style={{ fontSize: "10px", fontFamily: "Satoshi-Bold" }}>
            {codigo}
          </Text>
        </div>
      </Row>

      <Row justify="start" style={{ marginTop: "10px" }}>
        <Title
          level={4}
          style={{ fontFamily: "Satoshi-Bold", fontSize: "22.25px" }}
        >
          {nome}
        </Title>
      </Row>

      <Row justify="end" style={stripes}>
        <Text
          strong
          style={{
            fontFamily: "Satoshi-Black",
            fontSize: "22.3px",
            color: "#0927D8",
          }}
        >
          {valor}
        </Text>
        <Text
          style={{
            fontFamily: "Satoshi-Regular",
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
