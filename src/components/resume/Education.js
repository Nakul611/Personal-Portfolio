import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-white flex flex-col gap-10">
          <ResumeCard
            title="B-Tech Computer Science"
            subTitle="Pranveer Singh Institute of Technology (2021 - Present)"
            result="6.3 CGPA"
            des="I am currently studying algorithms, and engineering principles in my computer science engineering college."
          />
          <ResumeCard
            title="12th Board"
            subTitle="Kailash Vidyalok Inter College (2018 - 2020)"
            result="71.9%"
            des="In 12th standard, I studied advanced topics in Math, Science,and other elective subjects preparing for higher education and gained a better understanding."
          />
          <ResumeCard
            title="10th Board"
            subTitle="Shivaji Inter College (2016 - 2018)"
            result="70.5%"
            des="In 10th standard, I studied subjects like Math, Science, and Languages,
              along with basic life skills and problem-solving techniques."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-white flex flex-col gap-10">
          <ResumeCard
            title="Freelancer"
            subTitle="Open Scource (2023 - Present)"
            result="Global"
            des="As a freelancer, I'm mastering client communication, project management, and diverse technical skills, continually learning new technologies for professional growth."
          />
          <ResumeCard
            title="Android Developer"
            subTitle="Intern at Prodigy Infotech (Sept-2023 to Sept-2023)"
            result="Mumbai"
            des="
            During my tenure as an Android developer, I specialized in Kotlin programming, agile methodologies, and the development of user-centric mobile applications."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="College Space (Sept-2022 to Dec-2022)"
            result="Kanpur"
            des="In my team project as a front-end dev, I honed my HTML, CSS, and JavaScript skills, focusing on collaborative coding and seamless UI/UX integration."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education