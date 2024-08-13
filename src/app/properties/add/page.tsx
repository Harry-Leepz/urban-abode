import AddPropertyForm from "@/components/properties/add-property-form";

export default function AddProperties() {
  return (
    <section className='bg-slate-100'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <AddPropertyForm />
        </div>
      </div>
    </section>
  );
}
