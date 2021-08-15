<template>
  <div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="fetchFile" color="green" dark right>get form</v-btn>
    </v-card-actions>
    <div style="width: 300px">
      <v-autocomplete
        filled
        dense
        hide-details
        auto-select-first
        rounded
        label="Bo'limni tanglang"
        v-model="section.id"
        :items="sections"
        item-value="id"
        item-text="title"
      />
    </div>
    <div v-html="htmlData" />
    <quill-editor
      ref="myQuillEditor"
      :options="editorOption"
      @change="handleTextChange($event)"
    />
    <br />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submitForm" color="green" dark right>Print form</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'] // remove formatting button
]
export default {
  name: 'File',
  data() {
    return {
      content: '<p>Testing system</p>',
      editorOption: {
        theme: 'snow'
      },
      modules: {
        toolbar: toolbarOptions
      },
      delta: undefined,
      htmlData: '',
      sections: [
        {
          id: 1,
          title: 'Xarajatlar'
        },
        {
          id: 2,
          title: 'Tovarlar'
        },
        {
          id: 3,
          title: 'KPI'
        },
        {
          id: 4,
          title: 'Rullar'
        }
      ],
      section: {
        id: '',
        title: ''
      }
    }
  },
  methods: {
    submitForm() {
      const contents = this.$refs.myQuillEditor.quill.getContents()
      this.$store.dispatch('file/requestFile', {
        section_id: this.section.id,
        filename: JSON.stringify(contents)
      })
      this.$toast.success('Yuklandi')
    },
    async fetchFile() {
      try {
        const response = await this.$store.dispatch('file/getFile')
        this.$refs.myQuillEditor.quill.setContents(response.data)
      } catch (error) {
        console.log(error)
      }
    },
    handleTextChange($event) {
      this.htmlData = $event.html
    }
  }
}
</script>
<style>
.ql-editor {
  height: 72vh;
}
.ql-editor .ql-video.ql-align-center {
  width: 800px;
  height: 460px;
}</style
>>
