interface FilterButtonProps {
  name: string;
  isPressed: boolean;
  setFilter: (name: string) => void;
}

export default function FilterButton(props: FilterButtonProps) {
  return (
    <button
      className='btn toggle-btn'
      type='button'
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className='visually-hidden'>Show </span>
      <span>{props.name}</span>
      <span className='visually-hidden'> tasks</span>
    </button>
  );
}
