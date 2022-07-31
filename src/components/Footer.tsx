import { Anchor, Center, Text } from "@hope-ui/solid";

export default function Footer() {
  return (
    <Center as="footer" flexDirection="column" h="$40">
      <Text mb="$3">Made in Hope @2022</Text><Anchor>TODO</Anchor>
    </Center>
  );
}
