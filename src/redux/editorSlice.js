import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
  name: "editor",
  initialState: {
    content: `
# Heading 1
## Heading 2
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
  `,
  },
  reducers: {
    updateContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { updateContent } = editorSlice.actions;

export default editorSlice.reducer;
