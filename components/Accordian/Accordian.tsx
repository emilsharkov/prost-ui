import { View } from "react-native"
import { AccordianItemProps } from "./AccordianItem"
import React from "react"

export interface AccordianProps {
    children: React.ReactElement<AccordianItemProps>[] | React.ReactElement<AccordianItemProps>
}

const Accordian = (props: AccordianProps) => {
    const {children} = props

    return (
        <View
            className={` border-b border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
            {React.Children.map(children, (child, index) => (
                <React.Fragment key={index}>
                    {child}
                </React.Fragment>
            ))}
        </View>
    )
}

export default Accordian