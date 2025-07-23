"use client"
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function MarkdownTest() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("http://localhost:1337/api/tests")
      .then((res) => res.json())
      .then((data) => {
        const content = data.data[0].test; // ou data.data[0].attributes.test selon structure
        setMarkdown(content);
      });
  }, []);

  return (
    <div className="prose max-w-none mx-auto">
      <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]} // Pour interpréter le HTML (<u>, etc.)
  >
    {markdown}
  </ReactMarkdown>
    </div>
  );
}
