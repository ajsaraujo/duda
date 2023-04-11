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
      <p>{message}</p>
      <button className="text-button toast-ok-button" onClick={onClickOk}>
        Tá bem
      </button>
    </div>
  );
}
