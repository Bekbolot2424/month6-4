import { Card, Form, Input, Button, message } from "antd";
import { useAuthStore } from "../store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: authApi.login,
        onSuccess: (res) => {
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            setUser(res.data.user);
            navigate("/");
        },
        onError: () => message.error("Error")
    });

    return (
        <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
            <Form layout="vertical" onFinish={mutate}>
                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block loading={isPending}>Login</Button>
            </Form>
        </Card>
    );
}