interface TimeLineProps {
    jobTitle: string;
    jobDates: string;
    jobTags: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    list5: string;
    list6: string;
    list7: string;
}

const TimeLine: React.FC<TimeLineProps> = ({jobTitle, jobDates, jobTags, list1, list2, list3, list4, list5, list6, list7}) => {
  return (
    <>
        <div className="w-full md:w-5/12 lg:w-3/12 p-4 m-4 bg-[#f7f7f7] rounded-3xl drop-shadow-xl">
            <h4 className="text-lg font-bold uppercase leading-[1.5] lg:text-left">{jobTitle}</h4>
            <p className="pb-2 text-sm font-bold text-[#17A2B8]"><em>{jobDates}</em></p>
            <p className="pb-2 text-sm"><em>{jobTags}</em></p>
            <p className="mb-2 font-semibold">Job Duties:</p>
            <ul>
                <li><i className="ri-arrow-right-double-line"></i> {list1}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list2}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list3}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list4}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list5}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list6}</li>
                <li><i className="ri-arrow-right-double-line"></i> {list7}</li>
            </ul>
        </div>
    </>
  )
}

export default TimeLine