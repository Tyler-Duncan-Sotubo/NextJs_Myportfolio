export const About = () => {
  return (
    <section
      id="about"
      className="font-Inter bg-skin-background text-skin-primary ">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto lg:w-[60%] justify-between py-8 mt-10 ">
        <div className="">
          <p className="text-xl tracking-wide font-regular font-light leading-relaxed">
            A team-oriented and self-motivated engineer with personal integrity
            who seeks to drive excellence in implementation of applications to
            achieve strategic goals. Seeking the opportunity to leverage
            expertise across various IT platforms to develop and integrate
            cutting-edge solutions.
          </p>
          <div className="text-xl tracking-wide font-regular font-light leading-relaxed mt-8">
            <p>## my hobbies include ## </p>
            <p>- Playing and watching football</p>
            <p>- Playing video games</p>
            <p>- Exploring</p>
          </div>
        </div>
      </div>
    </section>
  );
};
