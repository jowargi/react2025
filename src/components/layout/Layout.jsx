import { Fragment } from "react";

export default function Layout({ children, header, footer, sidebar }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <aside>{sidebar}</aside>
      <footer>{footer}</footer>
    </>
  );
}
