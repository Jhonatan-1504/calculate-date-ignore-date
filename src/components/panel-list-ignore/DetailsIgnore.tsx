import { useIgnoreList } from "@/store/ignore/list";
import {
  Stack,
  DetailsList,
  ConstrainMode,
  DetailsListLayoutMode,
} from "@fluentui/react";

import type { IDetailsListStyles } from "@fluentui/react";

function DetailsIgnore() {
  const { filters } = useIgnoreList();

  const gridStyles: Partial<IDetailsListStyles> = {
    root: {
      overflowX: "scroll",
      selectors: {
        "& [role=grid]": {
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          height: "81vh",
          overflowX: "hidden",
        },
      },
    },
    headerWrapper: {
      flex: "0 0 auto",
    },
    contentWrapper: {
      flex: "1 1 auto",
      overflowY: "auto",
      overflowX: "hidden",
    },
  };

  return (
    <Stack>
      <DetailsList
        items={filters()}
        styles={gridStyles}
        layoutMode={DetailsListLayoutMode.justified}
        constrainMode={ConstrainMode.unconstrained}
      />
    </Stack>
  );
}

export default DetailsIgnore;
