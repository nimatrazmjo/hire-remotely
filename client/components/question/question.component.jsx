import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { connect, useSelector } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectTest } from "../../state/test/test.reselector";

const Question = () => {
    const { test } = useSelector(selectTest);
    const question = test?.data?.question;
    return (
        <article className="prose lg:prose-xl">
            <ReactMarkdown children={question}
                remarkPlugins={[remarkMath]}
                // rehypePlugins={[rehypeKatex]}
            />
        </article>
    )
}

export default Question;