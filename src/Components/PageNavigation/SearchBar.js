import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Site search bar */
const SearchBarCont = styled.div`
    input {
        font-family: 'Host Grotesk', sans-serif;
        font-size: 16px;
        color: white;
        border: 4px solid rgb(19, 51, 29);
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.363); 
        width: 70%;
        padding: 8px 12px;
        margin: 8px 0;
        transition: all 0.3s ease;
        ::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }
`;

/* Mark styling */
const MarkStyle = styled.mark`
    background-color: #ffeb3b;
    color: black;
    padding: 0 2px;
    border-radius: 2px;
`;

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Function for page search with better React compatibility
    const search = (event) => {
        event.preventDefault();
        
        const keyword = searchTerm.trim();
        if (keyword === "") return;

        try {
            // Use a safer approach with querySelector instead of querySelectorAll + forEach
            const contentArea = document.querySelector('.App');
            if (!contentArea) return;

            // Clear previous highlights
            const marks = document.querySelectorAll('mark');
            marks.forEach(mark => {
                if (mark.parentNode) {
                    const text = document.createTextNode(mark.textContent || '');
                    mark.parentNode.replaceChild(text, mark);
                }
            });
            
            // Create a TreeWalker to safely navigate text nodes
            const walker = document.createTreeWalker(
                contentArea,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            const matches = [];
            let node;
            const regex = new RegExp(keyword, 'gi');
            
            // Find text nodes with matches
            while (node = walker.nextNode()) {
                // Skip script and style tags
                const parentTagName = node.parentNode.tagName;
                if (parentTagName === 'SCRIPT' || parentTagName === 'STYLE' || 
                    node.parentNode.closest('.searchInput')) {
                    continue;
                }
                
                const text = node.nodeValue;
                if (text.match(regex)) {
                    matches.push(node);
                }
            }
            
            // Highlight matches
            for (let i = 0; i < matches.length; i++) {
                const node = matches[i];
                const text = node.nodeValue;
                const parts = text.split(regex);
                
                if (parts.length <= 1) continue;
                
                const fragment = document.createDocumentFragment();
                let matchCount = 0;
                
                for (let j = 0; j < parts.length; j++) {
                    // Add text part
                    if (parts[j] !== "") {
                        fragment.appendChild(document.createTextNode(parts[j]));
                    }
                    
                    // Add highlighted match (except after last part)
                    if (j < parts.length - 1) {
                        const matchText = text.match(regex)[matchCount++];
                        const mark = document.createElement('mark');
                        mark.textContent = matchText;
                        fragment.appendChild(mark);
                    }
                }
                
                // Replace the original node with our fragment
                if (node.parentNode) {
                    node.parentNode.replaceChild(fragment, node);
                }
            }
            
            // Scroll to first match
            const firstMatch = document.querySelector('mark');
            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } catch (error) {
            console.error("Search error:", error);
        }
    };

    return (
        <form onSubmit={search}>
            <SearchBarCont>
                <input 
                    type="text" 
                    id="keyword" 
                    className="searchInput" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchBarCont>
        </form>
    );
};

export default SearchBar;
