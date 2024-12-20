interface INumberInput {
  inputKey: string;
  label: string;
  value: number;
  onChange: (inputKey: string, newValue: string) => void;
}

export default function NumberInput({
  inputKey,
  label,
  value,
  onChange,
}: Readonly<INumberInput>) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        inputMode="numeric"
        title="input"
        value={value}
        onChange={(event) => onChange(inputKey, event.target.value)}
        required
      />
    </div>
  );
}
