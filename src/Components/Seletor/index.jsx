import { Button as ButtonAntd, Typography, Flex } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { seletorButton } from "./seletor.styles";

export default function Seletor({ title, onClick, type = "primary", soon }) {
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
        style={seletorButton}
      >
        <Text
          style={{
            color: colorText[type].colorText,
            fontSize: "26px",
            fontFamily: "Satoshi-Regular",
          }}
        >
          {soon ? `${title} (Em Breve)` : title}
        </Text>
      </ButtonAntd>
    </Flex>
  );
}
