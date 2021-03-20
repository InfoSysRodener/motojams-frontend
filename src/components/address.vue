<template>
    <div>
        <FormulateForm

        >
            <FormulateInput
                label="Email:*" 
                name="email"
                type="email"
                validation="^required|email"
            />
            <div class="sm:grid sm:grid-flow-col sm:gap-3">
                <FormulateInput
                    label="Firstname:*"
                    name="firstname"
                    type="text"
                />
                <FormulateInput
                    label="Lastname:*"
                    name="lastname"
                    type="text"
                />
            </div>
           
            <div class="sm:grid sm:grid-flow-col sm:gap-3">
                <FormulateInput
                    label="Street Address:*" 
                    name="street_address"
                />
                <FormulateInput
                    label="City:*"
                    name="city"
                />
            </div>
            <div class="sm:grid sm:grid-flow-col sm:gap-3">
                <FormulateInput
                    label="State Province:*"
                    name="state_province"
                />
                <FormulateInput
                    label="postcode:*"
                    name="postcode"
                />
            </div>
            <FormulateInput
                label="Phone Number:*"
                name="phone_number"
            />
        </FormulateForm>
    </div>
</template>
<script>
export default {
    name:"address",
    props:{
        
    },
    data() {
        return {

        }
    }
}
</script>