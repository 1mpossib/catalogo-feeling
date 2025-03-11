import { Button as ButtonAntd, Typography } from "antd";

export default function Button({ title, onClick, type = "primary" }) {
  const { Text } = Typography;

  const buttonColor = {
    primary: {
      textColor: "#CCFF00",
      buttonColor: "#00173F",
    },
    secondary: {
      textColor: "#00173F",
      buttonColor: "#CCFF00",
    },
  };

  return (
    <ButtonAntd
      block
      style={{
        background: buttonColor[type].buttonColor,
        borderRadius: "0px",
        width: "100%",
        height: "100%",
      }}
      type="solid"
      onClick={onClick}
    >
      <Text
        style={{
          color: buttonColor[type].textColor,
          fontFamily: "Satoshi-Medium",
          fontSize: "20px",
        }}
      >
        {title}
      </Text>
    </ButtonAntd>
  );
}
