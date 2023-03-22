import React, { useState } from "react";

import { LoadPanel } from "devextreme-react/load-panel";

type LoadingProps = {};

const Loading: React.FC<React.PropsWithChildren<LoadingProps>> = ({}) => {
  const [loadPanelVisible, setLoadPanelVisible] = useState<boolean>(true);
  const [showIndicator, setShowIndicator] = useState<boolean>(true);
  const [shading, setShading] = useState<boolean>(true);
  const [showPane, setShowPane] = useState<boolean>(true);
  const [hideOnOutsideClick, setHideOnOutsideClick] = useState<boolean>(false);

  const hideLoadPanel = () => {
    setLoadPanelVisible(false);
  };

  return (
    <>
      <LoadPanel
        shadingColor="rgba(0,0,0,0.4)"
        position={"center"}
        onHiding={hideLoadPanel}
        visible={loadPanelVisible}
        showIndicator={showIndicator}
        shading={shading}
        showPane={showPane}
        hideOnOutsideClick={hideOnOutsideClick}
      />
    </>
  );
};

export default Loading;
