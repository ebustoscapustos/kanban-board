<template>
  <div>
      <h1>Registr</h1>
      <div>
          <RegistrForm/>
     </div>
  </div>
</template>

<script>
import RegistrForm from '../components/RegistrForm.vue';

export default {
  name: "Registr",

  components: {
    RegistrForm
  },
};
</script>
