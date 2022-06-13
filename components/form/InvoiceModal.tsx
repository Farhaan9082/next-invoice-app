import InvoiceForm from "./InvoiceForm";

function InvoiceModal({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${
        !isOpen ? `hidden` : ``
      } absolute left-0 top-0 w-screen h-screen bg-dark-purple`}
    >
      <div className="mx-auto flex-grow flex-col px-6 xs:px-8 md:px-10">
        <InvoiceForm />
      </div>
    </div>
  );
}

export default InvoiceModal;
