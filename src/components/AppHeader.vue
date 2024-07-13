<template>
    <div class="app-header pa-4">
        <p class="text-h3 text-md-center">{{ $t('landing.title') }}</p>
        <p class="text-h6 text-md-center">{{ $t('landing.sub-title') }}</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.app-header {
    background-image: url("~/assets/img/header-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>