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
    <quill-editor ref="myQuillEditor" :options="editorOption" />
    <br />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="submitForm" color="green" dark right>Print form</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  name: 'File',
  data() {
    return {
      content: '<p>Testing system</p>',
      editorOption: {
        theme: 'snow'
      },
      delta: undefined,
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
    }
  }
}
</script>
<style>
.ql-editor {
  height: 72vh;
}</style
>>
