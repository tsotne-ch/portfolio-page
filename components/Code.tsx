import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { MDXComponents } from "mdx/types";

export const components: MDXComponents = {
  code({ className, children }) {
    const language = className?.replace("language-", "") || "";
    return (
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {children as string}
      </SyntaxHighlighter>
    );
  },
};
