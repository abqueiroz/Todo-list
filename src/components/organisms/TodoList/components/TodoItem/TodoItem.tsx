import { Button } from "@/components/atom";
import { Checkbox, type CheckboxProps } from "@/components/molecules";
import { ButtonsContainer } from "../../TodoList.styled";
import type { Todo } from "../../TodoList";

type TodoItemProps = {
  todo: Todo;
  onEdit: () => void;
  onDelete: () => void;
  onStateChange: () => void;
} & Omit<CheckboxProps, '$label' | 'id' | 'onCheckedChange'>;

export function TodoItem({
  todo,
  onEdit,
  onDelete,
  onStateChange,
  ...rest
}: TodoItemProps) {
  return (
    <>
      <Checkbox
        id={todo.id.toString()}
        $label={todo.text}
        defaultChecked={todo.done}
        checked={todo.done}
        onCheckedChange={onStateChange}
        {...rest}
      />
      <ButtonsContainer>
        <Button $size="small" $variant="tertiary" onClick={onEdit}>
          Edit
        </Button>
        <Button $size="small" $variant="alert" onClick={onDelete}>
          Delete
        </Button>
      </ButtonsContainer>
    </>
  );
}
