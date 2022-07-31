import {
    Button,
    Divider,
    Menu,
    MenuTrigger,
    MenuContent,
    MenuGroup,
    MenuLabel,
    MenuItem
} from "@hope-ui/solid";
import { useNavigate } from "solid-app-router";

export default function HeaderMenu() {
    const navigate = useNavigate();
    return (
        <>
            <Menu>
                <MenuTrigger as={Button} variant="ghost" colorScheme="neutral" size="sm"
                    fontSize="$lg" rounded="$md">
                    测试
                </MenuTrigger>
                <MenuContent>
                    <MenuGroup>
                        <MenuLabel>注册登录</MenuLabel>
                        <MenuItem onSelect={() => navigate("/login", { replace: true })}>扫码</MenuItem>
                        <MenuItem onSelect={() => navigate("/", { replace: true })}>注册</MenuItem>
                    </MenuGroup>
                    <Divider role="presentation" my="$1" />
                    <MenuGroup>
                        <MenuLabel>查询</MenuLabel>
                        <MenuItem onSelect={() => navigate("/ui/sms", { replace: true })}>短信</MenuItem>
                        <MenuItem onSelect={() => navigate("/ui/bot", { replace: true })}>机器人</MenuItem>
                    </MenuGroup>
                </MenuContent>
            </Menu>
            <Menu>
                <MenuTrigger as={Button} variant="ghost" colorScheme="neutral" size="sm"
                    fontSize="$lg" rounded="$md">
                    管理
                </MenuTrigger>
                <MenuContent>
                    <MenuGroup>
                        <MenuLabel>问题处理</MenuLabel>
                        <MenuItem onSelect={() => navigate("/login", { replace: true })}>会议室</MenuItem>
                        <MenuItem>用户反馈</MenuItem>
                    </MenuGroup>
                </MenuContent>
            </Menu>
            <Menu>
                <MenuTrigger as={Button} variant="ghost" colorScheme="neutral" size="sm"
                    fontSize="$lg" rounded="$md" onClick={() => navigate("/ui/sms", { replace: true, state: false })}>
                    二级
                </MenuTrigger>
            </Menu>
        </>
    );
}
