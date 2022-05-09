import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import { useSelector } from "react-redux";
import { selectTest } from "../../state/test/test.reselector";
import { useState } from 'react';

const Question = () => {
    const { test } = useSelector(selectTest);
    const question = test?.data?.question;
    const [questionMarkdownText, setQuestionMarkdownText] = useState("### Find All Palindromes\n\n A string of letters is a palindrome if it is identical to it's reversion\n For example words **level** or **madam** are palindroms\n\n #### Function Description\n\n Write a function which returns all palindromes contained in string *inputString* sorted from longest palindrome to shortest one\n\n#### Example input\n\n```\nmadam\n```\n\n#### Example output\n\n```\nmadam\nada\n```");

    return (
        <article className="prose lg:prose-xl">
            <ReactMarkdown children={questionMarkdownText}
                remarkPlugins={[remarkMath]}
            />
        </article>
    )
}

export default Question;