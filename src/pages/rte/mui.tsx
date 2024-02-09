import MUIRichTextEditor from 'mui-rte';

/**
 * triggerChar ":", followed by text like face will show the
 * emojis dropdown
 */
const emojis = [
  {
    keys: ['face', 'grin'],
    value: '😀',
    content: '😀',
  },
  {
    keys: ['face', 'joy'],
    value: '😂',
    content: '😂',
  },
  {
    keys: ['face', 'sweat'],
    value: '😅',
    content: '😅',
  },
];

/* https://www.npmjs.com/package/mui-rte#api */
export default function MuiRte() {

  /* save button is present at the end of the default set of controls */
  function handleOnSave(rteValue: string) {
    console.log(rteValue);
  }
  return (
    <MUIRichTextEditor
      label="Start typing..."
      autocomplete={{
        strategies: [
          {
            items: emojis,
            triggerChar: ':',
          },
        ],
      }}
      toolbarButtonSize="small"
      onSave={handleOnSave}
    />
  );
}
