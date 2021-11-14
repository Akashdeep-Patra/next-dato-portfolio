import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import Button from '../../Button';
export interface CodeBlockModuleProp {
  heading: string;
  codeBlock: string;
  marginTop: boolean;
  marginBottom: boolean;
  language:
    | 'abap'
    | 'actionscript'
    | 'ada'
    | 'arduino'
    | 'autoit'
    | 'bash'
    | 'c' //
    | 'clojure'
    | 'cs'
    | 'c++'
    | 'cpp'
    | 'coffeescript'
    | 'csharp'
    | 'css'
    | 'cuda'
    | 'd'
    | 'dart'
    | 'delphi'
    | 'elixir'
    | 'elm'
    | 'erlang'
    | 'fortran'
    | 'foxpro'
    | 'fsharp'
    | 'go'
    | 'graphql'
    | 'gql'
    | 'groovy'
    | 'haskell'
    | 'haxe'
    | 'html'
    | 'java'
    | 'javascript'
    | 'json'
    | 'julia'
    | 'jsx'
    | 'js'
    | 'kotlin'
    | 'latex'
    | 'lisp'
    | 'livescript'
    | 'lua'
    | 'markup'
    | 'mathematica'
    | 'makefile'
    | 'matlab'
    | 'objectivec'
    | 'objective-c'
    | 'objective-j'
    | 'objectpascal'
    | 'ocaml'
    | 'octave'
    | 'perl'
    | 'php'
    | 'powershell'
    | 'prolog'
    | 'puppet'
    | 'python'
    | 'qml'
    | 'r'
    | 'racket'
    | 'restructuredtext'
    | 'rest'
    | 'ruby'
    | 'rust'
    | 'sass'
    | 'less'
    | 'scala'
    | 'scheme'
    | 'shell'
    | 'smalltalk'
    | 'sql'
    | 'standardml'
    | 'sml'
    | 'swift'
    | 'tcl'
    | 'tex'
    | 'text'
    | 'tsx'
    | 'ts'
    | 'typescript'
    | 'vala'
    | 'vbnet'
    | 'verilog'
    | 'vhdl'
    | 'xml'
    | 'xquery';
}
const CodeBlockModule: React.FC<CodeBlockModuleProp> = ({
  heading,
  codeBlock,
  language = 'javascript',
}) => {
  const [isCopied, setIsCopied] = useState(false);

  //copy to the clipboard
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeBlock);
    setIsCopied(true);
  }, [codeBlock]);

  // timer for reset
  useEffect(() => {
    const timer = setInterval(() => {
      setIsCopied(false);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [isCopied]);

  return (
    <motion.div>
      <motion.h1 className='mt-10 mb-5 text-xl font-bold'>{heading}</motion.h1>
      <motion.div className='relative'>
        <Button
          className='absolute top-[10px] right-[10px]'
          onClick={handleCopy}
        >
          {isCopied ? 'Copied' : 'Copy'}
          {isCopied && <IoCheckmarkDoneCircleSharp size={20} />}
        </Button>
        <CodeBlock
          customStyle={{ borderRadius: '6px', padding: '10px' }}
          preTag='div'
          text={codeBlock}
          language={language}
          showLineNumbers={true}
          startingLineNumber={1}
          theme={dracula}
          wrapLongLines
        />
      </motion.div>
    </motion.div>
  );
};

export default CodeBlockModule;
