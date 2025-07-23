  import Image from "next/image";
  import bannerImg from "@/src/public/baniere.jpg";
  
  export default function BanierePhoto() {
    return (
      <section>
        <Image 
          src={bannerImg}
          alt="Bannière biographie"
          layout="responsive" 
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </section>
    );
  }
  