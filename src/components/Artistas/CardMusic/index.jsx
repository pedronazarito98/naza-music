import { Card, Content, Image } from "./styles";

export function CardMusic() {
  return (
    <Card>
      <Image>
        <img
          href="#"
          src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
        />
      </Image>
      <Content>
        <h3>This is content</h3>
        <p>
          DIn publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
      </Content>
    </Card>
  );
}
