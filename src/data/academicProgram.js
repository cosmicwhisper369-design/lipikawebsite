export const academicData = {
  notes: {
    title: "Notes",
    grades: [
      {
        id: "6-8",
        label: "Grades 6–8",
        subjects: [
          {
            id: "science-68",
            label: "Science (NGSS-Aligned)",
            topics: [
              {
                id: "earth-space",
                label: "Earth & Space Science",
                subtopics: ["Earth's Systems", "Plate Tectonics & Earth History", "Weather & Climate", "Natural Resources & Human Impact", "Solar System & Gravity"]
              },
              {
                id: "life-science",
                label: "Life Science",
                subtopics: ["Cell Structure & Function", "Organization of Organisms", "Ecosystems & Energy Flow", "Heredity (Genes & Traits)", "Natural Selection & Adaptation"]
              },
              {
                id: "physical-science",
                label: "Physical Science",
                subtopics: ["Structure & Properties of Matter", "Chemical Reactions", "Forces & Motion", "Energy", "Waves & Electromagnetic Radiation"]
              }
            ]
          },
          {
            id: "math-68",
            label: "Mathematics (Common Core)",
            topics: [
              { id: "ratios", label: "Ratios & Proportional Relationships" },
              { id: "number-system", label: "The Number System" },
              { id: "expressions", label: "Expressions & Equations" },
              { id: "functions-8", label: "Functions (Grade 8)" },
              { id: "geometry", label: "Geometry" },
              { id: "stats", label: "Statistics & Probability" }
            ]
          }
        ]
      },
      {
        id: "9-10",
        label: "Grades 9–10",
        subjects: [
          {
            id: "science-910",
            label: "Science (NGSS High School)",
            topics: [
              {
                id: "biology-hs",
                label: "Biology",
                subtopics: ["Structure & Function", "Matter & Energy in Organisms", "Inheritance & Variation of Traits", "Natural Selection & Evolution", "Ecosystem Dynamics"]
              },
              {
                id: "chemistry-hs",
                label: "Chemistry",
                subtopics: ["Atomic Structure", "Periodic Trends", "Chemical Bonding", "Chemical Reactions & Stoichiometry", "Energy in Chemical Processes", "Reaction Rates & Equilibrium"]
              },
              {
                id: "physics-hs",
                label: "Physics",
                subtopics: ["Kinematics", "Newton’s Laws of Motion", "Work, Energy & Power", "Momentum", "Waves & Sound", "Electricity & Magnetism"]
              }
            ]
          },
          {
            id: "math-910",
            label: "Mathematics (Common Core HS)",
            topics: [
              {
                id: "algebra-1",
                label: "Algebra I",
                subtopics: ["Linear Equations", "Systems of Equations", "Exponential Functions", "Quadratic Functions"]
              },
              {
                id: "geometry-hs",
                label: "Geometry",
                subtopics: ["Congruence & Proof", "Similarity & Trigonometry", "Circles", "Coordinate Geometry", "Geometric Measurement"]
              },
              {
                id: "algebra-2",
                label: "Algebra II",
                subtopics: ["Polynomial Functions", "Complex Numbers", "Exponential & Logarithmic", "Sequences & Series", "Probability & Statistics"]
              },
              {
                id: "pre-calculus",
                label: "Pre-Calculus",
                subtopics: ["Function Analysis", "Trigonometric Functions", "Polar Coordinates & Vectors", "Matrices", "Limits"]
              }
            ]
          }
        ]
      },
      {
        id: "ap-courses",
        label: "AP Courses",
        subjects: [
          {
            id: "ap-bio",
            label: "AP Biology",
            topics: ["Chemistry of Life", "Cell Structure & Function", "Cellular Energetics", "Cell Communication", "Heredity", "Gene Expression", "Natural Selection", "Ecology"]
          },
          {
            id: "ap-chem",
            label: "AP Chemistry",
            topics: ["Atomic Structure", "Molecular Bonding", "Intermolecular Forces", "Chemical Reactions", "Kinetics", "Thermodynamics", "Equilibrium", "Acids & Bases"]
          },
          {
            id: "ap-physics-1",
            label: "AP Physics 1",
            topics: ["Kinematics", "Dynamics", "Circular Motion", "Energy", "Momentum", "Simple Harmonic Motion", "Electric Charge & Circuits"]
          },
          {
            id: "ap-physics-2",
            label: "AP Physics 2",
            topics: ["Fluids", "Thermodynamics", "Electric Force", "Circuits", "Magnetism", "Optics", "Modern Physics"]
          },
          {
            id: "ap-physics-c-m",
            label: "AP Physics C: Mechanics",
            topics: ["Calculus-Based Kinematics", "Newton’s Laws", "Work, Energy & Power", "Systems of Particles", "Rotation", "Oscillations & Gravitation"]
          },
          {
            id: "ap-physics-c-em",
            label: "AP Physics C: Electricity & Magnetism",
            topics: ["Electrostatics", "Conductors & Capacitors", "Electric Circuits", "Magnetic Fields", "Electromagnetic Induction"]
          }
        ]
      },
      {
        id: "standardized-exams",
        label: "Standardized Exams",
        subjects: [
          {
            id: "mcat",
            label: "MCAT Physics & Chemistry",
            topics: ["Translational Motion", "Fluids", "Thermodynamics", "Electrochemistry", "Circuits", "Acid–Base Chemistry"]
          }
        ]
      },
      {
        id: "academic-olympiads",
        label: "Academic Olympiads",
        subjects: [
          {
            id: "amc",
            label: "AMC 8 / AMC 10",
            topics: ["Number Theory", "Algebra", "Geometry", "Counting & Probability"]
          },
          {
            id: "sci-oly",
            label: "Science Olympiad",
            topics: ["Experimental Design", "Anatomy & Physiology", "Chemistry Lab", "Physics Lab"]
          },
          {
            id: "phys-oly",
            label: "Physics Olympiad",
            topics: ["Advanced Mechanics", "Electromagnetism", "Waves & Optics", "Modern Physics"]
          },
          {
            id: "chem-oly",
            label: "Chemistry Olympiad",
            topics: ["Stoichiometry", "Thermodynamics", "Equilibrium", "Organic Chemistry"]
          }
        ]
      }
    ]
  },
  worksheets: {
    title: "Worksheets",
    // Structure is identical as per request
    grades: [] // Will replicate from notes in logic to keep file size smaller or just duplicate
  }
};
 academicData.worksheets.grades = JSON.parse(JSON.stringify(academicData.notes.grades));
