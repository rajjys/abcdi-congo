// Created by: Jonathan Idy
// Date: 10-05-25
// Description: This component is used to render rich text content from Hygraph.
// It uses the @graphcms/rich-text-react-renderer package to parse and display the rich text content.
// It also includes custom renderers for various HTML elements such as headings, paragraphs, lists, links, images, and more.
// // The component takes in the rich text content and title as props and renders them accordingly.
//title is not used in the component, but it can be used for alt text for images or other purposes.
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RichTextViewer = ({description, title}) => {
  return (
    <RichText
                        content={description.raw || {}} // Use the raw rich text content from Hygraph
                        renderers={{
                          h1: ({ children }) => <h1 className="text-4xl font-extrabold my-4">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
                          h4: ({ children }) => <h4 className="text-xl font-medium my-2">{children}</h4>,
                          p: ({ children }) => <p className="text-base leading-relaxed my-4">{children}</p>,
                          bold: ({ children }) => <strong className="font-bold">{children}</strong>,
                          italic: ({ children }) => <em className="italic">{children}</em>,
                          underline: ({ children }) => <u className="underline">{children}</u>,
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600 my-4"> {children} </blockquote>
                          ),
                          ul: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
                          li: ({ children }) => <li className="ml-4">{children}</li>,
                          a: ({ href, children }) => (
                            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" >{children}</Link>
                          ),
                          img: ({ src, alt }) => (
                            <Image src={src} alt={title} width={800} height={500} className="my-4 rounded-lg shadow-md" />),
                          code: ({ children }) => ( <pre className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto my-4"> <code>{children}</code> </pre>),
                          table: ({ children }) => (
                            <table className="table-auto border-collapse border border-gray-300 my-4 w-full">{children}</table>),
                          tableHead: ({ children }) => (<thead className="bg-gray-200">{children}</thead>),
                          tableBody: ({ children }) => <tbody>{children}</tbody>,
                          tableRow: ({ children }) => (<tr className="border-b border-gray-300">{children}</tr>),
                          tableCell: ({ children }) => (<td className="border border-gray-300 px-4 py-2">{children}</td>),
                          tableHeaderCell: ({ children }) => (<th className="border border-gray-300 px-4 py-2 font-bold">{children}</th>),
                          embed: ({ node }) => {
                            if (node.mimeType.startsWith('video/')) {
                              return (
                                <video controls className="my-4 rounded-lg shadow-md" src={node.url} />);
                            }
                            if (node.mimeType.startsWith('audio/')) {
                              return (
                                <audio controls className="my-4" src={node.url}/>);
                            }
                            return null;
                          },
                        }}
                      />
  )
}

export default RichTextViewer
