import SearchIgnore from './SearchIgnore';
import DetailsIgnore from './DetailsIgnore';

import { Panel, PanelType } from '@fluentui/react'
import { useIgnorePanel } from '@/store/ignore/panel';

function PListIgnore(){
  const {isOpen,setClose} = useIgnorePanel()

  return (
    <Panel
      isLightDismiss
      isOpen={isOpen}
      onDismiss={setClose}
      closeButtonAriaLabel="Close"
      headerText="Lista de dias ignorados"
      type={PanelType.medium}
    >
      <SearchIgnore />
      <DetailsIgnore />
    </Panel>
  )
}

export default PListIgnore