import {
    HStack,
    Button,
    Divider,
    Menu,
    MenuTrigger,
    MenuContent,
    MenuGroup,
    MenuLabel,
    MenuItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Radio,
    RadioGroup,
    notificationService,
} from "@hope-ui/solid";
import { createStore } from "solid-js/store";
import { Show } from "solid-js";
import axios from "axios";

import { IconGithub } from "../icons/IconGithub";
import { IconPhone } from "../icons/IconPhone";
import { IconEmail } from "../icons/IconEmail";

export default function NlkLoginBox() {
    const [loginInfo, setLoginInfo] = createStore({
        name: '未登录',
        login: false,
        mode: '1',
        phone: '+861002021001',
        email: '',
        password: 'mashAa1?',
        code: '',
    });
    const toggleLogin = () => {
        setLoginInfo({ login: !loginInfo.login, name: '未登录' });
    }
    const handleLoginMode = (v: string) => setLoginInfo({ mode: v });
    const showNotification = (msgData : string) => {
        notificationService.show({
          title: "Login Info",
          description: msgData,
        })
      }

    return (
        <Show
            when={!loginInfo.login}
            fallback={
                <Menu>
                    <MenuTrigger as={Button} variant="ghost" colorScheme="neutral" size="sm"
                        leftIcon={<IconGithub />} fontSize="$lg" rounded="$md">
                        {loginInfo.name}
                    </MenuTrigger>
                    <MenuContent>
                        <Divider role="presentation" my="$1" />
                        <MenuGroup>
                            <MenuLabel>Profile</MenuLabel>
                            <MenuItem colorScheme="warning" onSelect={toggleLogin}>退出</MenuItem>
                        </MenuGroup>
                    </MenuContent>
                </Menu>
            }
        >
            <Popover>
                {({ onClose }) => (
                    <>
                        <PopoverTrigger as={Button} variant="ghost" colorScheme="neutral" size="sm"
                            leftIcon={<IconGithub />}
                            fontSize="$lg" rounded="$md" >
                            {loginInfo.name}
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader border="0">登录Newlync账号</PopoverHeader>
                            <PopoverBody>
                                <RadioGroup
                                    value={loginInfo.mode}
                                    onChange={handleLoginMode}
                                    defaultValue="1" name="login_mode" colorScheme="neutral" variant="outline">
                                    <HStack spacing="$4">
                                        <Radio value="1">手机</Radio>
                                        <Radio value="2">邮箱</Radio>
                                        <Radio value="3">验证码</Radio>
                                    </HStack>
                                </RadioGroup>
                                <Show when={loginInfo.mode == "1" || loginInfo.mode == "3"}
                                    fallback={
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none">
                                                <IconEmail color="$neutral8" />
                                            </InputRightElement>
                                            <Input value={loginInfo.email}
                                                onInput={event => setLoginInfo({ email: event.target.value })}
                                                placeholder="邮箱地址" />
                                        </InputGroup>
                                    }
                                >
                                    <InputGroup>
                                        <InputRightElement pointerEvents="none">
                                            <IconPhone color="$neutral8" />
                                        </InputRightElement>
                                        <InputLeftAddon>+86</InputLeftAddon>
                                        <Input value={loginInfo.phone} type="tel"
                                            onInput={event => setLoginInfo({ phone: event.target.value })}
                                            placeholder="手机号" />
                                    </InputGroup>
                                </Show>
                                <Show when={loginInfo.mode == "1" || loginInfo.mode == "2"}
                                    fallback={
                                        <InputGroup>
                                            <InputRightElement>
                                                <Button
                                                    compact
                                                    variant="ghost" colorScheme="neutral" size="sm"
                                                    onClick={() => alert("send to phone")}
                                                >发送</Button>
                                            </InputRightElement>
                                            <Input
                                                value={loginInfo.code}
                                                onInput={event => setLoginInfo({ code: event.target.value })}
                                                placeholder="验证码" />
                                        </InputGroup>
                                    }
                                >
                                    <Input
                                        value={loginInfo.password}
                                        onInput={event => setLoginInfo({ password: event.target.value })}
                                        type="password"
                                        placeholder="密码" />
                                </Show>
                            </PopoverBody>
                            <PopoverFooter border="0">
                                <HStack spacing="$4">
                                    <Button onclick={onClose}>取消</Button>
                                    <Button onClick={() => {
                                        // alert(JSON.stringify(loginInfo));
                                        showNotification(JSON.stringify(loginInfo, null , "    "));
                                        let postData = {};
                                        if (loginInfo.mode == '1') {
                                            postData["phone"] = loginInfo.phone;
                                            postData["password"] = loginInfo.password;
                                        }
                                        axios.post('/v1/login', postData).then((res) => {
                                            console.log(res.data, res.data.user);
                                            toggleLogin();
                                            setLoginInfo({ name: res.data.user });
                                        });
                                    }}>登录</Button>
                                </HStack>
                            </PopoverFooter>
                        </PopoverContent>
                    </>
                )}
            </Popover>
        </Show>
    );
}