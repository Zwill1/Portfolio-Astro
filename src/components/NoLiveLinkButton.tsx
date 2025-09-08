import { Icon } from '@iconify/react';

interface NoLiveButtonProps {
    name: string;
    bgColor: string;
    width: string;
    iconName?: string;
}

const NoLiveButton: React.FC<NoLiveButtonProps> = ({ name, bgColor, width, iconName }) => {
  return (
    <p
      className={`${bgColor} ${width} block p-1`}
    >
      <span>{iconName ? <Icon icon={iconName} width="22" style={{display: 'inline-block'}} /> : null} {name}</span>
    </p>
  );
};

export default NoLiveButton;