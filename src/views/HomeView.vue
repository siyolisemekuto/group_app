<template>
<Landing/>
<FormSubmit/>
</template>

<script>
// @ is an alias to /src

import Landing from '@/components/Landing.vue'

import FormSubmit from '@/components/FormSubmit.vue'

export default {
  name: 'HomeView',
  components: {
    Landing,
    FormSubmit
}
}
</script>
