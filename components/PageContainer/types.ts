import { CSSProperties, ReactNode } from "react";

export interface PageContainerProps{
    style?:CSSProperties
    children?:ReactNode| ReactNode[]
    header?:ReactNode
    title?:string //for default header
}