<template>
    <v-container>
        <div>
            <div v-for="item in 50" :key="item.id">
                <v-row style="height: 400px; background-color: lightskyblue; margin: 20px auto">Lorem ipsum dolor sit
                    amet,
                    consectetur adipisicing elit. At in libero minus nam obcaecati. Doloremque dolores eos eveniet
                    mollitia
                    omnis. Consequatur debitis eligendi molestiae nam obcaecati sint suscipit tempora vel.
                </v-row>
                <v-row style="height: 400px; background-color: #e0f5cf; margin: 20px auto">
                    <v-col cols="6" style="border: solid 0.5px; padding: 2px">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Alias asperiores autem cumque
                        dignissimos labore necessitatibus, nulla. Adipisci, asperiores at eum fugit impedit itaque
                        magnam
                        mollitia, nulla praesentium qui, veritatis voluptatem!
                    </v-col>
                    <v-col cols="6" style="border: solid 0.5px; padding: 2px">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquam amet maxime quia quod,
                        reprehenderit repudiandae totam voluptatem. Distinctio eligendi facere illum inventore quis.
                        Ducimus
                        expedita modi necessitatibus nostrum, voluptate voluptatum!
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Template"
    }
</script>

<style scoped>

</style>
