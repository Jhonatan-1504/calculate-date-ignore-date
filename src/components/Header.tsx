import { PrimaryButton, Stack } from "@fluentui/react";

import MListIgnore from "@/components/panel-list-ignore/MListIgnore";
import { useIgnorePanel } from "@/store/ignore/panel";

function Header() {
  const { setOpen } = useIgnorePanel();

  return (
    <Stack
      horizontal
      tokens={{ childrenGap: 10 }}
      styles={{ root: { marginBottom: 10 } }}
    >
      <PrimaryButton onClick={setOpen} text="Lista de dias ignorados" />

      <MListIgnore />
    </Stack>
  );
}

export default Header;
