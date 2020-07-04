<template>
    <v-app id="app">

        <!--        Navigation       -->
        <Navigation/>

        <!--        All content       -->
        <v-main style="max-width: 975px;">
            <v-container id="cont" style="padding: 0">
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: rgba(var(--b3f, 250, 250, 250), 1);

    }


    @media (min-width: 1280px) {
        #cont {
            margin-left: 17%;
        }
    }

    @media (min-width: 1440px) {
        #cont {
            margin-left: 23%;
        }
    }

    @media (min-width: 1800px) {
        #cont {
            margin-left: 48%;
        }
    }

</style>
<script>
    import Navigation from "@/components/Navigation";

    export default {
        components: {Navigation}
    }
</script>
