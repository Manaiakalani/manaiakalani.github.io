import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    // New in eslint-config-next 16. The two hits read browser-only state
    // (localStorage, prefers-reduced-motion) after hydration on purpose.
    rules: { "react-hooks/set-state-in-effect": "warn" },
  },
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "test-results/**", "playwright-report/**"],
  },
];

export default eslintConfig;
