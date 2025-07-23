"use client"
import Image from 'next/image';
import photo_caty from "@/public/portrait_catygarozzo.jpg";
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { fetchPresentation } from '@/utils/api';



export function PresentationAccueil() {

    const [listContent, setListContent] = useState([]);
      
        useEffect(() => {
          fetchPresentation()
            .then(data =>
              setListContent(data.data));
        }, []);

    return(

        <div className="flex flex-col pt-6 ">
            <Image 
                          src={photo_caty}
                          alt="photo_caty"
                          width={300}
                          height={300}
                          className='hidden md:block border-2 border-white rounded-full relative -mt-32'
                          style={{ marginLeft: '10%', marginTop: '-10%' }}
                          priority
                        />
            <Image 
                          src={photo_caty}
                          alt="photo_caty"
                          width={100}
                          height={100}
                          className='md:hidden border-2 border-white rounded-full relative ml- -mt-32'
                          style={{ marginLeft: '8%', marginTop: '-15%' }}
                          priority
                        />
            <section className="p-8">
                  <h1 className="text-3xl font-semibold text-center">Accompagnante – biographe</h1>
                  <div className="mt-6 space-y-4">
                    <div className="">
                      <ul className="p-4">
                        {listContent.length > 0 && listContent.map((content, index) => (
                          <li className="my-8" key={index}>
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

        </div>
    )}