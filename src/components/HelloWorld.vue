<template>
  <div class="hello">
    <h2>{{ eddie }}</h2>
    <ul><li v-for="list of listCounts">{{ list.name }}</li></ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TrelloService } from '../logic/trello-service'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private eddie!: string;
  private listCounts!: string[];

  constructor() {
    super()
    this.test()
    this.listCounts = [];
  }
private async test() {
    var service = new TrelloService()
    var boards = await service.getBoards()
    this.listCounts = await service.getCardCount(boards[0].id);
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
