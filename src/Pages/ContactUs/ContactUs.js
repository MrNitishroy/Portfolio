import { Form, Input, Row } from "antd";
import "./ContactUs.css";

export function ContactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h2>Contact us</h2>
      <div className="divider"></div>
      <br />
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="InputField" placeholder="Full Name"/>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="InputField" placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input.TextArea className="messageFrild" placeholder="Type message . . "  rows={6}/>
        </Form.Item>
      </Form>
    </>
  );
}
