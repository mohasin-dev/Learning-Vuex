<template>
    <div>
        <p>The count from that unrelated component is: {{ count }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
}
</script>