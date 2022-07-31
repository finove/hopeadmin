import { Text } from "@hope-ui/solid";
import Prism from "prismjs";
import { onMount } from "solid-js";

import { ContextualNavLink } from "../../components/ContextualNav";
import PageLayout from "../../components/PageLayout";
import PageTitle from "../../components/PageTitle";
import SectionTitle from "../../components/SectionTitle";


export default function Installation() {
  const contextualNavLinks: ContextualNavLink[] = [
    { href: "#step1", label: "第一节" },
    { href: "#step2", label: "第二节" },
    { href: "#step3", label: "第三节" },
  ];

  onMount(() => {
    Prism.highlightAll();
  });

  return (
    <PageLayout contextualNavLinks={contextualNavLinks}>
      <PageTitle>标题</PageTitle>
      <SectionTitle id="step1">第一节</SectionTitle>
      <Text mb="$5">
        随便写点
      </Text>
      <SectionTitle id="step2">第二节</SectionTitle>
      <Text mb="$5">
        随便，随便，。。。。。。。。。。。。。。。。
      </Text>
      <SectionTitle id="step3">第三节</SectionTitle>
      <Text mb="$3">
        一大段说明，说明。。。。。。。。。。。。。
      </Text>
    </PageLayout>
  );
}
