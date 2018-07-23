import React from "react";
import { Card, CardBody } from "reactstrap";

const HomeCard = props => (
    <Card>
        <CardBody>
            <img src={props.image} height="200px" width="300px" />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </CardBody>
    </Card>
)

export default HomeCard;