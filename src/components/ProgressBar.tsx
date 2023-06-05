import ProgressBar from 'react-bootstrap/ProgressBar';

interface ProgressBarCustomProps {
    now: number;
}

export const ProgressBarCustom = (props: ProgressBarCustomProps) => {
  return <ProgressBar now={props.now} />;
}

