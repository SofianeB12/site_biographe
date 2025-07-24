import Image from 'next/image';
import photo_caty from "../public/portrait_catygarozzo.jpg";
import fs from 'fs';
import path from 'path';
import PageBuilder from './PageBuilder';



export function PresentationAccueil() {

    const filePath = path.join(process.cwd(), 'content', 'presentation.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const blocks = JSON.parse(fileContent);

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
            <section className="pb-8">
                  <PageBuilder blocks={blocks} />
                </section>

        </div>
    )}