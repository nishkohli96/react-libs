import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

/* Custom Plugins */
import { CodeBlock, CodeBlockEditing } from '@ckeditor/ckeditor5-code-block';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function CkEditorAdvanced() {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      config={{
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic
        ],
        toolbar: ['bold', 'italic']
      }}
    />
  );
}
