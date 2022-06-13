import { useField } from "formik";

interface input {
  label: string;
  column: string;
  name: string;
  type: string;
}

function Input({ label, column, ...props }: input) {
  const [field, meta] = useField(props);

  return (
    <div className={`flex flex-col mt-4 col-span-${column}`}>
      <label className="text-white/70 font-normal text-md">{label}</label>
      <input
        className="mt-1 bg-purple px-6 py-3 rounded border border-light-purple/10 focus:border-light-purple focus:outline-none focus:ring-0"
        autoComplete="off"
        {...field}
        {...props}
      />
    </div>
  );
}

export default Input;
