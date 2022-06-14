import Input from "./Input";
import Select from "./Select";

function FormFields() {
  return (
    <div className="mt-4 overflow-y-scroll max-h-80 scrollbar-hide">
      <div className="grid grid-cols-2 gap-x-5">
        <h3 className="text-light-purple col-span-2">Bill From</h3>

        <Input column='2' label="Street Address" name="billerStreetAddress" type="text" />
        <Input column='1' label="City" name="billerCity" type="text" />
        <Input column='1' label="Pin Code" name="billerPinCode" type="text" />
        <Input column='2' label="Country" name="billerCountry" type="text" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <h3 className="text-light-purple col-span-2">Bill To</h3>

        <Input column='2' label="Client's Name" name="clientName" type="text" />
        <Input column='2' label="Client's Email" name="clientEmail" type="text" />
        <Input column='2' label="Street Address" name="clientStreetAddress" type="text" />
        <Input column='1' label="City" name="clientCity" type="text" />
        <Input column='1' label="Pin Code" name="clientPinCode" type="text" />
        <Input column='2' label="Country" name="clientCountry" type="text" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 mt-8">
        <Input column='2' label="Invoice Date" name="invoiceDate" type="text" disabled />
        <Select column='2' label="Payment Terms" name="paymentTerms">
          <option value={30}>Net 30 Days</option>
          <option value={60}>Net 60 Days</option>
        </Select>
        <Input column='2' label="Description" name="productDescription" type="text" />
      </div>
    </div>
  );
}

export default FormFields;
