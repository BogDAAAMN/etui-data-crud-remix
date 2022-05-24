import { Outlet } from "@remix-run/react";
import SidebarLayout from "~/components/SidebarLayout";

export default function Documents() {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
}
