<template>
<Landing/>
<FormSubmit/>

</template>

<script>
import FormSubmit from "@/components/FormSubmit.vue";
import Landing from '@/components/landing.vue';

export default {
  name: "HomeView",
  components: {
 Landing,
 FormSubmit
  },
  computed: {
    // $state.users
  },
};
</script>
