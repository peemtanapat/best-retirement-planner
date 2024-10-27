interface ITextInput {
  inputKey: string;
  label: string;
  value: string;
  onChange: (inputKey: string, newValue: string) => void;
}

export default function TextInput({
  inputKey,
  label,
  value,
  onChange,
}: Readonly<ITextInput>) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        inputMode="text"
        title="input"
        value={value}
        onChange={(event) => onChange(inputKey, event.target.value)}
        required
      />
    </div>
  );
}
