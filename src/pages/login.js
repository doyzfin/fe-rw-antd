import React from "react";

import LayoutLogin from "../components/LayoutLogin";
import { Form, Icon, Input, Button } from "antd";

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        window.location.href("/dashboard");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LayoutLogin title="login" classname="login">
        <div
          className="d-flex align-items-center justify-content-center flex-column"
          style={{ maxWidth: "360px", margin: "auto", height: "100vh" }}
        >
          <div className="text-center">
            <h1 className="m-b-30 m-t-15">DATA RW 10</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Masukkan username!" }],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Masukkan Password!" }],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-block m-t-15"
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LayoutLogin>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

export default WrappedNormalLoginForm;
