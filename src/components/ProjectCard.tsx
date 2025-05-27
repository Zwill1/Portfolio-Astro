import Button from "./Button.js";

interface ProjectCardProps {
  image: string;
  imgAlt: string;
  tags: string;
  title: string;
  url: string;
  codeURL: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ image, imgAlt, tags, title, url, codeURL }) => {
  if (url == "#" && codeURL == "#") {
    return (
      <section>
        <img src={image} className="w-full border-[#17A2B8] hover:border-[#28808D] border-4" alt={imgAlt} />
        <h4 className="text-xl font-bold pt-1">{title}</h4>
        <p className="italic pb-1 text-sm">{tags}</p>
        <div className="flex justify-between">
          <Button
            name="No Live Links"
            bgColor="bg-red-800 text-white italic font-bold shadow-md hover:shadow-2xl"
            width="w-full"
          />
        </div>
      </section>
    );
  } else if (url == "#") {
    return (
      <section>
        <img src={image} className="w-full border-[#17A2B8] hover:border-[#28808D] border-4" alt={imgAlt} />
        <h4 className="text-xl font-bold pt-1">{title}</h4>
        <p className="italic pb-1 text-sm">{tags}</p>
        <div className="flex justify-between">
          <Button
            link={codeURL}
            name="GitHub"
            bgColor="bg-black text-white italic font-bold shadow-md hover:shadow-2xl"
            width="w-full"
            target="_blank"
          />
        </div>
      </section>
    );
  } else if (codeURL == "#") {
    return (
      <section>
        <img src={image} className="w-full border-[#17A2B8] hover:border-[#28808D] border-4" alt={imgAlt} />
        <h4 className="text-xl font-bold pt-1">{title}</h4>
        <p className="italic pb-1 text-sm">{tags}</p>
        <div className="flex justify-between">
          <Button
            link={url}
            name="Live Website"
            bgColor="bg-green-200 italic font-bold shadow-md hover:shadow-2xl"
            width="w-full"
            target="_blank"
          />
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <img src={image} className="w-full border-[#17A2B8] hover:border-[#28808D] border-4" alt={imgAlt} />
        <h4 className="text-xl font-bold pt-1">{title}</h4>
        <p className="italic pb-1 text-sm">{tags}</p>
        <div className="flex justify-between">
          <Button
            link={url}
            name="Live Website"
            bgColor="bg-green-200 italic font-bold shadow-md hover:shadow-2xl"
            width="w-full"
            target="_blank"
          />
          <Button
            link={codeURL}
            name="GitHub"
            bgColor="bg-black text-white italic font-bold shadow-md hover:shadow-2xl"
            width="w-full"
            target="_blank"
          />
        </div>
      </section>
    );
  }
}

export default ProjectCard;