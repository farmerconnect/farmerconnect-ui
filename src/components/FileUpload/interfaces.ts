import { FileRejection } from 'react-dropzone';

export interface IFileUpload {
  maxFiles: number;
  maxSize: number;
  accept: string;
  slim?: boolean;
  onUploadFiles: (files: File[]) => void;
  onAcceptedFiles: (acceptedFiles: File[]) => void;
  onRejectedFiles: (rejectedFiles: FileRejection[]) => void;
}
