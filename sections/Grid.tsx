import { Member } from "site/loaders/Members.tsx";

interface GridProps {
  members?: Member[];
}

export default function Grid({ members }: GridProps) {
  return (
    <>
      {members && members.map((m) => {
        return <p>{m.name}</p>;
      })}
    </>
  );
}
