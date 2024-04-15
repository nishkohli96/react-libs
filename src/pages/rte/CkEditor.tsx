import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { EventInfo } from '@ckeditor/ckeditor5-utils';

export default function CkEditor() {
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
        }
      }}
    />
  );
}
