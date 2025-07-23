"use client"
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { fetchPrestations, PrestationType } from "../utils/api";


export default function Prestations() {

  const [listContent, setListContent] = useState<PrestationType[]>([]);
  
    useEffect(() => {
        fetchPrestations()
        .then(data => setListContent(data.data));
        }, []);

  return (
    <section className="p-8 ">
      <h1 className="text-3xl font-semibold text-center">Mes Prestations</h1>
      <div className="mt-6 space-y-4">
        <div className="p-8 border rounded-lg ">
          <ul className="p-4">
            {listContent.length > 0 && listContent.sort((a, b) => a.order - b.order).map((content, index) => (
              <li className="my-8" key={index}>
                <h2 className="title mb-8">
                  <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]} // Pour interpréter le HTML (<u>, etc.)
                    >
                      {content.nom}
                    </ReactMarkdown>
                </h2>
                <div className="prose max-w-none mx-auto">
                  <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]} // Pour interpréter le HTML (<u>, etc.)
                    >
                      {content.contenu}
                    </ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
