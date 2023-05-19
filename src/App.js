import React, { useState } from "react";
import {
  Layout,
  Typography,
  Switch,
  Space,
  Divider,
  Button,
  theme,
} from "antd";
import { LenghtSelector } from "./components/LenghtSelector";
import { gen_pass } from "./scripts/generate";
import "./App.css";

const { Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [passwordLenght, setPasswordLenght] = useState(4);

  const [passwordCount, setPasswordCount] = useState(4);
  const [isCapitalLetter, setIsCapitalLetter] = useState(true);
  const [isLowercaseLetter, setIsLowercaseLetter] = useState(true);
  const [isSpecialLetter, setIsSpecialLetter] = useState(true);
  const [isNumber, setIsNumber] = useState(true);

  return (
    <Layout>
      <Content className="site-layout" style={{ padding: "0 240px" }}>
        <div
          style={{ padding: 24, minHeight: 900, background: colorBgContainer }}
        >
          <Title>Генерация пароля</Title>
          <LenghtSelector
            title={"Выберите длину пароля"}
            value={passwordLenght}
            setValue={setPasswordLenght}
          />
          <Title level={2}>Выберите то, что будет включать пароль:</Title>
          <Space>
            <Text>Заглавные буквы</Text>
            <Switch
              defaultChecked
              onChange={() => {
                setIsCapitalLetter(!isCapitalLetter);
              }}
            />
          </Space>
          <Divider />
          <Space>
            <Text>Строчные буквы</Text>
            <Switch
              defaultChecked
              onChange={() => {
                setIsLowercaseLetter(!isLowercaseLetter);
              }}
            />
          </Space>
          <Divider />
          <Space>
            <Text>Специальные символы</Text>
            <Switch
              defaultChecked
              onChange={() => {
                setIsSpecialLetter(!isSpecialLetter);
              }}
            />
          </Space>
          <Divider />
          <Space>
            <Text>Цифры</Text>
            <Switch
              defaultChecked
              onChange={() => {
                setIsNumber(!isNumber);
              }}
            />
          </Space>

          <LenghtSelector
            title={"Выберите количество предлагаемых паролей"}
            value={passwordCount}
            setValue={setPasswordCount}
          />
          <Button
            type="primary"
            onClick={() => {
              console.log(
                gen_pass(
                  passwordLenght,
                  isCapitalLetter,
                  isLowercaseLetter,
                  isSpecialLetter,
                  isNumber
                )
              );
            }}
          >
            Генерировать
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
