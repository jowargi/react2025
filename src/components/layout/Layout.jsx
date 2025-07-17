import { Fragment } from "react";
import ScrollProgressBar from "./scrollProgressBar/ScrollProgressBar";

export default function Layout({ children, header, footer, sidebar }) {
  return (
    <>
      <ScrollProgressBar />
      <header>{header}</header>
      <main>{children}</main>
      <aside>{sidebar}</aside>
      <footer>{footer}</footer>
    </>
  );
}
