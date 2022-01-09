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
    href: "https://www.linkedin.com/in/adam-zanon",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/adamzanon",
  },
];

export default function Socials() {
  const anchors = links.map((link) => (
    <a key={link.text} className="hover:text-blue-400" href={link.href}>
      {link.text}
    </a>
  ));
  return <div className="flex gap-5">{anchors}</div>;
}
