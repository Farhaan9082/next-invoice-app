import InvoiceForm from "./InvoiceForm";

function InvoiceModal({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${
        !isOpen ? `hidden` : ``
      } fixed left-0 top-0 w-screen h-full bg-dark-purple md:z-50 md:w-[35rem] md:border-r md:border-light-purple`}
    >
      <div className="mx-auto px-6 xs:px-8 md:px-10">
        <InvoiceForm />
      </div>
    </div>
  );
}

export default InvoiceModal;
