import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {
  return (
    <CardButton className="journal-add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 98 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M97.9999 44.7391H53.2608V0H44.7391V44.7391H0V53.2608H44.7391V97.9999H53.2608V53.2608H97.9999V44.7391Z"
          fill="#fff"
        />
      </svg>
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
