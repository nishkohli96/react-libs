/**
 * For complete list of features, check
 * 
 * https://ckeditor.com/docs/ckeditor5/latest/features/index.html
 */

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Essentials,
  Undo,
  Bold,
  Italic,
  Underline,
  Heading,
  Font,
  Link,
  List,
  BlockQuote,
  CodeBlock,
  Clipboard,
  FindAndReplace,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  LinkImage,
  Markdown,
  MediaEmbed,
  Mention,
  SelectAll,
  ShowBlocks,
  Table,
  TableToolbar,
  Alignment,
  WordCount
} from 'ckeditor5';
import { EventInfo } from '@ckeditor/ckeditor5-utils';
import 'ckeditor5/ckeditor5.css';

/**
 * Images portion isnt working as expected.
 *
 * https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
 */

export default function CkEditorAdvanced() {
  function handleChange(_: EventInfo, editor: ClassicEditor) {
    /**
     * Value will be of string type like,
     * "<p>Hello from CKEditor&nbsp;5! fffefef</p>"
     *
     * This value can then be set as dangerouslySetInnerHTML
     * if needed.
     */
    const content = editor.getData();
    console.log('content: ', content);
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      onChange={handleChange}
      config={{
        plugins: [
          Essentials,
          Undo,
          Bold,
          Italic,
          Underline,
          Heading,
          Font,
          Link,
          List,
          BlockQuote,
          Mention,
          CodeBlock,
          Clipboard, // not sure if working, unable to dragNdrop image
          FindAndReplace,
          HorizontalLine,
          Image,
          ImageToolbar,
          ImageCaption,
          ImageStyle,
          ImageResize,
          LinkImage,
          Markdown,
          MediaEmbed,
          Mention,
          SelectAll,
          ShowBlocks,
          Table,
          TableToolbar,
          Alignment,
          WordCount
        ],
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'blockQuote',
            'codeBlock',
            'clipboard',
            'findAndReplace',
            'horizontalLine',
            '|',
            'insertImage',
            'mediaEmbed',
            'selectAll',
            'showBlocks',
            'insertTable',
            'alignment'
          ]
        },
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph'
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3'
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4'
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5'
            },
            {
              model: 'heading6',
              view: 'h6',
              title: 'Heading 6',
              class: 'ck-heading_heading6'
            }
          ]
        },
        image: {
          toolbar: [
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'linkImage'
          ],
          insert: {
            integrations: ['upload', 'assetManager', 'url'],
            type: 'auto'
          }
        },
        mention: {
          feeds: [
            {
              marker: '@',
              feed: [
                '@Barney',
                '@Lily',
                '@Marry Ann',
                '@Marshall',
                '@Robin',
                '@Ted'
              ],
              minimumCharacters: 1
            }
          ]
        },
        table: {
          contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        },
        wordCount: {
          onUpdate: stats => {
            console.log( `Characters: ${ stats.characters }\nWords: ${ stats.words }` );
          }
        }
      }}
    />
  );
}
