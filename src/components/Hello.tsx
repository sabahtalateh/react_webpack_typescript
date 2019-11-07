import * as React from 'react'
import {useRef, useState} from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

interface Props {
    compiler: string
    framework: string
}

export const Hello: React.FunctionComponent<Props> = ({compiler, framework}) => {
    const [count, setCount] = useState<number>(5);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <h1>Hello from {compiler} and {framework}!
            <input type="text" ref={inputRef}/>
        </h1>
    )
};