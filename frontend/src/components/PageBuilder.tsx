import React from 'react';
import Image from 'next/image';
import '@/src/styles/globals.css';

type Format = {
  bold?: boolean;
  italic?: boolean;
  align?: 'left' | 'center' | 'right';
};

type Block =
  | {
      type: 'paragraph';
      content: string;
      format?: Format;
      level?: 1 | 2 | 3;
      tight?: boolean;
    }
  | { type: 'quote'; content: string; author?: string; format?: Format }
  | { type: 'image'; src: string; alt?: string; format?: Format };

function getFormatClasses(format?: Format): string {
  if (!format) return 'text-justify';
  return [
    format.bold ? 'font-bold' : '',
    format.italic ? 'italic' : '',
    format.align === 'center'
      ? 'text-center'
      : format.align === 'right'
      ? 'text-right'
      : 'text-justify'
  ].join(' ');
}

export default function PageBuilder({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {blocks.map((block, index) => {
        const baseClass = `leading-relaxed ${getFormatClasses(block.format)} ${
          block.type === 'paragraph' && !block.tight ? 'mb-4' : 'mb-0'
        }`;

        if (block.type === 'paragraph') {
          if (block.level === 1) {
            return (
              <h1 key={index} className={`text-3xl py-4 title-section ${baseClass}`}>
                {block.content}
              </h1>
            );
          }
          if (block.level === 2) {
            return (
              <h2 key={index} className={`text-2xl py-6 ${baseClass}`}>
                {block.content}
              </h2>
            );
          }
          if (block.level === 3) {
            return (
              <h3 key={index} className={`text-xl ${baseClass}`}>
                {block.content}
              </h3>
            );
          }

          return (
            <p key={index} className={`text-base sm:text-lg ${baseClass}`}>
              {block.content}
            </p>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={index}
              className={`italic border-l-4 pl-4 text-gray-600 mb-6 ${getFormatClasses(block.format)}`}
            >
              “{block.content}”
              {block.author && (
                <footer className="text-sm mt-1 text-right">– {block.author}</footer>
              )}
            </blockquote>
          );
        }

        if (block.type === 'image') {
          return (
            <div
              key={index}
              className={`w-full my-6 flex justify-center ${getFormatClasses(block.format)}`}
            >
              <Image
                src={block.src}
                alt={block.alt || ''}
                width={800}
                height={500}
                className="w-full max-w-2xl h-auto rounded shadow-sm"
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
