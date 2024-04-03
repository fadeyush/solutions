export interface CheckboxProps {
    name: string;
    title?: string;
    isChecked: boolean;
    changeChecked: (e: React.ChangeEvent<HTMLInputElement>) =>void;
}