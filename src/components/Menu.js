import React from "react";

export const Menu = ({ match }) => {
  const {
    params: { num }
  } = match;

  return (
    <section>
      <h2>I'm the Menu {num}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe
        pariatur impedit nulla earum, nisi aperiam cum, sequi tenetur placeat
        repellendus nostrum esse quisquam est ut omnis dicta at a.
      </p>
    </section>
  );
};
