export const appMixin = {
  computed: {
    reversedText() {
      return this.myText.split('').reverse().join('');
    },
    textLength() {
      return `${this.myText} (${this.myText.length})`;
    }
  }
}