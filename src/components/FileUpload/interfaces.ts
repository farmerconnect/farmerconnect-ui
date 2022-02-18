import { FileRejection } from 'react-dropzone';

export interface IFileUpload {
  maxFiles: number;
  maxSize: number;
  accept: string;
  slim?: boolean;
  dragFilesText?: string;
  uploadFilesUpToText?: string;
  acceptedFilesText?: string;
  onUploadFiles: (files: File[]) => void;
  onAcceptedFiles: (acceptedFiles: File[]) => void;
  onRejectedFiles: (rejectedFiles: FileRejection[]) => void;
}
