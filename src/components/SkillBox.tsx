interface SkillProps {
    divStyle: string;
    headerTextStyle: string;
    headerText: string;
    pTextStyle: string;
    textSkills: string;
}

const SkillBox: React.FC<SkillProps> = ({divStyle, headerTextStyle, headerText, pTextStyle, textSkills}) => {
    return(
        <div className={divStyle}>
            <h4 className={headerTextStyle}>{headerText}</h4>
            <p className={pTextStyle}>
                {textSkills}
            </p>
        </div>
    );
};

export default SkillBox;
