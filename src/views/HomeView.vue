<template>
<Landing/>
<SignUp/>
</template>

<script>
// @ is an alias to /src

import Landing from '@/components/Landing.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'HomeView',
  components: {
    Landing,
    SignUp,
    
}
}
</script>
