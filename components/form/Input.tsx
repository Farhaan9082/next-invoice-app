import { useField } from "formik";

interface input {
  label: string;
  className: string;
  name: string;
  type: string;
  disabled?: boolean;
}

function Input({ label, className, ...props }: input) {
  const [field, meta] = useField(props);

  return (
    <div className={`${className} flex flex-col mt-4`}>
      <label className="text-white/70 font-normal text-md">{label}</label>
      <input
        className={`${
          props.disabled ? "text-white/70 bg-purple/60" : "bg-purple"
        } mt-1 px-6 py-3 rounded border border-light-purple/10 focus:border-light-purple focus:outline-none focus:ring-0`}
        autoComplete="off"
        {...field}
        {...props}
      />
    </div>
  );
}

export default Input;
