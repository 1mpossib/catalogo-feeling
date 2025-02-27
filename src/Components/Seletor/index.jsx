import { Button as ButtonAntd, Typography, Flex } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function Seletor({ title, onClick, type = "primary" }) {
  const { Text } = Typography;

  const colorText = {
    primary: {
      colorText: "#00173F",
    },
  };

  return (
    <Flex style={{ width: "100%" }}>
      <ButtonAntd
        type="text"
        block
        icon={<RightOutlined style={{ fontSize: "21px" }} />}
        iconPosition="end"
        onClick={onClick}
        style={{
          color: "#00173F",
          justifyContent: "space-between",
          borderRadius: "0",
          borderBottom: "1.5px solid #00173F",
          padding: "10px 0",
          margin: "2px",
        }}
      >
        <Text style={{ color: colorText[type].colorText, fontSize: "30px" }}>
          {title}
        </Text>
      </ButtonAntd>
    </Flex>
  );
}
