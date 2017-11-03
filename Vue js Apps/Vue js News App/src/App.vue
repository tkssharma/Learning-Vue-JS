<template>
<div class="container" id="app">

    <SourceSelection @sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>

  </div>

</template>

<script type="text/ecmascript-6">
'use strict';
import Newslist from './Newslist.vue';
import SourceSelection from './SourceSelection.vue';

export default {
    components: {
        Newslist : Newslist,
        SourceSelection : SourceSelection
    },
    data() {
    return {
      source: []
    }
  },
   methods: {
        sourcedChanged : function(source) {
           this.source = source;
         }
    }
}
</script>
