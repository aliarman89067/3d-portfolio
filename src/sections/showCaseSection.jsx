import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>Get Response From AI in the Way You Want by Var AI.</h2>
              <p className="text-white-50 md:text-xl">
                App webapp which built top of Top In-Demanded Technologies like
                Next Js, TRPC, Neon Tech and Open AI. With the help of Var.Ai
                users can see AI responses on our custom variants.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <di ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library" />
              </div>
              <h2>Modern, Animated React App.</h2>
            </di>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>Full Stack, Sales Agent Management Platform.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
