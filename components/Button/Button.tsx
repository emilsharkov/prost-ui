import { combineClasses } from "@/utils/combine";
import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native"

export interface ButtonProps {
    styling?: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    children?: React.ReactNode;
    onPress?: (e: GestureResponderEvent) => void;
}

//https://www.nativewind.dev/guides/theme-values

const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
}

const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
}

const Button = (props: ButtonProps) => {
    const {styling,children,variant,size,onPress} = props
    const variantClass = variant ? variantClasses[variant]: variantClasses['default']
    const sizeClass = size ? sizeClasses[size]: sizeClasses['default']

    return (
        <>
            <TouchableOpacity
                className={combineClasses(styling,variantClass,sizeClass,'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background')}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        </>
    )
}

export default Button