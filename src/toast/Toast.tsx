export function Toast(props: {
  message: string;
  visible: boolean;
  okButtonLabel: string;
  onClickOk: () => void;
}) {
  const { message, visible, okButtonLabel, onClickOk } = props;

  if (!visible) {
    return null;
  }

  return (
    <div className="toast">
      <p>{message}</p>
      <button className="text-button toast-ok-button" onClick={onClickOk}>
        {okButtonLabel}
      </button>
    </div>
  );
}
