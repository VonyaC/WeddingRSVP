import React from 'react'
import { useParams } from 'react-router'

interface Props {
    
}

export const Invited = (props: Props) => {
    const { code } = useParams<{code: string}>();
    return (
        <div>
            {code}
        </div>
    )
}
