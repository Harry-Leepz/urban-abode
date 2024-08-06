import Link from "next/link";

const infoBoxeData = [
  {
    title: "For Renters",
    description:
      "Find your dream rental property. Bookmark properties and contact owners.",
    linkLabel: "Browse Properties",
    backgroundColor: "bg-gray-100",
    textColor: "text-slate-900",
    href: "/properties",
  },
  {
    title: "For Property Owners",
    description:
      "List your properties and reach potential tenants. Rent as an airbnb or long term.",
    linkLabel: "Add Property",
    backgroundColor: "bg-blue-100",
    textColor: "text-slate-900",
    href: "/add-property",
  },
];

export default function InfoBoxes() {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg mb-8'>
          {infoBoxeData.map((infoBox, index) => (
            <InfoBox key={index} {...infoBox} />
          ))}
        </div>
      </div>
    </section>
  );
}

type InfoBoxProps = {
  title: string;
  description: string;
  linkLabel: string;
  backgroundColor: string;
  textColor: string;
  href: string;
};

function InfoBox({
  title,
  description,
  linkLabel,
  backgroundColor,
  textColor,
  href,
}: InfoBoxProps) {
  return (
    <div className={`${backgroundColor} ${textColor} p-6 rounded-lg shadow-md`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4'>{description}</p>
      <Link
        href={href}
        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
      >
        {linkLabel}
      </Link>
    </div>
  );
}
