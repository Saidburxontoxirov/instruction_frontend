<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card>
      <v-card-title>
        {{ title }}
        <v-spacer />
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <editor
          ref="editor"
          :options="options"
          initial-edit-type="wysiwyg"
          preview-style="vertical"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="primary white--text mt-4" small @click="save">
          Saqlash
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const defaultOptions = {
  minHeight: '800px',
  language: 'en-US',
  useCommandShortcut: true,
  usageStatistics: false,
  hideModeSwitch: true,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'link']
  ]
}
export default {
  props: {
    options: {
      type: Object,
      default: () => defaultOptions
    }
  },
  data() {
    return {
      editorText: '',
      title: '',
      dialog: false
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('T', this)
    }, 1000)
  },
  methods: {
    show(dialog, title, text) {
      this.dialog = dialog
      this.title = title
      this.editorText = text
    },
    save() {
      const html = this.$refs.editor.invoke('getHTML')
      this.$emit('getHTML', html)
    }
  }
}
</script>

<style></style>
