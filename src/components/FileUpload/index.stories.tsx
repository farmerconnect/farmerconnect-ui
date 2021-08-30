import { Story, Meta } from '@storybook/react/types-6-0';
import { IFileUpload } from './interfaces';
import FileUpload from '.';
import { useState } from 'react';

export default {
	title: 'FileUpload',
	component: FileUpload,
	argTypes: {},
} as Meta;

const Template: Story<IFileUpload> = (args) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const handleUpload = (acceptedFiles: File[]) =>
    setFileNames(acceptedFiles.map(file => file.name));
    
  return (
    <>
      <FileUpload {...args} onUploadFiles={handleUpload} />

      <div style={{ paddingTop: '1rem' }}>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  maxSize: 10,
  accept: 'image/*, .pdf',
  onAcceptedFiles: () => {},
  onRejectedFiles: () => {}
};