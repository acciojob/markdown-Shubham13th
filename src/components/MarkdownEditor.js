import React, { useState, useEffect } from "react";

import "./styles.css"

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState("");
    const [previewText, setPreviewText] = useState("");
    const [loading, setLoading] = useState(false);

    // useEffect for live preview update
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setPreviewText(markdownText);
            setLoading(false);
        }, 100); // small delay for smoother updates

        return () => clearTimeout(timer);
    }, [markdownText]);

    const handleChange = (e) => {
        setMarkdownText(e.target.value);
    };

   return (
  <div className="main">
    {/* Markdown Input */}
    <textarea
      className="textarea"
      placeholder="Enter markdown here..."
      value={markdownText}
      onChange={handleChange}
    />

    {/* Loading Indicator */}
    {loading && <div className="loading">Loading preview...</div>}

    {/* Markdown Preview */}
    <div className="preview">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {previewText}
      </ReactMarkdown>
    </div>
  </div>
);

};

export default MarkdownEditor;
