import Window from "../../utilities/Window";

function Panel({ setIsOpen, invoiceCount }: any) {
  const width: number | undefined = Window();

  return (
    <div className="flex justify-between my-6 xs:my-8 md:my-12 lg:mt-14">
      <div>
        <h1 className="text-2xl font-semibold xs:text-3xl sm:text-4xl">
          Invoices
        </h1>
        <h2 className="text-white/50 font-normal">
          {invoiceCount > 0 ? invoiceCount : 0} invoices
        </h2>
      </div>
      <div className="flex">
        <div
          onClick={() => setIsOpen(true)}
          className="flex self-center items-center justify-start bg-light-purple h-10 w-20 rounded-full cursor-pointer xs:w-32"
        >
          <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#7c5dfa"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-sm">
            New {width && width > 459 ? <span>Invoice</span> : ""}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Panel;
