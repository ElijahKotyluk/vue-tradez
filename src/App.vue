<template>
    <h1>{{ greet }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'App',
    data: () => ({
        greet: "vue tradez"
    })
})
</script>