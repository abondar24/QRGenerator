<template>
 <div class="container mt-5">
   <div class="mb-3">
     <input v-model="linkValue" class="form-control" placeholder="Enter a link"/>
   </div>

   <button class="btn btn-primary" @click="saveLink">Generate</button>

 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {getLinkStore} from "../store/linkStore.ts";

const linkStore = getLinkStore()

const linkValue = ref<string>('')

const saveLink = () => {
      linkStore.setLink(linkValue.value);
}

</script>
