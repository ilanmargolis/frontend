import React from "react";
import Page from "../../components/Page";
import {Link} from "react-router-dom";
import {Form, Input, FormGroup, Label, Button} from "react-strap";

export default () => (
    const [form, setForm] = useState({
        user: "",
        password: ""
    });


    const onSubmit = () => {
        if (form.user === "ilan" && form.password === "1010") {
            alert("Mudei de página");
        } else {
            alert("Senha incorreta !!!");
        }
    }

    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;


        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <Page title="Sign In">
            <Form>
                <FormGroup>
                    <Label htmlFor="user">Username</Label>
                    <Input id="user" value={form.user} onChange={onChange} name="user"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </FormGroup>
                <Link to="/forgotpassword">Esqueci a senha</Link>
                <br/>
                <Button>Entrar</Button>
            </Form>
        </Page>
    )
)