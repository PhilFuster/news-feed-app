import { React } from 'react';

export default function Post({ title, body, id }) {
  return (
    <>
      <section key={id}>
        <h1>{title}</h1>
        <p>{body}</p>
      </section>
    </>
  );
}
