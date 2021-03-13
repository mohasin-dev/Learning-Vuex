<template>
    <div class="container">
        {{ count }}  (The square root of this number is {{ sqrt }})

        <p style="padding-top: 20px;">
            <button class="btn btn-info btn-sm" @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions  } from 'vuex';

    export default {
        computed: {
            ...mapState(['count']),
            ...mapGetters(['sqrt']),

            // sqrt () {
            //     return this.$store.getters.sqrt;
            // }
        },
        methods: {
            //...mapMutations(['increment'])
            ...mapActions(['increment'])
        }
    }
</script>
