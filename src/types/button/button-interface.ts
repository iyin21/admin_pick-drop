export interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "primary"
        | "blue"
        | "gray"
        | "yellow"
        | "red"
        | "border"
        | "clear"
        | "light-blue"
        | "green"
    size?: "small" | "normal"
    type?: "button" | "submit" | "reset"
    children?: React.ReactNode
    className?: string
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
}
