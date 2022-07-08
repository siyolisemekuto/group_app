<template>

<Landing/>
<Form/>
 
</template>

<script>
// @ is an alias to /src

import Landing from '@/components/Landing.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'HomeView',
  components: {
  
    Landing,
    Form
}
}
</script>
