import CardPizza from "./CardPizza";
import { Header } from "./Header";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Header />

            <Container className="my-4">
                <Row className="mx-2">
                    <Col md={4}>
                        <CardPizza
                            name="Napolitana"
                            price={5950}
                            image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                        />
                    </Col>
                    <Col md={4}>
                        <CardPizza
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                            image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                        />
                    </Col>
                    <Col md={4}>
                        <CardPizza
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"]}
                            image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                        />
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Home;
