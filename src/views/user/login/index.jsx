import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { setCurrentUser } from "../../../helpers/sessionStorageUtil";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleResponse = useCallback(
    (data) => {
      setCurrentUser(data);
      navigate("/dashboard");
    },
    [navigate]
  );

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://real-attire-tick.cyclic.app/login",
        {
          adNo: values.adNo,
        }
      );

      if (response.data) {
        handleResponse(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.message);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Malabr International School</p>
          <p>Login to the Result Portal </p>

          <Form.Item
            name="adNo"
            rules={[
              {
                required: true,
                message: "Please input your Admission Number!",
              },
            ]}
          >
            <Input.Password placeholder="Admission Number" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {loading ? "Loading" : "LOGIN"}
            </Button>
          </Form.Item>
        </Form>
        <p className="text-danger">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
