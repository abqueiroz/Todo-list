import { Button, TextInput } from "@/components/atom";
import { ButtonsContainer } from "../../TodoList.styled";

type TodoItemEditProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export function TodoItemEdit({
  value,
  placeholder,
  onChange,
  onSave,
  onCancel,
}: TodoItemEditProps) {
  return (
    <>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSave();
          if (e.key === 'Escape') onCancel();
        }}
        autoFocus
      />
      <ButtonsContainer>
        <Button $size="small" onClick={onSave}>
          Save
        </Button>
        <Button $size="small" $variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </ButtonsContainer>
    </>
  );
}
