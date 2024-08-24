import { FormEvent, useState } from "react";

type TodoFormProps = {
  onAdd: ({ text }: { text: string }) => Promise<void>;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!text) return;

    console.log(text);

    await onAdd({ text });
    setText("");
  };

  return (
    <form
      className="flex border p-2 mb-4 justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="border"
      />
      <button type="submit" className="bg-green-400 p-1 rounded-lg">
        Add
      </button>
    </form>
  );
}
