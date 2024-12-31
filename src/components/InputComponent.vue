<template>
 <div class="container mt-5">
   <div class="mb-3">
     <input v-model="linkValue" class="form-control" placeholder="Enter a link"/>
   </div>

   <button class="btn btn-primary" @click="saveLink">Save</button>

 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {initLinkStore} from "../store/linkStore.ts";

const linkStore = initLinkStore()

const linkValue = ref<string>('')

const saveLink = () => {
      linkStore.setLink(linkValue.value);
}

</script>
