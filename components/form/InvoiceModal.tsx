import InvoiceForm from "./InvoiceForm";

interface invoiceModal {
  setIsOpen: any;
  isOpen: boolean;
}

function InvoiceModal({ setIsOpen, isOpen }: invoiceModal) {
  return (
    <>
      <div
        className={`${
          !isOpen ? `hidden` : ``
        } fixed left-0 top-0 w-screen h-full bg-dark-purple md:z-50 md:w-[35rem] md:shadow-xl md:rounded-r-xl`}
      >
        <div className="mx-auto px-6 xs:px-8 md:px-10">
          <InvoiceForm setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          className="hidden z-[1] w-full h-screen fixed top-0 right-0 bg-black/40 md:block"
        ></div>
      )}
    </>
  );
}

export default InvoiceModal;
