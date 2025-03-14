import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";
import path from "path";
import createMDX from "@next/mdx";

interface OneOfRule {
  issuer?: {
    and?: string[];
  };
}

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config: Configuration) {
    config.module?.rules
      ?.filter((rule): rule is RuleSetRule => !!rule)
      .forEach((rule: RuleSetRule) => {
        if (rule.oneOf) {
          (rule.oneOf as OneOfRule[]).forEach((one: OneOfRule) => {
            if (!one.issuer || !Array.isArray(one.issuer.and)) return;
            if (
              !one.issuer.and.some(
                (str: string) =>
                  typeof str === "string" && str.includes("someValue")
              )
            )
              return;
            one.issuer.and = [path.resolve(__dirname)];
          });
        }
      });
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
