export function Toast(props: {
  message: string;
  visible: boolean;
  onClickOk: () => void;
}) {
  const { message, visible, onClickOk } = props;

  if (!visible) {
    return null;
  }

  return (
    <div className="toast">
      <p>{props.message}</p>
      <button className="text-button" onClick={onClickOk}>
        Tá bem
      </button>
    </div>
  );
}
