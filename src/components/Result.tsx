import type { IIconStyles } from "@fluentui/react/lib/Icon";

import { Separator, Icon,Text } from "@fluentui/react";

import { useRegister } from "@/store/form/register";

function Result() {
  const {result} = useRegister()

  const iconStyles: IIconStyles = {
    root: {
      fontSize: "24px",
      height: "24px",
      width: "24px",
    },
  };

  return (
    <>
      <Separator>
        <Icon iconName="Clock" styles={iconStyles} />
      </Separator>

      <Text variant="xxLarge">{result}</Text>
    </>
  );
}

export default Result;
