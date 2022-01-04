import * as React from "react";
import { Badge, Button, Card, Title, Paragraph } from "react-native-paper";

//const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const productCard = (props) => {
  //console.log(props);
  const img = props.data.image;
  return (
    <Card id={props.data.id}>
      <Card.Cover
        source={{
          uri: img,
        }}
      />
      <Card.Content>
        <Title>{props.data.name}</Title>
        <Paragraph>{props.data.location}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Paragraph>
          <Button icon="cancel">Closed Today</Button>
        </Paragraph>
      </Card.Actions>
    </Card>
  );
};

export default productCard;
