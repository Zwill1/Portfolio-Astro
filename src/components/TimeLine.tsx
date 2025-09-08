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
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-3/12 p-4">
          <div className="bg-[#f7f7f7] rounded-3xl drop-shadow-xl p-4">
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
                  <li key={index}><svg xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block"}} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/></svg> {item}</li>                  
                ))}                
            </ul>
          </div>
        </div>
    </>
  )
}

export default TimeLine