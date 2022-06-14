interface button {
  children: any;
  shifted?: boolean;
  color: string;
}

export default function Button({ children, shifted, color }: button) {
  return (
    <button
      className={`${
        shifted ? "mr-2" : ""
      } bg-${color} px-5 py-2 rounded-full text-sm`}
    >
      {children}
    </button>
  );
}
