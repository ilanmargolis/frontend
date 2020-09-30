import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-strap";

export default ({children, title}) => (
    <Card className="m-4">
        <CardHeader>]
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>{children}</CardBody>
    </Card>
)