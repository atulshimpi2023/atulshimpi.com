import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Project Title 1",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-1.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 2",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-2.jpg",
      sliderImages: [
        "images/projects/project-2.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Project Title 3",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Project Title 4",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-4.jpg",
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Project Title 5",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Project Title 6",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {0 > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
