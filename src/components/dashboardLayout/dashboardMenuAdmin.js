import usersIcon from "../../assets/icons/users.svg";
import folderIcon from "../../assets/icons/folder.svg";
import paymenticon from "../../assets/icons/payment.svg";
import profileIcon from "../../assets/icons/profileIcon.svg";
import permissionIcon from "../../assets/icons/permission.svg";

export const dashboardMenuAdmin = [
  {
    title: "Manage App Users",
    icon: usersIcon,
    linkTo: "manage-app-users",
  },
  {
    title: "Manage Folder Access",
    icon: folderIcon,
    linkTo: "manage-folder-action",
  },
  {
    title: "Billing and Payments",
    icon: paymenticon,
    linkTo: "billing-and-payments",
  },
  {
    title: "Company Profile",
    icon: profileIcon,
    linkTo: "company-profile",
  },
  {
    title: "Permissions",
    icon: permissionIcon,
    linkTo: "permissions",
  },
  {
    title: "help",
    linkTo: "help",
  },
];
