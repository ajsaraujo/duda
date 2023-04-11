import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

export function Toast(props: {
  message: string;
  visible: boolean;
  okButtonLabel: string;
  onClickOk: () => void;
}) {
  const { message, visible, okButtonLabel, onClickOk } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={1000}
      classNames="toast-transition"
    >
      <div className="toast" ref={nodeRef}>
        <p>{message}</p>
        <button className="text-button toast-ok-button" onClick={onClickOk}>
          {okButtonLabel}
        </button>
      </div>
    </CSSTransition>
  );
}
