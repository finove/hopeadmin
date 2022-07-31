import { Anchor, Box, Heading, HTMLHopeProps, VStack } from "@hope-ui/solid";
import { useLocation } from "solid-app-router";
import { For, splitProps } from "solid-js";

export interface ContextualNavLink {
  href: string;
  label: string;
  indent?: boolean;
}

export type ContextualNavProps = HTMLHopeProps<"div", { links?: ContextualNavLink[] }>;

export default function ContextualNav(props: ContextualNavProps) {
  const [local, others] = splitProps(props, ["links", "children"]);

  const location = useLocation();

  const isActiveLink = (href: string) => {
    return location.hash === href.replace("#", "#");
  };

  return (
    <Box
      as="nav"
      position="sticky"
      overflowY="auto"
      top="72px"
      display={{
        "@initial": "none",
        "@xl": "block",
      }}
      flexShrink="0"
      maxW="$60"
      height="calc(100vh - 72px)"
      p="$6"
      {...others}
    >
      <Heading as="h3" mb="$3">
        本页导航
      </Heading>
      <VStack alignItems="flex-start" spacing="$2">
        <For each={local.links}>
          {link => (
            <Anchor
              fontSize="$sm"
              href={link.href}
              fontWeight={isActiveLink(link.href) ? "$semibold" : "$normal"}
              ml={link.indent ? "$3" : 0}
            >
              {link.label}
            </Anchor>
          )}
        </For>
      </VStack>
    </Box>
  );
}
