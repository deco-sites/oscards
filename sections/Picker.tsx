import { Member } from "site/loaders/Members.tsx";

interface PickerProps {
  members?: Member[];
}

export default function Picker({ members }: PickerProps) {
  return (
    <>
      {members && members.map((m) => {
        <p>{m.name}</p>;
      })}
    </>
  );
}
