import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectTest } from "../../state/test/test.reselector";

const Question = ({ test }) => {
    let question = '';
    const { docs } = test;
    if (docs && docs.length > 0) {
        question = docs[0].question
    }
    return (
        <article className="prose lg:prose-xl">
            <ReactMarkdown children={question}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            />
        </article>
    )
}

const mapStateToProp = createStructuredSelector({
    test: selectTest
})

export default connect(mapStateToProp)(Question);