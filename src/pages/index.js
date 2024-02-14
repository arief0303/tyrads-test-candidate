import React from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Body from "@/components/Body";

export default function index() {
  return (
    <>
      <Sidebar />
      <Stats />
      <Header />
      <Body />
    </>
  );
}
