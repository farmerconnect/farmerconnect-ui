import { forwardRef, useCallback, useEffect } from 'react';
import Typography from '../Typography';
import { ConfirmationDialogProps, DialogProps, FeedbackDialogProps, OverlayProps } from './interfaces';
import * as S from './styles';
const Body = S.Body;
const Title = S.Title;
const Controls = S.Controls;
const Subtitle = S.Subtitle;
const Button = S.Button;

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  if (!props.show) return null;
  return <S.Overlay {...props} ref={ref} />;
});

const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props, ref) => {
  const { onEsc } = props;
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onEsc?.();
      }
    },
    [onEsc]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
    // eslint-disable-next-line
  }, []);
  return <S.Dialog {...props} ref={ref} open role="dialog" />;
});

export const iconVariants = {
  success: (
    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.6772 63.2728L31.5826 53.1783C31.0391 52.6335 30.3012 52.3274 29.5317 52.3274C28.7622 52.3274 28.0243 52.6335 27.4808 53.1783C26.3462 54.3128 26.3462 56.1456 27.4808 57.2801L39.6408 69.4401C40.7753 70.5746 42.6081 70.5746 43.7426 69.4401L74.5208 38.6619C75.6553 37.5274 75.6553 35.6946 74.5208 34.5601C73.9773 34.0154 73.2394 33.7092 72.4699 33.7092C71.7004 33.7092 70.9625 34.0154 70.419 34.5601L41.6772 63.2728Z"
        fill="#00E394"
      />
      <circle cx="51" cy="52" r="46.25" stroke="#00E394" stroke-width="3.5" />
    </svg>
  ),
  error: (
    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="51" cy="52" r="46.25" stroke="#FB2E4C" stroke-width="3.5" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.0296 64.7278C33.858 65.8994 33.858 67.7989 35.0296 68.9704C36.2011 70.142 38.1006 70.142 39.2722 68.9704L52.0002 56.2424L64.7283 68.9705C65.8999 70.142 67.7994 70.142 68.971 68.9705C70.1425 67.7989 70.1425 65.8994 68.971 64.7278L56.2429 51.9998L68.9707 39.272C70.1423 38.1004 70.1423 36.2009 68.9707 35.0293C67.7991 33.8577 65.8996 33.8577 64.728 35.0293L52.0002 47.7571L39.2725 35.0294C38.1009 33.8578 36.2014 33.8578 35.0298 35.0294C33.8583 36.2009 33.8583 38.1004 35.0298 39.272L47.7576 51.9998L35.0296 64.7278Z"
        fill="#FB2E4C"
      />
    </svg>
  ),
  warning: (
    <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="49" y="35" width="6" height="32" rx="3" fill="#AE8800" />
      <rect x="49" y="71" width="6" height="6" rx="3" fill="#AE8800" />
      <path
        d="M45.0718 14C48.151 8.66666 55.849 8.66667 58.9282 14L95.3013 77C98.3805 82.3333 94.5315 89 88.3731 89H15.6269C9.46853 89 5.61953 82.3333 8.69873 77L45.0718 14Z"
        stroke="#AE8800"
        stroke-width="3.5"
      />
    </svg>
  ),
};

const Feedback = forwardRef<HTMLDialogElement, FeedbackDialogProps>((props, ref) => {
  const { title = '', variant = 'success', children = null, controls } = props;

  return (
    <S.FeedbackDialog role="dialog" {...props} ref={ref} size="small">
      {iconVariants[variant]}
      <Typography variant="title3">{title}</Typography>
      <S.Body>
        <Typography variant="body">{children}</Typography>
      </S.Body>
      <S.Controls>{controls}</S.Controls>
    </S.FeedbackDialog>
  );
});

const Confirmation = forwardRef<HTMLDialogElement, ConfirmationDialogProps>((props, ref) => {
  const { title = '', children = null, controls } = props;

  return (
    <S.ConfirmationDialog role="dialog" {...props} ref={ref} size="small">
      <Typography variant="title2">{title}</Typography>
      <S.Body>
        <Typography variant="body">{children}</Typography>
      </S.Body>
      <S.Controls>{controls}</S.Controls>
    </S.ConfirmationDialog>
  );
});

const Modal = {
  Body,
  Title,
  Controls,
  Subtitle,
  Button,
  Overlay,
  Dialog,
  Feedback,
  Confirmation,
};

export default Modal;
