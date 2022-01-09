interface Link {
  text: string;
  href: string;
  img?: null;
}

const links: Link[] = [
  {
    text: "GitHub",
    href: "https://github.com/AdamZed",
  },
  {
    text: "LinkedIn",
    href: "www.linkedin.com/in/adam-zanon",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/adamzanon",
  },
];

export default function Socials() {
  return (
    <div className="flex gap-5">
      {links.map((l) => (
        <a className="hover:text-blue-400" href={l.href}>
          {l.text}
        </a>
      ))}
    </div>
  );
}
