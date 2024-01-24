import React from 'react';
import Icon from 'react-icons/md';

import './articles.css';

interface PropTypes {
  title?: string;
  primaryAction?: keyof typeof Icon.glyphMap;
  secondaryAction?: keyof typeof Icon.glyphMap;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onBack?: () => void;
}

const AppBar: React.FC<PropTypes> = ({
  title,
  primaryAction,
  secondaryAction,
  onPrimaryAction,
  onSecondaryAction,
  onBack,
}) => {
  const { theme } = useUi();

  return (
    <div className="container">
      <div className="leftcontainer">
        {onBack && (
          <button className="iconcontainer" onClick={onBack}>
            <Icon
              size={24}
              color={theme.colors.action}
            />
          </button>
        )}
        <p className="label">{title}</p>
      </div>
      <div className="rightcontainer">
        {primaryAction && (
          <button className="iconcontainer" onClick={onPrimaryAction}>
            <Icon
              size={24}
              color={theme.colors.action}
              name={primaryAction}
            />
          </button>
        )}
        {secondaryAction && (
          <button className="iconcontainer" onClick={onSecondaryAction}>
            <Icon
              size={24}
              color={theme.colors.action}
              name={secondaryAction}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;