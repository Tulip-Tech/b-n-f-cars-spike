import { ChangeEvent } from "react";
interface DropdownOption {
  key: string;
  value?: string;
}
interface DropdownFieldProps {
  fieldName?: string;
  options: DropdownOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;

  labelAlign?: "top" | "left";
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  fieldName,
  options,
  onChange,
  labelAlign,
}) => {
  return (
    <section
      className={` ${
        labelAlign === "top" ? "grid  self-left" : " flex gap-2 self-end"
      }`}
    >
      <span className="font-semibold my-auto">{fieldName}</span>
      <select
        className={` text-black/40 p-2 rounded ${
          labelAlign === "top" ? "bg-slate-200" : " bg-white"
        }`}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        ))}
      </select>
    </section>
  );
};

export default DropdownField;