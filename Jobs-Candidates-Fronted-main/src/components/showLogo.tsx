import React, { useEffect } from 'react';

interface getAllProps {
    imgB: string | unknown
}

export default function Example({ imgB }: getAllProps) {

    return <img src={`${imgB}`} />
}