import { useField } from "formik";

interface select {
  label: string;
  className: string;
  name: string;
  children: any;
}

function Select({ label, className, children, ...props }: select) {
  const [field, meta] = useField(props);

  return (
    <div className={`${className} flex flex-col mt-4`}>
      <label className="text-white/70 font-normal text-md">{label}</label>
      <select
        className="mt-1 bg-purple px-6 py-3 rounded border border-light-purple/10 focus:border-light-purple focus:outline-none focus:ring-0"
        {...field}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
