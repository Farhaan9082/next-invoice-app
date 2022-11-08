import Link from "next/link";
import { invoice } from "../../pages";
import Status from "../shared/Status";

function Invoice({
  invoiceId,
  dueDate,
  clientName,
  total,
  invoiceStatus,
  href,
}: invoice) {
  return (
    <Link href={href}>
      <a className="bg-purple p-6 rounded-lg">
        <div className="md:hidden">
          <div className="flex justify-between flex-grow">
            <h3 className="font-medium text-base uppercase">
              <span className="text-light-purple">#</span>
              {invoiceId}
            </h3>
            <h2 className="font-light tracking-wide text-white/80">
              {clientName}
            </h2>
          </div>
          <div className="flex justify-between flex-grow mt-4">
            <div className="">
              <h2 className="font-light text-white/80">
                <span className="mr-1">Due</span>
                {dueDate}
              </h2>
              <h1 className="font-semibold text-xl mt-1">
                <span className="mr-1">₹</span>
                {total}
              </h1>
            </div>
            <Status invoiceStatus={invoiceStatus} />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-[15%_25%_25%_15%_20%] w-full items-center">
            <h3 className="font-medium text-base uppercase lg:text-lg">
              <span className="text-light-purple">#</span>
              {invoiceId}
            </h3>
            <h2 className="font-light text-white/80 lg:text-lg">
              <span className="mr-1">Due</span>
              {dueDate}
            </h2>
            <h2 className="font-light tracking-wide text-white/80 lg:text-lg md:font-normal">
              {clientName}
            </h2>
            <h1 className="font-semibold text-xl mt-1">
              <span className="mr-1">₹</span>
              {total}
            </h1>
            <div className="flex gap-3 items-center">
              <Status invoiceStatus={invoiceStatus} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-light-purple"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Invoice;
