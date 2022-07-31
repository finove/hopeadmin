import { VStack } from "@hope-ui/solid";

import AppNavLink from "./AppNavLink";
import Code from "./Code";
import MainNavSubtitle from "./MainNavSubtitle";
import MainNavTitle from "./MainNavTitle";

export default function MainNavContent() {
  return (
    <>
      <MainNavTitle mb="$2">后台调试</MainNavTitle>
      <MainNavSubtitle mb="$2">测试</MainNavSubtitle>
      <VStack alignItems="flex-start" spacing="$1" mb="$3">
        <AppNavLink href="/ui/sms">短信</AppNavLink>
        <AppNavLink href="/ui/bot">机器人</AppNavLink>
        <AppNavLink href="/docs/changelog">扫码登录测试</AppNavLink>
        <AppNavLink href="/docs/changelog">帐号注册</AppNavLink>
      </VStack>
      <MainNavSubtitle mb="$2">管理</MainNavSubtitle>
      <VStack alignItems="flex-start" spacing="$1" mb="$3">
        <AppNavLink href="/docs/general/button">会议室</AppNavLink>
        <AppNavLink href="/docs/general/icon-button">用户反馈</AppNavLink>
      </VStack>
      <MainNavTitle mb="$3">Demo</MainNavTitle>
      <MainNavSubtitle mb="$2">参考</MainNavSubtitle>
      <VStack alignItems="flex-start" spacing="$1" mb="$3">
        <AppNavLink href="/demo/start">start</AppNavLink>
        <AppNavLink href="/demo/modal">
          The <Code mx="$1">css</Code> prop
        </AppNavLink>
      </VStack>
    </>
  );
}
