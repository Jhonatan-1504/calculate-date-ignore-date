import { useFields } from "@/store/form/fields";
import { useRegister } from "@/store/form/register";
import {
  Stack,
  TextField,
  CommandBarButton,
  PrimaryButton,
  DatePicker,
  Text,
} from "@fluentui/react";

function Form() {
  const { fields, setFields, setRemove, changeField, acomulate } = useFields();
  const { handleSubmit, setDate } = useRegister();

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <DatePicker
        label="Fecha de inicio"
        placeholder="Seleccionar una fecha"
        onSelectDate={(date) => setDate(date ?? "")}
      />

      <Stack tokens={{ childrenGap: 10 }}>
        <Stack horizontal styles={{ root: { height: 44 } }}>
          <CommandBarButton
            onClick={setFields}
            iconProps={{ iconName: "Add" }}
            text="Nuevo"
          />
          <CommandBarButton
            onClick={setRemove}
            iconProps={{ iconName: "Trash" }}
            text="Eliminar"
          />
          {
            acomulate() > 0 && (
              <Stack verticalAlign="center">
                <Text>dias "{acomulate()}"</Text>
              </Stack>
            ) 
          }
        </Stack>

        <Stack horizontal tokens={{ childrenGap: 10 }} wrap>
          {fields.map((f, i) => (
            <Stack.Item key={i}>
              <TextField
                type="number"
                onChange={(_, newValue) => changeField(newValue, i)}
              />
            </Stack.Item>
          ))}
        </Stack>
      </Stack>

      <Stack horizontal styles={{ root: { marginTop: 10 } }}>
        <PrimaryButton onClick={handleSubmit} text="Generar" />
      </Stack>
    </Stack>
  );
}

export default Form;
