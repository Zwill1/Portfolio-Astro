interface ButtonProps {
    link?: string;
    name: string;
    bgColor: string;
    width: string;
    target?: '_blank' | '_self' | '_parent' | '_top'; // target is optional,
    iconStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ link, name, bgColor, width, target, iconStyle }) => {
  return (
    <a
      href={link}
      target={target}
      className={`${bgColor} ${width} block p-1`}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <i className={iconStyle}></i> {name}
    </a>
  );
};

export default Button;