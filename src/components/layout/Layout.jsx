import React from "react";
import { Fragment } from "react";

export default function Layout({
  children,
  header = <div>HEADER</div>,
  footer = <div>FOOTER</div>,
  sidebar = <div>SIDEBAR</div>,
}) {
  return (
    <Fragment>
      <header>{header}</header>
      <main>{children}</main>
      <aside>{sidebar}</aside>
      <footer>{footer}</footer>
    </Fragment>
  );
}
