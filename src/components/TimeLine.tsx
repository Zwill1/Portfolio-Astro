interface TimeLineProps {
    jobTitle: string;
    jobStart: string;
    jobEnd: string;
    jobTags: string[];
    listItems: string[];
}

const TimeLine: React.FC<TimeLineProps> = ({jobTitle, jobStart, jobEnd, jobTags, listItems}) => {
  return (
    <>
        <div className="w-full md:w-5/12 lg:w-3/12 p-4 m-4 bg-[#f7f7f7] rounded-3xl drop-shadow-xl">
            <h4 className="text-lg font-bold uppercase leading-[1.5] lg:text-left">{jobTitle}</h4>
            <p className="pb-2 text-sm font-bold text-[#17A2B8]"><em>{jobStart} - {jobEnd}</em></p>
            <p className="pb-2 text-sm">
                {jobTags?.map((tag, index) => (
                  <em key={index}>{tag}, </em>
                ))}    
            </p>
            <p className="mb-2 font-semibold">Job Duties:</p>
            <ul>
                {listItems?.map((item, index) => (
                  <li key={index}><i className="ri-arrow-right-double-line"></i> {item}</li>
                ))}                
            </ul>
        </div>
    </>
  )
}

export default TimeLine