/* eslint-disable jsx-a11y/no-redundant-roles */
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarLayout from "~/components/SidebarLayout";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

export default function Documents() {
  return (
    <SidebarLayout>
      <div className="flex flex-col items-center justify-center">
        <object
          data="http://africau.edu/images/default/sample.pdf"
          type="application/pdf"
          width="100%"
          height="700px"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="http://africau.edu/images/default/sample.pdf">
              {" "}
              to the PDF!
            </a>
          </p>
        </object>
      </div>
    </SidebarLayout>
  );
}
