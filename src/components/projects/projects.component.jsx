import React, { useEffect } from "react";

import sr from "../../utils/scrollReveal";
import "./projects.styles.css";
import img1 from "../../assets/projects/1.1.PNG";
import img2 from "../../assets/projects/1.2.PNG";
import img3 from "../../assets/projects/1.3.PNG";
import img4 from "../../assets/projects/1.4.PNG";
import img5 from "../../assets/projects/1.5.PNG";
import img6 from "../../assets/projects/1.6.PNG";
import img21 from "../../assets/projects/2.1.PNG";
import img22 from "../../assets/projects/2.2.PNG";
import img23 from "../../assets/projects/2.3.PNG";
import img24 from "../../assets/projects/2.4.PNG";
import img25 from "../../assets/projects/2.5.PNG";
import img26 from "../../assets/projects/2.6.PNG";
import img31 from "../../assets/projects/3.1.PNG";
import img32 from "../../assets/projects/3.2.PNG";
import img33 from "../../assets/projects/3.3.PNG";
import img34 from "../../assets/projects/3.4.PNG";
import img35 from "../../assets/projects/3.5.PNG";
import img36 from "../../assets/projects/3.6.PNG";

const Projects = (props) => {
  useEffect(() => {
    sr.reveal(".size-img", { delay: 200 });
  });
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <div>
        <div className="row">
          <div class="circle">1</div>
          <h2 className="title">Thiện Nguyện</h2>
        </div>
        <div className="work__container bd-grid">
          <div class="size-img">
            <img src={img1} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img2} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img3} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img4} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img5} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img6} class="size-work__img" />
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div class="circle">2</div>
          <h2 className="title">MobiFoneMoney</h2>
        </div>
        <div className="work__container bd-grid">
          <div class="size-img">
            <img src={img21} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img22} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img23} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img24} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img25} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img26} class="size-work__img" />
          </div>
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div class="circle">3</div>
          <h2 className="title">Lumi</h2>
        </div>
        <div className="work__container bd-grid">
          <div class="size-img">
            <img src={img31} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img32} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img33} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img34} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img35} class="size-work__img" />
          </div>
          <div class="size-img">
            <img src={img36} class="size-work__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
