<template>
    <v-container>
        <div class="error404">
            <h1>Ooops</h1>
        </div>

        <div>
            <div>
                <v-row style="background-color: #538492; border: solid 0.5px #c6c6c6; border-radius: 5px; margin: 20px auto">
                    <v-col cols="12" xs="12" style="text-align: justify; padding: 25px">
                        <figure>
                            <v-img max-width="626px"
                                   src="https://image.freepik.com/free-vector/paper-plane-rise-fall-white-airplane-paper-sheet-takes-off-crashes_113807-507.jpg"/>
                            <h1>Something went wrong. Try to refresh the page :)</h1>
                        </figure>

                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Error404"
    }
</script>

<style scoped>

</style>
