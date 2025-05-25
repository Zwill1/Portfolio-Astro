interface EducationProps {
    school: string;
    body: string;
    year: string;
}

const Education: React.FC<EducationProps> = ({school, body, year}) => {
    return (
        <>
            <p className="font-bold text-2xl italic leading-10">
                {school}
            </p>
            <p className="leading-6">
                {body}
            </p>
            <p className="font-bold italic leading-8">
                ~{year}
            </p>
        </>
    );
};

export default Education;
