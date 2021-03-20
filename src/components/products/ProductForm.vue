<template>
  <div>
    <FormulateForm>
      <FormulateInput
          label="name:*" 
          name="name"
          type="text"
          validation="^required"
       />
       <FormulateInput
          label="price:*" 
          name="price"
          type="number"
          validation="^required"
       />
       <FormulateInput
          label="brand:*" 
          name="brand"
          type="text"
          validation="^required"
       />
       <FormulateInput
          label="name:*" 
          name="name"
          type="text"
          validation="^required"
       />
    </FormulateForm>
  </div>
</template>

<script>
  export default {
     props: ['model', 'isEditing'],
     methods: {
        saveProduct () {
            this.$emit('save-product', this.model)
        }
     }
  }

</script>