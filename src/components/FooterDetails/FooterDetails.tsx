import INFO from "../../constants/info";

const FooterDetails = () => {
  return (
    <div className="z-50 mt-12 flex flex-col gap-8 px-8 md:flex-row md:justify-start md:gap-28 lg:gap-40 xl:gap-48 xl:px-24 2xl:gap-64 2xl:px-48">
      {INFO.map((info) => (
        <article
          className="z-50 flex-col justify-center text-center"
          key={info.title}
        >
          <h1 className="mb-8 font-medium text-dark-grayish-violet">
            {info.title.toUpperCase()}
          </h1>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-dark-violet">
              <a href="#">{info.first.toUpperCase()}</a>
            </p>
            <p className="font-medium text-dark-violet">
              <a href="#"> {info.second.toUpperCase()}</a>
            </p>
            <p className="font-medium text-dark-violet">
              <a href="#"> {info.third.toUpperCase()}</a>
            </p>
            <p className="font-medium text-dark-violet">
              <a href="#"> {info.fourth && info?.fourth.toUpperCase()}</a>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FooterDetails;
