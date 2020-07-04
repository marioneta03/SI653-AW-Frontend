<template>
    <div class="destination">
        <h2>Destination Details</h2>
        <p> {{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "DestinationDetails",

        props: {
            id: []
        }
    }
</script>

<style scoped>
    .destination {
        margin-bottom: 10px;
        font-size: x-small;
    }
</style>
