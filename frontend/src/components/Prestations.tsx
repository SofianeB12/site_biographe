import fs from 'fs';
import path from 'path';
import PageBuilder from "./PageBuilder";


export default function Prestations() {

  const filePath = path.join(process.cwd(), 'content', 'Prestations.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const blocks = JSON.parse(fileContent);

  return (
    <section className="p-8 ">
      <PageBuilder blocks={blocks} />
    </section>
  );
}
