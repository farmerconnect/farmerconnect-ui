import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import reactStringReplace from 'react-string-replace';
import { IFileUpload } from './interfaces';
import UploadFileIcon from '../Icons/UploadFile';

import * as S from './styles';
import colors from '../../styles/colors';

const FileUpload = ({ 
  maxFiles,
  maxSize,
  accept,
  slim = false,
  dragFilesText = 'Drag files here or <a>browse computer</a>',
  uploadFilesUpToText = 'Upload files up to {{maxSize}}MB.',
  acceptedFilesText = 'Accepted files: {{accept}}.',
  onUploadFiles,
  onAcceptedFiles,
  onRejectedFiles,
  ...props
}: IFileUpload) => {
  const maxFileSize = maxSize * 1000000;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject, 
    open
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles: maxFiles,
    maxSize: maxFileSize,
    accept: accept,
    onDrop: files => {
      setIsDragging(false);
      onUploadFiles(files);
    },
    onDropAccepted: acceptedFiles => { 
      onAcceptedFiles(acceptedFiles);
    },
    onDropRejected: rejectedFiles => { 
      onRejectedFiles(rejectedFiles);
    },
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });
 
  return (
    <section className="container">
      <S.Container {...getRootProps({ isDragActive, isDragAccept, isDragReject, isDragging, slim })}>
        <input {...getInputProps()} />
        <UploadFileIcon 
          color={colors.fc_green}
          slim={slim}
        />
        <S.Span>
          {reactStringReplace(dragFilesText, /<[^<>]+>/g, (match) => (
            <S.LinkButton variant="link" onClick={open}>{match}</S.LinkButton>
          ))}
        </S.Span>
      </S.Container> 
      <S.Helper>
        {slim && (
          <div>
            {uploadFilesUpToText.replace('{{maxSize}}', `${maxSize}`)} {acceptedFilesText.replace('{{accept}}', `${accept}`)}
          </div>
        )}
        {!slim && (
          <>
            <div>
              {uploadFilesUpToText.replace('{{maxSize}}', `${maxSize}`)}
            </div>
            <div>
              {acceptedFilesText.replace('{{accept}}', `${accept}`)}
            </div>
          </>
        )}
      </S.Helper>
    </section>
  );
};

export default FileUpload;
