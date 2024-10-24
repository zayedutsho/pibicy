import folderIcon from "../../assets/images/dashboard/briefcaseDark.svg";
import { useEffect, useState } from "react";

export const DashboardMenuUser = () => {
  const [dashboardMenu, setDashboardMenu] = useState([]);

  // Fetch dynamic project names from localStorage and update the dashboard menu
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const formattedProjects = storedProjects.map((project) => ({
      title: project.title, // Use stored project title
      icon: folderIcon,     // Use a default or specific icon
      linkTo: `/${project.title}`, // Define a unique link for each project
    }));

    // Set the dashboard menu only with dynamic projects
    setDashboardMenu(formattedProjects);
  }, []);

  return dashboardMenu; // Return the dynamic project menu directly
};
