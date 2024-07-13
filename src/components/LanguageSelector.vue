<template>
    <div>
        <p v-click-outside="onClickOutisde" class="bg-green">selector</p>
    </div>
    
</template>

<script>
export default {
    data: {

    },
    methods: {
        onClickOutisde: function(e) {
            console.log("Hello");
        }
    }
}
</script>

<style></style>