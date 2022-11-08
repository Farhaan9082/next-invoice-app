import Input from "./Input";
import Select from "./Select";
import Button from "../shared/Button";
import { FieldArray, useFormikContext } from "formik";
import Item from "./Item";
import { uid } from "uid";
import { useEffect } from "react";

function FormFields() {
  const { values }: any = useFormikContext();

  return (
    <div className="mt-4 overflow-y-scroll flex flex-col scrollbar-hide">
      <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3">
        <h3 className="text-light-purple col-span-2 md:col-span-3 lg:text-lg">
          Bill From
        </h3>

        <Input
          className="col-span-2 md:col-span-3"
          label="Street Address"
          name="billerStreetAddress"
          type="text"
        />
        <Input
          className="col-span-1"
          label="City"
          name="billerCity"
          type="text"
        />
        <Input
          className="col-span-1"
          label="Pin Code"
          name="billerPinCode"
          type="text"
        />
        <Input
          className="col-span-2 md:col-span-1"
          label="Country"
          name="billerCountry"
          type="text"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8 md:grid-cols-3">
        <h3 className="text-light-purple col-span-2 md:col-span-3 lg:text-lg">
          Bill To
        </h3>

        <Input
          className="col-span-2 md:col-span-3"
          label="Client's Name"
          name="clientName"
          type="text"
        />
        <Input
          className="col-span-2 md:col-span-3"
          label="Client's Email"
          name="clientEmail"
          type="text"
        />
        <Input
          className="col-span-2 md:col-span-3"
          label="Street Address"
          name="clientStreetAddress"
          type="text"
        />
        <Input
          className="col-span-1"
          label="City"
          name="clientCity"
          type="text"
        />
        <Input
          className="col-span-1"
          label="Pin Code"
          name="clientPinCode"
          type="text"
        />
        <Input
          className="col-span-2 md:col-span-1"
          label="Country"
          name="clientCountry"
          type="text"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <Input
          className="col-span-2 md:col-span-1"
          label="Invoice Date"
          name="invoiceDate"
          type="text"
          disabled
        />
        <Select
          className="col-span-2 md:col-span-1"
          label="Payment Terms"
          name="paymentTerms"
        >
          <option value={30}>Net 30 Days</option>
          <option value={60}>Net 60 Days</option>
        </Select>
        <Input
          className="col-span-2"
          label="Description"
          name="productDescription"
          type="text"
        />
      </div>

      <div className="mt-8">
        <h1 className="text-white/60 text-xl font-medium">Item List</h1>
        <FieldArray
          name="items"
          render={(helpers) => (
            <>
              <div>
                {values.items.map((item: object, index: number) => (
                  <Item key={index} index={index} helpers={helpers} />
                ))}
              </div>
              <div className="mt-3">
                <Button
                  onClick={() =>
                    helpers.push({
                      id: uid(),
                      name: "",
                      quantity: "",
                      price: "",
                      total: 0,
                    })
                  }
                  className="bg-purple w-full mt-3"
                  type="button"
                >
                  + Add New Item
                </Button>
                {values.items.length == 0 && (
                  <p className="mt-3 text-red text-base">
                    - An item must be added
                  </p>
                )}
              </div>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default FormFields;
