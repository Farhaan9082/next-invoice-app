import { useFormikContext } from "formik";
import { useEffect } from "react";
import Input from "./Input";

interface item {
  index: number;
  helpers: any;
}

function Item({ index, helpers }: item) {
  const { values, setFieldValue }: { values: any; setFieldValue: any } =
    useFormikContext();

  useEffect(() => {
    const total = values.items[index].quantity * values.items[index].price;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
    setFieldValue(`items[${index}].total`, rounded || "0");
  }, [values.items[index].quantity, values.items[index].price]);

  return (
    <div
      key={index}
      className="grid grid-cols-2 gap-x-5 mt-2 mb-4 md:grid-cols-3"
    >
      <Input
        className="col-span-2"
        label="Item Name"
        name={`items[${index}].name`}
        type="text"
      />
      <Input
        className="col-span-1"
        label="Qty."
        name={`items[${index}].quantity`}
        type="text"
      />
      <Input
        className="col-span-1"
        label="Price"
        name={`items[${index}].price`}
        type="text"
      />
      <Input
        className="col-span-1"
        label="Total"
        name={`items[${index}].total`}
        type="text"
        disabled
      />
      <button
        type="button"
        className="h-7 w-7 place-self-end m-3"
        onClick={() => helpers.remove(index)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#7c5dfa"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default Item;
