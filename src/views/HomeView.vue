<template>
<section>
<Landing></Landing>
 <FormSubmit/>
 </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/FormSubmit.vue'
import Landing from '@/components/Landing.vue'
import FormSubmit from '../components/FormSubmit.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Landing,
    FormSubmit
}
}
</script>

<style scoped>
section{
  object-fit: cover;
}

</style>
