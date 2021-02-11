import React,{useState} from 'react';

import CodeIcon from '@material-ui/icons/Code';
import AceEditor from 'react-ace';
import { Dropdown } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setLanguage,setTheme } from '../../redux/codeDetails/codeDetails.action';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-assembly_x86';
import 'ace-builds/src-noconflict/mode-batchfile';
import 'ace-builds/src-noconflict/mode-cobol';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-css';

import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-django';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/mode-ejs';
import 'ace-builds/src-noconflict/mode-fortran';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/mode-livescript';
import 'ace-builds/src-noconflict/mode-matlab';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-pgsql';
import 'ace-builds/src-noconflict/mode-nginx';

import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-powershell';
import 'ace-builds/src-noconflict/mode-scala';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-scss';

import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-markdown';

import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/snippets/ruby';
import 'ace-builds/src-noconflict/snippets/rust';
import 'ace-builds/src-noconflict/snippets/swift';
import 'ace-builds/src-noconflict/snippets/perl';
import 'ace-builds/src-noconflict/snippets/c_cpp';
import 'ace-builds/src-noconflict/snippets/assembly_x86';
import 'ace-builds/src-noconflict/snippets/batchfile';
import 'ace-builds/src-noconflict/snippets/cobol';
import 'ace-builds/src-noconflict/snippets/csharp';
import 'ace-builds/src-noconflict/snippets/css';

import 'ace-builds/src-noconflict/snippets/dart';
import 'ace-builds/src-noconflict/snippets/django';
import 'ace-builds/src-noconflict/snippets/dockerfile';
import 'ace-builds/src-noconflict/snippets/ejs';
import 'ace-builds/src-noconflict/snippets/fortran';
import 'ace-builds/src-noconflict/snippets/golang';
import 'ace-builds/src-noconflict/snippets/graphqlschema';
import 'ace-builds/src-noconflict/snippets/handlebars';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/snippets/kotlin';
import 'ace-builds/src-noconflict/snippets/latex';
import 'ace-builds/src-noconflict/snippets/livescript';
import 'ace-builds/src-noconflict/snippets/matlab';
import 'ace-builds/src-noconflict/snippets/mysql';
import 'ace-builds/src-noconflict/snippets/pgsql';
import 'ace-builds/src-noconflict/snippets/nginx';

import 'ace-builds/src-noconflict/snippets/php';
import 'ace-builds/src-noconflict/snippets/powershell';
import 'ace-builds/src-noconflict/snippets/scala';
import 'ace-builds/src-noconflict/snippets/sass';
import 'ace-builds/src-noconflict/snippets/scss';

import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/snippets/markdown';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-searchbox';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';

import './CodeEditor.styles.css';
const CodeEditor = ({sendCode, code, setCode, language, theme,setLanguage,setTheme}) => {

     const langList = [
        'Assembly_x86',
        'Batchfile',
        'C',
        'C++',
        'Cobol',
        'Csharp',
        'CSS',
        'Dart',
        'Django',
        'Dockerfile',
        'EJS',
        'Fortran',
        'Golang',
        'GraphQLSchema',
        'Handlebars',
        'HTML',
        'JSON',
        'Java',
        'Javascript',
        'Kotlin',
        'Latex',
        'Livescript',
        'Matlab',
        'MySQL',
        'Markdown',
        'NGINX',
        'PgSQL',
        'Perl',
        'Python',
        'PHP',
        'Powershell',
        'Ruby',
        'Rust',
        'Swift',
        'Scala',
        'SASS',
        'SCSS',
        'Typescript',
    ];

    const themes = [
        'Monokai',
        'Github',
        'Tomorrow',
        'Kuroir',
        'Twilight',
        'Xcode',
        'Textmate',
        'Solarized_dark',
        'Solarized_light',
        'Terminal',
    ];
    
    const [showEditor, setShowEditor] = useState(false);

    const codeIconClick = () => {
        setShowEditor(!showEditor);
    }


    return( 
        <div 
            className="CodeEditor">
            <span 
                className="Editor">
                {
                    showEditor ?
                    (
                        <div className="EditorPopup">
                            <div className="editorOptions">
                                <div>
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle
                                            className="dropbtn"
                                            id="dropdown-basic"
                                        >
                                            {language}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="dropdown-content">
                                            {langList.map((lang) => (
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    onClick={(e) => setLanguage(e.target.text)}
                                                >
                                                    {lang}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle
                                            className="dropbtn"
                                            id="dropdown-basic"
                                        >
                                            {theme}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="dropdown-content">
                                            {themes.map((theme) => (
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    onClick={(e) => setTheme(e.target.text)}
                                                >
                                                    {theme}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                                <AceEditor
                                    value={code}
                                    onChange={setCode}
                                    mode={language === 'C' || language === 'C++' ? 'c_cpp' : language.toLowerCase()}
                                    theme={theme.toLowerCase()}
                                    name="coding-space"
                                    highlightActiveLine
                                    showGutter
                                    fontSize={18}
                                    showPrintMargin={false}
                                    editorProps={{ $blockScrolling: false }}
                                    setOptions={{
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: true,
                                        enableSnippets: true,
                                        showLineNumbers: true,
                                        tabSize: 2,
                                    }}
                                    />
                        
                           <button 
                                    type="button"
                                    className ="sendCode"
                                    onClick={sendCode}>
                                    SEND CODE
                                </button>
                        </div>
                    )
                    : null
                }
            </span>
            <span className="codeIcon">
                <CodeIcon
                    fontSize="large"
                    style={{ color: "white" }}
                    onClick={codeIconClick}
                />
            </span>    
        </div>
    )
}

const mapStateToProps = state => ({
    theme : state.codeDetails.theme,
    language : state.codeDetails.language,
});

const mapDispatchToProps = (dispatch) => ({
    setTheme: theme => dispatch(setTheme(theme)),
    setLanguage: language => dispatch(setLanguage(language))
})
export default connect(mapStateToProps,mapDispatchToProps)(CodeEditor);