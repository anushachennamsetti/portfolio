import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects2 } from "../Constants/constants"; // Import the projects2 array

const ProjectCard2 = ({
  index,
  name,
  description,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
    >
      <motion.div
        style={{ // Inline CSS starts here
          transition: "opacity 0.5s",
          opacity: 0, // Initially set opacity to 0
        }}
        variants={{
          show: {
            opacity: 1, // When shown, set opacity to 1
          },
        }}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            style={{ // Inline CSS for image
              width: "100%",
              height: "auto", // Maintain aspect ratio
              maxHeight: "200px", // Maximum height
              objectFit: "cover", // Cover the container
              borderRadius: "8px", // Rounded corners
            }}
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3
            style={{ // Inline CSS for heading
              color: "#fff", // White text color
              fontSize: "1.5rem", // Larger font size
              fontWeight: "bold", // Bold font weight
            }}
          >
            {name}
          </h3>
          <p
            style={{ // Inline CSS for description
              color: "#ccc", // Light gray text color
              fontSize: "14px", // Smaller font size
              lineHeight: "1.5", // Line height
            }}
            className="mt-2"
          >
            {description}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1"></div>

        <div className="mt-3 flex justify-center items-center">
          <a
            style={{ // Inline CSS for link
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow
              padding: "10px 20px", // Padding
              backgroundColor: "#4CAF50", // Green background color
              color: "#fff", // White text color
              borderRadius: "4px", // Rounded corners
              textDecoration: "none", // Remove underline
            }}
            href={demo_link}
            target="_blank"
          >
            See the Demo
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works2 = () => {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
      {projects2.map((project, index) => (
        <ProjectCard2 key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default Works2;
