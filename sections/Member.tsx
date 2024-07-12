interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Member({ name = "Capy" }: Props) {
  return <div>Hello {name}</div>;
}
