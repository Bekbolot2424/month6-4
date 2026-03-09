import { Card, Form, Input, Button } from "antd";
import { useAuthStore } from "../store/auth.store";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";

export default function LoginPage() {
    const setUser = useAuthStore((state) => state.setUser);

    const { mutate, isPending } = useMutation({
        mutationFn: authApi.login,
        onSuccess: (res) => setUser(res.data.user)
    });

    const onFinish = (values) => mutate(values);

    return (
        <Card title="Login" style={{ maxWidth: 400, margin: "100px auto" }}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block loading={isPending}>
                    Login
                </Button>
            </Form>
        </Card>
    );
}