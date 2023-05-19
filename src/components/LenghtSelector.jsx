import { Col, InputNumber, Row, Slider, Typography } from "antd";

const { Title } = Typography;

export function LenghtSelector({ title, value, setValue }) {
  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Title level={2}>{title}</Title>
      <Row>
        <Col span={12}>
          <Slider min={4} max={20} onChange={onChange} value={value} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: "0 16px" }}
            value={value}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
}
