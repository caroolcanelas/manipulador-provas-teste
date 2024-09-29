import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './Tinymce.css';

export default function Tinymce() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSubmit = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      // Aqui você pode enviar o conteúdo para onde desejar, como uma API ou servidor
      console.log("Conteúdo do editor enviado:", content);
      alert("Conteúdo enviado!"); // Exemplo de visualização
    }
  };

  return (
    <>
      <Editor
        apiKey='v0fbmrviw6zea6d7joc76hrpdjmp6ztj7lahpo0skcixpnj1'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
      <button onClick={handleSubmit}>Enviar Conteúdo</button>
    </>
  );
}
