interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function DropArea({ name = "Capy" }: Props) {
  return <div>Hello {name}</div>
}