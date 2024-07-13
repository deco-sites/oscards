import { Member } from "site/loaders/Members.tsx";

interface PickerProps {
  members?: Member[];
}

export default function Picker({ members }: PickerProps) {
  return (
    <div class="h-80">
      {members && members.map((m) => {
        return <p class="text-black">{m.name}</p>;
      })}
    </div>
  );
}
