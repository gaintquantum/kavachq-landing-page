"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import CursorField from "./CursorField";
import FaqFloatingButton from "@/components/ui/FaqFloatingButton";
export default function SiteChrome() {
  if (usePathname() === "/pricing") return null;
  return <><CursorField /><FaqFloatingButton /><Footer /></>;
}
