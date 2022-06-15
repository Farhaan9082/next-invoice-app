import Input from "./Input";
import Select from "./Select";
import Button from "../shared/Button";

function FormFields() {
  return (
    <div className="mt-4 overflow-y-scroll max-h-80 scrollbar-hide">
      <div className="grid grid-cols-2 gap-x-5">
        <h3 className="text-light-purple col-span-2">Bill From</h3>

        <Input className="col-span-2" label="Street Address" name="billerStreetAddress" type="text" />
        <Input className="col-span-1" label="City" name="billerCity" type="text" />
        <Input className="col-span-1" label="Pin Code" name="billerPinCode" type="text" />
        <Input className="col-span-2" label="Country" name="billerCountry" type="text" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <h3 className="text-light-purple col-span-2">Bill To</h3>

        <Input className="col-span-2" label="Client's Name" name="clientName" type="text" />
        <Input className="col-span-2" label="Client's Email" name="clientEmail" type="text" />
        <Input className="col-span-2" label="Street Address" name="clientStreetAddress" type="text" />
        <Input className="col-span-1" label="City" name="clientCity" type="text" />
        <Input className="col-span-1" label="Pin Code" name="clientPinCode" type="text" />
        <Input className="col-span-2" label="Country" name="clientCountry" type="text" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <Input className="col-span-2" label="Invoice Date" name="invoiceDate" type="text" disabled />
        <Select className="col-span-2" label="Payment Terms" name="paymentTerms">
          <option value={30}>Net 30 Days</option>
          <option value={60}>Net 60 Days</option>
        </Select>
        <Input className="col-span-2" label="Description" name="productDescription" type="text" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <h1 className="text-white/60 text-xl font-medium col-span-2">Item List</h1>
        <div className="col-span-2 mt-3">
          <Button className="bg-purple w-full" type="button">+ Add New Item</Button>
        </div>
      </div>
    </div>
  );
}

export default FormFields;
