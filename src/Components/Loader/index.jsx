import { LoadingOutlined } from "@ant-design/icons";
import { loaderStyle } from "./loader.styles";

export default function Loader() {
  return (
    <div style={loaderStyle}>
      <LoadingOutlined style={{ fontSize: "75px" }} />
    </div>
  );
}
