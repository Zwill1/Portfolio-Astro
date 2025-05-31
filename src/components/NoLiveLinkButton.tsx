interface NoLiveButtonProps {
    name: string;
    bgColor: string;
    width: string;
    iconStyle?: string;
}

const NoLiveButton: React.FC<NoLiveButtonProps> = ({ name, bgColor, width, iconStyle }) => {
  return (
    <p
      className={`${bgColor} ${width} block p-1`}
    >
      <i className={iconStyle}></i> {name}
    </p>
  );
};

export default NoLiveButton;