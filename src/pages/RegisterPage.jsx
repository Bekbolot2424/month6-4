import { Card, Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: authApi.register,
        onSuccess: () => {
            message.success("Success");
            navigate("/login");
        }
    });

    return (
        <Card title="Register" style={{ maxWidth: 400, margin: "100px auto" }}>
            <Form layout="vertical" onFinish={mutate}>
                <Form.Item name="username" rules={[{ required: true }]}>
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block loading={isPending}>Register</Button>
            </Form>
        </Card>
    );
}