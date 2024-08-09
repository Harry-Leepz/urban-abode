import Image from "next/image";

type PropertyHeaderImageProps = {
  propertyImage: string;
  propertyName: string;
};

export default function PropertyHeaderImage({
  propertyImage,
  propertyName,
}: PropertyHeaderImageProps) {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={`/images/properties/${propertyImage}`}
            alt={propertyName}
            className='object-cover h-[400px] w-full'
            width={0}
            height={0}
            sizes='100vw'
          />
        </div>
      </div>
    </section>
  );
}
