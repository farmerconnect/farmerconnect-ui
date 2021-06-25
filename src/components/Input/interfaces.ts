import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean | string;
	success?: boolean;
}
