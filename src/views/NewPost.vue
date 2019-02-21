<template>
  <section class="editorData">
    <label for="title">Title</label>
    <input
      type="text"
      name="title"
      v-model="postData.title"
      placeholder="Enter the title of your post"
    >
    <input
      type="text"
      name="url"
      v-model="postData.url"
      placeholder="Enter the identfier for your post"
    >
    <ckeditor :editor="editor" v-model="postData.content" :config="editorConfig"></ckeditor>
    <button @click="addPost">Check</button>
  </section>
</template>

<script>
import ClassicEditor from "@malk/ckeditor5-build-classic";
import firebase from "firebase"

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      postData: {
        title: "",
        url: "",
        content: "<p>Content of the editor.</p>"
      },
      editorConfig: {
        toolbar: [
          "heading",
          "alignment",
          "|",
          "bold",
          "italic",
          "code",
          "strikethrough",
          "underline",
          "|",
          "link",
          "bulletedList",
          "numberedList",
          "imageUpload",
          "blockQuote",
          "insertTable",
          "mediaEmbed",
          "undo",
          "redo"
        ],
        AjaxUpload: {
          url: "assets/images",
          headers: { Authorization: "Bearer xxx" },
          onSuccess: response => {
            return response.url;
          },
          onFail: () => {
            alert("Coś poszło nie tak. Spróbuj ponownie.");
          }
        }
      }
    };
  },
  methods: {
    addPost() {
      firebase.firestore().collection("posts").doc(this.postData.url).set(this.postData)
      .then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error)
    })
  }
}
}
</script>

<style lang="scss">
.editorData {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.ck-tooltip {
  display: none !important;
}
</style>

